import Link from "next/link"
import { CheckCircle, ArrowRight, Phone, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Obrigado() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4 text-center">
            <div className="max-w-lg w-full space-y-6 animate-in zoom-in-95 duration-500"> {/* Reduzi o espaçamento vertical de 8 para 6 */}

                <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center shadow-sm"> {/* Reduzi um pouco o ícone */}
                        <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Tudo Certo!
                    </h1>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Seus dados foram recebidos com sucesso.
                    </p>
                </div>

                {/* Card de Download do PDF */}
                <Card className="bg-blue-50 border-blue-200 p-5 shadow-sm"> {/* Reduzi padding */}
                    <h3 className="text-lg font-bold text-blue-900 mb-1">
                        1º Passo: Baixe seu material
                    </h3>
                    <p className="text-sm text-blue-700 mb-3">
                        Clique no botão abaixo para salvar o checklist.
                    </p>
                    <Button asChild size="lg" className="w-full font-bold h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                        {/* Link para o PDF na pasta public */}
                        <a href="/checklist-inss-2025.pdf" download>
                            <Download className="mr-2 h-5 w-5" />
                            BAIXAR CHECKLIST (PDF)
                        </a>
                    </Button>
                </Card>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Ou se preferir</span>
                    </div>
                </div>

                {/* Card de Agendamento */}
                <div className="bg-muted/30 border border-border rounded-xl p-5 space-y-3"> {/* Reduzi padding e gap */}
                    <h2 className="font-semibold text-lg text-foreground">
                        Não quer ler e prefere resolver logo?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Fale diretamente com o Dr. Emanuel agora mesmo.
                    </p>

                    <Button asChild size="lg" variant="outline" className="w-full font-bold h-12 text-base border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800 bg-white shadow-sm">
                        <a href="https://wa.me/5587996128608?text=Baixei%20o%20checklist%20e%20gostaria%20de%20agendar%20uma%20análise%20do%20meu%20caso." target="_blank" rel="noopener noreferrer">
                            <Phone className="mr-2 h-5 w-5" />
                            Agendar Consulta no WhatsApp
                        </a>
                    </Button>
                </div>

                {/* Botão Voltar - Agora mais visível e destacado */}
                <Button asChild variant="secondary" className="w-full h-12 text-base font-medium border border-border hover:bg-accent transition-colors">
                    <a href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Voltar para o Início do Site
                    </a>
                </Button>
            </div>
        </main>
    )
}