"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-background border-t border-border relative z-10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* COLUNA 1: IDENTIDADE */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            {/* Se não tiver logo, pode usar um ícone ou manter comentado até ter */}
                            {/* <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            */}
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1">
                                    Advocacia Especializada
                                </span>
                            </div>
                        </Link>

                        <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
                            Compromisso ético e combatividade na defesa dos direitos previdenciários. Garantindo o sustento de quem trabalhou a vida inteira.
                        </p>

                        {/* Destaque para OAB */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold text-primary font-mono">OAB/BA 79.803</span>
                        </div>
                    </div>

                    {/* COLUNA 2: NAVEGAÇÃO */}
                    <div>
                        <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary rounded-full"></span>
                            Navegação
                        </h4>
                        <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                            <li>
                                <Link href="#home" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="#servicos" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                    Áreas de Atuação
                                </Link>
                            </li>
                            <li>
                                <Link href="#sobre" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                    Sobre o Advogado
                                </Link>
                            </li>
                            <li>
                                <Link href="#depoimentos" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                    Casos de Sucesso
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                    Dúvidas Comuns
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COLUNA 3: CONTATO */}
                    <div>
                        <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary rounded-full"></span>
                            Fale Conosco
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <MapPin className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                    Campo Formoso, BA<br />
                                    <span className="text-xs opacity-70">Atendimento em todo o Brasil</span>
                                </span>
                            </li>
                            <li>
                                <a href="https://wa.me/5587996128608" target="_blank" className="flex items-center gap-3 group">
                                    <Phone className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                        (87) 99612-8608
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:emanuelsilvestre.adv@gmail.com" className="flex items-center gap-3 group">
                                    <Mail className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                                        emanuelsilvestre.adv@gmail.com
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUNA 4: REDES E AÇÃO */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
                                <span className="w-1 h-4 bg-primary rounded-full"></span>
                                Redes Sociais
                            </h4>
                            <div className="flex gap-3">
                                <a
                                    href="https://instagram.com/emanuelsilvestre.adv"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-sm border border-border"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </a>
                                {/* Adicione mais redes aqui se tiver (LinkedIn, Facebook) */}
                            </div>
                        </div>

                        {/* Botão de volta ao topo */}
                        <div className="mt-8 lg:mt-0">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={scrollToTop}
                                className="gap-2 text-xs border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary"
                            >
                                Voltar ao topo
                                <ArrowUp size={14} />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* BARRA INFERIOR */}
                <div className="border-t border-border pt-8 flex flex-col items-center text-center gap-4">
                    <p className="text-muted-foreground text-xs">
                        &copy; {currentYear} Emanuel Silvestre Advocacia. Todos os direitos reservados.
                    </p>

                    {/* Disclaimer Jurídico Obrigatório */}
                    <div className="max-w-3xl px-4 py-3 rounded-lg bg-secondary/30 border border-border/50">
                        <p className="text-[10px] text-muted-foreground/80 leading-relaxed">
                            Este site tem caráter meramente informativo e não substitui a consulta jurídica. Não possuímos vínculo com o Instituto Nacional do Seguro Social (INSS). O advogado atua na defesa dos interesses do cliente conforme a legislação vigente e o Código de Ética da OAB, não prometendo resultado de causa, visto que a decisão final cabe ao Poder Judiciário ou Administrativo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Cliente. Todos os direitos reservados.
                </p>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>Desenvolvido por</span>
                    <a
                        href="https://luisfelipedev.vercel.app" // Teu portfólio aqui
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-2"
                    >
                        Luis Felipe
                    </a>
                </div>
            </div>
        </footer>
    )
}