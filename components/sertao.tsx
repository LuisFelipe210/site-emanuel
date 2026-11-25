"use client"

import { motion, useTransform, type MotionValue } from "framer-motion"

/*
 * Paisagem do sertão em papel recortado: cada plano é uma camada chapada,
 * a profundidade vem só da sobreposição (nada de degradê).
 * `progresso` (0 → 1) é a rolagem do hero: o sol se põe atrás da serra e as
 * camadas andam em velocidades diferentes.
 * Nenhum elemento encosta na silhueta do retrato (direita da cena).
 */

const VB = "0 150 1440 410"

function Passaro({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
    return (
        <path
            d="M0 0 q 9 -9 18 0 q 9 -9 18 0"
            transform={`translate(${x} ${y}) scale(${s})`}
            fill="none"
            stroke="var(--azul-noite)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    )
}

function Sol({ x, y, s, className }: { x: number; y: number; s: number; className: string }) {
    return (
        <g transform={`translate(${x} ${y}) scale(${s})`} className={className}>
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 90, ease: "linear", repeat: Infinity }}>
                {Array.from({ length: 12 }).map((_, i) => (
                    <path key={i} d="M-6 -96 L0 -122 L6 -96 Z" fill="var(--ouro)" transform={`rotate(${i * 30})`} />
                ))}
            </motion.g>
            <circle r={82} fill="var(--ouro-claro)" />
            <circle r={58} fill="var(--ouro)" />
        </g>
    )
}

const assentar = (i: number) => ({
    initial: { y: 36 },
    animate: { y: 0 },
    transition: { duration: 1.1, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as const },
})

export function SertaoFundo({ progresso }: { progresso: MotionValue<number> }) {
    const solY = useTransform(progresso, [0, 1], [0, 140])
    const serraLonge = useTransform(progresso, [0, 1], [0, 70])
    const serraMeio = useTransform(progresso, [0, 1], [0, 45])
    const morros = useTransform(progresso, [0, 1], [0, 22])

    return (
        <svg viewBox={VB} preserveAspectRatio="xMaxYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {/* Sol: disco dourado sobre um plano claro, raios girando devagar (posição muda no celular) */}
            <motion.g style={{ y: solY }}>
                <Sol x={800} y={228} s={0.75} className="hidden xl:block" />
                <Sol x={1130} y={222} s={0.7} className="sm:hidden" />
                <Sol x={900} y={222} s={0.7} className="hidden sm:block xl:hidden" />
            </motion.g>

            {/* Asa-branca atravessando o céu */}
            <motion.g animate={{ x: [960, 1600] }} transition={{ duration: 34, ease: "linear", repeat: Infinity }}>
                <Passaro x={0} y={178} />
                <Passaro x={44} y={196} s={0.75} />
                <Passaro x={86} y={170} s={0.6} />
            </motion.g>

            <motion.g style={{ y: serraLonge }}>
                <motion.path
                    {...assentar(0)}
                    fill="var(--azul-nevoa)"
                    d="M0 300 C120 250 210 230 300 258 C380 284 430 210 540 190 C640 172 700 238 800 250 C900 262 960 205 1060 184 C1160 162 1240 232 1330 222 C1390 215 1420 202 1440 206 L1440 560 L0 560 Z"
                />
            </motion.g>

            <motion.g style={{ y: serraMeio }}>
                <motion.g {...assentar(1)}>
                    <path
                        fill="var(--azul-claro)"
                        d="M0 360 C140 330 220 300 330 318 C430 336 520 288 640 298 C760 308 820 350 940 342 C1060 334 1120 282 1240 290 C1330 297 1390 318 1440 314 L1440 560 L0 560 Z"
                    />
                </motion.g>
            </motion.g>

            <motion.g style={{ y: morros }}>
                <motion.g {...assentar(2)}>
                    <path
                        fill="var(--azul-medio)"
                        d="M0 486 C180 480 360 474 520 466 C660 458 760 412 900 396 C1040 384 1180 428 1300 414 C1370 405 1410 399 1440 401 L1440 560 L0 560 Z"
                    />
                </motion.g>
            </motion.g>
        </svg>
    )
}

export function SertaoFrente() {
    const mourões = [40, 120, 200, 280, 360, 440, 520]
    return (
        <svg viewBox={VB} preserveAspectRatio="xMaxYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <motion.g {...assentar(3)}>
                <path
                    fill="var(--azul)"
                    d="M0 512 C200 508 420 500 640 486 C860 472 1080 458 1260 462 C1350 464 1410 468 1440 470 L1440 560 L0 560 Z"
                />
                {/* Cerca de arame do roçado */}
                <g stroke="var(--azul-noite)" strokeWidth={2} fill="none">
                    <path d="M40 492 C200 490 380 486 524 478" />
                    <path d="M40 506 C200 504 380 500 524 492" />
                </g>
                {mourões.map((x) => (
                    <rect key={x} x={x - 3} y={472 - x * 0.03} width={7} height={44} rx={1.5} fill="var(--azul-noite)" />
                ))}
                <path
                    fill="var(--azul-noite)"
                    d="M0 522 C300 510 700 515 1000 523 C1200 528 1360 520 1440 518 L1440 560 L0 560 Z"
                />
            </motion.g>
        </svg>
    )
}
