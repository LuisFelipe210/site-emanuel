import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { beneficios } from "@/lib/beneficios"

export default function sitemap(): MetadataRoute.Sitemap {
    const agora = new Date()
    return [
        { url: SITE_URL, lastModified: agora, changeFrequency: "monthly", priority: 1 },
        ...beneficios.map((b) => ({
            url: `${SITE_URL}/beneficios/${b.slug}`,
            lastModified: agora,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ]
}
