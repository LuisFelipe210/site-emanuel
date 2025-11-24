"use client"

import { FileClock, HandCoins, HeartPulse, TrendingUp, AlertTriangle, Sprout, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

const services = [
    {
        icon: Sprout,
        title: "Aposentadoria Rural",
        description: "Trabalhou na roça, na pesca ou na agricultura familiar? Aposente-se 5 anos mais cedo, mesmo sem ter contribuído todo mês.",
        cta: "Sou trabalhador rural",
        featured: true,
    },
    {
        icon: FileClock,
        title: "Aposentadoria por Idade",
        description: "Completou a idade (62 mulher / 65 homem) e o INSS negou? Analisamos seu tempo e contribuições para destravar seu benefício.",
        cta: "Quero me aposentar",
        featured: false,
    },
    {
        icon: HandCoins,
        title: "BPC / LOAS",
        description: "Benefício de um salário mínimo para idosos (+65) ou pessoas com deficiência de baixa renda. Não precisa ter contribuído.",
        cta: "Tenho direito?",
        featured: false,
    },
    {
        icon: HeartPulse,
        title: "Auxílio Doença / Invalidez",
        description: "Está incapaz de trabalhar e o perito negou? Lutamos na justiça para reverter a decisão e garantir seu sustento.",
        cta: "Pedir análise",
        featured: false,
    },
    {
        icon: TrendingUp,
        title: "Planejamento Previdenciário",
        description: "Não se aposente no escuro. Calculamos o melhor momento para você não perder dinheiro pelo resto da vida.",
        cta: "Fazer simulação",
        featured: false,
    },
    {
        icon: AlertTriangle,
        title: "Revisão de Benefício",
        description: "Acha que está ganhando menos do que deveria? Analisamos se houve erro de cálculo do INSS para aumentar seu valor.",
        cta: "Revisar valor",
        featured: false,
    },
]

export default function Services() {
    return (
        <section id="servicos" className="py-24 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Nossas Especialidades
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
                        Como Podemos Te Ajudar Hoje?
                    </h2>
                    <p className="text-muted-foreground font-medium text-xl max-w-2xl mx-auto">
                        Escolha a situação que mais se parece com a sua e fale com um advogado especialista.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Card
                                key={index}
                                className={`flex flex-col transition-all duration-300 group relative overflow-hidden border
                                    ${service.featured
                                    ? 'border-green-500 shadow-xl scale-105 z-10 bg-background ring-1 ring-green-500/50'
                                    : 'border-border shadow-sm hover:shadow-lg hover:border-primary/50 bg-card hover:-translate-y-1'
                                }
                                `}
                            >
                                {service.featured && (
                                    <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wide rounded-bl-xl shadow-sm z-20">
                                        Mais Procurado
                                    </div>
                                )}

                                {/* Efeito de gradiente sutil no fundo */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                                    ${service.featured
                                    ? 'bg-gradient-to-br from-green-500/5 via-transparent to-transparent'
                                    : 'bg-gradient-to-br from-primary/5 via-transparent to-transparent'
                                }
                                `} />

                                <CardHeader className="pb-4 relative z-10">
                                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-sm transition-all duration-300
                                        ${service.featured
                                        ? 'bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white'
                                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                                    }
                                    `}>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <CardTitle className={`text-2xl font-bold transition-colors leading-tight
                                        ${service.featured ? 'text-green-600' : 'text-foreground group-hover:text-primary'}
                                    `}>
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-1 relative z-10">
                                    <p className="font-medium text-muted-foreground leading-relaxed text-base">
                                        {service.description}
                                    </p>
                                </CardContent>

                                <CardFooter className="pt-4 relative z-10">
                                    <Button asChild className={`w-full font-bold h-12 text-base transition-all group/btn
                                        ${service.featured
                                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-green-200'
                                        : 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm'
                                    }
                                    `}>
                                        <a href={`https://wa.me/5587996128608?text=Olá, gostaria de saber mais sobre ${service.title}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                            {service.cta}
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}