"use client"

import { motion } from "framer-motion"
import { ArrowUp, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { EMAIL, INSTAGRAM, WHATSAPP_EXIBICAO, waLink } from "@/lib/contato"
import { beneficios } from "@/lib/beneficios"

const links = [
    { label: "Início", href: "/" },
    { label: "Áreas de atuação", href: "/#servicos" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Sobre o advogado", href: "/#sobre" },
    { label: "Dúvidas comuns", href: "/#faq" },
]

// Estrelas de quatro pontas, recortadas em dourado
const estrelas = [
    { x: 180, y: 60, s: 1 },
    { x: 420, y: 30, s: 0.7 },
    { x: 610, y: 82, s: 0.55 },
    { x: 1040, y: 40, s: 0.8 },
    { x: 1300, y: 96, s: 0.6 },
]

function SertaoNoite() {
    return (
        <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" className="block h-[140px] w-full sm:h-[200px]" aria-hidden="true">
            {/* Lua crescente */}
            <g transform="translate(1180 58)">
                <circle r={30} fill="var(--ouro)" />
                <circle cx={13} cy={-8} r={27} fill="#ffffff" />
            </g>
            {estrelas.map((e, i) => (
                <motion.path
                    key={i}
                    d="M0 -10 L2.4 -2.4 L10 0 L2.4 2.4 L0 10 L-2.4 2.4 L-10 0 L-2.4 -2.4 Z"
                    fill="var(--ouro)"
                    transform={`translate(${e.x} ${e.y}) scale(${e.s})`}
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                />
            ))}
            <path
                fill="var(--azul-claro)"
                d="M0 160 C140 130 230 110 340 128 C440 146 540 96 660 104 C780 112 840 150 960 142 C1080 134 1140 92 1260 100 C1350 106 1400 120 1440 118 L1440 220 L0 220 Z"
            />
            <path
                fill="var(--azul-medio)"
                d="M0 186 C180 168 320 158 480 170 C640 182 780 160 920 164 C1060 168 1200 190 1320 178 C1380 173 1420 170 1440 171 L1440 220 L0 220 Z"
            />
            <g fill="var(--azul-noite)" transform="translate(300 196) scale(0.5)">
                <rect x={-9} y={-124} width={18} height={126} rx={9} />
                <rect x={-36} y={-62} width={34} height={14} rx={7} />
                <rect x={-36} y={-98} width={14} height={50} rx={7} />
                <rect x={2} y={-84} width={32} height={14} rx={7} />
                <rect x={20} y={-122} width={14} height={52} rx={7} />
            </g>
            <path fill="var(--azul-noite)" d="M0 204 C300 196 700 200 1000 206 C1200 210 1360 204 1440 202 L1440 220 L0 220 Z" />
        </svg>
    )
}

export default function Footer() {
    const ano = new Date().getFullYear()

    return (
        <footer className="bg-white">
            <SertaoNoite />
            <div className="bg-azul-noite text-azul-nevoa">
                <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 lg:pt-16">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <a href="/" className="inline-flex items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/monograma.svg" alt="" className="h-10 w-auto" />
                                <span>
                                    <span className="block font-semilargo text-xl font-extrabold text-white">Emanuel Silvestre</span>
                                    <span className="block text-sm text-azul-claro">Advocacia Previdenciária</span>
                                </span>
                            </a>
                            <p className="mt-6 max-w-sm text-base leading-relaxed">
                                Compromisso ético e combatividade na defesa dos direitos previdenciários. Garantindo o
                                sustento de quem trabalhou a vida inteira.
                            </p>
                            <p className="tabular mt-5 inline-block rounded-sm border border-ouro/60 px-3 py-1.5 text-sm font-bold text-ouro-claro">
                                OAB/BA 79.803
                            </p>
                        </div>

                        <nav aria-label="Benefícios" className="lg:col-span-3">
                            <h2 className="font-display text-base font-bold text-white">Benefícios</h2>
                            <ul className="mt-5 space-y-3 text-base">
                                {beneficios.map((b) => (
                                    <li key={b.slug}>
                                        <a href={`/beneficios/${b.slug}`} className="transition-colors hover:text-ouro-claro">
                                            {b.nome}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav aria-label="Rodapé" className="lg:col-span-2">
                            <h2 className="font-display text-base font-bold text-white">Navegação</h2>
                            <ul className="mt-5 space-y-3 text-base">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <a href={l.href} className="transition-colors hover:text-ouro-claro">
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="lg:col-span-3">
                            <h2 className="font-display text-base font-bold text-white">Fale conosco</h2>
                            <ul className="mt-5 space-y-4 text-base">
                                <li className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 size-5 shrink-0 text-ouro" aria-hidden="true" />
                                    <span>
                                        Campo Formoso, BA
                                        <span className="block text-sm text-azul-claro">Atendimento em todo o Brasil</span>
                                    </span>
                                </li>
                                <li>
                                    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-ouro-claro">
                                        <Phone className="size-5 shrink-0 text-ouro" aria-hidden="true" />
                                        <span className="tabular">{WHATSAPP_EXIBICAO}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all hover:text-ouro-claro">
                                        <Mail className="size-5 shrink-0 text-ouro" aria-hidden="true" />
                                        {EMAIL}
                                    </a>
                                </li>
                                <li>
                                    <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-ouro-claro">
                                        <Instagram className="size-5 shrink-0 text-ouro" aria-hidden="true" />
                                        @emanuelsilvestre.adv
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="mt-14 max-w-4xl border-t border-white/15 pt-8 text-sm leading-relaxed text-azul-claro">
                        Este site tem caráter meramente informativo e não substitui a consulta jurídica. Não possuímos
                        vínculo com o Instituto Nacional do Seguro Social (INSS). O advogado atua na defesa dos interesses
                        do cliente conforme a legislação vigente e o Código de Ética da OAB, não prometendo resultado de
                        causa, visto que a decisão final cabe ao Poder Judiciário ou Administrativo.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 text-sm text-azul-claro sm:flex-row sm:items-center sm:justify-between">
                        <p>&copy; {ano} Emanuel Silvestre Advocacia. Todos os direitos reservados.</p>
                        <div className="flex items-center gap-6">
                            <button
                                type="button"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-ouro-claro"
                            >
                                Voltar ao topo <ArrowUp className="size-4" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
