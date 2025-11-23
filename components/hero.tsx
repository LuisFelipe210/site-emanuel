"use client"

import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden bg-background text-foreground pt-16 pb-8 lg:pt-20 lg:pb-12"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 lg:flex-row lg:gap-12">

                <div className="text-center lg:text-left max-w-2xl space-y-5 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">

                    <div className="inline-flex items-center gap-2 rounded-md bg-muted border border-border px-3 py-1.5 text-sm font-medium text-foreground/80">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Especialista em INSS e Aposentadorias
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground tracking-tight">
                        Seu direito à <span className="text-primary">aposentadoria</span> defendido com seriedade.
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Não deixe o INSS negar o que é seu por direito. Atuamos na concessão e revisão de benefícios, BPC/LOAS e planejamento previdenciário.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto font-semibold px-6 py-5 text-base rounded-lg shadow-sm hover:shadow-md transition-all"
                        >
                            <Link href="#contato">
                                Analisar meu caso
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>

                        <div className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground">
                            <div className="flex -space-x-2">
                                <div className="h-7 w-7 rounded-full bg-slate-200 border-2 border-background flex items-center justify-center text-[9px] font-bold">JA</div>
                                <div className="h-7 w-7 rounded-full bg-slate-300 border-2 border-background flex items-center justify-center text-[9px] font-bold">MC</div>
                                <div className="h-7 w-7 rounded-full bg-slate-400 border-2 border-background flex items-center justify-center text-[9px] font-bold">+1k</div>
                            </div>
                            <p className="text-xs sm:text-sm">Vidas impactadas</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 lg:mt-0 relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border bg-muted shadow-xl">
                        <Image
                            src="/manel.jpg"
                            alt="Atendimento jurídico humanizado"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="absolute -bottom-4 -left-4 -z-10 h-3/4 w-3/4 rounded-lg border-2 border-primary/20 bg-transparent" />
                </div>
            </div>
        </section>
    )
}