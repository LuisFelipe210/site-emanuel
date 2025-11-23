"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon, Phone } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

function ThemeToggleButton() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="size-9 w-9" />

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-all"
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
                        ? "bg-background/95 border-b border-border shadow-sm backdrop-blur-md py-2"
                        : "bg-transparent py-4"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Logo mais sóbria */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative h-10 w-10">
                                <Image
                                    src="/lg.svg"
                                    alt="Logo Emanuel Silvestre"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Advocacia Previdenciária
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="h-4 w-px bg-border mx-2" />

                            <ThemeToggleButton />

                            <Button
                                asChild
                                size="lg"
                                className="font-bold px-5 rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                            >
                                <Link href="#contato">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Fale Conosco
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center gap-2">
                            <ThemeToggleButton />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-foreground hover:bg-muted"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
                    <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-medium text-foreground border-b border-border pb-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button
                            asChild
                            size="lg"
                            className="mt-4 w-full font-semibold"
                        >
                            <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                                Agendar Atendimento
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}