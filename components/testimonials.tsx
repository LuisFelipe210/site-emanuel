"use client"
import { useState, useEffect, useCallback } from "react"
import { Star, Quote } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
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
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        const onSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }
        api.on("select", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api])

    const scrollTo = useCallback((index: number) => {
        api?.scrollTo(index)
    }, [api])

    return (
        <section
            id="depoimentos"
            className="relative py-16 sm:py-24 overflow-hidden bg-muted text-foreground"
        >
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.01] dark:opacity-[0.03]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-16">
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                        O que Dizem Sobre Mim
                    </span>
                    <h2 className="mt-2 text-3xl md:text-5xl font-bold text-foreground">
                        Depoimentos de Clientes
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Conheça as experiências reais de pessoas que confiaram em meu trabalho
                        e obtiveram os melhores resultados.
                    </p>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{ align: "start", loop: true }}
                    className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto relative group/carousel"
                >
                    <CarouselContent className="py-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 basis-[95%] sm:basis-1/2 lg:basis-1/3"
                            >
                                <Card className="relative h-full flex flex-col max-h-[24rem] justify-between shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ease-in-out hover:-translate-y-2">
                                    <CardHeader className="flex items-center gap-4">
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
                                            <p className="font-semibold text-foreground">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex-1 relative">
                                        <Quote className="absolute -top-2 -left-1 size-14 text-primary/10" />
                                        <p className="relative z-10 text-muted-foreground leading-relaxed pt-4 text-sm sm:text-base">
                                            "{testimonial.text}"
                                        </p>
                                    </CardContent>

                                    <CardFooter className="pt-4">
                                        <div className="flex gap-1">
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

                    <CarouselPrevious
                        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background/80 text-foreground hover:bg-background transition-all shadow-lg -left-6 opacity-0 group-hover/carousel:opacity-100 hover:scale-105 disabled:opacity-0"
                        aria-label="Anterior"
                    />
                    <CarouselNext
                        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background/80 text-foreground hover:bg-background transition-all shadow-lg -right-6 opacity-0 group-hover/carousel:opacity-100 hover:scale-105 disabled:opacity-0"
                        aria-label="Próximo"
                    />

                    <div className="flex md:hidden justify-center items-center gap-2 mt-8">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className="group"
                                aria-label={`Ir para slide ${index + 1}`}
                            >
                                <div className={`h-1.5 rounded-full transition-all duration-300 ${
                                    current === index
                                        ? 'w-12 bg-primary'
                                        : 'w-8 bg-foreground/30 group-hover:bg-foreground/50'
                                }`} />
                            </button>
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    )
}