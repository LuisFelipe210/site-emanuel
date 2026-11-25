import type { Metadata } from "next"
import type React from "react"

// Página pós-formulário: não deve aparecer no Google
export const metadata: Metadata = {
    title: "Solicitação recebida",
    robots: { index: false, follow: false },
}

export default function ObrigadoLayout({ children }: { children: React.ReactNode }) {
    return children
}
