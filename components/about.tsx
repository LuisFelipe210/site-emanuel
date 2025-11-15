"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { CheckCircle, Award, Target, Briefcase } from "lucide-react"

export default function About() {
    const [isTextExpanded, setIsTextExpanded] = useState(true)

    return (
        <section
            id="sobre"
            className="relative py-12 md:py-16 lg:py-24 bg-background text-foreground overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.01] dark:opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">

                    {/* COLUNA DA IMAGEM E CONTEÚDO SOBREPOSTO */}
                    <div className="relative w-full max-w-sm mx-auto sm:max-w-md lg:max-w-none lg:mx-0 xl:max-w-md aspect-[3/4] sm:aspect-[4/5] group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl
                                    animate-in fade-in-0 slide-in-from-bottom-8 lg:slide-in-from-left-8 duration-700"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-2xl -z-10" />
                        <Image
                            src="professional-lawyer-office.png"
                            alt="Emanuel Silvestre - Advocacia"
                            className="w-full h-full object-cover"
                            fill
                        />
                        {/* Overlay escuro de base */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-colors duration-300" />

                        {/* Tag de área de atuação (sempre visível no topo) */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-primary text-primary-foreground px-2.5 py-1 sm:px-3 rounded-full text-[10px] sm:text-xs font-medium tracking-wide shadow-md z-10">
                            Advocacia Civil & Empresarial
                        </div>

                        {/* CONTEÚDO SOBRE A IMAGEM (Container da parte de baixo) */}
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 text-white">

                            {/* Container com blur e conteúdo EXPANSÍVEL */}
                            <div className={`
                                relative rounded-xl transition-all duration-500 ease-in-out overflow-hidden
                                
                                ${isTextExpanded ?
                                'max-h-[600px] opacity-100 p-3 sm:p-4 backdrop-blur-2xl bg-black/40' // VISÍVEL
                                : 'max-h-0 opacity-0 p-0' // ESCONDIDO
                            }
                            `}>
                                {/* NOME DO ADVOGADO (DENTRO do container de blur) */}
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 sm:mb-3 md:mb-4">
                                    Emanuel Silvestre
                                </h2>

                                {/* Descrição */}
                                <div className="text-sm sm:text-sm md:text-base text-white/90 leading-relaxed overflow-hidden">
                                    <p className="mb-3 sm:mb-3">
                                        Advogado especializado em Direito Civil e Previdenciário, com mais de 3 anos de experiência na resolução estratégica de conflitos e na assessoria jurídica preventiva.
                                    </p>
                                    <p>
                                        Atuação focada em resultados concretos, combinando profundo conhecimento técnico com atendimento personalizado e comunicação transparente em todas as etapas do processo.
                                    </p>
                                </div>

                                {/* Botão de Agendar Consulta */}
                                <div className="mt-4 sm:mt-6">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="font-semibold w-full text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
                                    >
                                        <Link href="#contato">
                                            Agendar Consulta
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Botão de seta (VISÍVEL EM TODAS AS TELAS) */}
                            <div className="flex justify-center mt-3 sm:mt-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsTextExpanded(!isTextExpanded)}
                                    className="bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 transform h-9 w-9 sm:h-10 sm:w-10"
                                    aria-label={isTextExpanded ? "Minimizar detalhes" : "Expandir detalhes"}
                                >
                                    <ArrowDown className={`size-5 sm:size-6 transition-transform duration-300 ${isTextExpanded ? '' : 'rotate-180'}`} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DE ATRIBUTOS (texto da direita) */}
                    <div className="flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8
                                    animate-in fade-in-0 slide-in-from-bottom-8 lg:slide-in-from-right-8 duration-700"
                    >
                        <span className="inline-block bg-gradient-to-r from-primary/20 to-transparent text-primary px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wide w-fit">
                            Sobre o Advogado
                        </span>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                            Experiência e Valores
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Conheça os pilares que guiam meu trabalho e a dedicação que ofereço em cada caso.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                            <div className="flex items-start gap-3">
                                <Award className="size-6 sm:size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-sm sm:text-base">+3 Anos de Experiência</h4>
                                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                        Atuação sólida em Direito Civil, Contratual e Empresarial.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Target className="size-6 sm:size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Foco Estratégico</h4>
                                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                        Planejamento jurídico orientado por resultados reais.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="size-6 sm:size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Alto Índice de Sucesso</h4>
                                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                        Resultados consistentes obtidos com técnica e comprometimento.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Briefcase className="size-6 sm:size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Atendimento Personalizado</h4>
                                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                        Comunicação direta, transparente e acessível em todas as etapas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}