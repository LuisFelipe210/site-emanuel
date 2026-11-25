"use client"

import { motion } from "framer-motion"

/*
 * Ícones desenhados à mão para cada área (grade 32, traço 2).
 * O traço se desenha quando o ícone entra na tela.
 */

const desenhos: Record<string, string[]> = {
    rural: [
        "M16 28V15",
        "M16 15c0-5.5 4-8.5 10-8.5 0 5.5-4 8.5-10 8.5Z",
        "M16 19c0-4.5-3.5-7-8.5-7 0 4.5 3.5 7 8.5 7Z",
        "M5 28h22",
        "M9 28c1.5-2 3-2 4 0M19 28c1.5-2 3-2 4 0",
    ],
    idade: [
        "M9 4h14M9 28h14",
        "M10.5 4c0 7 11 7 11 12s-11 5-11 12",
        "M21.5 4c0 7-11 7-11 12s11 5 11 12",
        "M13 24.5h6",
    ],
    bpc: [
        "M16 5.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
        "M3 19h5v9H3",
        "M8 20h4.5l4.5 2h4a2 2 0 0 1 0 4h-6",
        "M8 26.5h12l7-4.5a2 2 0 0 0-2.4-3.2L20.5 21",
    ],
    doenca: [
        "M16 27s-10-6-10-13.5A5.5 5.5 0 0 1 16 10a5.5 5.5 0 0 1 10 3.5C26 21 16 27 16 27Z",
        "M4 16h6l2.5-4 4 8 2.5-4H28",
    ],
    revisao: [
        "M18 4H7v24h9",
        "M18 4l6 6v4",
        "M18 4v6h6",
        "M11 14h7M11 19h4",
        "M21.5 17a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z",
        "M24.8 24.8 28.5 28.5",
    ],
    planejamento: [
        "M16 3.5a12.5 12.5 0 1 1 0 25 12.5 12.5 0 0 1 0-25Z",
        "M21 11l-3 7-7 3 3-7 7-3Z",
        "M16 3.5V6M16 26v2.5M3.5 16H6M26 16h2.5",
    ],
}

export type IconeNome = keyof typeof desenhos

export function IconeTraco({
    nome,
    className,
    cor = "currentColor",
    animar = false,
}: {
    nome: IconeNome
    className?: string
    cor?: string
    animar?: boolean
}) {
    if (!animar) {
        return (
            <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
                {desenhos[nome].map((d, i) => (
                    <path key={i} d={d} stroke={cor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                ))}
            </svg>
        )
    }
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
            {desenhos[nome].map((d, i) => (
                <motion.path
                    key={i}
                    d={d}
                    stroke={cor}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.9, delay: 0.12 * i, ease: [0.65, 0, 0.35, 1] }}
                />
            ))}
        </svg>
    )
}
