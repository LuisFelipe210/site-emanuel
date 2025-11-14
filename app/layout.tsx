import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WhatsappButton } from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
// 1. IMPORTAR O PROVIDER
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Emanuel Silvestre - Advogado",
    description: "Consultoria jurídica profissional e especializada",
    icons: {
        icon: [
            {
                url: "/lg.svg",
                type: "image/svg+xml",
                sizes: "512x512"
            },
        ],
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <body className={`font-sans antialiased`}>
        {/* 2. ADICIONAR O PROVIDER ENVOLVENDO TUDO */}
        <ThemeProvider
            attribute="class"
            defaultTheme="dark" /* AQUI, definindo seu tema escuro como padrão */
            enableSystem={false} /* Desativar o sistema para forçar o seu padrão */
            disableTransitionOnChange
        >
            {children}
            <WhatsappButton />
            <Analytics />
            <Toaster />
        </ThemeProvider>
        </body>
        </html>
    )
}