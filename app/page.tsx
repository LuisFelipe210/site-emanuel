"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import LogoIntro from "@/components/LogoIntro"

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
                <Hero />
                <Services />
                <About />
                <Testimonials />
                <FAQ />
                <CTA />
                <Footer />
            </main>
        </>
    )
}