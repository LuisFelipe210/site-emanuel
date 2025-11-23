"use client"

import { useState } from "react"
import { Baby, Banknote, HeartPulse, FileClock, ArrowRight, HandCoins } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Ícones e textos focados em PREVIDENCIÁRIO
const services = [
    {
        icon: FileClock,
        title: "Aposentadorias",
        description: "Análise completa para garantir o melhor benefício possível pelo INSS.",
        details: "Realizamos o planejamento previdenciário para identificar o melhor momento de se aposentar, seja por idade, tempo de contribuição ou regras de transição, garantindo que você não perca dinheiro.",
        iconColor: "text-primary",
    },
    {
        icon: HandCoins,
        title: "BPC / LOAS",
        description: "Benefício para idosos acima de 65 anos ou pessoas com deficiência.",
        details: "Atuamos na concessão do Benefício de Prestação Continuada (BPC/LOAS) para quem nunca contribuiu ou perdeu a qualidade de segurado, garantindo renda para quem mais precisa.",
        iconColor: "text-primary",
    },
    {
        icon: HeartPulse,
        title: "Benefícios por Incapacidade",
        description: "Auxílio-doença e aposentadoria por invalidez para quem não pode trabalhar.",
        details: "Lutamos pelo seu direito caso você esteja incapacitado para o trabalho, seja temporariamente (auxílio-doença) ou permanentemente (aposentadoria por invalidez), inclusive revertendo negativas do INSS.",
        iconColor: "text-primary",
    },
    {
        icon: Baby,
        title: "Salário Maternidade & Pensão",
        description: "Proteção para a família em momentos essenciais.",
        details: "Requerimento de salário-maternidade (inclusive para desempregadas) e pensão por morte para dependentes, garantindo o amparo financeiro da família.",
        iconColor: "text-primary",
    },
]

export default function Services() {
    const [openServiceDesktop, setOpenServiceDesktop] = useState<string | null>(null)

    const handleSchedule = () => {
        setOpenServiceDesktop(null)
        setTimeout(() => {
            document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
        }, 200)
    }

    return (
        <section id="servicos" className="relative py-20 bg-muted/30 text-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                        Especialidades do Escritório
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Focamos exclusivamente em garantir que seus direitos previdenciários sejam respeitados, revertendo injustiças do INSS.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <Dialog
                                key={service.title}
                                open={openServiceDesktop === service.title}
                                onOpenChange={(open) => setOpenServiceDesktop(open ? service.title : null)}
                            >
                                <div className="group relative bg-card hover:bg-accent/5 transition-colors duration-300 rounded-lg border border-border p-6 flex flex-col h-full shadow-sm hover:shadow-md">

                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                                        {service.description}
                                    </p>

                                    <DialogTrigger asChild>
                                        <Button variant="link" className="p-0 h-auto w-fit font-semibold text-primary">
                                            Ver detalhes <ArrowRight className="ml-2 size-4" />
                                        </Button>
                                    </DialogTrigger>
                                </div>

                                <DialogContent className="sm:max-w-[500px]">
                                    <DialogHeader>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <DialogTitle className="text-xl">{service.title}</DialogTitle>
                                        </div>
                                        <DialogDescription className="text-base leading-relaxed pt-2">
                                            {service.details}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="mt-6 flex flex-col gap-2">
                                        <Button onClick={handleSchedule} className="w-full" size="lg">
                                            Quero agendar um atendimento
                                        </Button>
                                        <DialogClose asChild>
                                            <Button variant="ghost" className="w-full">Voltar</Button>
                                        </DialogClose>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}