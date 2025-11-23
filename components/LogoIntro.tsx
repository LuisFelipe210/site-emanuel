"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

type LogoIntroProps = {
    onAnimationComplete: () => void;
};

export default function LogoIntro({ onAnimationComplete }: LogoIntroProps) {
    const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

    useEffect(() => {
        // Reduzi o tempo pra ser mais rápido (vapt-vupt)
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
            // Mudei bg-black para bg-background para respeitar o tema (creme ou azul escuro)
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out
                ${isAnimatingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="relative w-80 h-80 animate-pulse">
                <Image
                    src="/lg.svg"
                    alt="Logo Emanuel Silvestre"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}