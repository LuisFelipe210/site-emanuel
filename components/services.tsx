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
    },
    {
        icon: Briefcase,
        title: "Direito Empresarial",
        description:
            "Consultoria para empresas, contratos, compliance e resolução de conflitos societários.",
        details:
            "Auxiliamos empresas de todos os portes na estruturação jurídica de suas operações, elaboração e revisão de contratos, governança corporativa e defesa em litígios empresariais.",
    },
    {
        icon: Scale,
        title: "Direito Trabalhista",
        description:
            "Defesa e orientação em demandas trabalhistas de empregados e empregadores.",
        details:
            "Atendimento estratégico em ações trabalhistas, acordos extrajudiciais e consultoria preventiva para minimizar riscos e litígios futuros.",
    },
    {
        icon: FileText,
        title: "Contratos e Consultoria",
        description:
            "Elaboração, revisão e negociação de contratos com segurança e clareza jurídica.",
        details:
            "Elaboramos e revisamos contratos com linguagem clara e foco em segurança jurídica, evitando cláusulas abusivas e protegendo seus interesses.",
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
        // DE: bg-[#111111] text-white
        // PARA: bg-muted text-foreground (usando 'muted' para dar um leve contraste)
        <section id="servicos" className="relative py-16 md:py-20 bg-muted text-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div>
                    <div className="text-center mb-16">
                        {/* DE: text-[#d4af37] */}
                        {/* PARA: text-primary */}
                        <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                            Áreas de Atuação
                        </span>
                        {/* DE: text-white */}
                        {/* PARA: text-foreground */}
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
                            Serviços Especializados em Direito
                        </h2>
                        {/* DE: text-white/70 */}
                        {/* PARA: text-muted-foreground */}
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
                                    {/* DE: bg-gradient-to-b from-[#1a1a1a] via-[#121212] to-[#0a0a0a] ... border border-[#2a2a2a] ... hover:shadow-[#d4af37]/20 */}
                                    {/* PARA: bg-background ... border border-border ... hover:shadow-primary/20 */}
                                    <div
                                        className="w-full h-full bg-background rounded-xl shadow-lg border border-border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
                                    >
                                        <div className="flex flex-col items-start text-left gap-5">
                                            {/* DE: bg-[#d4af37]/15 border-[#d4af37]/40 ... text-[#d4af37] */}
                                            {/* PARA: bg-primary/15 border-primary/40 ... text-primary */}
                                            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/15 border border-primary/40">
                                                <Icon className="text-primary" size={36} />
                                            </div>
                                            {/* DE: text-white */}
                                            {/* PARA: text-foreground */}
                                            <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                                            {/* DE: text-white/70 */}
                                            {/* PARA: text-muted-foreground */}
                                            <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                                        </div>

                                        <div className="mt-8 flex flex-col gap-4">
                                            <DialogTrigger asChild>
                                                {/* DE: text-[#d4af37] border-[#d4af37] hover:bg-[#d4af37]/20 hover:text-white */}
                                                {/* PARA: variant="outline" (remove cores, usa padrão) text-primary border-primary hover:bg-accent hover:text-primary */}
                                                <Button
                                                    variant="outline"
                                                    className="w-full text-primary border-primary hover:bg-accent hover:text-primary transition-all duration-300 font-semibold rounded-xl"
                                                >
                                                    Saiba Mais
                                                </Button>
                                            </DialogTrigger>

                                            <Button
                                                variant="default"
                                                // DE: bg-[#d4af37] border-[#d4af37] text-black hover:bg-[#c9a234] hover:border-[#c9a234]
                                                // PARA: (Remove cores, usa o padrão do Button)
                                                className="w-full transition-all duration-300 font-semibold rounded-xl"
                                                onClick={handleSchedule}
                                            >
                                                Agendar Consulta
                                            </Button>
                                        </div>
                                    </div>

                                    {/* DE: bg-[#0d0d0d] border border-[#2a2a2a] text-white */}
                                    {/* PARA: (O DialogContent já usa cores de Popover/Card do CSS global) */}
                                    <DialogContent className="max-w-2xl">
                                        <DialogHeader className="mb-6">
                                            <div className="flex items-center gap-6">
                                                {/* DE: bg-[#d4af37]/15 border-[#d4af37]/40 ... text-[#d4af37] */}
                                                {/* PARA: bg-primary/15 border-primary/40 ... text-primary */}
                                                <div className="w-20 h-20 bg-primary/15 border border-primary/40 rounded-2xl flex items-center justify-center shrink-0">
                                                    <Icon className="text-primary" size={48} />
                                                </div>
                                                <DialogTitle className="text-3xl font-bold tracking-tight text-left">
                                                    {service.title}
                                                </DialogTitle>
                                            </div>
                                        </DialogHeader>

                                        {/* DE: text-white/80 */}
                                        {/* PARA: text-muted-foreground */}
                                        <DialogDescription className="text-muted-foreground text-base leading-relaxed mb-8 text-left">
                                            {service.details}
                                        </DialogDescription>

                                        <div className="flex flex-col gap-3">
                                            {/* DE: bg-[#d4af37] hover:bg-[#c9a234] text-black ... shadow-[#d4af37]/20 */}
                                            {/* PARA: (Remove cores) ... shadow-primary/20 */}
                                            <Button
                                                size="lg"
                                                className="w-full font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20"
                                                onClick={handleSchedule}
                                            >
                                                Agendar Consulta
                                            </Button>
                                            <DialogClose asChild>
                                                {/* DE: text-white/70 border-white/30 hover:bg-white/10 hover:text-white */}
                                                {/* PARA: (Remove cores, usa variant="outline") */}
                                                <Button variant="outline" className="w-full rounded-xl">
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
                                                    {/* DE: bg-gradient-to-b from-[#1a1a1a] via-[#121212] to-[#0a0a0a] ... border border-[#2a2a2a] */}
                                                    {/* PARA: bg-background border border-border */}
                                                    <div className="w-full bg-background rounded-xl shadow-lg border border-border p-6 flex flex-col justify-between min-h-[480px]">
                                                        <div className="flex flex-col items-start text-left gap-5">
                                                            {/* DE: bg-[#d4af37]/15 border border-[#d4af37]/40 ... text-[#d4af37] */}
                                                            {/* PARA: bg-primary/15 border-primary/40 ... text-primary */}
                                                            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/15 border border-primary/40">
                                                                <Icon className="text-primary" size={36} />
                                                            </div>
                                                            {/* DE: text-white */}
                                                            {/* PARA: text-foreground */}
                                                            <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                                                            {/* DE: text-white/70 */}
                                                            {/* PARA: text-muted-foreground */}
                                                            <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                                                        </div>

                                                        <div className="mt-8 flex flex-col gap-4">
                                                            <DialogTrigger asChild>
                                                                {/* DE: text-[#d4af37] border-[#d4af37] hover:bg-[#d4af37]/20 hover:text-white */}
                                                                {/* PARA: text-primary border-primary hover:bg-accent hover:text-primary */}
                                                                <Button
                                                                    variant="outline"
                                                                    className="w-full text-primary border-primary hover:bg-accent hover:text-primary transition-all duration-300 font-semibold rounded-xl"
                                                                >
                                                                    Saiba Mais
                                                                </Button>
                                                            </DialogTrigger>

                                                            <Button
                                                                variant="default"
                                                                // DE: bg-[#d4af37] border-[#d4af37] text-black hover:bg-[#c9a234] hover:border-[#c9a234]
                                                                // PARA: (Remove cores, usa o padrão)
                                                                className="w-full transition-all duration-300 font-semibold rounded-xl"
                                                                onClick={handleSchedule}
                                                            >
                                                                Agendar Consulta
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {/* DE: bg-[#0d0d0d] border border-[#2a2a2a] text-white */}
                                                    {/* PARA: (Remove cores, usa o padrão do DialogContent) */}
                                                    <DialogContent className="max-w-[90vw] max-h-[85vh] overflow-y-auto">
                                                        <DialogHeader className="mb-6">
                                                            <div className="flex items-center gap-4">
                                                                {/* DE: bg-[#d4af37]/15 border-[#d4af37]/40 ... text-[#d4af37] */}
                                                                {/* PARA: bg-primary/15 border-primary/40 ... text-primary */}
                                                                <div className="w-16 h-16 bg-primary/15 border border-primary/40 rounded-2xl flex items-center justify-center shrink-0">
                                                                    <Icon className="text-primary" size={40} />
                                                                </div>
                                                                <DialogTitle className="text-2xl font-bold tracking-tight text-left">
                                                                    {service.title}
                                                                </DialogTitle>
                                                            </div>
                                                        </DialogHeader>

                                                        {/* DE: text-white/80 */}
                                                        {/* PARA: text-muted-foreground */}
                                                        <DialogDescription className="text-muted-foreground text-base leading-relaxed mb-6 text-left">
                                                            {service.details}
                                                        </DialogDescription>

                                                        <div className="flex flex-col gap-3">
                                                            {/* DE: bg-[#d4af37] hover:bg-[#c9a234] text-black ... shadow-[#d4af37]/20 */}
                                                            {/* PARA: (Remove cores) ... shadow-primary/20 */}
                                                            <Button
                                                                size="lg"
                                                                className="w-full font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20"
                                                                onClick={handleSchedule}
                                                            >
                                                                Agendar Consulta
                                                            </Button>
                                                            <DialogClose asChild>
                                                                {/* DE: text-white/70 border-white/30 hover:bg-white/10 hover:text-white */}
                                                                {/* PARA: (Remove cores, usa variant="outline") */}
                                                                <Button variant="outline" className="w-full rounded-xl">
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

                        {/* Indicators */}
                        <div className="flex justify-center items-center gap-2 mt-8">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className="group"
                                    aria-label={`Ir para slide ${index + 1}`}
                                >
                                    {/* DE: bg-[#d4af37] ... bg-white/30 group-hover:bg-white/50 */}
                                    {/* PARA: bg-primary ... bg-foreground/30 group-hover:bg-foreground/50 */}
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