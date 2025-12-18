"use client"

import Image from "next/image"
import { Scale, BookOpen, Gavel, Award, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
    return (
        <section id="sobre" className="py-12 md:py-20 lg:py-28 bg-background relative overflow-hidden">

            {/* Elemento de fundo (Mantido, mas ajustado opacity pra não poluir mobile) */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 lg:w-64 lg:h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">

                    {/* === LADO DA FOTO === */}
                    <div className="lg:col-span-5 order-first relative group mx-auto w-full max-w-xs lg:max-w-full">

                        {/* Moldura Decorativa (Ajustei pra ser sutil no mobile) */}
                        <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-3 lg:rotate-6 scale-95 group-hover:rotate-0 lg:group-hover:rotate-3 transition-transform duration-500 ease-out" />

                        {/* Container da Imagem */}
                        <div className="relative rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-muted aspect-[4/5]">
                            <Image
                                src="/manel2.png"
                                alt="Dr. Emanuel Silvestre"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 80vw, 50vw"
                            />

                            {/* Overlay degradê */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                            {/* Badge Flutuante (Ajuste de padding pra mobile) */}
                            <div className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:left-6 lg:right-6 p-3 lg:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                                <p className="text-white font-medium text-xs lg:text-sm leading-snug text-center lg:text-left">
                                    "Justiça não é favor, é direito."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* === LADO DO TEXTO === */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">

                        {/* Header da Seção */}
                        {/* MUDEI AQUI: Tirei text-center do mobile. Deixa alinhado a esquerda (padrão) ou força text-left */}
                        <div className="text-left">
                            <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                                {/* O traço agora aparece no mobile também, mas menorzinho, pra dar estilo */}
                                <div className="h-[2px] w-8 lg:w-12 bg-primary"></div>
                                <span className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase text-primary/80">
                                    Sobre o Especialista
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 lg:mb-4 leading-tight">
                                Dr. Emanuel Silvestre
                            </h2>
                            <p className="text-lg lg:text-xl text-muted-foreground font-medium text-primary/90 max-w-lg lg:max-w-none">
                                A voz ativa na defesa dos seus direitos previdenciários.
                            </p>
                        </div>

                        {/* Texto e Citação */}
                        <div className="space-y-4 lg:space-y-6 text-left">
                            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                                A advocacia previdenciária exige mais do que conhecimento técnico nos livros; exige empatia, combate e persistência.
                            </p>

                            {/* Bloco de Citação */}
                            {/* MUDEI: Botei borda na esquerda no mobile também, fica mais organizado que aquele box cinza solto */}
                            <div className="relative pl-4 lg:pl-6 border-l-4 border-primary/30 py-2 my-4 lg:my-6">
                                <p className="text-foreground text-base lg:text-lg font-medium italic">
                                    "Minha missão é clara: garantir que trabalhadores e segurados recebam cada centavo devido, sem medo do INSS."
                                </p>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                                Com atuação focada em reverter negativas, ofereço um atendimento onde você sabe exatamente as chances do seu processo.
                            </p>
                        </div>

                        {/* Grid de Valores (2x2 no Mobile) */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-2">
                            {/* Item 1 */}
                            <div className="flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                                <div className="shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                                    <Scale className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base leading-tight">Ética Inegociável</span>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                                <div className="shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                                    <BookOpen className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base leading-tight">Especialista INSS</span>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                                <div className="shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                                    <Gavel className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base leading-tight">Atuação Combativa</span>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                                <div className="shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                                    <Award className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className="font-semibold text-foreground text-sm lg:text-base leading-tight">Foco no Resultado</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <Button asChild size="lg" className="w-full sm:w-auto rounded-xl px-8 h-12 lg:h-14 font-bold text-base lg:text-lg bg-foreground text-background hover:bg-foreground/90 transition-all hover:-translate-y-1 shadow-xl">
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