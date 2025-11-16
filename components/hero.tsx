"use client"

import Image from "next/image"
import { ArrowRight, Scale, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background text-foreground"
        >
            {/* 1. FUNDO LIMPO: Removida a imagem de fundo, adicionados glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 py-24 sm:py-20 md:py-28 lg:flex-row lg:gap-16">

                {/* COLUNA DA ESQUERDA (TEXTO) */}
                <div className="text-center lg:text-left max-w-2xl space-y-5 sm:space-y-6
                                animate-in fade-in-0 slide-in-from-bottom-8 lg:slide-in-from-left-8 duration-700"
                >
                    <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 border border-primary/30 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                        <Scale className="h-5 w-5" />
                        Advocacia Civil & Previdenciária
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                        Excelência Jurídica com Ética e Resultado
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Consultoria e representação jurídica de alto padrão, com abordagem moderna,
                        técnica e transparente. O foco é sempre o resultado e a confiança do cliente.
                    </p>

                    {/* 2. STATS REORGANIZADOS: Movidos para cá e simplificados */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-foreground font-medium">
                                +3 Anos de Experiência
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-foreground font-medium">
                                Atuação Nacional
                            </span>
                        </div>
                    </div>

                    <div className="pt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Button
                            asChild
                            size="lg"
                            className="font-semibold px-8 py-4 text-base rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 w-full sm:w-auto"
                        >
                            <Link href="#contato">
                                Agendar Consulta
                                <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="px-8 py-4 text-base font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                        >
                            <Link href="#servicos">Conhecer Serviços</Link>
                        </Button>
                    </div>
                </div>

                {/* COLUNA DA DIREITA (IMAGEM) */}
                {/* 3. IMAGEM LIMPA: Removido o texto de cima */}
                <div className="mt-12 lg:mt-0 relative w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl overflow-hidden shadow-2xl border border-border group
                                animate-in fade-in-0 slide-in-from-bottom-8 lg:slide-in-from-right-8 duration-700"
                >
                    <Image
                        src="/lawyer-working-at-desk-with-client.jpg"
                        alt="Emanuel Silvestre - Advogado"
                        width={600}
                        height={800}
                        priority
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 aspect-[3/4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 transition-all duration-700 shadow-inner" />
                </div>
            </div>
        </section>
    )
}