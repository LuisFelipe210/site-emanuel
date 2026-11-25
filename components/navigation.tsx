"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { HORARIO, waLink } from "@/lib/contato"

const links = [
    { label: "Áreas de atuação", href: "/#servicos" },
    { label: "Tenho direito?", href: "/#tenho-direito" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Dúvidas", href: "/#faq" },
    { label: "Contato", href: "/#contato" },
]

export default function Navigation() {
    const [aberto, setAberto] = useState(false)
    const [rolou, setRolou] = useState(false)

    useEffect(() => {
        const onScroll = () => setRolou(window.scrollY > 24)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = aberto ? "hidden" : ""
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false)
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [aberto])

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
                    rolou && !aberto ? "bg-cal/95 py-2.5 shadow-[0_1px_0_var(--border)]" : "py-4 lg:py-6"
                } ${aberto ? "bg-transparent" : ""}`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
                    <a href="/" className="relative z-50 flex items-center gap-3" onClick={() => setAberto(false)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/monograma.svg" alt="" className="h-8 w-auto lg:h-9" />
                        <span className="leading-none">
                            <span
                                className={`block whitespace-nowrap font-semilargo text-[0.98rem] font-extrabold transition-colors sm:text-[1.05rem] ${
                                    aberto ? "text-white" : "text-azul-noite"
                                }`}
                            >
                                Emanuel Silvestre
                            </span>
                            <span className={`mt-1 block text-[0.8rem] ${aberto ? "text-azul-claro" : "text-muted-foreground"}`}>
                                Advocacia Previdenciária
                            </span>
                        </span>
                    </a>

                    <nav aria-label="Principal" className="hidden items-center gap-1 xl:flex">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="rounded-sm px-3.5 py-2 text-[1.02rem] font-bold text-azul-noite underline decoration-transparent decoration-2 transition-colors hover:text-azul hover:decoration-ouro"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href={waLink("Olá! Vim pelo site e gostaria de agendar uma consulta.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 inline-flex h-12 items-center gap-2.5 rounded-md bg-azul px-5 font-bold text-white transition-colors hover:bg-azul-noite"
                        >
                            <FaWhatsapp className="size-5 text-ouro-claro" aria-hidden="true" />
                            Agendar
                        </a>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setAberto((v) => !v)}
                        aria-expanded={aberto}
                        aria-controls="menu-mobile"
                        className={`relative z-50 flex h-12 items-center gap-2.5 rounded-md px-3 font-bold xl:hidden ${
                            aberto ? "text-white" : "text-azul-noite"
                        }`}
                    >
                        <span className="text-base">{aberto ? "Fechar" : "Menu"}</span>
                        <span className="relative block h-4 w-6" aria-hidden="true">
                            <span
                                className={`absolute left-0 top-0.5 h-0.5 w-6 bg-current transition-transform duration-300 ${
                                    aberto ? "translate-y-1.5 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`absolute bottom-0.5 left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                                    aberto ? "-translate-y-1.5 -rotate-45" : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {aberto && (
                    <motion.div
                        id="menu-mobile"
                        className="fixed inset-0 z-[45] flex flex-col bg-azul-noite px-5 pb-10 pt-28 xl:hidden"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <nav aria-label="Menu" className="flex flex-col">
                            {links.map((l, i) => (
                                <motion.a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setAberto(false)}
                                    className="border-b border-white/15 py-4 font-largo text-[1.6rem] uppercase leading-tight text-white"
                                    initial={{ y: 24, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {l.label}
                                </motion.a>
                            ))}
                        </nav>
                        <div className="mt-auto">
                            <a
                                href={waLink("Olá! Vim pelo site e gostaria de agendar uma consulta.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-16 items-center justify-center gap-3 rounded-md bg-ouro text-lg font-bold text-azul-noite"
                            >
                                <FaWhatsapp className="size-6" aria-hidden="true" />
                                Consulta pelo WhatsApp
                            </a>
                            <p className="mt-4 text-center text-base text-azul-claro">{HORARIO}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
