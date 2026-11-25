"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, RotateCcw } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { IconeTraco, type IconeNome } from "@/components/icones-traco"
import { waLink } from "@/lib/contato"

/*
 * "Tenho direito?": 4 perguntas curtas que apontam o benefício mais provável,
 * calculam quando a pessoa atinge a idade mínima e abrem o WhatsApp com o resumo pronto.
 * É uma orientação inicial (regras gerais do INSS), não uma promessa de resultado.
 */

type Situacao = "rural" | "urbano" | "bpc" | "doenca" | "revisao"
type Sexo = "mulher" | "homem"
type Negativa = "negou" | "nao-pediu" | "recebe"

const situacoes: { id: Situacao; icone: IconeNome; titulo: string; detalhe: string }[] = [
    { id: "rural", icone: "rural", titulo: "Trabalhou na roça", detalhe: "Lavoura, pesca ou agricultura familiar" },
    { id: "urbano", icone: "idade", titulo: "Trabalhou na cidade", detalhe: "Com carteira assinada ou pagando o carnê" },
    { id: "bpc", icone: "bpc", titulo: "Nunca contribuiu", detalhe: "Tem 65 anos ou mais, ou alguma deficiência" },
    { id: "doenca", icone: "doenca", titulo: "Está doente", detalhe: "E não consegue trabalhar" },
    { id: "revisao", icone: "revisao", titulo: "Já recebe benefício", detalhe: "Mas acha que o valor está errado" },
]

// Regras gerais de idade mínima (o tempo de trabalho/contribuição é avaliado na análise)
const idadeMinima: Partial<Record<Situacao, Record<Sexo, number>>> = {
    rural: { mulher: 55, homem: 60 },
    urbano: { mulher: 62, homem: 65 },
    bpc: { mulher: 65, homem: 65 },
}

const beneficio: Record<Situacao, { nome: string; regra: string }> = {
    rural: {
        nome: "Aposentadoria Rural",
        regra: "Precisa ter a idade mínima e comprovar 15 anos de trabalho no campo, mesmo sem ter pago o INSS.",
    },
    urbano: {
        nome: "Aposentadoria por Idade",
        regra: "Precisa ter a idade mínima e o tempo mínimo de contribuição (em geral, 15 anos para mulheres e de 15 a 20 anos para homens).",
    },
    bpc: {
        nome: "BPC / LOAS",
        regra: "Um salário mínimo por mês para idosos a partir de 65 anos ou pessoas com deficiência de família de baixa renda. Não precisa ter contribuído.",
    },
    doenca: {
        nome: "Auxílio-doença ou Aposentadoria por Invalidez",
        regra: "Depende da perícia confirmar que a doença impede o trabalho e de a pessoa estar coberta pelo INSS quando adoeceu.",
    },
    revisao: {
        nome: "Revisão de Benefício",
        regra: "Analisamos a carta de concessão e o cálculo do INSS para ver se o valor pago está abaixo do devido.",
    },
}

const fmt = (d: Date) => d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })

function idadeEm(nasc: Date, hoje: Date) {
    let anos = hoje.getFullYear() - nasc.getFullYear()
    const m = hoje.getMonth() - nasc.getMonth()
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) anos--
    return anos
}

function Opcao({ ativo, onClick, children }: { ativo?: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={ativo}
            className={`group flex min-h-16 w-full items-center gap-4 rounded-md border-2 px-5 py-4 text-left text-lg font-bold transition-colors ${
                ativo
                    ? "border-azul bg-azul text-white"
                    : "border-border bg-white text-azul-noite hover:border-azul hover:bg-azul-nevoa/40"
            }`}
        >
            {children}
        </button>
    )
}

export default function QuizDireito() {
    const [passo, setPasso] = useState(0)
    const [paraQuem, setParaQuem] = useState<"mim" | "familiar" | null>(null)
    const [situacao, setSituacao] = useState<Situacao | null>(null)
    const [sexo, setSexo] = useState<Sexo | null>(null)
    const [nasc, setNasc] = useState({ dia: "", mes: "", ano: "" })
    const [negativa, setNegativa] = useState<Negativa | null>(null)
    const [erroData, setErroData] = useState("")

    const precisaIdade = situacao ? Boolean(idadeMinima[situacao]) : false
    const totalPassos = precisaIdade ? 5 : 4

    const dataNasc = useMemo(() => {
        const d = Number(nasc.dia), m = Number(nasc.mes), a = Number(nasc.ano)
        if (!d || !m || !a || nasc.ano.length !== 4) return null
        const data = new Date(a, m - 1, d)
        if (data.getDate() !== d || data.getMonth() !== m - 1 || data > new Date() || a < 1900) return null
        return data
    }, [nasc])

    const resultadoIdade = useMemo(() => {
        if (!situacao || !sexo || !dataNasc) return null
        const minima = idadeMinima[situacao]?.[sexo]
        if (!minima) return null
        const hoje = new Date()
        const idade = idadeEm(dataNasc, hoje)
        const quando = new Date(dataNasc.getFullYear() + minima, dataNasc.getMonth(), dataNasc.getDate())
        return { idade, minima, quando, jaTem: idade >= minima }
    }, [situacao, sexo, dataNasc])

    const avancar = () => setPasso((p) => p + 1)
    const voltar = () => setPasso((p) => Math.max(0, p - 1))
    const recomecar = () => {
        setPasso(0); setParaQuem(null); setSituacao(null); setSexo(null)
        setNasc({ dia: "", mes: "", ano: "" }); setNegativa(null); setErroData("")
    }

    const pessoa = paraQuem === "familiar" ? "a pessoa" : "você"

    const mensagem = () => {
        if (!situacao) return ""
        const linhas = [
            "Olá! Fiz o teste \"Tenho direito?\" no site.",
            `Consulta: ${paraQuem === "familiar" ? "para um familiar" : "para mim"}`,
            `Situação: ${situacoes.find((s) => s.id === situacao)?.titulo}`,
            `Benefício indicado: ${beneficio[situacao].nome}`,
        ]
        if (sexo && dataNasc) linhas.push(`Nascimento: ${fmt(dataNasc)} (${sexo})`)
        if (negativa)
            linhas.push(`INSS: ${negativa === "negou" ? "já negou o pedido" : negativa === "recebe" ? "já recebe benefício" : "ainda não pediu"}`)
        linhas.push("Quero uma análise do caso.")
        return linhas.join("\n")
    }

    // Passos: 0 para quem · 1 situação · 2 sexo+nascimento (só se precisa de idade) · 3 INSS · 4 resultado
    const passoReal = !precisaIdade && passo >= 2 ? passo + 1 : passo
    const ehResultado = passoReal === 4

    return (
        <section id="tenho-direito" className="relative overflow-hidden bg-azul-nevoa/50 py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
                <div className="lg:sticky lg:top-28">
                    <h2 className="font-largo text-[2rem] uppercase leading-[1.02] text-azul sm:text-5xl lg:text-[2.5rem] xl:text-5xl">Tenho direito?</h2>
                    <p className="mt-5 max-w-sm text-lg leading-relaxed text-azul-noite/80">
                        Responda até 4 perguntas rápidas e veja qual benefício pode ser o seu e quando a idade mínima
                        chega. Serve também para pesquisar por um pai, mãe ou avô.
                    </p>
                    <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        É uma orientação inicial com base nas regras gerais do INSS. Não garante o benefício: cada caso depende
                        dos documentos e da análise do advogado.
                    </p>
                </div>

                <div>
                    <div className="rounded-md bg-white p-6 shadow-[0_24px_48px_-32px_rgba(13,27,69,0.45)] sm:p-10">
                        {/* trilha de progresso */}
                        {!ehResultado && (
                            <div className="mb-8 flex items-center gap-4">
                                <div className="h-2 flex-1 overflow-hidden rounded-full bg-azul-nevoa">
                                    <motion.div
                                        className="h-full rounded-full bg-ouro"
                                        animate={{ width: `${((passo + 1) / totalPassos) * 100}%` }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </div>
                                <span className="tabular text-sm font-bold text-muted-foreground">
                                    {passo + 1} de {totalPassos - 1}
                                </span>
                            </div>
                        )}

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={passoReal}
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -24 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {passoReal === 0 && (
                                    <fieldset>
                                        <legend className="font-semilargo text-2xl font-extrabold text-azul-noite">Para quem é a consulta?</legend>
                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                            <Opcao ativo={paraQuem === "mim"} onClick={() => { setParaQuem("mim"); avancar() }}>Para mim</Opcao>
                                            <Opcao ativo={paraQuem === "familiar"} onClick={() => { setParaQuem("familiar"); avancar() }}>Para um familiar</Opcao>
                                        </div>
                                    </fieldset>
                                )}

                                {passoReal === 1 && (
                                    <fieldset>
                                        <legend className="font-semilargo text-2xl font-extrabold text-azul-noite">
                                            Qual frase combina mais com {pessoa === "você" ? "você" : "a pessoa"}?
                                        </legend>
                                        <div className="mt-6 grid gap-3">
                                            {situacoes.map((s) => (
                                                <Opcao key={s.id} ativo={situacao === s.id} onClick={() => { setSituacao(s.id); avancar() }}>
                                                    <IconeTraco
                                                        nome={s.icone}
                                                        className={`size-10 shrink-0 ${situacao === s.id ? "text-ouro-claro" : "text-azul"}`}
                                                    />
                                                    <span>
                                                        <span className="block">{s.titulo}</span>
                                                        <span className={`block text-base font-normal ${situacao === s.id ? "text-azul-nevoa" : "text-muted-foreground"}`}>
                                                            {s.detalhe}
                                                        </span>
                                                    </span>
                                                </Opcao>
                                            ))}
                                        </div>
                                    </fieldset>
                                )}

                                {passoReal === 2 && (
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            if (!sexo) return setErroData("Escolha mulher ou homem.")
                                            if (!dataNasc) return setErroData("Confira a data: dia, mês e ano com 4 números (ex.: 12 / 03 / 1968).")
                                            setErroData("")
                                            avancar()
                                        }}
                                    >
                                        <fieldset>
                                            <legend className="font-semilargo text-2xl font-extrabold text-azul-noite">
                                                {pessoa === "você" ? "Você é" : "A pessoa é"}
                                            </legend>
                                            <div className="mt-6 grid grid-cols-2 gap-3">
                                                <Opcao ativo={sexo === "mulher"} onClick={() => setSexo("mulher")}>Mulher</Opcao>
                                                <Opcao ativo={sexo === "homem"} onClick={() => setSexo("homem")}>Homem</Opcao>
                                            </div>
                                        </fieldset>
                                        <fieldset className="mt-8">
                                            <legend className="font-semilargo text-2xl font-extrabold text-azul-noite">Data de nascimento</legend>
                                            <div className="mt-4 grid grid-cols-[1fr_1fr_1.4fr] gap-3">
                                                {([
                                                    ["dia", "Dia", "12", 2],
                                                    ["mes", "Mês", "03", 2],
                                                    ["ano", "Ano", "1968", 4],
                                                ] as const).map(([campo, rotulo, ex, max]) => (
                                                    <label key={campo} className="grid gap-1.5">
                                                        <span className="text-base font-bold text-azul-noite">{rotulo}</span>
                                                        <input
                                                            inputMode="numeric"
                                                            pattern="[0-9]*"
                                                            maxLength={max}
                                                            placeholder={ex}
                                                            value={nasc[campo]}
                                                            onChange={(e) => setNasc((n) => ({ ...n, [campo]: e.target.value.replace(/\D/g, "") }))}
                                                            className="tabular h-16 w-full rounded-md border-2 border-input bg-white px-4 text-center text-2xl font-bold text-azul-noite placeholder:font-normal placeholder:text-muted-foreground/50 focus:border-azul focus:outline-none"
                                                        />
                                                    </label>
                                                ))}
                                            </div>
                                        </fieldset>
                                        {erroData && <p className="mt-4 text-base font-bold text-destructive" role="alert">{erroData}</p>}
                                        <button
                                            type="submit"
                                            className="mt-8 h-16 w-full rounded-md bg-azul text-lg font-bold text-white transition-colors hover:bg-azul-noite sm:w-auto sm:px-10"
                                        >
                                            Continuar
                                        </button>
                                    </form>
                                )}

                                {passoReal === 3 && (
                                    <fieldset>
                                        <legend className="font-semilargo text-2xl font-extrabold text-azul-noite">E o INSS?</legend>
                                        <div className="mt-6 grid gap-3">
                                            <Opcao ativo={negativa === "negou"} onClick={() => { setNegativa("negou"); avancar() }}>Já pedi e o INSS negou</Opcao>
                                            <Opcao ativo={negativa === "nao-pediu"} onClick={() => { setNegativa("nao-pediu"); avancar() }}>Ainda não pedi</Opcao>
                                            {situacao === "revisao" && (
                                                <Opcao ativo={negativa === "recebe"} onClick={() => { setNegativa("recebe"); avancar() }}>Já recebo, quero revisar</Opcao>
                                            )}
                                        </div>
                                    </fieldset>
                                )}

                                {ehResultado && situacao && (
                                    <div>
                                        <p className="text-base font-bold text-muted-foreground">O benefício que mais combina</p>
                                        <h3 className="mt-1 font-largo text-[1.7rem] uppercase leading-tight text-azul sm:text-4xl">
                                            {beneficio[situacao].nome}
                                        </h3>
                                        <p className="mt-4 max-w-[40rem] text-lg leading-relaxed text-azul-noite/85">{beneficio[situacao].regra}</p>

                                        {resultadoIdade && (
                                            <div className="mt-6 flex items-center gap-5 rounded-md bg-azul-noite p-5 text-white sm:p-6">
                                                <span className="tabular font-largo text-5xl leading-none text-ouro">{resultadoIdade.idade}</span>
                                                <p className="text-lg leading-snug">
                                                    {resultadoIdade.jaTem ? (
                                                        <>
                                                            anos hoje. {pessoa === "você" ? "Você já tem" : "A pessoa já tem"} a idade mínima de{" "}
                                                            <strong className="text-ouro-claro">{resultadoIdade.minima} anos</strong> desde{" "}
                                                            <strong className="tabular text-ouro-claro">{fmt(resultadoIdade.quando)}</strong>.
                                                        </>
                                                    ) : (
                                                        <>
                                                            anos hoje. A idade mínima de <strong className="text-ouro-claro">{resultadoIdade.minima} anos</strong> chega em{" "}
                                                            <strong className="tabular text-ouro-claro">{fmt(resultadoIdade.quando)}</strong>. Dá para se
                                                            preparar desde já.
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                        )}

                                        {negativa === "negou" && (
                                            <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-azul-noite">
                                                <strong>O INSS negou?</strong> A negativa não é o fim: dá para entrar com recurso ou ação na
                                                Justiça, inclusive pedindo os atrasados.
                                            </p>
                                        )}

                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                                            <a
                                                href={waLink(mensagem())}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex h-16 items-center justify-center gap-3 rounded-md bg-azul px-7 text-lg font-bold text-white transition-colors hover:bg-azul-noite"
                                            >
                                                <FaWhatsapp className="size-6 text-ouro-claro" aria-hidden="true" />
                                                Enviar meu resultado no WhatsApp
                                            </a>
                                            <button
                                                type="button"
                                                onClick={recomecar}
                                                className="inline-flex items-center gap-2 self-start py-2 text-base font-bold text-azul hover:text-azul-noite sm:self-auto"
                                            >
                                                <RotateCcw className="size-4" aria-hidden="true" />
                                                Refazer o teste
                                            </button>
                                        </div>
                                        <p className="mt-6 text-sm text-muted-foreground">
                                            A mensagem já vai escrita com suas respostas. Você só confirma o envio.
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {passo > 0 && !ehResultado && (
                            <button
                                type="button"
                                onClick={voltar}
                                className="mt-8 inline-flex items-center gap-2 py-2 text-base font-bold text-azul hover:text-azul-noite"
                            >
                                <ArrowLeft className="size-4" aria-hidden="true" />
                                Voltar
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
