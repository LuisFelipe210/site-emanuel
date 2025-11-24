"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
        <section id="faq" className="py-20 bg-muted/50 text-foreground">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Dúvidas Frequentes</h2>
                    <p className="text-muted-foreground">
                        Entenda como funciona o processo e tire suas preocupações.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-background border border-border rounded-lg px-6 py-2 shadow-sm"
                        >
                            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4 text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}