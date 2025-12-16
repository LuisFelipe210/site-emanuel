"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
    {
        question: "Trabalhei na roça mas nunca paguei INSS. Posso me aposentar?",
        answer: "Com certeza! O trabalhador rural (segurado especial) tem direito a se aposentar 5 anos mais cedo (60 anos homem / 55 anos mulher) sem precisar ter pago o carnê mensal. O que vale é comprovar o tempo de trabalho no campo com documentos (notas, certidões de casamento/nascimento, contratos), e nós te ajudamos a reunir toda essa prova.",
    },
    {
        question: "O INSS negou meu pedido. Ainda tem jeito?",
        answer: "Sim! A negativa do INSS é muito comum, muitas vezes por falha na análise administrativa. Nós analisamos o motivo da recusa e entramos com recurso administrativo ou ação judicial para reverter essa decisão e garantir seu direito, inclusive com pagamentos retroativos.",
    },
    {
        question: "Quanto tempo demora para sair a aposentadoria?",
        answer: "Depende do tipo de benefício e se será resolvido no administrativo (INSS) ou na justiça. Um processo administrativo pode levar de 3 a 6 meses, enquanto judicial pode variar. Na consulta, analisamos a média de tempo para o seu caso específico.",
    },
    {
        question: "Preciso pagar algo antes de começar?",
        answer: "Trabalhamos com transparência total. Para a maioria dos benefícios previdenciários, trabalhamos com contratos de êxito (pagamento ao final, se ganhar) ou taxas de análise inicial claras. Tudo será explicado antes de assinarmos qualquer coisa.",
    },
    {
        question: "Atende pessoas de outros estados?",
        answer: "Sim. O processo previdenciário hoje é 100% digital (Meu INSS e PJE). Atendemos clientes de todo o Brasil através de videochamadas e WhatsApp, com a mesma segurança de um atendimento presencial.",
    },
]

export default function FAQ() {
    return (
        <section id="faq" className="py-24 bg-background relative overflow-hidden">

            {/* Elemento de fundo pra dar aquela textura */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                {/* Cabeçalho no padrão do site */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] w-12 bg-primary/30"></div>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary/80">
                            Tire suas Dúvidas
                        </span>
                        <div className="h-[2px] w-12 bg-primary/30"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto">
                        Aposentadoria não precisa ser um bicho de sete cabeças. Entenda como funciona.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-card border border-border/60 rounded-xl px-2 shadow-sm transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:bg-secondary/10"
                        >
                            <AccordionTrigger className="text-left py-5 px-4 hover:no-underline group">
                                <div className="flex gap-4 items-center w-full">
                                    <span className="font-mono text-primary/40 font-bold text-lg group-hover:text-primary transition-colors">
                                        0{index + 1}
                                    </span>
                                    <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                                        {faq.question}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 px-4 pl-[3.5rem]">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Box de "Ainda tenho dúvida" */}
                <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
                    <p className="text-foreground font-medium mb-2">Ainda ficou com alguma dúvida?</p>
                    <p className="text-sm text-muted-foreground mb-4">Nossa equipe está pronta para analisar seu caso individualmente.</p>
                    <a href="https://wa.me/5587996128608" target="_blank" className="text-primary font-bold hover:underline underline-offset-4 decoration-2">
                        Chamar no WhatsApp agora &rarr;
                    </a>
                </div>
            </div>
        </section>
    )
}