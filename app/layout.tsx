import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo, Atkinson_Hyperlegible } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WhatsappButton } from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import CookieBanner from "@/components/cookie-banner"
import MotionProvider from "@/components/motion-provider"
import { SITE_DESCRICAO, SITE_NOME, SITE_TITULO, SITE_URL } from "@/lib/site"

// Títulos: Archivo com eixo de largura (a voz larga do "ADVOGADO?" do Instagram)
const titulo = Archivo({
    subsets: ["latin"],
    axes: ["wdth"],
    variable: "--font-titulo",
    display: "swap",
})

// Texto corrido: Atkinson Hyperlegible, desenhada para leitores com baixa visão
const texto = Atkinson_Hyperlegible({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-texto",
    display: "swap",
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITULO,
        template: "%s | Emanuel Silvestre",
    },
    description: SITE_DESCRICAO,
    applicationName: SITE_NOME,
    authors: [{ name: "Emanuel Silvestre" }],
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "/",
        siteName: SITE_NOME,
        title: SITE_TITULO,
        description: SITE_DESCRICAO,
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITULO,
        description: SITE_DESCRICAO,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
    icons: {
        icon: [{ url: "/logoo.png", type: "image/png", sizes: "512x512" }],
        apple: [{ url: "/logoo.png", sizes: "512x512" }],
    },
}

export const viewport: Viewport = {
    themeColor: "#f5f6fa",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning className={`${titulo.variable} ${texto.variable}`}>
            <body className="font-sans antialiased">
                <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
                    <MotionProvider>
                        {children}
                        <WhatsappButton />
                        <CookieBanner />
                    </MotionProvider>
                    <Analytics />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}
