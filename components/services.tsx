"use client"

import { FileClock, HandCoins, HeartPulse, TrendingUp, AlertTriangle, Sprout, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

const services = [
    {
        icon: Sprout,
        title: "Aposentadoria Rural",
        description: "Trabalhou na roça, pesca ou agricultura familiar? Aposente-se 5 anos mais cedo.",
        cta: "Sou trabalhador rural",
        featured: true,
    },
    {
        icon: FileClock,
        title: "Aposentadoria por Idade",
        description: "Completou a idade (62 mulher / 65 homem) e o INSS negou? Vamos destravar seu benefício.",
        cta: "Quero me aposentar",
        featured: false,
    },
    {
        icon: HandCoins,
        title: "BPC / LOAS",
        description: "Benefício de um salário mínimo para idosos (+65) ou PCDs. Não precisa ter contribuído.",
        cta: "Tenho direito?",
        featured: false,
    },
    {
        icon: HeartPulse,
        title: "Auxílio Doença / Invalidez",
        description: "Está incapaz de trabalhar e o perito negou? Lutamos para reverter a decisão.",
        cta: "Pedir análise",
        featured: false,
    },
    {
        icon: AlertTriangle,
        title: "Revisão de Benefício",
        description: "Recebe menos do que deveria? Analisamos se houve erro de cálculo do INSS.",
        cta: "Revisar valor",
        featured: false,
    },
    {
        icon: TrendingUp,
        title: "Planejamento Previdenciário",
        description: "Não se aposente no escuro. Calculamos o melhor momento para você não perder dinheiro.",
        cta: "Fazer simulação",
        featured: false,
    },
]

export default function Services() {
    return (
        <section id="servicos" className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">

            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto space-y-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] w-8 md:w-12 bg-primary/40"></div>
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-primary/80">
                            Áreas de Atuação
                        </span>
                        <div className="h-[2px] w-8 md:w-12 bg-primary/40"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Como podemos resolver <br className="hidden md:block"/> seu problema hoje?
                    </h2>
                    <p className="text-muted-foreground font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
                        Toque na opção que mais se parece com o seu caso:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        const isFeatured = service.featured

                        // AJUSTE 1: Cores mais fortes para os botões secundários
                        // Em vez de 'outline', usamos 'bg-secondary' ou similar pra dar peso visual
                        const cardBorder = isFeatured ? 'border-green-600 shadow-md' : 'border-border hover:border-primary/50'
                        const iconBg = isFeatured ? 'bg-green-100 text-green-700' : 'bg-primary/10 text-primary'

                        // Botão Rural: Verde Sólido | Outros: Primary Sólido (ou Secondary Sólido)
                        // Pra velho, botão tem que ter cor de botão.
                        const buttonStyle = isFeatured
                            ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                            : 'bg-primary/90 hover:bg-primary text-primary-foreground shadow-sm'

                        return (
                            <Card
                                key={index}
                                className={`flex flex-col transition-all duration-300 group relative overflow-visible
                                    ${cardBorder} bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 h-full
                                    /* Tira o scale no mobile pra não quebrar layout */
                                    ${isFeatured ? 'lg:scale-105 z-10 ring-1 ring-green-600/20' : ''}
                                `}
                            >
                                {isFeatured && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-md z-20 flex items-center gap-1.5 whitespace-nowrap">
                                        <Check className="w-3 h-3" />
                                        Mais Procurado
                                    </div>
                                )}

                                <CardHeader className="pb-2 pt-6 flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-2">
                                    {/* Icone um pouco menor no mobile pra economizar espaço */}
                                    <div className={`inline-flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 ${iconBg}`}>
                                        <Icon className="h-6 w-6 md:h-7 md:w-7" />
                                    </div>
                                    <CardTitle className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    {/* Texto com um pouco mais de contraste */}
                                    <p className="text-foreground/80 md:text-muted-foreground leading-relaxed text-sm md:text-base">
                                        {service.description}
                                    </p>
                                </CardContent>

                                <CardFooter className="pt-2 pb-6">
                                    <Button
                                        asChild
                                        className={`w-full font-bold h-12 text-base transition-all rounded-xl justify-between px-6 ${buttonStyle}`}
                                    >
                                        <Link
                                            href={`https://wa.me/5587996128608?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${service.title}`}
                                            target="_blank"
                                        >
                                            {/* TRUQUE: after:absolute after:inset-0 faz o link cobrir o card todo */}
                                            {/* Isso facilita o clique pra quem tem dedo grosso ou tremedeira */}
                                            <span className="absolute inset-0 z-10 md:hidden" />

                                            {service.cta}
                                            <ArrowRight className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>

                <div className="mt-12 text-center px-4">
                    <p className="text-muted-foreground mb-3 font-medium">Não encontrou o seu caso?</p>
                    <Button
                        variant="outline"
                        asChild
                        className="w-full md:w-auto text-primary border-primary/30 hover:bg-primary/5 text-12px text-primary font-bold h-12 rounded-xl"
                    >
                        <Link href="https://wa.me/5587996128608?text=Tenho%20um%20caso%20diferente,%20pode%20me%20ajudar?" target="_blank">
                            Falar com o Dr. Emanuel no WhatsApp
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}