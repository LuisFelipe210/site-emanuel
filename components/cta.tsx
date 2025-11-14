"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Phone, Mail, MapPin } from "lucide-react"

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
        setIsLoading(true) // Desativa o botão

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
                title: "Ah, que desgraça!", // A PEROSNALIDADE AQUI KKKK
                description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section
            id="contato"
            // DE: bg-[#111111] text-white
            // PARA: bg-muted text-foreground (contraste leve)
            className="relative py-16 sm:py-24 overflow-hidden bg-muted text-foreground"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

                    <div className="flex flex-col gap-6 pt-0 lg:pt-4 animate-in fade-in-0 slide-in-from-left-8 duration-700">
                        <div>
                            {/* DE: text-[#d4af37] */}
                            {/* PARA: text-primary */}
                            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                                Entre em Contato
                            </span>
                            {/* DE: text-white */}
                            {/* PARA: text-foreground */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-foreground">
                                Vamos trabalhar juntos
                            </h2>
                        </div>
                        {/* DE: text-white/70 */}
                        {/* PARA: text-muted-foreground */}
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                            Se preferir, entre em contato diretamente através de um dos canais abaixo. Estou disponível para agendar sua consulta.
                        </p>

                        <div className="space-y-6 pt-4">
                            {/* DE: bg-[#d4af37]/10 ... text-[#d4af37] */}
                            {/* PARA: bg-primary/10 ... text-primary */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    {/* DE: text-white/70 */}
                                    {/* PARA: text-muted-foreground */}
                                    <p className="text-muted-foreground text-sm">Telefone</p>
                                    {/* DE: text-white hover:text-[#d4af37] */}
                                    {/* PARA: text-foreground hover:text-primary */}
                                    <a href="tel:+5587996128608" className="text-base sm:text-lg font-semibold text-foreground hover:text-primary transition">
                                        (87) 99612-8608
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm">Email</p>
                                    <a
                                        href="mailto:smazen21sv@gmail.com"
                                        className="text-base sm:text-lg font-semibold text-foreground hover:text-primary transition"
                                    >
                                        smazen21sv@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm">Endereço</p>
                                    {/* DE: text-white */}
                                    {/* PARA: text-foreground */}
                                    <p className="text-base sm:text-lg font-semibold text-foreground">Campo Formoso, BA - Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DE: bg-[#0a0a0a] */}
                    {/* PARA: bg-card (que é 'background' no claro e 'card' no escuro) */}
                    <Card className="bg-card p-4 sm:p-6 md:p-8 shadow-xl animate-in fade-in-0 slide-in-from-right-8 duration-700">
                        <CardHeader>
                            {/* DE: text-white */}
                            {/* PARA: text-foreground */}
                            <CardTitle className="text-2xl text-foreground">Envie sua Mensagem</CardTitle>
                            <CardDescription>
                                Preencha o formulário e retornarei o mais breve possível.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nome Completo</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Seu nome" {...field} />
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
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="seu@email.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Telefone (WhatsApp)</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" placeholder="(00) 90000-0000" {...field} />
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
                                                    <FormLabel>Assunto</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selecione a área de atuação" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="exemplo 1">Exemplo 1</SelectItem>
                                                            <SelectItem value="exemplo 2">Exemplo 2</SelectItem>
                                                            <SelectItem value="exemplo 3">Exemplo 3</SelectItem>
                                                            <SelectItem value="exemplo 4">Exemplo 4</SelectItem>
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
                                                <FormLabel>Mensagem</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Conte-me sobre sua situação jurídica..."
                                                        rows={5}
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
                                        // DE: bg-[#d4af37] hover:bg-[#c9a234] text-black
                                        // PARA: (Remove cores, o <Button> padrão já é o 'primary')
                                        className="w-full font-semibold"
                                    >
                                        {isLoading ? "Enviando..." : "Enviar Mensagem"}
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