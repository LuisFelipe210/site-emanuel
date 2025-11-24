"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-background text-foreground pt-20 pb-12 lg:pt-32 lg:pb-20"
        >
            {/* Background pattern suave */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 lg:flex-row lg:gap-16">

                <div className="text-center lg:text-left max-w-2xl space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">

                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Atendimento Especializado em INSS
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-foreground tracking-tight">
                        Aposentadoria Negada? <br className="hidden lg:block" />
                        <span className="text-primary">Pare de Perder Dinheiro.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                        Não aceite o "não" do INSS. Nós recuperamos seu direito e garantimos o melhor valor para sua aposentadoria. Análise rápida e sem "juridiquês".
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto font-bold text-lg h-14 px-8 rounded-xl shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1"
                        >
                            <Link href="https://wa.me/5587996128608?text=Olá,%20vim%20pelo%20site%20e%20quero%20analisar%20minha%20aposentadoria." target="_blank">
                                Falar com Advogado no WhatsApp
                                <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sl text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="text-green-600 h-4 w-4" />
                            <span>Atendimento Online em todo Brasil</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="text-green-600 h-4 w-4" />
                            <span>Advocacia Presencial e DIgital</span>
                        </div>
                    </div>
                </div>

                {/* Imagem Hero */}
                <div className="mt-12 lg:mt-0 relative w-full max-w-[400px] lg:max-w-[480px]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-border bg-muted shadow-2xl">
                        <Image
                            src="/manel.jpg"
                            alt="Dr. Emanuel Silvestre"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Badge flutuante */}
                        <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg">
                            <p className="font-bold text-foreground text-center">
                                "Seu benefício é o sustento da sua família. Não arrisque."
                            </p>
                            <p className="text-xs text-center text-muted-foreground mt-1 uppercase tracking-wide font-semibold">
                                Dr. Emanuel Silvestre
                            </p>
                        </div>
                    </div>
                    {/* Elemento decorativo */}
                    <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 bg-primary/10 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    )
}