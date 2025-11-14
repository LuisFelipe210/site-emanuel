"use client"

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
    const phoneNumber = "5587996128608";
    const message = "Olá! Vim pelo site e gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-16 h-16
        bg-[#25D366] text-white
        rounded-full
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-xl
        animate-wpp-pulse /* A animação do app/globals.css */
      "
            aria-label="Entre em contato pelo WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </Link>
    );
};