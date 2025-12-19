"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Sun, Moon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

function ThemeToggleButton() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="h-9 w-9" />

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full h-9 w-9 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alternar tema</span>
        </Button>
    )
}

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Travar scroll quando menu mobile abre
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const links = [
        { label: "Início", href: "#home" },
        { label: "Áreas de Atuação", href: "#servicos" },
        { label: "Sobre", href: "#sobre" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Dúvidas", href: "#faq" },
    ]

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
                    scrolled
                        ? "py-3 bg-background/80 backdrop-blur-xl shadow-sm border-b border-primary/10"
                        : "py-6 bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* --- LOGO --- */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group relative z-50 shrink-0"
                        >
                            <div className="relative h-15 w-15 overflow-hidden rounded-lg flex items-center justify-center border border-primary/20 transition-transform group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="ES"
                                    width={60}
                                    height={60}
                                    className="object-contain p-1"
                                />
                            </div>
                        </Link>

                        {/* --- MENU DESKTOP --- */}
                        <div className="hidden lg:flex items-center">
                            <nav className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
                                scrolled
                                    ? "bg-transparent"
                                    : "bg-background/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg"
                            }`}>
                                <ul className="flex items-center px-2">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm font-bold text-foreground/80 hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="h-5 w-px bg-border/50 mx-1" />

                                <div className="flex items-center gap-2 pl-2 pr-1">
                                    <ThemeToggleButton />
                                    <Button
                                        asChild
                                        size="sm"
                                        className="rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
                                    >
                                        <Link href="#contato">
                                            Agendar
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    </Button>
                                </div>
                            </nav>
                        </div>

                        {/* --- MENU MOBILE TOGGLE --- */}
                        <div className="lg:hidden flex items-center gap-3">
                            <ThemeToggleButton />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative z-50 hover:bg-primary/10 text-foreground"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- MOBILE OVERLAY (FADE IN / FADE OUT) --- */}
            {/* Mudei aqui: Tirei o translate-y e deixei só opacity e visibility */}
            <div
                className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
            >
                {/* Elementos decorativos no menu mobile */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col h-full justify-center items-center px-6 gap-8">

                    <nav className="flex flex-col items-center gap-6">
                        {links.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-bold text-foreground hover:text-primary transition-colors tracking-tight"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="w-16 h-1 bg-primary/20 rounded-full" />

                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <Button
                            asChild
                            size="lg"
                            className="w-full text-lg font-bold h-14 rounded-2xl shadow-xl shadow-primary/20"
                        >
                            <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                                <Phone className="mr-2 h-5 w-5" />
                                Consulta Gratuita
                            </Link>
                        </Button>
                        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest">
                            Seg - Sex • 08h às 18h
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}