import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { IconeTraco, type IconeNome } from "@/components/icones-traco"
import { waLink } from "@/lib/contato"

const services: { slug: string; icone: IconeNome; title: string; description: string; cta: string; destaque?: boolean }[] = [
    {
        icone: "rural",
        slug: "aposentadoria-rural",
        title: "Aposentadoria Rural",
        description: "Trabalhou na roça, pesca ou agricultura familiar? Aposente-se 5 anos mais cedo.",
        cta: "Sou trabalhador rural",
        destaque: true,
    },
    {
        icone: "idade",
        slug: "aposentadoria-por-idade",
        title: "Aposentadoria por Idade",
        description: "Completou a idade (62 mulher / 65 homem) e o INSS negou? Vamos destravar seu benefício.",
        cta: "Quero me aposentar",
    },
    {
        icone: "bpc",
        slug: "bpc-loas",
        title: "BPC / LOAS",
        description: "Benefício de um salário mínimo para idosos (+65) ou PCDs. Não precisa ter contribuído.",
        cta: "Tenho direito?",
    },
    {
        icone: "doenca",
        slug: "auxilio-doenca-e-invalidez",
        title: "Auxílio-doença / Invalidez",
        description: "Está incapaz de trabalhar e o perito negou? Lutamos para reverter a decisão.",
        cta: "Pedir análise",
    },
    {
        icone: "revisao",
        slug: "revisao-de-beneficio",
        title: "Revisão de Benefício",
        description: "Recebe menos do que deveria? Analisamos se houve erro de cálculo do INSS.",
        cta: "Revisar valor",
    },
    {
        icone: "planejamento",
        slug: "planejamento-previdenciario",
        title: "Planejamento Previdenciário",
        description: "Não se aposente no escuro. Calculamos o melhor momento para você não perder dinheiro.",
        cta: "Fazer simulação",
    },
]

export default function Services() {
    return (
        <section id="servicos" className="relative bg-white py-20 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32">
                        <h2 className="font-largo text-[2rem] uppercase leading-[1.02] text-azul sm:text-5xl">
                            Qual é o seu caso?
                        </h2>
                        <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground">
                            Toque no seu caso para entender as regras, ou fale direto pelo WhatsApp, que já abre com o
                            assunto escrito.
                        </p>
                        <a
                            href={waLink("Tenho um caso diferente, pode me ajudar?")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 hidden text-lg font-bold text-azul underline decoration-ouro decoration-2 hover:text-azul-noite lg:inline-block"
                        >
                            Não encontrou o seu caso? Fale com o Dr. Emanuel
                        </a>
                    </div>
                </div>

                <ul className="lg:col-span-8">
                    {services.map((s) => (
                        <li key={s.title} className={s.destaque ? "mb-4" : "border-t border-border last:border-b"}>
                            {/* a linha inteira leva à página do benefício; o botão da direita abre o WhatsApp */}
                            <div
                                className={`group relative grid grid-cols-[3rem_1fr] gap-x-5 gap-y-3 overflow-hidden px-4 py-7 sm:grid-cols-[3.5rem_1fr_auto] sm:items-center sm:px-6 ${
                                    s.destaque ? "rounded-md bg-azul-noite text-white" : "text-azul-noite"
                                }`}
                            >
                                {!s.destaque && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 origin-bottom scale-y-0 bg-azul transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                                    />
                                )}
                                <IconeTraco
                                    nome={s.icone}
                                    className={`relative row-span-2 size-12 sm:row-span-1 sm:size-14 ${
                                        s.destaque ? "text-ouro" : "text-azul transition-colors duration-300 group-hover:text-ouro-claro"
                                    }`}
                                />
                                <div className="relative">
                                    <h3
                                        className={`font-semilargo text-xl font-extrabold leading-tight sm:text-2xl ${
                                            s.destaque ? "" : "transition-colors duration-300 group-hover:text-white"
                                        }`}
                                    >
                                        <Link href={`/beneficios/${s.slug}`} className="after:absolute after:inset-0 after:content-['']">
                                            {s.title}
                                        </Link>
                                    </h3>
                                    <p
                                        className={`mt-1.5 max-w-[34rem] text-base leading-relaxed sm:text-[1.0625rem] ${
                                            s.destaque
                                                ? "text-azul-nevoa"
                                                : "text-muted-foreground transition-colors duration-300 group-hover:text-azul-nevoa"
                                        }`}
                                    >
                                        {s.description}
                                    </p>
                                    <span
                                        className={`mt-2 inline-flex items-center gap-1 text-base font-bold underline decoration-2 underline-offset-4 ${
                                            s.destaque
                                                ? "text-white decoration-ouro"
                                                : "text-azul decoration-ouro transition-colors duration-300 group-hover:text-white"
                                        }`}
                                    >
                                        Entender as regras
                                        <ArrowUpRight className="size-4" aria-hidden="true" />
                                    </span>
                                </div>
                                <a
                                    href={waLink(`Olá, gostaria de saber mais sobre ${s.title}`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`relative z-10 col-start-2 inline-flex h-12 items-center justify-center gap-2 justify-self-start rounded-md px-4 text-base font-bold transition-colors sm:col-start-3 sm:justify-self-end sm:whitespace-nowrap ${
                                        s.destaque
                                            ? "bg-ouro text-azul-noite hover:bg-ouro-claro"
                                            : "bg-azul-nevoa text-azul hover:bg-white group-hover:bg-white"
                                    }`}
                                >
                                    <FaWhatsapp className="size-5" aria-hidden="true" />
                                    {s.cta}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>

                <a
                    href={waLink("Tenho um caso diferente, pode me ajudar?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mt-4 text-lg font-bold text-azul underline decoration-ouro decoration-2 lg:hidden"
                >
                    Não encontrou o seu caso? Fale com o Dr. Emanuel
                </a>
            </div>
        </section>
    )
}
