"use client"

import { Scale, BookOpen, Gavel, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <section id="sobre" className="py-16 lg:py-24 bg-muted/30 text-foreground overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Imagem: Agora com tag img padrão */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[360px] lg:max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted">
                            <img
                                src="/manel2.png"
                                alt="Emanuel Silvestre no escritório"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Detalhe decorativo */}
                        <div className="absolute top-[-20px] left-[-20px] lg:left-4 h-32 w-32 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl -z-10" />
                        <div className="absolute bottom-[-20px] right-[-20px] lg:right-auto lg:left-[360px] h-32 w-32 border-b-4 border-r-4 border-primary/30 rounded-br-3xl -z-10" />
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-1 w-10 bg-primary rounded-full" />
                                <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
                                    Sobre o Advogado
                                </h4>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                                Dr. Emanuel Silvestre
                            </h2>
                            <p className="text-xl text-muted-foreground font-medium">
                                Especialista em fazer o INSS pagar o que deve.
                            </p>
                        </div>

                        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
                            <p>
                                A advocacia previdenciária exige mais do que conhecimento técnico; exige empatia e persistência. Minha missão é garantir que trabalhadores e segurados recebam o que lhes é devido, sem enrolação.
                            </p>
                            <p>
                                Com atuação focada em reverter negativas do INSS e planejar aposentadorias vantajosas, ofereço um atendimento transparente: você saberá exatamente as chances e os passos do seu processo desde o primeiro dia.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                                <Scale className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-sm">Ética Inegociável</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-sm">Especialista em INSS</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                                <Gavel className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-sm">Atuação Combativa</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                                <Award className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-sm">Foco no Resultado</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary  font-bold px-8 h-12 rounded-lg text-base shadow-sm">
                                <a href="#contato">
                                    Agendar Conversa com Dr. Emanuel
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}