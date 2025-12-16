"use client"

import Link from "next/link"
import { CheckCircle2, ArrowRight, Phone, Download, FileText, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Obrigado() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4 text-center overflow-hidden">

            {/* Background Effects (Pra manter o luxo do Ouro/Azul) */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-md w-full space-y-8 animate-in zoom-in-95 duration-700 relative z-10">

                {/* Ícone de Sucesso Animado */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 animate-pulse" />
                        <div className="h-24 w-24 rounded-full bg-background border-4 border-green-500/20 flex items-center justify-center shadow-2xl relative z-10">
                            <CheckCircle2 className="h-12 w-12 text-green-500 drop-shadow-sm" />
                        </div>
                        {/* Confete decorativo */}
                        <div className="absolute -top-2 -right-2 h-6 w-6 bg-primary rounded-full opacity-20 animate-bounce" />
                        <div className="absolute -bottom-1 -left-2 h-4 w-4 bg-primary rounded-full opacity-20 animate-bounce delay-100" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                        Solicitação Recebida!
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        O primeiro passo para garantir seu direito foi dado.
                    </p>
                </div>

                <div className="grid gap-6">
                    {/* CARD 1: DOWNLOAD (A Entrega) */}
                    <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 p-1 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="bg-background/80 rounded-lg p-5 border border-border/50 relative z-10">
                            <div className="flex items-center gap-4 mb-4 text-left">
                                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <FileText className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Passo 1</h3>
                                    <p className="text-sm text-muted-foreground">Baixe seu checklist agora</p>
                                </div>
                            </div>

                            <Button asChild size="lg" className="w-full font-bold h-12 text-base shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform">
                                <a href="/checklist-inss-2025.pdf" download>
                                    <Download className="mr-2 h-5 w-5" />
                                    BAIXAR CHECKLIST (PDF)
                                </a>
                            </Button>
                        </div>
                    </Card>

                    {/* CARD 2: UPSELL (A Venda) */}
                    {/* Esse aqui tem que chamar mais atenção que o download */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-20" />

                        <Card className="bg-background border border-green-500/30 p-6 shadow-xl relative z-10">
                            <div className="space-y-4">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold mb-3 border border-green-500/20">
                                        <ShieldCheck className="h-3 w-3" />
                                        Recomendado pelo Advogado
                                    </div>
                                    <h2 className="font-bold text-xl text-foreground leading-tight">
                                        Não quer ler o manual inteiro?
                                    </h2>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Pule a burocracia. Fale diretamente com o Dr. Emanuel e deixe que ele analise seus documentos.
                                    </p>
                                </div>

                                <Button asChild size="lg" className="w-full font-bold h-14 text-base bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 hover:-translate-y-1 transition-all">
                                    <a href="https://wa.me/5587996128608?text=Baixei%20o%20checklist%20mas%20quero%20agendar%20uma%20análise%20do%20meu%20caso." target="_blank" rel="noopener noreferrer">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Quero Análise Profissional
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Botão Voltar Discreto */}
                <div className="pt-4">
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 group"
                    >
                        <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Voltar para o site principal
                    </Link>
                </div>
            </div>
        </main>
    )
}