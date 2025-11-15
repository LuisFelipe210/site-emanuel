"use client" // Necessário para hooks no App Router

import { useState, useEffect } from 'react';
import Image from 'next/image';

type LogoIntroProps = {
    onAnimationComplete: () => void;
};

export default function LogoIntro({ onAnimationComplete }: LogoIntroProps) {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimatingOut(true);
        }, 1000);

        const totalDuration = setTimeout(() => {
            setIsVisible(false);
            if (onAnimationComplete) {
                onAnimationComplete();
            }
        }, 1800);

        return () => {
            clearTimeout(timer);
            clearTimeout(totalDuration);
        };
    }, [onAnimationComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out
                ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}
        >

            <div
                className={`animate-fade-in-up animate-scale-in-delay ${
                    isAnimatingOut ? 'opacity-0 transform -translate-y-4' : ''
                } transition-all duration-700 ease-in-out`}
            >
                <Image
                    src="/lg.svg"
                    alt="Logo Emanuel Silvestre"
                    width={500}
                    height={500}
                    priority
                />
            </div>
        </div>
    );
}