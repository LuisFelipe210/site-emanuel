"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function CookieBanner() {
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        let consent: string | null = null
        try {
            consent = localStorage.getItem("cookie_consent")
        } catch {}
        if (!consent) {
            const timer = setTimeout(() => setVisivel(true), 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const aceitar = () => {
        try {
            localStorage.setItem("cookie_consent", "true")
        } catch {}
        setVisivel(false)
    }

    if (!visivel) return null

    return (
        <div
            role="region"
            aria-label="Aviso de privacidade"
            className="fixed inset-x-3 bottom-3 z-[60] animate-in slide-in-from-bottom-6 duration-700 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[24rem]"
        >
            <div className="relative rounded-md bg-azul-noite p-5 pr-12 text-azul-nevoa shadow-[0_18px_40px_-18px_rgba(13,27,69,0.8)]">
                <button
                    onClick={() => setVisivel(false)}
                    className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-sm text-azul-claro hover:text-white"
                    aria-label="Fechar aviso"
                >
                    <X className="size-5" />
                </button>
                <p className="font-display text-base font-bold text-white">Privacidade e dados</p>
                <p className="mt-1.5 text-sm leading-relaxed">
                    Usamos cookies para melhorar sua navegação e garantir a segurança do site. Ao continuar, você concorda
                    com nossos termos.
                </p>
                <button
                    onClick={aceitar}
                    className="mt-4 h-11 rounded-md bg-ouro px-5 text-base font-bold text-azul-noite transition-colors hover:bg-ouro-claro"
                >
                    Aceitar e continuar
                </button>
            </div>
        </div>
    )
}
