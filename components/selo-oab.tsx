"use client"

import { motion } from "framer-motion"

// Selo com o monograma EE no centro; só o anel de texto gira, em torno do próprio centro
export default function SeloOAB({ className }: { className?: string }) {
    const texto = "EMANUEL SILVESTRE · DIREITO PREVIDENCIÁRIO · OAB/BA 79.803 · "
    return (
        <div className={className} role="img" aria-label="Selo: Emanuel Silvestre, OAB/BA 79.803">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <circle cx={100} cy={100} r={100} fill="var(--azul-noite)" />
                <circle cx={100} cy={100} r={58} fill="none" stroke="var(--ouro)" strokeWidth={1.5} />
                <image href="/monograma.svg" x={70} y={81} width={60} height={38} />
            </svg>
            <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
                <defs>
                    <path id="selo-circulo" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" />
                </defs>
                <text fill="var(--ouro-claro)" fontSize={11.6} letterSpacing={1.5} className="font-display" fontWeight={700}>
                    <textPath href="#selo-circulo" textLength={488} lengthAdjust="spacing">
                        {texto}
                    </textPath>
                </text>
            </motion.svg>
        </div>
    )
}
