"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react" // Importar Sun e Moon
import { Button } from "./ui/button"
import { useTheme } from "next-themes" // Importar o hook de tema

// Componente para o botão de troca de tema
function ThemeToggleButton() {
    const { setTheme, theme } = useTheme()

    // Evita piscar o botão errado no carregamento
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        // Retorna um placeholder ou nada para evitar "hydration mismatch"
        return <div className="size-9" />
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary" // Ajustado para as variáveis
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Trocar tema</span>
        </Button>
    )
}

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMenuOpen])

    const links = [
        { label: "Serviços", href: "#servicos" },
        { label: "Sobre", href: "#sobre" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "FAQ", href: "#faq" },
        { label: "Contato", href: "#contato" },
    ]

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        // DE: bg-black/90 ... border-[#2a2a2a]
                        // PARA: bg-background/90 ... border-border
                        ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-md"
                        // DE: bg-black/70
                        // PARA: bg-background/70
                        : "bg-background/70 backdrop-blur-sm"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/lg.svg"
                                alt="Logo Emanuel Silvestre"
                                width={56}
                                height={56}
                                className="object-contain"
                            />
                            <div className="hidden md:flex flex-col leading-tight">
                                {/* DE: text-[#d4af37] */}
                                {/* PARA: text-primary */}
                                <span className="text-xl font-semibold text-primary tracking-tight">
                                    Emanuel Silvestre
                                </span>
                                {/* DE: text-white/70 */}
                                {/* PARA: text-muted-foreground */}
                                <span className="text-sm font-medium text-muted-foreground">
                                    Advocacia
                                </span>
                            </div>
                        </Link>

                        <div className="hidden md:flex gap-8 items-center">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    // DE: text-white ... hover:text-[#d4af37] ... bg-[#d4af37]
                                    // PARA: text-foreground ... hover:text-primary ... bg-primary
                                    className="relative text-foreground font-medium transition-all duration-200 hover:text-primary group"
                                >
                                    {link.label}
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                            {/* ADICIONA O BOTÃO DE TEMA AQUI */}
                            <ThemeToggleButton />
                        </div>

                        <div className="md:hidden flex items-center gap-2">
                            {/* ADICIONA O BOTÃO DE TEMA AQUI TBM */}
                            <ThemeToggleButton />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                // DE: text-white
                                // PARA: text-foreground
                                className="relative z-[60] text-foreground"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                <span className="sr-only">Abrir menu</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                // DE: bg-black/95
                // PARA: bg-background/95
                className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            // DE: text-white hover:text-[#d4af37]
                            // PARA: text-foreground hover:text-primary
                            className="text-2xl font-semibold text-foreground hover:text-primary transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Button
                        asChild
                        size="lg"
                        // DE: bg-[#d4af37] hover:bg-[#c9a234] text-black
                        // PARA: (Remove as cores, o padrão do Button já é a cor primária)
                        className="mt-6 font-semibold px-8 py-4 shadow-md transition-all duration-300 hover:scale-105"
                    >
                        <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                            Agendar Consulta
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    )
}