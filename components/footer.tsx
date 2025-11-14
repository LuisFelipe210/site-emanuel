import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-gray-300 py-12 border-t border-[#2a2a2a]
                           dark:bg-white dark:text-gray-900 dark:border-t dark:border-gray-200"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/lg.svg"
                                alt="Logo Emanuel Silvestre"
                                width={56}
                                height={56}
                                className="object-contain"
                            />
                            <div className="flex flex-col leading-tight">
                                <span className="text-xl font-semibold text-primary dark:text-[#d4af37] tracking-tight">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-sm font-medium text-gray-400 dark:text-gray-600">
                                    Advocacia
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white dark:text-gray-900 mb-4">Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-600">
                            <li><a href="#servicos" className="hover:text-primary dark:hover:text-[#d4af37] transition">Serviços</a></li>
                            <li><a href="#sobre" className="hover:text-primary dark:hover:text-[#d4af37] transition">Sobre</a></li>
                            <li><a href="#depoimentos" className="hover:text-primary dark:hover:text-[#d4af37] transition">Depoimentos</a></li>
                            <li><a href="#contato" className="hover:text-primary dark:hover:text-[#d4af37] transition">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white dark:text-gray-900 mb-4">Contato</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0
                                                dark:bg-[#d4af37]/10"
                                >
                                    <Phone className="text-primary dark:text-[#d4af37]" size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 dark:text-gray-600 text-sm">Telefone</p>
                                    <a href="tel:+5587996128608" className="text-sm font-medium text-white dark:text-gray-900 hover:text-primary dark:hover:text-[#d4af37] transition">
                                        (87) 99612-8608
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0
                                                dark:bg-[#d4af37]/10"
                                >
                                    <Mail className="text-primary dark:text-[#d4af37]" size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 dark:text-gray-600 text-sm">Email</p>
                                    <a href="mailto:smazen21sv@gmail.com" className="text-sm font-medium text-white dark:text-gray-900 hover:text-primary dark:hover:text-[#d4af37] transition">
                                        smazen21sv@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0
                                                dark:bg-[#d4af37]/10"
                                >
                                    <MapPin className="text-primary dark:text-[#d4af37]" size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 dark:text-gray-600 text-sm">Endereço</p>
                                    <p className="text-sm font-medium text-white dark:text-gray-900">Campo Formoso, BA - Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white dark:text-gray-900 mb-4">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/emanuelsilvestre.adv" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary/20
                                          dark:bg-[#d4af37]/10 dark:text-[#d4af37] dark:hover:bg-[#d4af37]/20 transition"
                            >
                                <Instagram size={20} />
                            </a>
                            <a href="#"
                               className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary/20
                                          dark:bg-[#d4af37]/10 dark:text-[#d4af37] dark:hover:bg-[#d4af37]/20 transition"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:smazen21sv@gmail.com"
                               className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary/20
                                          dark:bg-[#d4af37]/10 dark:text-[#d4af37] dark:hover:bg-[#d4af37]/20 transition"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400
                                dark:border-gray-200 dark:text-gray-600"
                >
                    <p>&copy; 2025 Emanuel Silvestre. Todos os direitos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary dark:hover:text-[#d4af37] transition">Política de Privacidade</a>
                        <a href="#" className="hover:text-primary dark:hover:text-[#d4af37] transition">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}