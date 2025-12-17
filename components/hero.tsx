"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2, Scale, FileSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[100vh] w-full items-center bg-background overflow-hidden pt-20 lg:pt-0"
        >
            {/* === ÁREA DA IMAGEM (ESTILO ORIGINAL RESTAURADO) === */}
            {/* Escondido no mobile (hidden), aparece full no desktop (lg:block) */}
            <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[55%] z-0">
                <Image
                    src="/manel.jpg"
                    alt="Dr. Emanuel Silvestre"
                    fill
                    className="object-cover object-[center_top] lg:object-left-top"
                    priority
                    quality={100}
                />

                {/* Degradê pra fundir a imagem com o fundo branco da esquerda */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

                {/* Um degradê extra na base pra garantir leitura se tiver texto embaixo */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* === CONTEÚDO (TEXTO NOVO) === */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">

                <div className="w-full lg:max-w-2xl lg:ml-12 space-y-8 animate-in fade-in-0 slide-in-from-left-6 duration-700">

                    {/* BADGE EDITORIAL (O novo que tu curtiu) */}
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-primary"></div>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary/90">
                            Direito Previdenciário
                        </span>
                    </div>

                    {/* TÍTULO COM O "NEGADO" VERMELHO SANGUE */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground drop-shadow-sm">
                        <span className="block text-foreground leading-snug">
                            Benefício
                            {/* Wrapper do destaque vermelho */}
                            <span className="relative whitespace-nowrap inline-block mx-3">
                                <span className="absolute inset-0 -rotate-1 bg-primary rounded-sm shadow-sm" />
                                <span className="relative text-white px-2">negado?</span>
                            </span>
                        </span>
                        <span className="text-primary block mt-2">
                            Não aceite o "não" <br className="hidden lg:block" /> do INSS.
                        </span>
                    </h1>

                    {/* TEXTO DE APOIO */}
                    <p className="text-xl sm:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium border-l-[3px] border-primary/40 pl-5">
                        A negativa não é o fim. É o momento de agir com técnica. Analisamos seu caso rápido e sem juridiquês.
                    </p>

                    {/* BOTÕES GRANDES */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto font-bold text-lg h-14 px-8 rounded-xl shadow-lg hover:shadow-primary/25 transition-transform hover:-translate-y-1"
                        >
                            <Link href="https://wa.me/5587996128608?text=Olá,%20quero%20analisar%20minha%20aposentadoria." target="_blank">
                                Falar com Advogado
                                <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto font-semibold text-lg h-14 px-8 rounded-xl border-2 bg-background/60 backdrop-blur-md hover:bg-secondary/50"
                        >
                            <Link href="#servicos">
                                Entender meus Direitos
                            </Link>
                        </Button>
                    </div>

                    {/* BADGES DO RODAPÉ (TRUST MARKERS) */}
                    <div className="pt-6 border-t border-border/40 grid grid-cols-2 gap-6 max-w-md">
                        <div className="flex items-start gap-3">
                            <div className="text-primary shrink-0 mt-1">
                                <Scale className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-bold text-foreground text-sm">Defesa Técnica</p>
                                <p className="text-xs text-muted-foreground">Especializada no INSS</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-primary shrink-0 mt-1">
                                <FileSearch className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-bold text-foreground text-sm">Análise Completa</p>
                                <p className="text-xs text-muted-foreground">Do seu histórico</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}