import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WhatsappButton } from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Emanuel Silvestre - Advogado",
    description: "Consultoria jurídica profissional e especializada",
    icons: {
        icon: [
            {
                url: "/logo.png",
                type: "image/png",
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
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
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