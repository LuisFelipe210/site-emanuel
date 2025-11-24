"use client"

import { Star, Quote, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const testimonials = [
    {
        name: "Sr. Roberto Mendes",
        role: "Aposentadoria Rural",
        text: "Trabalhei a vida toda na roça sem carteira assinada. O Dr. Emanuel conseguiu provar meu tempo rural com as notas de produtor e hoje recebo minha aposentadoria merecida.",
        initials: "RM",
        status: "Aposentado"
    },
    {
        name: "Dona Maria José",
        role: "BPC / LOAS",
        text: "Eu nunca paguei INSS e achava que não tinha direito a nada. O Doutor explicou que pela minha idade eu podia receber o BPC. Deu entrada e hoje tenho meu salário garantido.",
        initials: "MJ",
        status: "BPC Ativo"
    },
    {
        name: "Cláudia Ferreira",
        role: "Salário Maternidade",
        text: "Nem sabia que tinha direito mesmo estando desempregada quando meu filho nasceu. O escritório resolveu tudo muito rápido e o dinheiro saiu na hora certa.",
        initials: "CF",
        status: "Pagamento Realizado"
    },
]

export default function Testimonials() {
    return (
        <section id="depoimentos" className="py-24 bg-background border-t border-border relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Depoimentos Reais
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                        Vidas Transformadas Pela <span className="text-primary">Justiça</span>
                    </h2>
                    <p className="text-muted-foreground font-medium text-lg">
                        Não é apenas sobre processos, é sobre garantir o sustento e a dignidade de famílias inteiras.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card
                            key={i}
                            className="flex flex-col h-full border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden bg-card"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary opacity-90" />

                            <CardHeader className="pb-4 pt-8 px-8 flex flex-row items-start justify-between space-y-0">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                <Quote className="h-10 w-10 text-muted-foreground/10 group-hover:text-primary/20 transition-colors rotate-180" />
                            </CardHeader>

                            <CardContent className="flex-1 px-8 pb-6">
                                <p className="text-foreground/90 leading-relaxed text-base font-medium italic relative z-10">
                                    "{t.text}"
                                </p>
                            </CardContent>

                            <div className="px-8 pb-6">
                                <div className="w-full h-px bg-border" />
                            </div>

                            {/* Footer parrudo com avatar maior */}
                            <CardFooter className="px-8 pb-8 pt-0 flex items-center gap-4">
                                <Avatar className="h-14 w-14 border-2 border-border shadow-sm">
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                                        {t.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-bold text-foreground text-base truncate pr-2">{t.name}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground font-medium truncate mb-2">{t.role}</p>

                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold uppercase tracking-wide border border-green-200 dark:border-green-800">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        {t.status}
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}