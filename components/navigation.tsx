"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

function ThemeToggleButton() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Evita erro de hidratação
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="size-9 w-9" />

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-foreground font-bold hover:text-primary hover:bg-primary/10 rounded-md transition-all"
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

    const links = [
        { label: "Início", href: "#home" },
        { label: "Áreas de Atuação", href: "#servicos" },
        { label: "O Advogado", href: "#sobre" },
        { label: "Dúvidas", href: "#faq" },
    ]

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-background/95 border-b border-border shadow-md backdrop-blur-md py-2"
                        : "bg-transparent py-4"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Logo e Nome */}
                        <a href="/" className="flex items-center gap-3 group">
                            <div className="relative h-12 w-12 overflow-hidden rounded-md">
                                <img
                                    src="/logo.png"
                                    alt="Logo Emanuel Silvestre"
                                    className="object-contain w-full h-full opacity-95 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                                    Advocacia Previdenciária
                                </span>
                            </div>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div className="h-6 w-px bg-border mx-2" />

                            {/* Botão de Tema */}
                            <ThemeToggleButton />

                            <Button
                                asChild
                                size="default"
                                className="font-bold px-6 rounded-lg shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-0.5 ml-2"
                            >
                                <a href="#contato">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Agendar Consulta
                                </a>
                            </Button>
                        </div>

                        {/* Mobile Toggle & Theme */}
                        <div className="md:hidden flex items-center gap-4">
                            <ThemeToggleButton />

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-foreground hover:bg-muted hover:text-primary"
                            >
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-sm pt-28 px-6 md:hidden animate-in slide-in-from-top-10 duration-300">
                    <div className="flex flex-col space-y-6 items-center text-center">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors w-full py-2 border-b border-border/50"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button
                            asChild
                            size="lg"
                            className="mt-8 w-full max-w-xs font-bold text-lg h-12"
                        >
                            <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                                <Phone className="mr-2 h-5 w-5" />
                                Agendar Atendimento
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}