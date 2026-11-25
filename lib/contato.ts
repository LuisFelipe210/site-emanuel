export const WHATSAPP_NUMERO = "5587996128608"
export const WHATSAPP_EXIBICAO = "(87) 99612-8608"
export const EMAIL = "emanuelsilvestre.adv@gmail.com"
export const INSTAGRAM = "https://instagram.com/emanuelsilvestre.adv"
export const HORARIO = "Seg a Sex, 08h às 18h"

export function waLink(mensagem?: string) {
    const base = `https://wa.me/${WHATSAPP_NUMERO}`
    return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base
}
