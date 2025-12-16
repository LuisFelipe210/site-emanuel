"use client"

import { useState } from "react"
import { FileCheck, Download, Check, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react"
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject: "LEAD: Baixou Checklist Aposentadoria",
                    message: "Novo lead capturado! O cliente baixou o Checklist de Documentos."
                }),
            })

            if (!response.ok) throw new Error('Falha ao salvar o lead')

            toast({ title: "Sucesso!", description: "Seu material está sendo gerado." })
            setTimeout(() => { window.location.href = "/obrigado" }, 1000)

        } catch (error) {
            console.error(error)
            toast({ title: "Erro no envio", description: "Tente novamente ou chame no WhatsApp.", variant: "destructive" })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="py-20 bg-background relative overflow-hidden">

            {/* Background Effects (Pra brilhar o Dourado/Azul) */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="bg-card/50 backdrop-blur-sm text-foreground rounded-3xl shadow-2xl shadow-primary/5 p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 border border-border/60 relative overflow-hidden">

                    {/* Faixa decorativa "Exclusivo" */}
                    <div className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest py-1 px-6 rounded-bl-xl border-l border-b border-primary/20">
                        Material Exclusivo
                    </div>

                    {/* === O MOCKUP VISUAL (Lado Esquerdo) === */}
                    <div className="flex-shrink-0 relative group perspective-1000">
                        {/* Glow atrás do documento */}
                        <div className="absolute -inset-4 bg-primary/30 rounded-full blur-2xl group-hover:bg-primary/40 transition-all duration-500" />

                        {/* O Documento em Si (CSS Stack Effect) */}
                        <div className="relative h-64 w-48 bg-background border border-border rounded-xl shadow-2xl flex flex-col items-center justify-between p-6 rotate-[-6deg] group-hover:rotate-0 transition-all duration-500 z-10">
                            {/* Header do Doc */}
                            <div className="w-full text-center border-b border-border pb-4">
                                <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Manual 2025</span>
                            </div>
                            {/* Corpo do Doc */}
                            <div className="text-center space-y-1">
                                <h4 className="font-bold text-lg leading-none text-primary">Checklist<br/>Blindado</h4>
                                <p className="text-[10px] text-muted-foreground">Aposentadoria Rural</p>
                            </div>
                            {/* Footer do Doc */}
                            <div className="w-full">
                                <div className="h-1 w-full bg-primary/20 rounded-full mb-1" />
                                <div className="h-1 w-2/3 bg-primary/20 rounded-full mx-auto" />
                            </div>
                        </div>

                        {/* Páginas atrás (efeito de pilha) */}
                        <div className="absolute top-0 left-0 h-64 w-48 bg-background/50 border border-border rounded-xl rotate-[-12deg] -z-10 group-hover:rotate-[-5deg] transition-all duration-500" />
                    </div>

                    {/* === TEXTO DE VENDA (Lado Direito) === */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold mb-4 border border-green-500/20">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Disponível Gratuitamente
                            </div>
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                                Não deixe o INSS negar seu pedido por <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-4">falta de papel.</span>
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Baixe agora o <strong>Checklist Blindado</strong>. Uma lista completa e organizada com tudo que você precisa reunir para provar seu tempo rural sem dar chance pro azar.
                            </p>
                        </div>

                        {/* Benefícios em Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2 bg-secondary/30 p-2 rounded-lg border border-border/50">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Lista atualizada 2025</span>
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/30 p-2 rounded-lg border border-border/50">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Evita exigências extras</span>
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/30 p-2 rounded-lg border border-border/50">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>PDF direto no WhatsApp</span>
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/30 p-2 rounded-lg border border-border/50">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Leitura simples e rápida</span>
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="w-full sm:w-auto text-lg font-bold h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all rounded-xl gap-2">
                                    <FileCheck className="h-5 w-5" />
                                    Baixar Checklist Agora
                                    <ArrowRight className="h-5 w-5 opacity-70" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md border-primary/20 bg-card">
                                <DialogHeader>
                                    <DialogTitle className="text-xl font-bold flex items-center gap-2">
                                        <Download className="h-5 w-5 text-primary" />
                                        Para onde enviamos o PDF?
                                    </DialogTitle>
                                    <DialogDescription>
                                        Preencha para receber o checklist imediatamente no seu WhatsApp e E-mail.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleDownload} className="space-y-4 py-4">
                                    <div className="space-y-3">
                                        <Input
                                            placeholder="Nome Completo"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="h-12 bg-background/50 border-input focus:border-primary rounded-lg"
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Seu Melhor E-mail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-12 bg-background/50 border-input focus:border-primary rounded-lg"
                                        />
                                        <Input
                                            type="tel"
                                            placeholder="WhatsApp com DDD"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            minLength={10}
                                            className="h-12 bg-background/50 border-input focus:border-primary rounded-lg"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full h-12 font-bold text-base rounded-lg shadow-lg shadow-primary/10" disabled={loading}>
                                        {loading ? "Gerando PDF..." : "Receber Material Grátis"}
                                    </Button>
                                    <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground bg-secondary/50 p-2 rounded border border-border/50">
                                        <ShieldCheck className="h-3 w-3 text-green-500" />
                                        Seus dados estão 100% seguros. Sem spam.
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>

                        <p className="text-xs text-muted-foreground mt-4 italic">
                            *Mais de 1.200 trabalhadores rurais já baixaram esse material.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}