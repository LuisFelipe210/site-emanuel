"use client"

import { useState } from "react"
// Voltando para o alias @/ que deve funcionar com o tsconfig corrigido
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Authority from "@/components/authority"
import Services from "@/components/services"
import LeadMagnet from "@/components/lead-magnet"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function Home() {
    return (
            <main
            >
                <Navigation />

                <Hero />

                <Authority />

                <Services />

                <About />

                <LeadMagnet />

                <Testimonials />

                <FAQ />

                <CTA />

                <Footer />
            </main>
    )
}