"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone, Mail, MapPin } from "lucide-react" // Removi o Send que não estava usando fora do botão

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
    name: z.string().min(2, "Nome obrigatório"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    message: z.string().min(5, "Escreva um pouco sobre seu caso"),
})

export default function CTA() {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...values, subject: "Contato via Site (Previdenciário)" }),
            });

            if (!response.ok) throw new Error();

            toast({ title: "Recebemos sua mensagem!", description: "Em breve entraremos em contato." });
            form.reset();
        } catch (error) {
            toast({ title: "Erro ao enviar", description: "Tente pelo WhatsApp.", variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id="contato" className="py-16 md:py-20 bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Informações de Contato */}
                    <div className="space-y-8 animate-in fade-in-0 slide-in-from-left-8 duration-700">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos analisar seu caso?</h2>
                            <p className="text-primary-foreground/80 text-lg leading-relaxed">
                                Não deixe para depois. O tempo pode ser crucial para garantir o melhor benefício previdenciário. Entre em contato agora mesmo.
                            </p>
                        </div>

                        <div className="space-y-6 pt-2">
                            {/* Link do WhatsApp */}
                            <a
                                href="https://wa.me/5587996128608"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group transition-all hover:translate-x-1"
                            >
                                <div className="h-12 w-12 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium opacity-80 group-hover:opacity-100">WhatsApp / Telefone</p>
                                    <p className="text-xl font-bold group-hover:underline decoration-2 underline-offset-4">(87) 99612-8608</p>
                                </div>
                            </a>

                            {/* Link do Email */}
                            <a
                                href="mailto:emanuelsilvestre.adv@gmail.com"
                                className="flex items-center gap-4 group transition-all hover:translate-x-1"
                            >
                                <div className="h-12 w-12 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="min-w-0"> {/* min-w-0 ajuda a quebrar texto longo */}
                                    <p className="text-sm font-medium opacity-80 group-hover:opacity-100">Email</p>
                                    <p className="text-lg font-semibold break-all group-hover:underline decoration-2 underline-offset-4">
                                        emanuelsilvestre.adv@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Endereço (Link para o Maps, se quiser) */}
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium opacity-80">Escritório</p>
                                    <p className="text-lg font-semibold">Campo Formoso, BA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="bg-background text-foreground p-6 sm:p-8 rounded-xl shadow-2xl animate-in fade-in-0 slide-in-from-right-8 duration-700">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full" />
                            Envie uma mensagem
                        </h3>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Seu nome" {...field} className="bg-muted/30 border-border focus:border-primary h-11" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Telefone/WhatsApp</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="(00) 00000-0000" {...field} className="bg-muted/30 border-border focus:border-primary h-11" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email (Opcional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="seu@email.com" {...field} className="bg-muted/30 border-border focus:border-primary h-11" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Como podemos ajudar?</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Descreva brevemente seu caso..."
                                                    className="min-h-[120px] bg-muted/30 border-border focus:border-primary resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full text-lg h-12 font-semibold shadow-md hover:shadow-lg transition-all mt-2"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}