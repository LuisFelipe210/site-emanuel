"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        name: "Jamilly",
        role: "Cliente Satisfeita",
        avatar: "/placeholder-user.jpg",
        text: "O atendimento foi impecável, com uma atenção única aos detalhes e uma estratégia jurídica muito bem elaborada. Recomendo sem hesitar!",
        rating: 5,
    },
    {
        name: "Hello",
        role: "Cliente Satisfeito",
        avatar: "/placeholder-user.jpg",
        text: "Profissional dedicado e atencioso. Conseguiu resolver meu caso com rapidez e total transparência.",
        rating: 5,
    },
    {
        name: "Karol",
        role: "Cliente Satisfeita",
        avatar: "/placeholder-user.jpg",
        text: "Fui muito bem orientada e me senti segura durante todo o processo. Trabalho impecável!",
        rating: 5,
    },
    {
        name: "Luis",
        role: "Cliente Satisfeito",
        avatar: "/placeholder-user.jpg",
        text: "Excelente profissional, extremamente preparado e comunicativo. Resultado além do esperado.",
        rating: 4,
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    const goToSlide = (index: number) => setCurrentIndex(index)

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => next(), 3500)
        return () => clearInterval(interval)
    }, [])

    const getVisibleCards = () => {
        const cards = []
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + testimonials.length) % testimonials.length
            cards.push({ ...testimonials[index], offset: i })
        }
        return cards
    }

    return (
        <section id="depoimentos" className="relative py-24 bg-muted/60 text-foreground overflow-hidden">

            {/* FUNDO DECORATIVO */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]" />
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-primary text-xs font-semibold uppercase tracking-wide">
                            O que Dizem Sobre Mim
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Depoimentos de Clientes
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Pessoas reais compartilhando suas experiências e resultados alcançados.
                    </p>
                </div>

                {/* CARROSSEL */}
                <div className="relative">

                    {/* SETAS — MAIS PRÓXIMAS DO CARD E COM ANIMAÇÃO */}
                    <div className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-none z-30">

                        {/* SETA ESQUERDA */}
                        <Button
                            variant="ghost"
                            onClick={prev}
                            size="icon"
                            className="
                                pointer-events-auto
                                h-14 w-14 rounded-full
                                bg-background/70 backdrop-blur
                                border border-border/50
                                hover:bg-primary hover:text-primary-foreground
                                shadow-lg
                                opacity-0 -translate-x-6
                                animate-[arrowIn_0.7s_ease-out_forwards]
                            "
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>

                        {/* SETA DIREITA */}
                        <Button
                            variant="ghost"
                            onClick={next}
                            size="icon"
                            className="
                                pointer-events-auto
                                h-14 w-14 rounded-full
                                bg-background/70 backdrop-blur
                                border border-border/50
                                hover:bg-primary hover:text-primary-foreground
                                shadow-lg
                                opacity-0 translate-x-6
                                animate-[arrowIn_0.7s_ease-out_forwards]
                            "
                            style={{ animationDelay: "0.15s" }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>

                    <div className="relative h-[420px] flex items-center justify-center perspective-1000">
                        <div className="relative w-full max-w-xl mx-auto">

                            {getVisibleCards().map((t, idx) => {
                                const { offset } = t
                                const isCenter = offset === 0

                                return (
                                    <div
                                        key={`${currentIndex}-${idx}`}
                                        className="absolute top-1/2 left-1/2 w-full transition-all duration-700 ease-out"
                                        style={{
                                            transform: `
                                                translate(-50%, -50%)
                                                translateX(${offset * 110}%)
                                                scale(${isCenter ? 1 : 0.85})
                                                rotateY(${offset * -18}deg)
                                            `,
                                            opacity: isCenter ? 1 : 0.3,
                                            zIndex: isCenter ? 20 : 5,
                                            pointerEvents: isCenter ? "auto" : "none",
                                        }}
                                    >
                                        <div className="bg-background/95 backdrop-blur-xl border-2 border-primary/20 rounded-3xl shadow-2xl p-10 relative hover:border-primary/60 transition-all">
                                            <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/20" />

                                            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                                                “{t.text}”
                                            </p>

                                            <div className="flex items-center justify-between border-t pt-6">
                                                <div className="flex items-center gap-4">
                                                    <Avatar className="h-16 w-16 ring-2 ring-primary/30">
                                                        <AvatarImage src={t.avatar} alt={t.name} />
                                                        <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                                                            {t.name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <p className="font-semibold text-lg">{t.name}</p>
                                                        <p className="text-sm text-muted-foreground">{t.role}</p>
                                                    </div>
                                                </div>

                                                <div className="text-end">
                                                    <div className="flex gap-1 mb-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                size={18}
                                                                className={`${i < t.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">
                                                        {t.rating}.0
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                    {/* INDICADORES */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index ? "w-10 bg-primary" : "w-6 bg-foreground/30"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
