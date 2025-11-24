"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[85vh] w-full flex-col justify-center bg-background overflow-hidden pt-32 lg:pt-44 pb-12"
        >
            {/* === ÁREA DA IMAGEM (LADO DIREITO) === */}
            <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] z-0">
                <Image
                    src="/manel.jpg"
                    alt="Dr. Emanuel Silvestre"
                    fill
                    // MUDANÇA AQUI:
                    // No mobile, mudei de 'object-center' para 'object-[70%_center]'
                    // Isso empurra o foco da imagem mais para a direita da tela no celular.
                    // Se quiser mais para a direita, aumente para 80%. Se quiser menos, diminua para 60%.
                    className="object-cover object-[20%_center] lg:object-left-top"
                    priority
                />

                {/* Degradê mantido */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent lg:from-background lg:via-background/60 lg:to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent lg:hidden" />
            </div>

            {/* === CONTEÚDO === */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">

                <div className="w-full lg:max-w-2xl lg:ml-24 space-y-8 animate-in fade-in-0 slide-in-from-left-5 duration-700">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm sm:text-base font-semibold text-primary w-fit backdrop-blur-sm shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                        </span>
                        Especialista em INSS
                    </div>

                    {/* Título  */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground drop-shadow-md lg:drop-shadow-none">
                        Aposentadoria Negada? <br />
                        <span className="text-primary">Pare de Perder Dinheiro.</span>
                    </h1>

                    {/* Texto  */}
                    <p className="text-xl sm:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium drop-shadow-sm lg:drop-shadow-none">
                        Não aceite o "não" do INSS. Recuperamos seu direito e garantimos o teto. Análise rápida e sem "juridiquês".
                    </p>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto font-bold text-lg h-14 px-8 rounded-xl shadow-lg hover:shadow-primary/25 transition-transform hover:-translate-y-0.5"
                        >
                            <Link href="https://wa.me/5587996128608?text=Olá,%20quero%20analisar%20minha%20aposentadoria." target="_blank">
                                Falar com Advogado
                                <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto font-semibold text-lg h-14 px-8 rounded-xl border-2 bg-background/60 backdrop-blur-md"
                        >
                            Conhecer o Escritório
                        </Button>
                    </div>

                    {/* Badges do rodapé */}
                    <div className="flex flex-wrap gap-6 text-sm sm:text-base font-medium text-muted-foreground pt-4 border-t border-border/20 max-w-xl">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-green-600 h-4 w-4" />
                            <span>Atendimento Online</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-blue-600 h-4 w-4" />
                            <span>Presencial e Digital</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}