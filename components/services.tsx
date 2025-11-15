"use client"

import { useState } from "react"
import { Shield, Briefcase, Scale, FileText } from "lucide-react"

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

const services = [
    {
        icon: Shield,
        title: "Direito Civil",
        description:
            "Atuação completa em causas cíveis, indenizações, responsabilidade civil e contratos.",
        details:
            "Prestamos assessoria jurídica completa em todas as áreas do Direito Civil, com foco em soluções estratégicas e resultados práticos para nossos clientes.",
        gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
        iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
        iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
        icon: Briefcase,
        title: "Direito Empresarial",
        description:
            "Consultoria para empresas, contratos, compliance e resolução de conflitos societários.",
        details:
            "Auxiliamos empresas de todos os portes na estruturação jurídica de suas operações, elaboração e revisão de contratos, governança corporativa e defesa em litígios empresariais.",
        gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
        iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
        iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
        icon: Scale,
        title: "Direito Trabalhista",
        description:
            "Defesa e orientação em demandas trabalhistas de empregados e empregadores.",
        details:
            "Atendimento estratégico em ações trabalhistas, acordos extrajudiciais e consultoria preventiva para minimizar riscos e litígios futuros.",
        gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
        iconBg: "bg-gradient-to-br from-amber-500/20 to-amber-600/10",
        iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
        icon: FileText,
        title: "Contratos e Consultoria",
        description:
            "Elaboração, revisão e negociação de contratos com segurança e clareza jurídica.",
        details:
            "Elaboramos e revisamos contratos com linguagem clara e foco em segurança jurídica, evitando cláusulas abusivas e protegendo seus interesses.",
        gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
        iconBg: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
        iconColor: "text-emerald-600 dark:text-emerald-400"
    },
]

export default function Services() {
    const [openService, setOpenService] = useState<string | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const handleSchedule = () => {
        setOpenService(null)
        setTimeout(() => {
            document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
        }, 200)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        const diff = touchStart - touchEnd
        if (Math.abs(diff) > 75) {
            if (diff > 0) {
                setCurrentSlide((prev) => (prev + 1) % services.length)
            } else {
                setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
            }
        }
        setTouchStart(0)
        setTouchEnd(0)
    }

    return (
        <section id="servicos" className="relative py-16 md:py-20 bg-muted text-foreground overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.01] dark:opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                            Áreas de Atuação
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
                            Serviços Especializados em Direito
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            Soluções jurídicas estratégicas e personalizadas para cada necessidade, com ética, técnica e comprometimento.
                        </p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <Dialog
                                    key={service.title}
                                    open={openService === service.title}
                                    onOpenChange={(open) => setOpenService(open ? service.title : null)}
                                >
                                    <div className="group relative w-full h-full bg-background rounded-2xl shadow-lg border border-border p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30 overflow-hidden min-h-[420px]">
                                        {/* Gradient Background Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        <div className="relative z-10 flex flex-col items-start text-left gap-5">
                                            <div className={`w-16 h-16 flex items-center justify-center rounded-xl ${service.iconBg} border border-transparent group-hover:border-current group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                                                <Icon className={service.iconColor} size={32} strokeWidth={2} />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="relative z-10 mt-8 flex flex-col gap-3">
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 font-semibold rounded-xl group-hover:shadow-md"
                                                >
                                                    Saiba Mais
                                                </Button>
                                            </DialogTrigger>

                                            <Button
                                                variant="default"
                                                className="w-full transition-all duration-300 font-semibold rounded-xl hover:scale-[1.02] shadow-md hover:shadow-lg hover:shadow-primary/30"
                                                onClick={handleSchedule}
                                            >
                                                Agendar Consulta
                                            </Button>
                                        </div>
                                    </div>

                                    <DialogContent className="max-w-2xl border-2">
                                        <DialogHeader className="mb-8">
                                            <div className="flex items-start gap-6">
                                                <div className={`w-20 h-20 ${service.iconBg} border-2 ${service.iconColor.replace('text-', 'border-')} rounded-2xl flex items-center justify-center shrink-0 shadow-xl`}>
                                                    <Icon className={service.iconColor} size={40} strokeWidth={2.5} />
                                                </div>
                                                <div className="flex-1">
                                                    <DialogTitle className="text-3xl font-bold tracking-tight text-left mb-2">
                                                        {service.title}
                                                    </DialogTitle>
                                                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
                                                </div>
                                            </div>
                                        </DialogHeader>

                                        <div className="space-y-6">
                                            <DialogDescription className="text-muted-foreground text-lg leading-relaxed text-left">
                                                {service.details}
                                            </DialogDescription>

                                            <div className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} border border-primary/20`}>
                                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    Por que escolher este serviço?
                                                </h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">✓</span>
                                                        <span>Atendimento personalizado e estratégico</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">✓</span>
                                                        <span>Experiência comprovada em casos complexos</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">✓</span>
                                                        <span>Comunicação clara e transparente</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 mt-8 pt-6 border-t">
                                            <Button
                                                size="lg"
                                                className="w-full font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/30 text-base"
                                                onClick={handleSchedule}
                                            >
                                                Agendar Consulta Gratuita
                                            </Button>
                                            <DialogClose asChild>
                                                <Button variant="ghost" className="w-full rounded-xl hover:bg-muted">
                                                    Fechar
                                                </Button>
                                            </DialogClose>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            )
                        })}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {services.map((service) => {
                                    const Icon = service.icon
                                    return (
                                        <div key={service.title} className="w-full flex-shrink-0 px-4">
                                            <div
                                                onTouchStart={handleTouchStart}
                                                onTouchMove={handleTouchMove}
                                                onTouchEnd={handleTouchEnd}
                                            >
                                                <Dialog
                                                    open={openService === service.title}
                                                    onOpenChange={(open) => setOpenService(open ? service.title : null)}
                                                >
                                                    <div className="relative w-full bg-background rounded-2xl shadow-lg border border-border p-6 flex flex-col justify-between min-h-[500px] overflow-hidden">
                                                        {/* Gradient Background - Always visible on mobile */}
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />

                                                        <div className="relative z-10 flex flex-col items-start text-left gap-5">
                                                            <div className={`w-16 h-16 flex items-center justify-center rounded-xl ${service.iconBg} border border-current shadow-lg`}>
                                                                <Icon className={service.iconColor} size={32} strokeWidth={2} />
                                                            </div>
                                                            <h3 className="text-2xl font-bold text-foreground">
                                                                {service.title}
                                                            </h3>
                                                            <p className="text-muted-foreground text-base leading-relaxed">
                                                                {service.description}
                                                            </p>
                                                        </div>

                                                        <div className="relative z-10 mt-8 flex flex-col gap-3">
                                                            <DialogTrigger asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 font-semibold rounded-xl"
                                                                >
                                                                    Saiba Mais
                                                                </Button>
                                                            </DialogTrigger>

                                                            <Button
                                                                variant="default"
                                                                className="w-full transition-all duration-300 font-semibold rounded-xl shadow-md"
                                                                onClick={handleSchedule}
                                                            >
                                                                Agendar Consulta
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    <DialogContent className="max-w-[90vw] max-h-[85vh] overflow-y-auto border-2">
                                                        <DialogHeader className="mb-6">
                                                            <div className="flex items-start gap-4">
                                                                <div className={`w-16 h-16 ${service.iconBg} border-2 ${service.iconColor.replace('text-', 'border-')} rounded-2xl flex items-center justify-center shrink-0 shadow-xl`}>
                                                                    <Icon className={service.iconColor} size={36} strokeWidth={2.5} />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <DialogTitle className="text-2xl font-bold tracking-tight text-left mb-2">
                                                                        {service.title}
                                                                    </DialogTitle>
                                                                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
                                                                </div>
                                                            </div>
                                                        </DialogHeader>

                                                        <div className="space-y-6">
                                                            <DialogDescription className="text-muted-foreground text-base leading-relaxed text-left">
                                                                {service.details}
                                                            </DialogDescription>

                                                            <div className={`p-5 rounded-xl bg-gradient-to-br ${service.gradient} border border-primary/20`}>
                                                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                                    Por que escolher este serviço?
                                                                </h4>
                                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-primary mt-0.5">✓</span>
                                                                        <span>Atendimento personalizado e estratégico</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-primary mt-0.5">✓</span>
                                                                        <span>Experiência comprovada em casos complexos</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-primary mt-0.5">✓</span>
                                                                        <span>Comunicação clara e transparente</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col gap-3 mt-6 pt-6 border-t">
                                                            <Button
                                                                size="lg"
                                                                className="w-full font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/30"
                                                                onClick={handleSchedule}
                                                            >
                                                                Agendar Consulta Gratuita
                                                            </Button>
                                                            <DialogClose asChild>
                                                                <Button variant="ghost" className="w-full rounded-xl hover:bg-muted">
                                                                    Fechar
                                                                </Button>
                                                            </DialogClose>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2 mt-8">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className="group"
                                    aria-label={`Ir para slide ${index + 1}`}
                                >
                                    <div className={`h-1.5 rounded-full transition-all duration-300 ${
                                        currentSlide === index
                                            ? 'w-12 bg-primary'
                                            : 'w-8 bg-foreground/30 group-hover:bg-foreground/50'
                                    }`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}