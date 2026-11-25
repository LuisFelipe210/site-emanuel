// Faixa de serra no pé dos cabeçalhos das páginas internas (mesmo recorte de papel do hero)
export default function Horizonte({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax slice" className={`block w-full ${className}`} aria-hidden="true">
            <path fill="var(--azul-nevoa)" d="M0 60 C160 30 260 20 380 40 C500 60 560 10 700 14 C840 18 900 54 1040 46 C1180 38 1260 8 1440 20 L1440 120 L0 120 Z" />
            <path fill="var(--azul-claro)" d="M0 84 C200 66 340 58 520 72 C700 86 820 56 980 60 C1140 64 1300 86 1440 78 L1440 120 L0 120 Z" />
            <path fill="var(--azul-medio)" d="M0 104 C240 94 480 92 720 100 C960 108 1200 96 1440 98 L1440 120 L0 120 Z" />
        </svg>
    )
}
