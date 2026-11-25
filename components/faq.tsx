"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { waLink } from "@/lib/contato"
import { faqs } from "@/lib/faqs"


export default function FAQ() {
    return (
        <section id="faq" className="bg-cal py-20 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
                {/* título fixo enquanto as perguntas rolam */}
                <div className="lg:sticky lg:top-28">
                    <h2 className="font-largo text-[2rem] uppercase leading-[1.02] text-azul sm:text-5xl lg:text-[2.5rem] xl:text-[2.75rem]">
                        Perguntas frequentes
                    </h2>
                    <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground">
                        Aposentadoria não precisa ser um bicho de sete cabeças. Entenda como funciona.
                    </p>
                </div>

                <div>
                    <Accordion.Root type="single" collapsible className="border-t-2 border-azul-noite">
                        {faqs.map((faq, i) => (
                            <Accordion.Item key={i} value={`item-${i}`} className="group border-b border-border">
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex w-full items-start justify-between gap-6 py-6 text-left">
                                        <span className="font-semilargo text-xl font-bold leading-snug text-azul-noite transition-colors group-hover:text-azul sm:text-[1.35rem]">
                                            {faq.question}
                                        </span>
                                        {/* + que vira − ao abrir */}
                                        <span className="relative mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-azul text-azul transition-colors group-data-[state=open]:bg-azul group-data-[state=open]:text-white">
                                            <span className="absolute h-0.5 w-3.5 bg-current" />
                                            <span className="absolute h-3.5 w-0.5 bg-current transition-transform duration-300 group-data-[state=open]:scale-y-0" />
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                    <p className="max-w-[40rem] pb-7 pr-12 text-lg leading-relaxed text-muted-foreground">{faq.answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>

                    <p className="mt-10 text-lg text-azul-noite">
                        Ainda ficou com alguma dúvida?{" "}
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-azul underline decoration-ouro decoration-2 hover:text-azul-noite"
                        >
                            Chamar no WhatsApp agora
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
