"use client"

import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
    const phoneNumber = "5587996128608";
    const message = "Olá! Vim pelo site e gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-16 h-16
        bg-primary text-white
        rounded-full
        shadow-xl shadow-green-900/20
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:-translate-y-1
        animate-bounce-slow
        border-2 border-white/20
      "
            aria-label="Entre em contato pelo WhatsApp"
        >
            <FaWhatsapp className="w-9 h-9" />
        </a>
    );
};