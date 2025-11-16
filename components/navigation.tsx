"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

function ThemeToggleButton() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        // Retorna um placeholder com o mesmo tamanho pra evitar "pulo" no layout
        return <div className="size-9 w-9" />
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            // === MUDANÇA 1: Hover usa 'accent' do tema ===
            className="text-foreground hover:text-primary hover:bg-accent rounded-full transition-all duration-300"
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
                // === MUDANÇA 2: Lógica de scroll simplificada e usando tokens do tema ===
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-md"
                        : "border-b border-transparent"
                }`}
            >
                {/* Efeito de brilho no topo (ajustado) */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <Image
                                    src="/lg.svg"
                                    alt="Logo Emanuel Silvestre"
                                    width={56}
                                    height={56}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </div>
                            <div className="hidden md:flex flex-col leading-tight">
                                <span className="text-xl font-semibold text-primary tracking-tight transition-colors duration-300">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-sm font-medium text-muted-foreground">
                                    Advocacia
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-1 items-center">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    // === MUDANÇA 3: Hover usa 'accent' ===
                                    className="relative px-4 py-2 text-foreground font-medium transition-all duration-300 hover:text-primary group rounded-xl hover:bg-accent"
                                >
                                    {link.label}
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-300 group-hover:w-10 rounded-full" />
                                </Link>
                            ))}

                            <div className="ml-2 pl-2 border-l border-border/50">
                                <ThemeToggleButton />
                            </div>

                            <Button
                                asChild
                                size="sm"
                                className="ml-2 font-semibold px-5 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-primary/90"
                            >
                                <Link href="#contato">
                                    Agendar Consulta
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-2">
                            <ThemeToggleButton />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                // === MUDANÇA 4: Hover usa 'accent' ===
                                className="relative z-[60] text-foreground hover:bg-accent rounded-full transition-all duration-300"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                <span className="sr-only">Abrir menu</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Efeito de brilho na base (ajustado) */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                // === MUDANÇA 5: Fundo do menu mobile usa 'background' ===
                className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
                    {links.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-in fade-in-0 slide-in-from-bottom-4"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Button
                        asChild
                        size="lg"
                        className="mt-8 font-semibold px-10 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 animate-in fade-in-0 slide-in-from-bottom-4"
                        style={{ animationDelay: "500ms" }}
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