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
            <div className="absolute inset-0 z-0">
                <Image
                    src="/professional-lawyer-office.png"
                    alt="Escritório de advocacia Emanuel Silvestre"
                    fill
                    priority
                    className="object-cover opacity-15 dark:opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-transparent dark:from-black/30 dark:via-black/20 dark:to-black/10" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 py-24 sm:py-20 md:py-28 lg:flex-row lg:gap-20">
                <div className="text-center lg:text-left max-w-2xl space-y-6">
                    <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 border border-primary/30 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                        <Scale className="h-5 w-5" />
                        Advocacia Civil & Previdenciária
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
                        Excelência Jurídica <br /> com Ética e Resultados
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Consultoria e representação jurídica de alto padrão, com abordagem moderna,
                        técnica e transparente. O foco é sempre o resultado e a confiança do cliente.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Button
                            asChild
                            size="lg"
                            className="font-semibold px-8 py-4 text-base rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
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
                            className="px-8 py-4 text-base font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                        >
                            <Link href="#servicos">Conhecer Serviços</Link>
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-muted-foreground sm:gap-8 lg:justify-start">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30">
                                <span className="text-primary font-semibold text-base">3+</span>
                            </div>
                            <span className="text-foreground text-sm font-medium tracking-wide">
                                Anos de Experiência
                            </span>
                        </div>
                        <div className="hidden h-4 w-px bg-border sm:block" />
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-foreground font-medium tracking-wide">
                                Atuação Nacional
                            </span>
                        </div>
                    </div>
                </div>

                 <div className="mt-12 lg:mt-0 relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-border group">
                    <Image
                        src="/lawyer-working-at-desk-with-client.jpg"
                        alt="Emanuel Silvestre - Advogado"
                        width={600}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 aspect-[3/4]"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-700 shadow-inner" />
                    <div className="absolute bottom-6 left-6 space-y-2 text-white sm:bottom-8 sm:left-8">
                        <h4 className="text-lg font-semibold text-[#f5f5f5]">
                            Comprometimento e Confiança
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                            Advocacia moderna com rigor técnico, clareza e resultados reais.
                        </p>
                    </div>
                    <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-md">
                        Emanuel Silvestre
                    </div>
                </div>
            </div>
        </section>
    )
}