"use client"

import { FaWhatsapp } from "react-icons/fa"
import { waLink } from "@/lib/contato"

export const WhatsappButton = () => {
    return (
        <a
            href={waLink("Olá! Vim pelo site e gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com o Dr. Emanuel pelo WhatsApp"
            className="fixed bottom-5 right-5 z-40 flex size-16 items-center justify-center rounded-full bg-azul text-white shadow-[0_12px_28px_-10px_rgba(13,27,69,0.7)] ring-4 ring-ouro transition-transform duration-300 hover:-translate-y-1 sm:bottom-7 sm:right-7"
        >
            <FaWhatsapp className="size-8" aria-hidden="true" />
        </a>
    )
}
