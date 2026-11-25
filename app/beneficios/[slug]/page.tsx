import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Horizonte from "@/components/horizonte"
import { IconeTraco } from "@/components/icones-traco"
import { beneficioPorSlug, beneficios } from "@/lib/beneficios"
import { waLink } from "@/lib/contato"
import { SITE_URL } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
    return beneficios.map((b) => ({ slug: b.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const b = beneficioPorSlug(slug)
    if (!b) return {}
    const url = `/beneficios/${b.slug}`
    return {
        title: b.tituloSeo,
        description: b.descricaoSeo,
        alternates: { canonical: url },
        openGraph: { title: b.tituloSeo, description: b.descricaoSeo, url, type: "article", locale: "pt_BR" },
    }
}

function Losango() {
    return (
        <svg viewBox="0 0 12 12" className="mt-2 size-3 shrink-0" aria-hidden="true">
            <path d="M6 0 12 6 6 12 0 6Z" fill="var(--ouro)" />
        </svg>
    )
}

export default async function PaginaBeneficio({ params }: Props) {
    const { slug } = await params
    const b = beneficioPorSlug(slug)
    if (!b) notFound()

    const url = `${SITE_URL}/beneficios/${b.slug}`
    const grafo = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${url}#servico`,
                name: b.nome,
                description: b.descricaoSeo,
                serviceType: "Advocacia previdenciária",
                provider: { "@id": `${SITE_URL}/#escritorio` },
                areaServed: { "@type": "Country", name: "Brasil" },
                url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: b.nome, item: url },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: b.faq.map((f) => ({
                    "@type": "Question",
                    name: f.pergunta,
                    acceptedAnswer: { "@type": "Answer", text: f.resposta },
                })),
            },
        ],
    }
    const outros = beneficios.filter((o) => o.slug !== b.slug)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo).replace(/</g, "\\u003c") }} />
            <Navigation />
            <main>
                {/* CABEÇALHO */}
                <section className="bg-cal pt-28 lg:pt-36">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <nav aria-label="Você está em" className="text-base text-muted-foreground">
                            <Link href="/" className="inline-flex items-center gap-1.5 font-bold text-azul hover:text-azul-noite">
                                <ArrowLeft className="size-4" aria-hidden="true" />
                                Início
                            </Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page">{b.nome}</span>
                        </nav>

                        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
                            <div className="lg:col-span-8">
                                <IconeTraco nome={b.icone} animar={false} className="size-14 text-ouro-escuro" />
                                <h1 className="mt-5 font-largo text-[clamp(1.55rem,7.4vw,2.1rem)] uppercase leading-[1.02] text-azul sm:text-5xl lg:text-6xl">
                                    {b.nome}
                                </h1>
                                <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-snug text-azul-noite lg:text-2xl">
                                    {b.chamada}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                                <a
                                    href={waLink(b.mensagemWhats)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-16 items-center justify-center gap-3 rounded-md bg-azul px-7 text-lg font-bold text-white transition-colors hover:bg-azul-noite"
                                >
                                    <FaWhatsapp className="size-6 text-ouro-claro" aria-hidden="true" />
                                    Falar com o advogado
                                </a>
                                <Link
                                    href="/#tenho-direito"
                                    className="self-start py-2 text-lg font-bold text-azul underline decoration-ouro decoration-2 hover:text-azul-noite lg:self-end"
                                >
                                    Fazer o teste “Tenho direito?”
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Horizonte className="mt-12 h-20 sm:h-28" />
                </section>

                {/* CONTEÚDO */}
                <section className="bg-white py-16 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
                        <div className="space-y-14 lg:col-span-7">
                            <p className="max-w-[40rem] text-xl leading-relaxed text-azul-noite">{b.resumo}</p>

                            <div>
                                <h2 className="font-semilargo text-2xl font-extrabold text-azul-noite sm:text-3xl">Quem tem direito</h2>
                                <ul className="mt-6 space-y-4">
                                    {b.quemTemDireito.map((item) => (
                                        <li key={item} className="flex gap-4 text-lg leading-relaxed text-azul-noite/85">
                                            <Losango />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-semilargo text-2xl font-extrabold text-azul-noite sm:text-3xl">
                                    Por que o INSS costuma negar
                                </h2>
                                <ul className="mt-6 space-y-4">
                                    {b.negativas.map((item) => (
                                        <li key={item} className="flex gap-4 text-lg leading-relaxed text-azul-noite/85">
                                            <Losango />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-azul-noite">
                                    <strong>A negativa não é o fim.</strong> Analisamos o motivo e entramos com recurso no INSS ou com
                                    ação na Justiça, inclusive pedindo os atrasados.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-semilargo text-2xl font-extrabold text-azul-noite sm:text-3xl">Perguntas frequentes</h2>
                                <div className="mt-6 border-t-2 border-azul-noite">
                                    {b.faq.map((f) => (
                                        <details key={f.pergunta} className="group border-b border-border">
                                            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                                                <span className="font-semilargo text-xl font-bold leading-snug text-azul-noite group-hover:text-azul">
                                                    {f.pergunta}
                                                </span>
                                                <span className="relative mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-azul text-azul group-open:bg-azul group-open:text-white">
                                                    <span className="absolute h-0.5 w-3.5 bg-current" />
                                                    <span className="absolute h-3.5 w-0.5 bg-current group-open:hidden" />
                                                </span>
                                            </summary>
                                            <p className="pb-6 pr-12 text-lg leading-relaxed text-muted-foreground">{f.resposta}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className="lg:col-span-5">
                            <div className="space-y-8 lg:sticky lg:top-28">
                                {b.documentos && (
                                    <div className="rounded-md bg-cal p-6 sm:p-8">
                                        <h2 className="font-semilargo text-2xl font-extrabold text-azul-noite">Documentos que ajudam</h2>
                                        <ul className="mt-5 space-y-3.5">
                                            {b.documentos.map((d) => (
                                                <li key={d} className="flex items-start gap-3 text-lg leading-snug text-azul-noite">
                                                    <svg viewBox="0 0 22 22" className="mt-0.5 size-5 shrink-0" aria-hidden="true">
                                                        <rect x={1} y={1} width={20} height={20} rx={3} fill="none" stroke="var(--azul)" strokeWidth={2} />
                                                        <path d="M5.5 11.5l3.6 3.6 7.4-8.2" fill="none" stroke="var(--ouro-escuro)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-5 text-base text-muted-foreground">
                                            Não tem tudo? Sem problema: na análise vemos o que dá para usar e o que falta.
                                        </p>
                                    </div>
                                )}

                                <div className="rounded-md bg-azul-noite p-6 text-azul-nevoa sm:p-8">
                                    <p className="font-semilargo text-2xl font-extrabold text-white">Quer saber se o seu caso tem chance?</p>
                                    <p className="mt-3 text-lg leading-relaxed">
                                        Conte o que aconteceu pelo WhatsApp. O Dr. Emanuel analisa e explica tudo sem juridiquês.
                                    </p>
                                    <a
                                        href={waLink(b.mensagemWhats)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex h-16 w-full items-center justify-center gap-3 rounded-md bg-ouro px-6 text-lg font-bold text-azul-noite transition-colors hover:bg-ouro-claro"
                                    >
                                        <FaWhatsapp className="size-6" aria-hidden="true" />
                                        Chamar no WhatsApp
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <p className="mx-auto mt-16 max-w-7xl px-5 text-sm leading-relaxed text-muted-foreground sm:px-8">
                        Informações gerais sobre as regras do INSS, que podem mudar. Não substituem a análise do seu caso nem
                        garantem a concessão do benefício.
                    </p>
                </section>

                {/* OUTROS BENEFÍCIOS */}
                <section className="bg-cal py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <h2 className="font-largo text-[1.7rem] uppercase leading-tight text-azul sm:text-4xl">Outros benefícios</h2>
                        <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
                            {outros.map((o) => (
                                <li key={o.slug} className="border-b border-border">
                                    <Link
                                        href={`/beneficios/${o.slug}`}
                                        className="group flex items-center gap-4 py-5 text-azul-noite hover:text-azul"
                                    >
                                        <IconeTraco nome={o.icone} animar={false} className="size-9 shrink-0 text-azul" />
                                        <span className="font-semilargo text-xl font-bold">{o.nome}</span>
                                        <ArrowUpRight className="ml-auto size-5 shrink-0 text-azul transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
