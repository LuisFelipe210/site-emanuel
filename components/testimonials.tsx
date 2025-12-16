"use client"

import { Star, Quote, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
    {
        name: "Sr. Roberto Mendes",
        role: "Aposentadoria Rural",
        text: "Trabalhei a vida toda na roça sem carteira assinada. O Dr. Emanuel conseguiu provar meu tempo rural com as notas de produtor e hoje recebo minha aposentadoria merecida.",
        initials: "RM",
        status: "Benefício Concedido"
    },
    {
        name: "Dona Maria José",
        role: "BPC / LOAS",
        text: "Eu nunca paguei INSS e achava que não tinha direito a nada. O Doutor explicou que pela minha idade eu podia receber o BPC. Deu entrada e hoje tenho meu salário garantido.",
        initials: "MJ",
        status: "Pagamento Ativo"
    },
    {
        name: "Cláudia Ferreira",
        role: "Salário Maternidade",
        text: "Nem sabia que tinha direito mesmo estando desempregada quando meu filho nasceu. O escritório resolveu tudo muito rápido e o dinheiro saiu na hora certa.",
        initials: "CF",
        status: "Causa Ganha"
    },
]

export default function Testimonials() {
    return (
        <section id="depoimentos" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">

            {/* Background Sutil (Grid) */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* CABEÇALHO */}
                <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto space-y-4 md:space-y-6">
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-8 md:w-12 bg-primary/30"></div>
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-primary/80">
                            Histórias Reais
                        </span>
                        <div className="h-[2px] w-8 md:w-12 bg-primary/30"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Vidas Transformadas Pela <span className="text-primary bg-primary/5 px-2 rounded-lg">Justiça</span>
                    </h2>
                    <p className="text-muted-foreground font-medium text-lg md:text-xl max-w-2xl mx-auto">
                        Não é apenas sobre processos e papelada. É sobre garantir o sustento, a dignidade e o futuro de famílias inteiras.
                    </p>
                </div>

                {/* AQUI TÁ A MUDANÇA, PAI:
                    1. Troquei 'grid' por 'flex' no mobile.
                    2. Usei 'overflow-x-auto' pra permitir rolagem lateral.
                    3. Usei 'snap-x' pra o card travar na tela quando arrasta.
                    4. No desktop (md:), volta a ser grid normal.
                */}
                <div className="
                    flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4
                    md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 md:overflow-visible
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                ">
                    {testimonials.map((t, i) => (
                        <div key={i} className="min-w-[85vw] md:min-w-0 snap-center flex h-full"> {/* Wrapper pro tamanho mobile */}
                            <Card
                                className="flex flex-col w-full h-full border border-border/60 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden rounded-2xl"
                            >
                                {/* Marca D'água Decorativa */}
                                <Quote className="absolute top-4 right-6 h-20 w-20 md:h-24 md:w-24 text-primary/5 rotate-12 pointer-events-none group-hover:text-primary/10 transition-colors" />

                                <CardHeader className="pb-2 pt-6 px-6 md:pt-8 md:px-8 flex flex-col gap-4 relative z-10">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-1 px-6 md:px-8 pb-6 relative z-10">
                                    <p className="text-foreground/80 leading-relaxed text-base md:text-lg font-medium italic">
                                        "{t.text}"
                                    </p>
                                </CardContent>

                                {/* Separador Sutil */}
                                <div className="px-6 md:px-8">
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                                </div>

                                <CardFooter className="px-6 py-5 md:px-8 md:py-6 flex items-center gap-4 relative z-10">
                                    <Avatar className="h-10 w-10 md:h-12 md:w-12 border border-border shadow-sm">
                                        <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xs md:text-sm">
                                            {t.initials}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-foreground text-sm truncate">{t.name}</p>
                                            <p className="text-xs text-muted-foreground font-medium truncate">{t.role}</p>
                                        </div>
                                    </div>

                                    {/* Badge de Status */}
                                    <div className="shrink-0 inline-flex items-center gap-1.5 px-2 py-1 md:px-2.5 rounded-md bg-green-500/10 text-green-700 border border-green-500/20 text-[9px] md:text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                        <CheckCircle2 className="h-3 w-3" />
                                        <span className="hidden sm:inline">{t.status}</span>
                                        <span className="sm:hidden">Aprovado</span> {/* Texto curto no mobile */}
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Indicador visual de swipe (só aparece no mobile se quiser frescar muito, mas o card cortado já indica) */}
                <p className="md:hidden text-center text-xs text-muted-foreground mt-2 animate-pulse">
                    Arraste para o lado &rarr;
                </p>
            </div>
        </section>
    )
}