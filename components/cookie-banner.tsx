"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X, ShieldCheck } from "lucide-react"

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Verifica se o cliente já deu o ok
        const consent = localStorage.getItem("cookie_consent")
        if (!consent) {
            // Delayzinho pra não assustar o cliente assim que ele entra
            const timer = setTimeout(() => setIsVisible(true), 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "true")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-[400px] z-[100] p-4 animate-in slide-in-from-bottom-5 duration-700">

            {/* O CARD EM SI */}
            <div className="bg-background/90 backdrop-blur-xl text-foreground shadow-2xl shadow-primary/5 rounded-2xl border border-primary/10 p-6 relative overflow-hidden">

                {/* Linha decorativa no topo (Brilha Dourado ou Azul dependendo do tema) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 opacity-70" />

                {/* Botão de Fechar discreto */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 p-1 text-muted-foreground/50 hover:text-foreground transition-colors rounded-full hover:bg-primary/5"
                    aria-label="Fechar aviso"
                >
                    <X size={16} />
                </button>

                <div className="flex gap-4">
                    {/* Ícone com fundo temático */}
                    <div className="bg-primary/10 p-3 rounded-xl h-fit shrink-0 border border-primary/5">
                        <Cookie className="h-6 w-6 text-primary" />
                    </div>

                    <div className="space-y-3 pt-1">
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-1 flex items-center gap-2">
                                Privacidade e Dados
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Usamos cookies para melhorar sua navegação e garantir a segurança do site. Ao continuar, você concorda com nossos termos.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                onClick={acceptCookies}
                                size="sm"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg shadow-lg shadow-primary/10 transition-all hover:scale-[1.02]"
                            >
                                <ShieldCheck className="mr-2 h-4 w-4" />
                                Aceitar e Continuar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}