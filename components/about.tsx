"use client"

import Image from "next/image"
import { Scale, BookOpen, Gavel, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
    return (
        <section id="sobre" className="py-16 lg:py-20 bg-background text-foreground overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Imagem: Agora com max-width controlado para não ficar gigante */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[360px] lg:max-w-[400px] aspect-[3/4] rounded-lg overflow-hidden shadow-xl border border-border bg-muted">
                            <Image
                                src="/manel.jpg"
                                alt="Emanuel Silvestre no escritório"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                        {/* Detalhe decorativo ajustado para o novo tamanho */}
                        <div className="absolute top-[-10px] left-0 lg:left-8 h-20 w-20 border-t-4 border-l-4 border-primary/30 rounded-tl-xl -z-10" />
                        <div className="absolute bottom-[-10px] right-0 lg:right-auto lg:left-[380px] h-20 w-20 border-b-4 border-r-4 border-primary/30 rounded-br-xl -z-10" />
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col justify-center order-1 lg:order-2 space-y-5">
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-wide text-xs mb-2">
                                Sobre o Profissional
                            </h4>
                            <h2 className="text-3xl font-bold text-foreground mb-3">
                                Emanuel Silvestre
                            </h2>
                            <div className="h-1 w-16 bg-primary rounded-full mb-5" />
                        </div>

                        <div className="text-muted-foreground space-y-3 text-base sm:text-lg leading-relaxed">
                            <p>
                                A advocacia previdenciária exige mais do que conhecimento técnico; exige empatia e persistência. Minha missão é garantir que trabalhadores e segurados recebam o que lhes é devido.
                            </p>
                            <p>
                                Com atuação focada em reverter negativas do INSS e planejar aposentadorias vantajosas, ofereço um atendimento transparente: você saberá exatamente as chances e os passos do seu processo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-3 p-2.5 bg-muted/30 rounded-lg border border-border/50">
                                <Scale className="h-4 w-4 text-primary" />
                                <span className="font-medium text-sm">Ética e Transparência</span>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 bg-muted/30 rounded-lg border border-border/50">
                                <BookOpen className="h-4 w-4 text-primary" />
                                <span className="font-medium text-sm">Especialista em INSS</span>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 bg-muted/30 rounded-lg border border-border/50">
                                <Gavel className="h-4 w-4 text-primary" />
                                <span className="font-medium text-sm">Atuação Combativa</span>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 bg-muted/30 rounded-lg border border-border/50">
                                <Award className="h-4 w-4 text-primary" />
                                <span className="font-medium text-sm">Foco no Resultado</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 h-10 rounded-md text-sm">
                                <Link href="#contato">
                                    Conhecer o Advogado
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}