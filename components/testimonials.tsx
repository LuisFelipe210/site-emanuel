"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
    {
        name: "Luzinete Rodrigues",
        role: "Aposentadoria por Idade",
        text: "O Dr. Emanuel foi um anjo. O INSS tinha negado minha aposentadoria dizendo que faltava tempo, mas ele achou os documentos certos e conseguiu. Recebi tudo que tinha direito.",
    },
    {
        name: "João Carlos",
        role: "Auxílio Doença",
        text: "Estava sem receber nada e sem poder trabalhar. O escritório agiu rápido e conseguiu reestabelecer meu auxílio. Atendimento muito humano e atencioso.",
    },
    {
        name: "Ana Paula",
        role: "Pensão por Morte",
        text: "Em um momento tão difícil, ter um advogado que resolve a burocracia pra gente foi essencial. Transparência total do início ao fim do processo.",
    },
]

export default function Testimonials() {
    return (
        <section id="depoimentos" className="py-20 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-4">O que nossos clientes dizem</h2>
                    <p className="text-muted-foreground">
                        Histórias reais de quem teve seus direitos garantidos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-muted/20 border-border shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
                            <CardContent className="pt-8 px-6 pb-8">
                                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                                    "{t.text}"
                                </p>
                                <div>
                                    <p className="font-bold text-foreground">{t.name}</p>
                                    <p className="text-xs text-primary font-medium uppercase tracking-wide">{t.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}