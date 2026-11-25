"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { SertaoFundo, SertaoFrente } from "@/components/sertao"
import { waLink } from "@/lib/contato"

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

    return (
        <section
            id="home"
            ref={ref}
            className="relative isolate overflow-hidden bg-cal xl:min-h-[max(100svh,820px)]"
        >
            {/* TEXTO */}
            <div className="relative z-30 mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8 xl:pb-6 xl:pt-36">
                <div className="max-w-[46rem]">
                    <h1 className="text-azul-noite">
                        <span className="block font-display text-[2rem] font-medium leading-tight sm:text-5xl xl:text-[3.4rem]">
                            Benefício{" "}
                            <span className="relative inline-block">
                                <motion.span
                                    aria-hidden="true"
                                    className="absolute -inset-x-1.5 bottom-[0.06em] top-[0.42em] -z-10 origin-left bg-ouro-claro"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                />
                                negado?
                            </span>
                        </span>
                        <span className="mt-2 block font-largo text-[2.05rem] uppercase leading-[0.98] text-azul sm:text-6xl xl:text-[5.1rem]">
                            Não aceite <br />o “não” <br className="hidden sm:block" />
                            do INSS.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-azul-noite/85 xl:text-xl">
                        A negativa não é o fim. É o momento de agir com técnica. Analisamos seu caso rápido e sem
                        juridiquês.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                        <a
                            href={waLink("Olá, quero analisar minha aposentadoria.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex h-16 items-center justify-center gap-3 rounded-md bg-azul px-7 text-lg font-bold text-white shadow-[0_10px_24px_-10px_rgba(13,27,69,0.55)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-azul-noite"
                        >
                            <FaWhatsapp className="size-6 text-ouro-claro" aria-hidden="true" />
                            Falar com o advogado
                        </a>
                        <a
                            href="#tenho-direito"
                            className="inline-flex items-center gap-2 self-start py-2 text-lg font-bold text-azul underline decoration-ouro decoration-2 underline-offset-[0.3em] transition-colors hover:text-azul-noite sm:self-auto"
                        >
                            Entender meus direitos
                        </a>
                    </div>

                    <p className="mt-6 text-[0.95rem] text-azul-noite/75">
                        Dr. Emanuel Silvestre · OAB/BA 79.803 · Atendimento em todo o Brasil
                    </p>
                </div>
            </div>

            {/* PAISAGEM + RETRATO
                Mobile: bloco abaixo do texto. Desktop: metade de baixo da tela, atrás do texto
                (do lado do texto só passa céu e serra clara, para manter o contraste). */}
            <div className="relative mt-8 h-[400px] sm:h-[440px] xl:absolute xl:inset-x-0 xl:bottom-0 xl:mt-0 xl:h-[50%]">
                <div className="absolute inset-0 z-0">
                    <SertaoFundo progresso={scrollYProgress} />
                </div>

                {/* Dr. Emanuel recortado e colado na paisagem, entre os morros e o chão da frente */}
                <motion.div
                    className="absolute bottom-[4%] right-[3%] z-10 h-[92%] w-auto sm:right-[8%] xl:bottom-[6%] xl:right-[7%] xl:h-[160%]"
                    initial={{ y: 40 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src="/emanuel-recorte.webp"
                        alt="Dr. Emanuel Silvestre, de blazer azul-marinho e braços cruzados, sorrindo"
                        width={583}
                        height={1078}
                        priority
                        sizes="(max-width: 1024px) 60vw, 30vw"
                        className="h-full w-auto object-contain object-bottom"
                    />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 z-20">
                    <SertaoFrente />
                </div>
            </div>
        </section>
    )
}
