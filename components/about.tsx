import Image from "next/image"
import { ArrowRight, Scale, CheckCircle, Award, Target, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
    return (
        <section
            id="sobre"
            className="relative py-16 md:py-24 bg-background text-foreground overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.01] dark:opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

                    <div className="flex flex-col justify-center gap-6 sm:gap-8 animate-in fade-in-0 slide-in-from-left-8 duration-700">
                        <span className="inline-block bg-gradient-to-r from-primary/20 to-transparent text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                            Sobre o Advogado
                        </span>

                        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-foreground">
                            Emanuel Silvestre
                        </h2>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                            alhum texto aqui que ele é espcalista
                        </p>
                        <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
                            <p>
                                nao sei o que colcoar auqi nao sei o que colcoar auqinao sei o que colcoar auqinao sei o que colcoar auqinao sei o que colcoar auqinao sei o que colcoar auqinao sei o que colcoar auqi
                            </p>
                            <p>
                                nao sei o que colcoar auqinao sei o que colcoar auqinao sei o que colcoar auqinao sei o que colcoar auqi
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex items-start gap-3">
                                <Award className="size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">+3 Anos de Experiência</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Atuação sólida em Direito Civil, Contratual e Empresarial.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Target className="size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Foco Estratégico</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Planejamento jurídico orientado por resultados reais.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Alto Índice de Sucesso</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Resultados consistentes obtidos com técnica e comprometimento.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Briefcase className="size-7 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Atendimento Personalizado</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Comunicação direta, transparente e acessível em todas as etapas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
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
                        </div>
                    </div>

                    <div className="relative w-full max-w-md mx-auto md:max-w-none md:mx-0 xl:max-w-md aspect-[4/5] group rounded-3xl overflow-hidden shadow-lg animate-in fade-in-0 slide-in-from-right-8 duration-700">

                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-2xl -z-10" />
                        <Image
                            src="professional-lawyer-office.png"
                            alt="Emanuel Silvestre - Advocacia"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

                        <div className="absolute bottom-8 left-8 right-8 text-white space-y-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                            <h4 className="text-2xl font-semibold tracking-tight">
                                Excelência e Confiança
                            </h4>
                            <p className="text-white/80 leading-relaxed text-sm">
                                Advocacia com foco em resultados, transparência e ética em cada etapa do processo.
                            </p>
                        </div>
                        <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-md">
                            Advocacia Civil & Empresarial
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}