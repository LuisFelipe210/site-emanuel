"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import SeloOAB from "@/components/selo-oab"
import { waLink } from "@/lib/contato"

// Só fatos verificáveis; números de resultado ficam de fora até o cliente confirmar
const fatos = [
    "Campo Formoso (BA) e todo o Brasil",
    "Seg a sex, das 8h às 18h",
    "Conversa pelo WhatsApp, sem sair de casa",
]

/*
 * A confiança vem do rosto real e do registro na OAB, que abre a página como um
 * cartão de contato. O retrato fica num painel azul-noite sólido; a serra do
 * sertão aparece só como textura dentro dele, sem cenário ilustrado.
 */
export default function Hero() {
    return (
        <section id="home" className="relative isolate overflow-hidden bg-cal">
            <div className="mx-auto grid w-full max-w-7xl px-5 pt-24 sm:px-8 sm:pt-28 lg:min-h-[780px] lg:grid-cols-12 lg:gap-6 lg:pt-32">
                {/* TEXTO */}
                <div className="relative z-20 lg:col-span-7 lg:self-center lg:pb-32 xl:pb-36">
                    {/* Cartão de contato: rosto + nome + OAB, no formato de um contato do WhatsApp */}
                    <div className="flex items-center gap-3.5">
                        <span className="relative size-14 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-ouro ring-offset-2 ring-offset-cal lg:hidden">
                            <Image src="/emanuel-avatar.jpg" alt="" fill sizes="56px" priority className="object-cover" />
                        </span>
                        <span aria-hidden="true" className="hidden h-11 w-0.5 shrink-0 bg-ouro lg:block" />
                        <div className="leading-snug">
                            <p className="font-display text-lg font-bold text-azul-noite">Dr. Emanuel Silvestre</p>
                            <p className="text-[0.95rem] text-azul-noite/80">
                                Advogado previdenciário · <span className="whitespace-nowrap">OAB/BA 79.803</span>
                            </p>
                        </div>
                    </div>

                    <h1 className="mt-7 max-w-[46rem] text-[2.3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-azul-noite sm:text-[3.4rem] xl:text-[3.6rem]">
                        Benefício negado pelo INSS?{" "}
                        <span className="mt-1 block text-azul">
                            Ainda dá para{" "}
                            <span className="whitespace-nowrap underline decoration-ouro decoration-[0.07em] underline-offset-[0.14em]">
                                recorrer.
                            </span>
                        </span>
                    </h1>

                    <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-azul-noite/85 xl:text-xl">
                        A negativa não é o fim do caminho. Eu analiso o seu caso com atenção e explico tudo sem
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

                    <ul className="mt-8 grid gap-2.5 text-[0.95rem] text-azul-noite/85 sm:flex sm:flex-wrap sm:gap-x-6">
                        {fatos.map((fato) => (
                            <li key={fato} className="flex items-center gap-2.5">
                                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-ouro" />
                                {fato}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RETRATO: painel azul-noite com a serra como textura e o Emanuel recortado na frente.
                    Celular: bloco abaixo do texto. Desktop: metade direita, até a borda da tela. */}
                <div className="relative -mx-5 mt-12 h-[460px] sm:-mx-8 sm:h-[540px] lg:absolute lg:bottom-0 lg:right-0 lg:top-28 lg:mx-0 lg:mt-0 lg:h-auto lg:w-[42%]">
                    {/* Fio dourado acompanhando o painel pela esquerda (só no desktop) */}
                    <span aria-hidden="true" className="absolute -left-4 bottom-10 top-10 hidden w-px bg-ouro lg:block" />

                    <div className="absolute inset-0 overflow-hidden bg-azul-noite">
                        <svg
                            viewBox="0 0 600 260"
                            preserveAspectRatio="xMidYMax slice"
                            className="absolute inset-x-0 bottom-0 h-[46%] w-full"
                            aria-hidden="true"
                        >
                            <path
                                fill="var(--azul)"
                                fillOpacity={0.45}
                                d="M0 120 C60 96 110 84 170 100 C230 116 270 62 340 56 C410 50 450 98 520 92 C560 88 585 76 600 78 L600 260 L0 260 Z"
                            />
                            <path
                                fill="var(--azul)"
                                fillOpacity={0.8}
                                d="M0 176 C90 160 160 150 250 162 C340 174 400 138 480 140 C540 142 580 156 600 154 L600 260 L0 260 Z"
                            />
                            <path
                                fill="var(--azul-medio)"
                                fillOpacity={0.55}
                                d="M0 226 C120 218 260 214 380 222 C480 228 560 218 600 220 L600 260 L0 260 Z"
                            />
                        </svg>

                        {/* Posição fica no wrapper: o transform do framer-motion sobrescreveria o translate */}
                        <div className="absolute bottom-0 left-1/2 h-[94%] -translate-x-[42%]">
                            <motion.div
                                className="h-full"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Image
                                    src="/emanuel-recorte.webp"
                                    alt="Dr. Emanuel Silvestre, de blazer azul-marinho e braços cruzados, sorrindo"
                                    width={583}
                                    height={1078}
                                    priority
                                    sizes="(max-width: 1024px) 60vw, 26vw"
                                    className="h-full w-auto object-contain object-bottom"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Selo da OAB fazendo a ponte entre o texto e o painel */}
                    <SeloOAB className="absolute left-5 top-5 z-10 size-24 sm:size-28 lg:-left-14 lg:top-16 lg:size-32" />
                </div>
            </div>
        </section>
    )
}
