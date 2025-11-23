"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react" // Adicionei o ícone de Cookie pra ficar bonitinho

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Verifica se o cabra já aceitou essa porra antes
        const consent = localStorage.getItem("cookie_consent")
        if (!consent) {
            // Se não aceitou, mostra o banner depois de um segundinho
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "true")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:left-4 md:right-auto md:max-w-sm z-[100] animate-in slide-in-from-bottom-10 duration-500 p-4">
            <div className="bg-white dark:bg-slate-900 text-foreground shadow-2xl rounded-xl border border-border p-5 flex flex-col gap-4 relative">

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
                    aria-label="Fechar aviso"
                >
                    <X size={18} />
                </button>

                <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0">
                        <Cookie className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-bold text-base leading-tight">Usamos cookies com segurança</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Utilizamos cookies para melhorar sua experiência e garantir o funcionamento correto do site. Ao continuar navegando, você concorda com nossa política.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 pt-1">
                    <Button
                        onClick={acceptCookies}
                        size="sm"
                        className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-10"
                    >
                        Concordar e Fechar
                    </Button>
                </div>
            </div>
        </div>
    )
}