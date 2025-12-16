"use client"

import Image from "next/image"
import { Scale, BookOpen, Gavel, Award, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
    return (
        <section id="sobre" className="py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden">

            {/* Elemento de fundo pra dar profundidade */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 lg:w-64 lg:h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

                    {/* === LADO DA FOTO === */}
                    <div className="lg:col-span-5 order-first relative group mx-auto w-[85%] sm:w-[70%] lg:w-full">

                        {/* Moldura Decorativa Traseira (Reduzi a rotação no mobile pra não cortar) */}
                        <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-3 lg:rotate-6 scale-95 group-hover:rotate-0 lg:group-hover:rotate-3 transition-transform duration-500 ease-out" />

                        {/* Container da Imagem */}
                        <div className="relative rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-muted aspect-[4/5]">
                            <Image
                                src="/manel2.png"
                                alt="Dr. Emanuel Silvestre"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 85vw, 50vw"
                            />

                            {/* Overlay degradê sutil na base */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                            {/* Badge Flutuante na Imagem */}
                            <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 p-3 lg:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                                <p className="text-white font-medium text-xs lg:text-sm leading-snug text-center lg:text-left">
                                    "Justiça não é favor, é direito."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* === LADO DO TEXTO === */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">

                        {/* Header da Seção */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex lg:flex items-center gap-4 mb-3 lg:mb-4">
                                <div className="hidden lg:block h-[2px] w-12 bg-primary"></div>
                                <span className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase text-primary/80 border lg:border-none border-primary/20 px-3 py-1 rounded-full lg:p-0">
                                    Sobre o Especialista
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 lg:mb-4 leading-tight">
                                Dr. Emanuel Silvestre
                            </h2>
                            <p className="text-lg lg:text-xl text-muted-foreground font-medium text-primary/90">
                                A voz ativa na defesa dos seus direitos previdenciários.
                            </p>
                        </div>

                        {/* Texto e Citação */}
                        <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                                A advocacia previdenciária exige mais do que conhecimento técnico nos livros; exige empatia, combate e persistência.
                            </p>

                            {/* Bloco de Citação */}
                            <div className="relative px-4 lg:pl-6 lg:pr-0 border-l-0 lg:border-l-4 border-primary/30 py-2 my-4 lg:my-6 bg-secondary/20 lg:bg-transparent rounded-lg lg:rounded-none">
                                <Quote className="hidden lg:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-background fill-primary stroke-primary rotate-180" />
                                <p className="text-foreground text-base lg:text-lg font-medium italic">
                                    "Minha missão é clara: garantir que trabalhadores e segurados recebam cada centavo que lhes é devido, sem enrolação e sem medo do INSS."
                                </p>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                                Com atuação focada em reverter negativas e planejar aposentadorias, ofereço um atendimento onde você sabe exatamente as chances do seu processo.
                            </p>
                        </div>

                        {/* Grid de Valores (Compacto no Mobile 2x2) */}
                        {/* AQUI O PULO DO GATO: grid-cols-2 no mobile pra economizar altura */}
                        <div className="grid grid-cols-2 gap-3 lg:gap-x-6 lg:gap-y-4 pt-2">
                            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-3 group bg-secondary/10 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none text-center lg:text-left hover:bg-secondary/30 transition-colors">
                                <div className="p-1.5 lg:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Scale className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base">Ética Inegociável</span>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-3 group bg-secondary/10 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none text-center lg:text-left hover:bg-secondary/30 transition-colors">
                                <div className="p-1.5 lg:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <BookOpen className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base">Especialista INSS</span>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-3 group bg-secondary/10 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none text-center lg:text-left hover:bg-secondary/30 transition-colors">
                                <div className="p-1.5 lg:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Gavel className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base">Atuação Combativa</span>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-3 group bg-secondary/10 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none text-center lg:text-left hover:bg-secondary/30 transition-colors">
                                <div className="p-1.5 lg:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Award className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base">Foco no Resultado</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-2 lg:pt-4">
                            <Button asChild size="lg" className="w-full lg:w-auto rounded-xl px-8 h-12 lg:h-12 font-bold bg-foreground text-background hover:bg-foreground/90 transition-all hover:-translate-y-1 shadow-xl">
                                <Link href="#contato">
                                    Agendar Conversa Pessoal
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}