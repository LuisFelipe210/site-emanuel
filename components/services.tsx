"use client"

import { FileClock, HandCoins, HeartPulse, Baby, TrendingUp, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

const services = [
    {
        icon: FileClock,
        title: "Aposentadoria por Idade",
        description: "Completou a idade (62 mulher / 65 homem) e o INSS negou? Analisamos seu tempo e contribuições para destravar seu benefício.",
        cta: "Quero me aposentar",
    },
    {
        icon: TrendingUp,
        title: "Planejamento Previdenciário",
        description: "Não se aposente no escuro. Calculamos o melhor momento e valor para você não perder dinheiro pelo resto da vida.",
        cta: "Fazer simulação",
    },
    {
        icon: HandCoins,
        title: "BPC / LOAS (Idoso e Deficiente)",
        description: "Benefício de um salário mínimo para quem nunca contribuiu, tem mais de 65 anos ou deficiência e baixa renda.",
        cta: "Tenho direito?",
    },
    {
        icon: HeartPulse,
        title: "Auxílio Doença e Invalidez",
        description: "Está incapaz de trabalhar e o perito negou? Lutamos na justiça para reverter a decisão e garantir seu sustento.",
        cta: "Pedir análise",
    },
    {
        icon: AlertTriangle,
        title: "Revisão de Benefício",
        description: "Acha que está ganhando menos do que deveria? Analisamos se houve erro de cálculo do INSS para aumentar seu valor.",
        cta: "Revisar valor",
    },
    {
        icon: Baby,
        title: "Salário Maternidade",
        description: "Mesmo desempregada você pode ter direito. Receba os valores atrasados do nascimento do seu filho.",
        cta: "Solicitar agora",
    },
]

export default function Services() {
    return (
        <section id="servicos" className="py-20 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                        Como Podemos Te Ajudar Hoje?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Escolha a situação que mais se parece com a sua.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Card key={index} className="flex flex-col border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                                        <a href={`https://wa.me/5587996128608?text=Olá, gostaria de saber mais sobre ${service.title}`} target="_blank" rel="noopener noreferrer">
                                            {service.cta}
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