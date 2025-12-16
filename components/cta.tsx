"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageSquare, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

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
    email: z.string().email("Email inválido").or(z.literal('')),
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
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log(values)
        toast({
            title: "Mensagem Enviada!",
            description: "Dr. Emanuel analisará seu caso em breve."
        })
        form.reset()
        setIsLoading(false)
    }

    return (
        // Mudei py-24 pra py-16 no mobile, e mantive md:py-24 no desktop
        <section id="contato" className="py-16 md:py-24 bg-background relative overflow-hidden">

            {/* Background com Grid Sutil */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            {/* Glows ajustados pra não estourarem no mobile */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

                    {/* === LADO ESQUERDO: CHAMADA E CANAIS === */}
                    {/* AQUI O PULO DO GATO: lg:sticky (só no desktop) */}
                    <div className="lg:col-span-5 space-y-8 lg:space-y-10 animate-in fade-in-0 slide-in-from-left-8 duration-700 lg:sticky lg:top-24">

                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-4 lg:mb-6">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                <span className="text-xs font-bold text-primary tracking-wide uppercase">
                                    Atendimento Online
                                </span>
                            </div>

                            {/* Texto menor no mobile (3xl) e maior no desktop (5xl) */}
                            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-3 lg:mb-4 leading-tight">
                                Vamos lutar pelo <br />
                                <span className="text-primary">seu direito?</span>
                            </h2>
                            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                                Cada dia sem dar entrada é dinheiro perdido. Nossa equipe está pronta para analisar seu caso com urgência.
                            </p>
                        </div>

                        {/* Cards de Contato Rápido */}
                        <div className="space-y-4">
                            <a
                                href="https://wa.me/5587996128608"
                                target="_blank"
                                className="flex items-center gap-4 lg:gap-5 p-4 lg:p-5 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all group cursor-pointer active:scale-95 duration-200"
                            >
                                <div className="h-10 w-10 lg:h-12 lg:w-12 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                    <FaWhatsapp className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
                                </div>
                                <div>
                                    <p className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-primary opacity-80 mb-0.5 lg:mb-1">Resposta Rápida</p>
                                    <p className="text-base lg:text-lg font-bold text-foreground">Chamar no WhatsApp</p>
                                </div>
                                <ArrowRight className="ml-auto h-4 w-4 lg:h-5 lg:w-5 text-primary group-hover:translate-x-1 transition-transform" />
                            </a>

                            <div className="p-5 lg:p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3 lg:space-y-4">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium break-all">emanuelsilvestre.adv@gmail.com</span>
                                </div>
                                <div className="w-full h-px bg-border/50" />
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium">Seg a Sex: 08h às 18h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === LADO DIREITO: FORMULÁRIO === */}
                    <div className="lg:col-span-7">
                        {/* Padding reduzido no mobile (p-6) pra ganhar espaço */}
                        <div className="bg-card border border-border/50 p-6 sm:p-10 rounded-3xl shadow-2xl shadow-primary/5 animate-in fade-in-0 slide-in-from-right-8 duration-700 relative overflow-hidden">

                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                            <div className="mb-6 lg:mb-8">
                                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Envie seu caso por e-mail</h3>
                                <p className="text-sm lg:text-base text-muted-foreground">Preencha os dados abaixo. Retornaremos em até 24h.</p>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 lg:space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-semibold text-foreground/80">Nome Completo</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Seu nome completo"
                                                        {...field}
                                                        className="h-11 lg:h-12 rounded-xl bg-background border-input focus:border-primary focus:ring-primary/20 transition-all"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* No mobile vira coluna unica, no desk 2 colunas */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-foreground/80">WhatsApp</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="(DDD) 99999-9999"
                                                            {...field}
                                                            className="h-11 lg:h-12 rounded-xl bg-background border-input focus:border-primary focus:ring-primary/20 transition-all"
                                                        />
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
                                                    <FormLabel className="font-semibold text-foreground/80">Email (Opcional)</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="seu@email.com"
                                                            {...field}
                                                            className="h-11 lg:h-12 rounded-xl bg-background border-input focus:border-primary focus:ring-primary/20 transition-all"
                                                        />
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
                                                <FormLabel className="font-semibold text-foreground/80">Como podemos ajudar?</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Descreva seu problema..."
                                                        className="min-h-[120px] lg:min-h-[140px] resize-none rounded-xl bg-background border-input focus:border-primary focus:ring-primary/20 p-4 transition-all"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full h-12 lg:h-14 text-base lg:text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all mt-4"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                Enviando...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Solicitar Análise Gratuita
                                                <Send className="h-4 w-4 lg:h-5 lg:w-5 ml-1" />
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-center text-[10px] lg:text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Seus dados estão protegidos por sigilo advocatício.
                                    </p>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}