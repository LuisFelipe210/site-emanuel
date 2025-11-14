"use client" // Necessário para hooks no App Router

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Tipando as props do componente
type LogoIntroProps = {
    onAnimationComplete: () => void;
};

export default function LogoIntro({ onAnimationComplete }: LogoIntroProps) {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

    useEffect(() => {
        // Tempo que a logo fica visível antes de começar a animação de saída
        const timer = setTimeout(() => {
            setIsAnimatingOut(true);
        }, 1000); // 2 segundos

        // Tempo total da animação (tempo visível + tempo da animação de saída)
        const totalDuration = setTimeout(() => {
            setIsVisible(false);
            // Verifica se a prop foi passada antes de chamar
            if (onAnimationComplete) {
                onAnimationComplete(); // Notifica o componente pai
            }
        }, 2800); // 2.8 segundos (2s visível + 0.8s para fade-out)

        // Limpa os timers se o componente for desmontado
        return () => {
            clearTimeout(timer);
            clearTimeout(totalDuration);
        };
    }, [onAnimationComplete]); // Adiciona a prop como dependência

    if (!isVisible) return null; // Não renderiza nada quando a animação termina

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out
                ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}
        >
            {/* * As animações 'animate-fade-in-up' e 'animate-scale-in-delay'
              * precisam estar no seu tailwind.config.js (veja a resposta anterior)
            */}
            <div
                className={`animate-fade-in-up animate-scale-in-delay ${
                    isAnimatingOut ? 'opacity-0 transform -translate-y-4' : ''
                } transition-all duration-700 ease-in-out`}
            >
                <Image
                    src="/lg.svg" // Seu logo aqui
                    alt="Logo Emanuel Silvestre"
                    width={150} // Ajuste o tamanho
                    height={150}
                    priority // Carrega a imagem mais rápido
                />
            </div>
        </div>
    );
}