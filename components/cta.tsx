"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowUpRight, Clock, Mail, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { EMAIL, HORARIO, WHATSAPP_EXIBICAO, waLink } from "@/lib/contato"

const formSchema = z.object({
    name: z.string().min(2, "Escreva seu nome"),
    email: z.string().email("Esse e-mail parece incompleto").or(z.literal("")),
    phone: z.string().min(10, "Coloque o número com DDD"),
    message: z.string().min(5, "Conte um pouco sobre o seu caso"),
})

const campo =
    "h-14 w-full rounded-md border-2 border-input bg-white px-4 text-lg text-azul-noite placeholder:text-muted-foreground/80 focus:border-azul focus:outline-none aria-[invalid=true]:border-destructive"

export default function CTA() {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", phone: "", message: "" },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log(values)
        toast({
            title: "Mensagem enviada!",
            description: "Dr. Emanuel analisará seu caso em breve.",
        })
        form.reset()
        setIsLoading(false)
    }

    return (
        <section id="contato" className="bg-white py-20 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
                <div className="lg:sticky lg:top-28 lg:col-span-5">
                    <h2 className="font-largo text-[2rem] uppercase leading-[1.02] text-azul sm:text-5xl">
                        Vamos lutar pelo seu direito?
                    </h2>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                        Cada dia sem dar entrada é dinheiro perdido. Mande seu caso agora e receba uma análise com
                        urgência.
                    </p>

                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-9 flex items-center gap-5 rounded-md bg-azul-noite p-5 text-white transition-colors hover:bg-azul sm:p-6"
                    >
                        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ouro text-azul-noite">
                            <FaWhatsapp className="size-7" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm font-bold text-ouro-claro">Resposta mais rápida</span>
                            <span className="block font-semilargo text-xl font-extrabold leading-tight sm:text-2xl">
                                Chamar no WhatsApp
                            </span>
                            <span className="tabular mt-0.5 block text-base text-azul-nevoa">{WHATSAPP_EXIBICAO}</span>
                        </span>
                        <ArrowUpRight
                            className="ml-auto size-6 shrink-0 text-ouro-claro transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                        />
                    </a>

                    <dl className="mt-6 space-y-3 text-lg text-azul-noite">
                        <div className="flex items-center gap-3">
                            <dt>
                                <Mail className="size-5 text-azul" aria-label="E-mail" />
                            </dt>
                            <dd className="break-all">
                                <a href={`mailto:${EMAIL}`} className="hover:text-azul hover:underline">
                                    {EMAIL}
                                </a>
                            </dd>
                        </div>
                        <div className="flex items-center gap-3">
                            <dt>
                                <Clock className="size-5 text-azul" aria-label="Horário" />
                            </dt>
                            <dd>{HORARIO}</dd>
                        </div>
                    </dl>
                </div>

                <div className="rounded-md bg-cal p-6 sm:p-10 lg:col-span-7">
                    <h3 className="font-semilargo text-2xl font-extrabold text-azul-noite">Prefere escrever? Envie seu caso</h3>
                    <p className="mt-2 text-lg text-muted-foreground">Preencha os dados abaixo. Retornamos em até 24h.</p>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-bold text-azul-noite">Nome completo</FormLabel>
                                        <FormControl>
                                            <input autoComplete="name" className={campo} {...field} />
                                        </FormControl>
                                        <FormMessage className="text-base" />
                                    </FormItem>
                                )}
                            />
                            <div className="grid gap-5 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-bold text-azul-noite">WhatsApp</FormLabel>
                                            <FormControl>
                                                <input
                                                    type="tel"
                                                    inputMode="tel"
                                                    autoComplete="tel"
                                                    placeholder="(DDD) 99999-9999"
                                                    className={campo}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-base" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-bold text-azul-noite">
                                                E-mail <span className="font-normal text-muted-foreground">(opcional)</span>
                                            </FormLabel>
                                            <FormControl>
                                                <input type="email" autoComplete="email" className={campo} {...field} />
                                            </FormControl>
                                            <FormMessage className="text-base" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-bold text-azul-noite">Como podemos ajudar?</FormLabel>
                                        <FormControl>
                                            <textarea
                                                placeholder="Ex.: pedi aposentadoria rural e o INSS negou em março."
                                                className={`${campo} h-auto min-h-[150px] resize-y py-3 leading-relaxed`}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-base" />
                                    </FormItem>
                                )}
                            />

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-md bg-azul px-7 text-lg font-bold text-white transition-colors hover:bg-azul-noite disabled:cursor-wait disabled:opacity-70"
                            >
                                {isLoading ? "Enviando…" : "Solicitar análise gratuita"}
                                {!isLoading && <Send className="size-5" aria-hidden="true" />}
                            </button>
                            <p className="text-center text-sm text-muted-foreground">
                                Seus dados estão protegidos por sigilo advocatício.
                            </p>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}
