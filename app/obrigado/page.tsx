"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Download } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { waLink } from "@/lib/contato"

export default function Obrigado() {
    return (
        <main className="flex min-h-[100svh] items-center justify-center bg-cal px-5 py-16">
            <div className="w-full max-w-lg">
                {/* selo de confirmação: o traço se desenha */}
                <svg viewBox="0 0 96 96" className="size-20" aria-hidden="true">
                    <circle cx={48} cy={48} r={46} fill="var(--azul-noite)" />
                    <motion.path
                        d="M28 50 l13 13 l27 -30"
                        fill="none"
                        stroke="var(--ouro)"
                        strokeWidth={7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
                    />
                </svg>

                <h1 className="mt-8 font-largo text-[2rem] uppercase leading-[1.02] text-azul sm:text-5xl">Solicitação recebida!</h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    O primeiro passo para garantir seu direito foi dado.
                </p>

                <ol className="mt-10 space-y-6">
                    <li className="rounded-md bg-white p-6">
                        <p className="text-sm font-bold text-muted-foreground">Passo 1</p>
                        <p className="mt-1 font-semilargo text-xl font-extrabold text-azul-noite">Baixe seu checklist agora</p>
                        <a
                            href="/checklist-inss-2025.pdf"
                            download
                            className="mt-5 inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-azul px-6 text-lg font-bold text-white transition-colors hover:bg-azul-noite"
                        >
                            <Download className="size-5" aria-hidden="true" />
                            Baixar checklist (PDF)
                        </a>
                    </li>
                    <li className="rounded-md bg-azul-noite p-6 text-azul-nevoa">
                        <p className="text-sm font-bold text-ouro-claro">Passo 2</p>
                        <p className="mt-1 font-semilargo text-xl font-extrabold text-white">Não quer ler o manual inteiro?</p>
                        <p className="mt-2 text-base leading-relaxed">
                            Pule a burocracia. Fale diretamente com o Dr. Emanuel e deixe que ele analise seus documentos.
                        </p>
                        <a
                            href={waLink("Baixei o checklist mas quero agendar uma análise do meu caso.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-ouro px-6 text-lg font-bold text-azul-noite transition-colors hover:bg-ouro-claro"
                        >
                            <FaWhatsapp className="size-6" aria-hidden="true" />
                            Quero análise profissional
                        </a>
                    </li>
                </ol>

                <Link href="/" className="mt-10 inline-flex items-center gap-2 text-base font-bold text-azul hover:text-azul-noite">
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Voltar para o site principal
                </Link>
            </div>
        </main>
    )
}
