"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Por favor, insira um email válido.",
    }),
    phone: z.string().min(10, {
        message: "Por favor, insira um telefone válido (com DDD).",
    }),
    subject: z.string({
        required_error: "Por favor, selecione um assunto.",
    }),
    message: z.string().min(10, {
        message: "A mensagem deve ter pelo menos 10 caracteres.",
    }),
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
            subject: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar a mensagem.');
            }

            toast({
                title: "Mensagem Enviada!",
                description: "Obrigado! Retornarei o mais breve possível.",
            });
            form.reset();

        } catch (error) {
            toast({
                title: "Erro ao Enviar",
                description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    const contactInfo = [
        {
            icon: Phone,
            label: "Telefone",
            value: "(87) 99612-8608",
            href: "tel:+5587996128608",
            gradient: "from-emerald-500/20 to-emerald-600/10",
            iconColor: "text-emerald-600 dark:text-emerald-400"
        },
        {
            icon: Mail,
            label: "Email",
            value: "emanuelsilvestre.adv@gmail.com",
            href: "mailto:emanuelsilvestre.adv@gmail.com",
            gradient: "from-purple-500/20 to-purple-600/10",
            iconColor: "text-purple-600 dark:text-purple-400"
        },
        {
            icon: MapPin,
            label: "Endereço",
            value: "Campo Formoso, BA - Brasil",
            href: null,
            gradient: "from-blue-500/20 to-blue-600/10",
            iconColor: "text-blue-600 dark:text-blue-400"
        }
    ]

    return (
        <section
            id="contato"
            // === MUDANÇA 1: Padding vertical da seção diminuído ===
            className="relative py-12 sm:py-16 overflow-hidden bg-muted text-foreground"
        >
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.01] dark:opacity-[0.03]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

                    {/* Coluna da esquerda - Informações */}
                    {/* === MUDANÇA 2: Gap da coluna da esquerda diminuído === */}
                    <div className="flex flex-col gap-6 animate-in fade-in-0 slide-in-from-left-8 duration-700">

                        {/* Header da seção */}
                        <div className="text-center lg:text-left">
                            {/* === MUDANÇA 3: Margem do header diminuída === */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-3">
                                <Sparkles className="size-4" />
                                Entre em Contato
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                                Vamos trabalhar juntos
                            </h2>
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                Estou pronto para ouvir sua situação e oferecer a melhor solução jurídica
                            </p>
                        </div>

                        {/* Cards de contato */}
                        {/* === MUDANÇA 4: Espaço entre os cards diminuído === */}
                        <div className="space-y-2">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon
                                return (
                                    <div
                                        key={index}
                                        // === MUDANÇA 5: Padding interno do card diminuído ===
                                        className="group relative bg-background rounded-xl p-4 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    >
                                        {/* Gradient background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className={info.iconColor} size={24} strokeWidth={2} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-muted-foreground text-sm mb-1">{info.label}</p>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors block truncate"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-base sm:text-lg font-semibold text-foreground">
                                                        {info.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Card de destaque */}
                        {/* === MUDANÇA 6: Padding do card de destaque diminuído === */}
                        <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-5 border border-primary/20 overflow-hidden">
                            <div className="absolute top-4 right-4 opacity-20">
                                <CheckCircle2 className="size-24 text-primary" strokeWidth={1} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Fale com a gente
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Agende agora sua consulta inicial. Vamos analisar seu caso e traçar a melhor estratégia jurídica para você.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da direita - Formulário */}
                    {/* === MUDANÇA 7: Padding do card do formulário diminuído === */}
                    <Card className="bg-card/50 backdrop-blur-sm border-2 p-4 sm:p-5 shadow-2xl animate-in fade-in-0 slide-in-from-right-8 duration-700">
                        {/* === MUDANÇA 8: Padding do header do formulário diminuído === */}
                        <CardHeader className="pb-3">
                            <CardTitle className="text-2xl md:text-3xl text-foreground flex items-center gap-2">
                                <div className="w-1 h-8 bg-primary rounded-full" />
                                Envie sua Mensagem
                            </CardTitle>
                            <CardDescription className="text-base">
                                Preencha o formulário e retornarei o mais breve possível.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                {/* === MUDANÇA 9: Espaço entre os campos do formulário diminuído === */}
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

                                    {/* === MUDANÇA 10: Gap do grid diminuído === */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-semibold">Nome Completo</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Seu nome"
                                                            className="h-11 rounded-xl border-2 focus:border-primary transition-colors"
                                                            {...field}
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
                                                    <FormLabel className="text-sm font-semibold">Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="seu@email.com"
                                                            className="h-11 rounded-xl border-2 focus:border-primary transition-colors"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* === MUDANÇA 10: Gap do grid diminuído === */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-semibold">Telefone (WhatsApp)</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="tel"
                                                            placeholder="(00) 90000-0000"
                                                            className="h-11 rounded-xl border-2 focus:border-primary transition-colors"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm font-semibold">Assunto</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="h-11 rounded-xl border-2">
                                                                <SelectValue placeholder="Selecione a área de atuação" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="direito-civil">Direito Civil</SelectItem>
                                                            <SelectItem value="direito-empresarial">Direito Empresarial</SelectItem>
                                                            <SelectItem value="direito-trabalhista">Direito Trabalhista</SelectItem>
                                                            <SelectItem value="contratos">Contratos e Consultoria</SelectItem>
                                                            <SelectItem value="outro">Outro Assunto</SelectItem>
                                                        </SelectContent>
                                                    </Select>
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
                                                <FormLabel className="text-sm font-semibold">Mensagem</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Conte-me sobre sua situação jurídica..."
                                                        // === MUDANÇA 11: Altura da textarea diminuída ===
                                                        rows={4}
                                                        className="rounded-xl border-2 focus:border-primary transition-colors resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isLoading}
                                        // === MUDANÇA 12: Altura do botão diminuída ===
                                        className="w-full font-semibold rounded-xl h-11 text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 group"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <span>Enviar Mensagem</span>
                                                <Send className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}