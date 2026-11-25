import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

// Imagem de compartilhamento (WhatsApp, Facebook, Google): mesma paisagem azul e dourada do site
export const alt = "Dr. Emanuel Silvestre, advogado previdenciário: Benefício negado? Não aceite o não do INSS."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
    const retrato = await readFile(join(process.cwd(), "public/og-retrato.png"))
    const retratoSrc = `data:image/png;base64,${retrato.toString("base64")}`

    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#f5f6fa" }}>
                <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", left: 0, top: 0 }}>
                    <circle cx="700" cy="380" r="70" fill="#ecd9a0" />
                    <circle cx="700" cy="380" r="50" fill="#c9a24a" />
                    <path d="M0 420 C160 370 300 360 420 390 C560 425 640 360 780 360 C900 360 1000 410 1200 380 L1200 630 L0 630 Z" fill="#d7e0f3" />
                    <path d="M0 480 C200 450 360 440 520 460 C700 482 860 440 1000 452 C1100 460 1160 470 1200 468 L1200 630 L0 630 Z" fill="#a9bbe3" />
                    <path d="M0 540 C240 520 480 525 720 540 C900 551 1080 532 1200 535 L1200 630 L0 630 Z" fill="#3f5fae" />
                    <path d="M0 590 C300 580 700 585 1000 594 C1100 597 1160 592 1200 590 L1200 630 L0 630 Z" fill="#1f3d8f" />
                </svg>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={retratoSrc} width={314} height={580} style={{ position: "absolute", right: 70, bottom: 0 }} alt="" />
                <div style={{ display: "flex", flexDirection: "column", padding: "64px 70px", position: "relative" }}>
                    <div style={{ fontSize: 46, color: "#0d1b45", display: "flex" }}>
                        Benefício <span style={{ background: "#ecd9a0", padding: "0 10px", marginLeft: 12 }}>negado?</span>
                    </div>
                    <div style={{ fontSize: 84, fontWeight: 800, color: "#1f3d8f", lineHeight: 1, marginTop: 14, maxWidth: 680 }}>
                        NÃO ACEITE O “NÃO” DO INSS.
                    </div>
                    <div style={{ fontSize: 28, color: "#0d1b45", marginTop: 26 }}>Dr. Emanuel Silvestre · OAB/BA 79.803</div>
                </div>
            </div>
        ),
        size,
    )
}
