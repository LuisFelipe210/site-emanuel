"use client"

import { useState, useEffect } from 'react';

type LogoIntroProps = {
    onAnimationComplete: () => void;
};

export default function LogoIntro({ onAnimationComplete }: LogoIntroProps) {
    const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimatingOut(true);
        }, 800);

        const totalDuration = setTimeout(() => {
            onAnimationComplete();
        }, 1300);

        return () => {
            clearTimeout(timer);
            clearTimeout(totalDuration);
        };
    }, [onAnimationComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out
                ${isAnimatingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-pulse flex items-center justify-center">
                {/* Substituído next/image por img para evitar erros no preview */}
                <img
                    src="/lg.svg"
                    alt="Logo Emanuel Silvestre"
                    className="object-contain w-full h-full"
                />
            </div>
        </div>
    );
}