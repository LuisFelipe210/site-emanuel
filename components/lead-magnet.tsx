"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

const itensChecklist = [
    "RG e CPF",
    "Certidão de casamento ou de nascimento dos filhos",
    "Notas de produtor rural",
    "Declaração do sindicato rural",
    "Contrato de arrendamento ou parceria",
    "Comprovante de endereço na zona rural",
]

const beneficios = ["Lista atualizada 2025", "Evita exigências extras", "PDF direto no WhatsApp", "Leitura simples e rápida"]

function Folha() {
    return (
        <div className="relative mx-auto w-full max-w-[22rem]">
            {/* folhas de trás, planos chapados */}
            <div aria-hidden="true" className="absolute inset-0 translate-x-5 translate-y-4 rotate-[5deg] rounded-sm bg-azul-medio" />
            <div aria-hidden="true" className="absolute inset-0 translate-x-2 translate-y-2 rotate-[2deg] rounded-sm bg-azul-claro" />
            <motion.div
                className="relative -rotate-2 rounded-sm bg-white p-6 text-azul-noite shadow-[0_24px_40px_-24px_rgba(0,0,0,0.6)] sm:p-8"
                initial={{ rotate: -6, y: 16 }}
                whileInView={{ rotate: -2, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="flex items-start justify-between gap-4 border-b-2 border-azul-noite pb-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Manual 2025</p>
                        <p className="mt-1 font-largo text-xl uppercase leading-none text-azul">Checklist Blindado</p>
                        <p className="mt-1 text-sm text-muted-foreground">Aposentadoria Rural</p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/monograma.svg" alt="" className="h-7 w-auto" />
                </div>
                <ul className="mt-4 space-y-3">
                    {itensChecklist.map((item, i) => (
                        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-snug">
                            <svg viewBox="0 0 22 22" className="mt-px size-5 shrink-0" aria-hidden="true">
                                <rect x={1} y={1} width={20} height={20} rx={3} fill="none" stroke="var(--azul)" strokeWidth={2} />
                                <motion.path
                                    d="M5.5 11.5l3.6 3.6 7.4-8.2"
                                    fill="none"
                                    stroke="var(--ouro-escuro)"
                                    strokeWidth={2.6}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true, margin: "-15% 0px" }}
                                    transition={{ duration: 0.35, delay: 0.6 + i * 0.32, ease: "easeOut" }}
                                />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

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
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject: "LEAD: Baixou Checklist Aposentadoria",
                    message: "Novo lead capturado! O cliente baixou o Checklist de Documentos.",
                }),
            })

            if (!response.ok) throw new Error("Falha ao salvar o lead")

            toast({ title: "Tudo certo!", description: "Abrindo a página do seu checklist." })
            setTimeout(() => {
                window.location.href = "/obrigado"
            }, 1000)
        } catch (error) {
            console.error(error)
            toast({
                title: "Não conseguimos enviar",
                description: "Confira os dados e tente de novo, ou chame no WhatsApp.",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    const campo =
        "h-14 w-full rounded-md border-2 border-transparent bg-white px-4 text-lg text-azul-noite placeholder:text-muted-foreground focus:border-ouro focus:outline-none"

    return (
        <section id="checklist" className="relative overflow-hidden bg-azul-noite py-20 text-white lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-5">
                    <Folha />
                </div>

                <div className="lg:col-span-7">
                    <h2 className="font-largo text-[1.9rem] uppercase leading-[1.04] sm:text-[2.6rem]">
                        Não deixe o INSS negar seu pedido por <span className="text-ouro">falta de papel.</span>
                    </h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-azul-nevoa">
                        Receba grátis o <strong className="text-white">Checklist Blindado</strong>: uma lista completa e
                        organizada com tudo que você precisa reunir para provar seu tempo rural sem dar chance pro azar.
                    </p>

                    <ul className="mt-6 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                        {beneficios.map((b) => (
                            <li key={b} className="flex items-center gap-2.5 text-base text-azul-nevoa">
                                <svg viewBox="0 0 12 12" className="size-2.5 shrink-0" aria-hidden="true">
                                    <path d="M6 0 12 6 6 12 0 6Z" fill="var(--ouro)" />
                                </svg>
                                {b}
                            </li>
                        ))}
                    </ul>

                    <form onSubmit={handleDownload} className="mt-10 grid max-w-xl gap-4">
                        <label className="grid gap-1.5">
                            <span className="text-base font-bold text-azul-nevoa">Nome completo</span>
                            <input
                                className={campo}
                                autoComplete="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="grid gap-1.5">
                                <span className="text-base font-bold text-azul-nevoa">WhatsApp com DDD</span>
                                <input
                                    className={campo}
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    placeholder="(87) 99999-9999"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    minLength={10}
                                />
                            </label>
                            <label className="grid gap-1.5">
                                <span className="text-base font-bold text-azul-nevoa">E-mail</span>
                                <input
                                    className={campo}
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 inline-flex h-16 items-center justify-center gap-3 rounded-md bg-ouro px-7 text-lg font-bold text-azul-noite transition-colors hover:bg-ouro-claro disabled:cursor-wait disabled:opacity-70"
                        >
                            {loading ? "Enviando…" : "Receber o checklist grátis"}
                        </button>
                        <p className="text-sm text-azul-claro">Seus dados estão seguros. Sem spam.</p>
                    </form>
                </div>
            </div>
        </section>
    )
}
