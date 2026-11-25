import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Emanuel Silvestre Advocacia Previdenciária",
        short_name: "Dr. Emanuel",
        description: "Advocacia previdenciária: aposentadoria, BPC/LOAS, auxílio-doença e revisão do INSS.",
        start_url: "/",
        display: "standalone",
        background_color: "#f5f6fa",
        theme_color: "#1f3d8f",
        lang: "pt-BR",
        icons: [{ src: "/logoo.png", sizes: "512x512", type: "image/png" }],
    }
}
