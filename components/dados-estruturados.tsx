import { SITE_DESCRICAO, SITE_NOME, SITE_URL } from "@/lib/site"
import { EMAIL, INSTAGRAM, WHATSAPP_NUMERO } from "@/lib/contato"
import { faqs } from "@/lib/faqs"

// JSON-LD: escritório (LegalService), o advogado (Person) e as perguntas frequentes (FAQPage)
export default function DadosEstruturados() {
    const grafo = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LegalService",
                "@id": `${SITE_URL}/#escritorio`,
                name: SITE_NOME,
                description: SITE_DESCRICAO,
                url: SITE_URL,
                image: `${SITE_URL}/manel2.png`,
                logo: `${SITE_URL}/logo.png`,
                telephone: `+${WHATSAPP_NUMERO}`,
                email: EMAIL,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Campo Formoso",
                    addressRegion: "BA",
                    addressCountry: "BR",
                },
                areaServed: { "@type": "Country", name: "Brasil" },
                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:00",
                    closes: "18:00",
                },
                knowsAbout: [
                    "Direito Previdenciário",
                    "Aposentadoria Rural",
                    "Aposentadoria por Idade",
                    "BPC/LOAS",
                    "Auxílio-doença",
                    "Aposentadoria por Invalidez",
                    "Revisão de Benefício do INSS",
                    "Planejamento Previdenciário",
                ],
                founder: { "@id": `${SITE_URL}/#advogado` },
                sameAs: [INSTAGRAM],
            },
            {
                "@type": "Person",
                "@id": `${SITE_URL}/#advogado`,
                name: "Emanuel Silvestre",
                honorificPrefix: "Dr.",
                jobTitle: "Advogado Previdenciário",
                identifier: "OAB/BA 79.803",
                image: `${SITE_URL}/manel3.png`,
                worksFor: { "@id": `${SITE_URL}/#escritorio` },
                sameAs: [INSTAGRAM],
            },
            {
                "@type": "FAQPage",
                "@id": `${SITE_URL}/#faq`,
                mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo).replace(/</g, "\\u003c") }}
        />
    )
}
