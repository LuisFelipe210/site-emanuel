"use client"

import { Award, Users, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Authority() {
    return (
        <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Lado Esquerdo: Credenciais */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Experiência e Segurança para o seu Processo
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Dr. Emanuel Silvestre é especialista em Direito Previdenciário, com foco exclusivo em garantir que o INSS pague o que é justo. Atuamos com ética, transparência e combatividade.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border shadow-sm">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">OAB/BA 79.803</p>
                                    <p className="text-sm text-muted-foreground">Registro Profissional</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border shadow-sm">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Histórico de Sucesso</p>
                                    <p className="text-sm text-muted-foreground">Na Defesa do Segurado</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito: Prova Social / Depoimentos Rápidos */}
                    <div className="grid gap-4">
                        <Card className="bg-background border-border shadow-md relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                            <CardContent className="p-6">
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="italic text-foreground/90 mb-3">
                                    "Eu já tinha perdido as esperanças quando o INSS negou. O Dr. Emanuel recorreu e conseguiu minha aposentadoria com os atrasados."
                                </p>
                                <p className="font-bold text-sm text-primary">— Dona Maria de Lourdes, 67 anos</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background border-border shadow-md relative overflow-hidden lg:ml-8">
                            <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                            <CardContent className="p-6">
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="italic text-foreground/90 mb-3">
                                    "Profissional honesto. Me explicou tudo direitinho pelo WhatsApp e resolveu meu BPC sem eu precisar sair de casa."
                                </p>
                                <p className="font-bold text-sm text-primary">— Sr. José Carlos, 72 anos</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}