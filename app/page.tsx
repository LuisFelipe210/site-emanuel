"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Authority from "@/components/authority" // Novo componente
import Services from "@/components/services"
import LeadMagnet from "@/components/lead-magnet" // Novo componente
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import LogoIntro from "@/components/LogoIntro"
import About from "@/components/about";

export default function Home() {
    const [showIntro, setShowIntro] = useState<boolean>(true);

    const handleIntroComplete = () => {
        setShowIntro(false);
    };

    return (
        <>
            {showIntro && <LogoIntro onAnimationComplete={handleIntroComplete} />}

            <main
                className={`${showIntro ? 'hidden' : 'flex'} flex-col`}
            >
                <Navigation />

                {/* Dobra 1: Hero (Headline + CTA Principal) */}
                <Hero />

                {/* Dobra 2: Autoridade (Prova Social + Credenciais) */}
                <Authority />

                <About />

                {/* Dobra 3: Serviços (Nichos Previdenciários) */}
                <Services />

                {/* Lead Magnet (Captura - Entre dobras para quebrar o ritmo) */}
                <LeadMagnet />

                {/* Dobra 4: Fechamento (FAQ + Contato Final + Footer) */}
                <FAQ />
                <CTA />
                <Footer />
            </main>
        </>
    )
}