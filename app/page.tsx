import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import QuizDireito from "@/components/quiz-direito"
import About from "@/components/about"
import LeadMagnet from "@/components/lead-magnet"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import DadosEstruturados from "@/components/dados-estruturados"

// Números (+100 benefícios, R$ 1 Mi+) e depoimentos saíram da página até o cliente confirmar.
// Os componentes authority.tsx e testimonials.tsx continuam no projeto para quando forem confirmados.
export default function Home() {
    return (
        <>
            <DadosEstruturados />
            <Navigation />
            <main>
                <Hero />
                <Services />
                <QuizDireito />
                <Process />
                <About />
                <LeadMagnet />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
