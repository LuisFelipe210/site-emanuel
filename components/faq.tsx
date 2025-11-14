"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Movido o array para fora do componente para melhor performance
const faqs = [
    {
        question: "Como posso agendar uma consulta?",
        answer:
            "Você pode agendar uma consulta entrando em contato diretamente pelo WhatsApp (clicando no botão flutuante), telefone ou preenchendo o formulário na seção 'Contato' do site. Responderei o mais breve possível para marcarmos o melhor horário.",
    },
    {
        question: "Quais são suas principais áreas de atuação?",
        answer:
            "Minha atuação é focada principalmente em Direito Civil, Direito Empresarial, Direito Trabalhista e Contratos. Você pode ver mais detalhes na seção 'Serviços'.",
    },
    {
        question: "Quanto custa uma consulta inicial?",
        answer:
            "A consulta inicial é o momento para analisarmos seu caso e definirmos a melhor estratégia. Os valores são definidos com base na complexidade da demanda. Entre em contato para mais informações.",
    },
    {
        question: "Você atende apenas em Campo Formoso (BA)?",
        answer:
            "Não. Embora meu escritório esteja baseado em Campo Formoso, na Bahia, eu ofereço consultoria e atuação jurídica para clientes em todo o território nacional, utilizando ferramentas digitais para garantir um atendimento ágil e eficiente.",
    },
]

export default function FAQ() {
    return (
        <section
            id="faq"
            className="py-16 md:py-24 bg-background text-foreground"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* --- NOVO LAYOUT EM GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">

                    {/* --- COLUNA 1: TÍTULO E DESCRIÇÃO --- */}
                    <div className="lg:col-span-1 text-center lg:text-left animate-in fade-in-0 slide-in-from-left-8 duration-700">
                        <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                            Tire Suas Dúvidas
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
                            Perguntas Frequentes
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                            Respostas para as dúvidas mais comuns sobre meus serviços jurídicos.
                        </p>
                    </div>

                    {/* --- COLUNA 2: LISTA DE PERGUNTAS (ACCORDION) --- */}
                    <div className="lg:col-span-2 animate-in fade-in-0 slide-in-from-right-8 duration-700">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    // MUDANÇA: Troquei 'bg-card/80' por 'bg-muted' para um visual mais suave
                                    className="border border-border bg-muted rounded-xl px-6 transition-[box-shadow,border-color] duration-300 hover:shadow-primary/20"
                                >
                                    <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pt-0 pb-5">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}