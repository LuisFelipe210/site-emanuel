"use client"

import { Award, ShieldCheck, Scale, History, TrendingUp, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Authority() {
    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden border-y border-border/40">

            {/* Elemento decorativo de fundo */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* === LADO ESQUERDO: TEXTO E CREDENCIAIS === */}
                    <div className="space-y-6 md:space-y-8 animate-in fade-in-0 slide-in-from-left-4 duration-700">

                        {/* Badge Editorial */}
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-8 md:w-12 bg-primary"></div>
                            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-primary/80">
                                Por que confiar?
                            </span>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 md:mb-6 leading-tight">
                                Não deixe seu futuro na mão de amadores.
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                O INSS tem uma estrutura gigante focada em negar benefícios. Para vencer esse sistema, você precisa de um escritório que combina técnica jurídica apurada com combate diário.
                            </p>
                        </div>

                        {/* Cards de Credenciais (Mantive empilhado pq são só 2 e importantes) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="flex items-center gap-4 p-4 rounded-2xl border border-primary/20 bg-primary/5">
                                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center shrink-0 text-primary-foreground shadow-lg shadow-primary/20">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-base md:text-lg text-foreground">OAB/BA 79.803</p>
                                    <p className="text-xs md:text-sm text-muted-foreground">Advogado Regular</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card">
                                <div className="h-10 w-10 bg-secondary rounded-lg flex items-center justify-center shrink-0 text-foreground">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-base md:text-lg text-foreground">Especialista</p>
                                    <p className="text-xs md:text-sm text-muted-foreground">Foco em Previdenciário</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === LADO DIREITO: ESTATÍSTICAS (CARROSSEL NO MOBILE) === */}
                    <div className="relative">

                        {/* AQUI A MÁGICA DO MOBILE:
                           flex + overflow-x-auto + snap-x = Carrossel nativo
                           No desktop (md:) volta a ser grid.
                        */}
                        <div className="
                            flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6
                            md:grid md:grid-cols-2 md:gap-6 md:pb-0 md:mx-0 md:px-0 md:overflow-visible
                            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                        ">

                            {/* STAT 1 */}
                            <div className="min-w-[260px] md:min-w-0 snap-center">
                                <Card className="bg-card border-border/60 shadow-lg h-full">
                                    <CardContent className="p-6 flex flex-col gap-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Scale className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-extrabold text-foreground mb-1">
                                                +100
                                            </h3>
                                            <p className="font-medium text-muted-foreground text-sm">
                                                Benefícios Concedidos
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* STAT 2 - Com margem superior no desktop pra dar aquele efeito assimétrico */}
                            <div className="min-w-[260px] md:min-w-0 snap-center md:mt-12">
                                <Card className="bg-card border-border/60 shadow-lg h-full">
                                    <CardContent className="p-6 flex flex-col gap-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <History className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-extrabold text-foreground mb-1">
                                                3 Anos
                                            </h3>
                                            <p className="font-medium text-muted-foreground text-sm">
                                                De Atuação Jurídica
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* STAT 3 */}
                            <div className="min-w-[260px] md:min-w-0 snap-center">
                                <Card className="bg-card border-border/60 shadow-lg h-full">
                                    <CardContent className="p-6 flex flex-col gap-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <TrendingUp className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-extrabold text-foreground mb-1">
                                                R$ 1 Mi+
                                            </h3>
                                            <p className="font-medium text-muted-foreground text-sm">
                                                Recuperados em Atrasados
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                        </div>

                        {/* Box Decorativo (Só aparece no desktop) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-6 rounded-full shadow-2xl shadow-primary/30 hidden md:flex items-center justify-center h-24 w-24 border-4 border-background z-10">
                            <CheckCircle2 className="h-10 w-10" />
                        </div>

                        {/* Indicador de Swipe no Mobile */}
                        <p className="md:hidden text-center text-[10px] text-muted-foreground uppercase tracking-widest mt-2 opacity-60">
                            Deslize para ver mais &rarr;
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}