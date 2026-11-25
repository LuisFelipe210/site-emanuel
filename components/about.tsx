import Image from "next/image"
import SeloOAB from "@/components/selo-oab"

const valores = ["Ética inegociável", "Especialista em INSS", "Atuação combativa", "Foco no resultado"]

export default function About() {
    return (
        <section id="sobre" className="relative overflow-hidden bg-white py-20 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
                {/* FOTO sobre plano azul recortado */}
                <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
                    <div aria-hidden="true" className="absolute -bottom-5 -left-5 right-10 top-10 rounded-md bg-azul" />
                    <div aria-hidden="true" className="absolute -left-5 bottom-[38%] h-2 w-24 bg-ouro" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-azul-nevoa">
                        <Image
                            src="/manel2.png"
                            alt="Dr. Emanuel Silvestre em pé no escritório, apoiado na mesa"
                            fill
                            sizes="(max-width: 1024px) 90vw, 40vw"
                            className="object-cover object-top"
                        />
                    </div>
                    <SeloOAB className="absolute -bottom-10 -right-4 size-32 sm:size-36 lg:-right-10 lg:size-40" />
                </div>

                {/* TEXTO */}
                <div className="lg:col-span-7">
                    <h2 className="font-largo text-[2rem] uppercase leading-[1.02] text-azul sm:text-5xl">
                        Dr. Emanuel Silvestre
                    </h2>
                    <p className="mt-4 font-display text-xl font-medium leading-snug text-azul-noite lg:text-2xl">
                        A voz ativa na defesa dos seus direitos previdenciários.
                    </p>

                    <div className="mt-8 max-w-[38rem] space-y-5 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            A advocacia previdenciária exige mais do que conhecimento técnico nos livros; exige empatia,
                            combate e persistência.
                        </p>
                        <figure className="py-3">
                            <svg viewBox="0 0 40 30" className="mb-3 h-7 w-9 text-ouro" aria-hidden="true">
                                <path
                                    fill="currentColor"
                                    d="M0 30V17C0 7.5 5 1.8 14 0l2 4.2C10.6 6 8.4 9 8.2 13H15v17H0Zm23 0V17c0-9.5 5-15.2 14-17l2 4.2C33.6 6 31.4 9 31.2 13H38v17H23Z"
                                />
                            </svg>
                            <blockquote className="font-display text-2xl font-semibold leading-snug text-azul-noite lg:text-[1.75rem]">
                                Minha missão é clara: garantir que trabalhadores e segurados recebam cada centavo devido, sem
                                medo do INSS.
                            </blockquote>
                        </figure>
                        <p>
                            Com atuação focada em reverter negativas, ofereço um atendimento onde você sabe exatamente as
                            chances do seu processo.
                        </p>
                    </div>

                    <ul className="mt-9 grid max-w-[38rem] grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        {valores.map((v) => (
                            <li key={v} className="flex items-center gap-3 border-b border-border pb-3 text-lg font-bold text-azul-noite">
                                <svg viewBox="0 0 12 12" className="size-3 shrink-0" aria-hidden="true">
                                    <path d="M6 0 12 6 6 12 0 6Z" fill="var(--ouro)" />
                                </svg>
                                {v}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contato"
                        className="mt-10 inline-flex h-14 items-center rounded-md border-2 border-azul px-7 text-lg font-bold text-azul transition-colors hover:bg-azul hover:text-white"
                    >
                        Agendar conversa pessoal
                    </a>
                </div>
            </div>
        </section>
    )
}
