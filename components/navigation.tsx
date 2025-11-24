"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"

function ThemeToggleButton() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="size-10 w-10" />

    return (
        <Button
            variant="outline"
            size="icon"
            className="bg-background/70 backdrop-blur-md border-border/50 shadow-sm hover:bg-accent hover:text-accent-foreground transition-all h-10 w-10"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Trocar tema</span>
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

    // Fecha o menu se a tela aumentar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const links = [
        { label: "Início", href: "#home" },
        { label: "Áreas de Atuação", href: "#servicos" },
        { label: "O Advogado", href: "#sobre" },
        { label: "Dúvidas", href: "#faq" },
    ]

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3 shadow-sm"
                        : "bg-transparent py-5"
                }`}
            >
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex justify-between items-center">

                        {/* --- LOGO NAVBAR --- */}
                        <Link href="/" className="flex items-center gap-3 group relative z-50">
                            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                                <img
                                    src="/logo.png"
                                    alt="Logo Emanuel Silvestre"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="hidden lg:flex flex-col">
                                <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.2em]">
                                    Advocacia Previdenciária
                                </span>
                            </div>
                        </Link>

                        {/* --- MENU DESKTOP --- */}
                        <div className="hidden lg:flex items-center gap-8">
                            <div className="flex items-center gap-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-bold text-foreground/100 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="h-5 w-px bg-border/60" />
                            <div className="flex items-center gap-3">
                                <ThemeToggleButton />
                                <Button asChild size="sm" className="font-bold text-sm h-10 px-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all hover:-translate-y-0.5">
                                    <Link href="#contato">
                                        <Phone className="mr-2 h-4 w-4" />
                                        Agendar Consulta
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* --- MENU MOBILE TOGGLE --- */}
                        <div className="lg:hidden flex items-center gap-3 relative z-50">
                            <ThemeToggleButton />
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="bg-background/70 backdrop-blur-md border-border/50 shadow-sm hover:bg-accent hover:text-accent-foreground transition-all h-10 w-10"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- MENU MOBILE OVERLAY --- */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-sm pt-28 px-6 lg:hidden animate-in slide-in-from-top-5 duration-300 overflow-y-auto">
                    <div className="flex flex-col items-center text-center max-w-sm mx-auto min-h-full pb-10">

                        {/* LOGO NO MENU (SÓ A IMAGEM AGORA) */}


                        <div className="w-full space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full py-4 text-xl font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="h-px w-24 bg-border/50 my-8" />

                        <Button
                            asChild
                            size="lg"
                            className="w-full font-bold text-lg h-14 rounded-xl shadow-lg mb-8"
                        >
                            <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                                <Phone className="mr-2 h-5 w-5" />
                                Falar no WhatsApp
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}