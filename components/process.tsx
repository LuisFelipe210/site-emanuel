"use client"

import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { waLink } from "@/lib/contato"

const passos = [
    {
        titulo: "Você chama no WhatsApp",
        texto: "Conte o que aconteceu, do seu jeito. Não precisa saber nenhum termo jurídico.",
    },
    {
        titulo: "Analisamos o seu caso",
        texto: "Vemos o motivo da negativa e os documentos que você já tem, e explicamos com clareza as chances do processo.",
    },
    {
        titulo: "Reunimos as provas",
        texto: "Notas de produtor, certidões, contratos: ajudamos a juntar o que comprova o seu direito.",
    },
    {
        titulo: "Recurso ou ação na Justiça",
        texto: "Entramos com recurso no INSS ou com ação judicial, inclusive pedindo os atrasados, e você acompanha cada passo.",
    },
]

// Estrada de terra: passa pelos quatro marcos (x = 30, 330, 630, 930)
const ESTRADA =
    "M0 80 L30 80 C130 22 230 138 330 80 C430 22 530 138 630 80 C730 22 830 138 930 80 C1030 22 1120 110 1200 80"

export default function Process() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 70%"] })
    const caminho = useTransform(scrollYProgress, [0, 1], [0, 1])
    const [ativo, setAtivo] = useState(0)

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        setAtivo(Math.min(4, Math.floor(v * 4.2)))
    })

    return (
        <section ref={ref} id="como-funciona" className="relative overflow-hidden bg-cal py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                    <h2 className="font-largo text-[2rem] uppercase leading-[1.02] text-azul sm:text-5xl lg:col-span-7">
                        Do primeiro “oi” até a decisão
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:col-span-5">
                        O INSS tem uma estrutura gigante para analisar e negar pedidos. Do nosso lado, o caminho é simples, e
                        você não anda sozinho.
                    </p>
                </div>

                {/* DESKTOP: estrada horizontal que se desenha com a rolagem */}
                <div className="mt-20 hidden lg:block">
                    <svg viewBox="0 0 1200 160" className="h-auto w-full overflow-visible" aria-hidden="true">
                        <path d={ESTRADA} fill="none" stroke="var(--azul-nevoa)" strokeWidth={16} strokeLinecap="round" />
                        <motion.path
                            d={ESTRADA}
                            fill="none"
                            stroke="var(--ouro)"
                            strokeWidth={5}
                            strokeLinecap="round"
                            style={{ pathLength: caminho }}
                        />
                        {[30, 330, 630, 930].map((x, i) => (
                            <g key={x} transform={`translate(${x} 80)`}>
                                <circle
                                    r={26}
                                    fill={i < ativo ? "var(--azul)" : "#ffffff"}
                                    stroke="var(--azul)"
                                    strokeWidth={3}
                                    style={{ transition: "fill 400ms cubic-bezier(0.16,1,0.3,1)" }}
                                />
                                <text
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    className="font-largo"
                                    fontSize={22}
                                    fill={i < ativo ? "#ffffff" : "var(--azul)"}
                                    style={{ transition: "fill 400ms" }}
                                >
                                    {i + 1}
                                </text>
                            </g>
                        ))}
                    </svg>
                    <ol className="mt-6 grid grid-cols-4 gap-10">
                        {passos.map((p) => (
                            <li key={p.titulo} className="pr-6">
                                <h3 className="font-semilargo text-xl font-extrabold leading-tight text-azul-noite">{p.titulo}</h3>
                                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.texto}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* MOBILE: trilha vertical */}
                <ol className="relative mt-14 space-y-10 lg:hidden">
                    <span aria-hidden="true" className="absolute bottom-6 left-[1.4rem] top-6 w-1.5 -translate-x-1/2 rounded-full bg-azul-nevoa" />
                    <motion.span
                        aria-hidden="true"
                        className="absolute bottom-6 left-[1.4rem] top-6 w-1.5 -translate-x-1/2 origin-top rounded-full bg-ouro"
                        style={{ scaleY: caminho }}
                    />
                    {passos.map((p, i) => (
                        <li key={p.titulo} className="relative grid grid-cols-[2.8rem_1fr] gap-4">
                            <span
                                className={`relative z-10 flex size-11 items-center justify-center rounded-full border-[3px] border-azul font-largo text-lg transition-colors duration-500 ${
                                    i < ativo ? "bg-azul text-white" : "bg-white text-azul"
                                }`}
                            >
                                {i + 1}
                            </span>
                            <div className="pt-1.5">
                                <h3 className="font-semilargo text-xl font-extrabold leading-tight text-azul-noite">{p.titulo}</h3>
                                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.texto}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <a
                    href={waLink("Olá, quero começar a análise do meu caso.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-14 inline-flex h-14 items-center gap-3 rounded-md bg-azul px-6 text-lg font-bold text-white transition-colors hover:bg-azul-noite lg:mt-16"
                >
                    <FaWhatsapp className="size-6 text-ouro-claro" aria-hidden="true" />
                    Começar pelo passo 1
                </a>
            </div>
        </section>
    )
}
