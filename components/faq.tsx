"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle, Scale, DollarSign, MapPin, Sparkles, ArrowRight } from "lucide-react"

const faqs = [
    {
        question: "Como posso agendar uma consulta?",
        answer:
            "Você pode agendar uma consulta entrando em contato diretamente pelo WhatsApp (clicando no botão flutuante), telefone ou preenchendo o formulário na seção 'Contato' do site. Responderei o mais breve possível para marcarmos o melhor horário.",
        icon: MessageCircle,
    },
    {
        question: "Quais são suas principais áreas de atuação?",
        answer:
            "Minha atuação é focada principalmente em Direito Civil, Direito Empresarial, Direito Trabalhista e Contratos. Você pode ver mais detalhes na seção 'Serviços'.",
        icon: Scale,
    },
    {
        question: "Quanto custa uma consulta inicial?",
        answer:
            "A consulta inicial é o momento para analisarmos seu caso e definirmos a melhor estratégia. Os valores são definidos com base na complexidade da demanda. Entre em contato para mais informações.",
        icon: DollarSign,
    },
    {
        question: "Você atende apenas em Campo Formoso (BA)?",
        answer:
            "Não. Embora meu escritório esteja baseado em Campo Formoso, na Bahia, eu ofereço consultoria e atuação jurídica para clientes em todo o território nacional, utilizando ferramentas digitais para garantir um atendimento ágil e eficiente.",
        icon: MapPin,
    },
]

export default function FAQ() {
    return (
        <section
            id="faq"
            className="relative py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background text-foreground overflow-hidden"
        >
            {/* Efeito de pattern sutil no fundo */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.01] dark:opacity-[0.03]" />

            {/* Gradientes decorativos */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">

                    {/* COLUNA 1: TÍTULO E DESCRIÇÃO */}
                    <div className="lg:col-span-1 text-center lg:text-left lg:sticky lg:top-24 animate-in fade-in-0 slide-in-from-left-8 duration-700">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4">
                            <Sparkles className="size-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">
                                Tire Suas Dúvidas
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
                            Perguntas Frequentes
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Respostas claras e diretas para as dúvidas mais comuns sobre meus serviços jurídicos.
                        </p>

                        {/* Cards de destaque */}
                        <div className="hidden lg:block mt-12 space-y-3">
                            <div className="group flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <span className="text-sm font-medium text-foreground">Atendimento Personalizado</span>
                            </div>
                            <div className="group flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <span className="text-sm font-medium text-foreground">Respostas Rápidas</span>
                            </div>
                            <div className="group flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <span className="text-sm font-medium text-foreground">Consultoria Transparente</span>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 2: LISTA DE PERGUNTAS (ACCORDION) */}
                    {/* === MUDANÇA AQUI: Removido o 'pb-8' === */}
                    <div className="lg:col-span-2 animate-in fade-in-0 slide-in-from-right-8 duration-700">
                        <Accordion type="single" collapsible className="w-full space-y-4 pb-2">
                            {faqs.map((faq, index) => {
                                const Icon = faq.icon
                                return (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="group relative border-2 border-border bg-background/80 backdrop-blur-sm rounded-2xl px-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1 overflow-hidden"
                                    >
                                        {/* Gradiente de fundo no hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Linha decorativa no topo */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                                        <AccordionTrigger className="relative text-left text-base md:text-lg font-semibold text-foreground hover:no-underline py-6 group-hover:text-primary transition-colors duration-300">
                                            <div className="flex items-start gap-4 pr-4">
                                                {/* Ícone */}
                                                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                                    <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                                </div>

                                                {/* Pergunta */}
                                                <span className="flex-1">
                                                    {faq.question}
                                                </span>
                                            </div>
                                        </AccordionTrigger>

                                        <AccordionContent className="relative text-muted-foreground text-sm md:text-base leading-relaxed pt-0 pb-6 pl-16">
                                            {/* Linha conectora */}
                                            <div className="absolute left-6 top-0 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent rounded-full" />

                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>

                        {/* CTA adicional no final */}
                        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-center sm:text-left">
                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                                        Ainda tem dúvidas?
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Entre em contato para esclarecer suas questões
                                    </p>
                                </div>
                                <a
                                    href="#contato"
                                    className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 whitespace-nowrap"
                                >
                                    <span>Falar Agora</span>
                                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}