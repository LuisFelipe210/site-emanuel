"use client"

import { Star, Quote } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        name: "Jamilly",
        role: "Cliente Satisfeita",
        avatar: "/placeholder-user.jpg",
        text: "O atendimento foi impecável, com uma atenção única aos detalhes e uma estratégia jurídica muito bem elaborada. Recomendo sem hesitar!",
        rating: 5,
    },
    {
        name: "Hello",
        role: "Cliente Satisfeito",
        avatar: "/placeholder-user.jpg",
        text: "Profissional dedicado e atencioso. Conseguiu resolver meu caso com rapidez e total transparência.",
        rating: 5,
    },
    {
        name: "Karol",
        role: "Cliente Satisfeita",
        avatar: "/placeholder-user.jpg",
        text: "Fui muito bem orientada e me senti segura durante todo o processo. Trabalho impecável!",
        rating: 5,
    },
    {
        name: "Luis",
        role: "Cliente Satisfeito",
        avatar: "/placeholder-user.jpg",
        text: "Excelente profissional, extremamente preparado e comunicativo. Resultado além do esperado.",
        rating: 4,
    },
]

export default function Testimonials() {
    return (
        <section
            id="depoimentos"
            // DE: bg-[#111111] text-white
            // PARA: bg-muted text-foreground (contraste leve)
            className="relative py-16 sm:py-24 overflow-hidden bg-muted text-foreground"
        >
            {/* DE: opacity-[0.03] */}
            {/* PARA: opacidade diferente para claro/escuro */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.01] dark:opacity-[0.03]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-16">
                    {/* DE: text-[#d4af37] */}
                    {/* PARA: text-primary */}
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                        O que Dizem Sobre Mim
                    </span>
                    {/* DE: text-white */}
                    {/* PARA: text-foreground */}
                    <h2 className="mt-2 text-3xl md:text-5xl font-bold text-foreground">
                        Depoimentos de Clientes
                    </h2>
                    {/* DE: text-white/70 */}
                    {/* PARA: text-muted-foreground */}
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Conheça as experiências reais de pessoas que confiaram em meu trabalho
                        e obtiveram os melhores resultados.
                    </p>
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto relative group/carousel"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 basis-[95%] md:basis-[40%] lg:basis-1/3 xl:basis-1/4"
                            >
                                {/* DE: border-[#2a2a2a] bg-[#0d0d0d] ... hover:shadow-[#d4af37]/20 */}
                                {/* PARA: (Remove cores, <Card> usa as variáveis) ... hover:shadow-primary/20 */}
                                <Card className="relative h-full flex flex-col max-h-[24rem] justify-between shadow-xl hover:shadow-primary/20 transition-all duration-500 ease-in-out hover:-translate-y-1">
                                    <CardHeader className="flex items-center gap-4">
                                        {/* DE: ring-[#d4af37]/30 */}
                                        {/* PARA: ring-primary/30 */}
                                        <Avatar className="h-12 w-12 ring-2 ring-primary/30">
                                            <AvatarImage
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                            />
                                            <AvatarFallback>
                                                {testimonial.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="text-left">
                                            {/* DE: text-white */}
                                            {/* PARA: text-foreground */}
                                            <p className="font-semibold text-foreground">
                                                {testimonial.name}
                                            </p>
                                            {/* DE: text-white/70 */}
                                            {/* PARA: text-muted-foreground */}
                                            <p className="text-muted-foreground text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex-1 relative">
                                        {/* DE: text-[#d4af37]/10 */}
                                        {/* PARA: text-primary/10 */}
                                        <Quote className="absolute -top-2 -left-1 size-14 text-primary/10" />
                                        {/* DE: text-white/80 */}
                                        {/* PARA: text-muted-foreground */}
                                        <p className="relative z-10 text-muted-foreground leading-relaxed pt-4 text-sm sm:text-base">
                                            “{testimonial.text}”
                                        </p>
                                    </CardContent>

                                    <CardFooter className="pt-4">
                                        <div className="flex gap-1">
                                            {/* DE: fill-[#d4af37] text-[#d4af37] */}
                                            {/* PARA: fill-primary text-primary */}
                                            {Array.from({ length: testimonial.rating }).map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={18}
                                                        className="fill-primary text-primary"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* DE: bg-[#1a1a1a]/80 text-white hover:bg-[#0a0a0a] */}
                    {/* PARA: bg-background/80 text-foreground hover:bg-background/100 */}
                    <CarouselPrevious
                        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background/80 text-foreground hover:bg-background transition-all shadow-lg -left-6 opacity-0 group-hover/carousel:opacity-100 hover:scale-105 disabled:opacity-0"
                        aria-label="Anterior"
                    />
                    <CarouselNext
                        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background/80 text-foreground hover:bg-background transition-all shadow-lg -right-6 opacity-0 group-hover/carousel:opacity-100 hover:scale-105 disabled:opacity-0"
                        aria-label="Próximo"
                    />
                </Carousel>
            </div>
        </section>
    )
}