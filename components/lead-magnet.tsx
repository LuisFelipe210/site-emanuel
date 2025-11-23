"use client"

import { useState } from "react"
import { FileText, Download, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function LeadMagnet() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const handleDownload = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject: "LEAD: Baixou Checklist Aposentadoria",
                    message: "Novo lead capturado! O cliente baixou o Checklist de Documentos."
                }),
            })

            if (!response.ok) {
                throw new Error('Falha ao salvar o lead')
            }

            // Sucesso: Mostra toast e redireciona via window.location
            toast({
                title: "Sucesso!",
                description: "Seu material está sendo gerado.",
            })

            // Pequeno delay pra pessoa ler o toast antes de ir
            setTimeout(() => {
                window.location.href = "/obrigado"
            }, 1000)

        } catch (error) {
            console.error(error)
            toast({
                title: "Erro no envio",
                description: "Não foi possível processar. Tente novamente ou chame no WhatsApp.",
                variant: "destructive"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="py-16 bg-primary text-primary-foreground overflow-hidden relative">
            {/* Pattern de fundo */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="bg-background text-foreground rounded-2xl shadow-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 border border-border">

                    {/* Imagem/Icone do Ebook */}
                    <div className="flex-shrink-0 relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl" />
                        <div className="relative h-40 w-40 bg-primary rounded-2xl flex items-center justify-center shadow-inner rotate-3">
                            <FileText className="h-20 w-20 text-primary-foreground" />
                            <div className="absolute bottom-4 bg-black/20 px-3 py-1 rounded-full text-xs font-bold text-white">
                                GRÁTIS
                            </div>
                        </div>
                    </div>

                    {/* Texto de Venda */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">
                                Vai dar entrada na Aposentadoria?
                            </h3>
                            <p className="text-lg text-muted-foreground">
                                Baixe agora o nosso <span className="font-bold text-foreground">Checklist de Documentos Obrigatórios</span> e evite que seu benefício seja negado por falta de papelada.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Check className="h-4 w-4 text-green-600" /> Simples de ler
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="h-4 w-4 text-green-600" /> Atualizado 2025
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="h-4 w-4 text-green-600" /> PDF direto no celular
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="w-full sm:w-auto text-lg font-bold h-12 px-8 shadow-lg">
                                    <Download className="mr-2 h-5 w-5" />
                                    Baixar Checklist Grátis
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Para onde enviamos o PDF?</DialogTitle>
                                    <DialogDescription>
                                        Preencha para receber o checklist imediatamente.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleDownload} className="space-y-4 py-4">
                                    <div className="space-y-3">
                                        <Input
                                            placeholder="Seu Nome Completo"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="h-11"
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Seu Melhor E-mail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-11"
                                        />
                                        <Input
                                            type="tel"
                                            placeholder="Seu WhatsApp (com DDD)"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            minLength={10}
                                            className="h-11"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full h-12 font-bold text-base" disabled={loading}>
                                        {loading ? "Processando..." : "Receber Material Grátis"}
                                    </Button>
                                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                                        <AlertCircle className="h-3 w-3" />
                                        Seus dados estão seguros conosco.
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
    )
}