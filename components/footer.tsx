import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Adicionei essa importação aqui

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">

                    {/* COLUNA 1: LOGO E DESCRIÇÃO */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                            <div className="relative h-10 w-10">
                                <Image
                                    src="/logo.png"
                                    alt="Logo Emanuel Silvestre"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-bold text-white tracking-tight group-hover:text-slate-300 transition-colors">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Advocacia Previdenciária
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-slate-400 max-w-xs">
                            Advocacia especializada em Direito Previdenciário. Lutando pelo seu benefício com ética e dedicação.
                        </p>
                    </div>

                    {/* COLUNA 2: NAVEGAÇÃO */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navegação</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#home" className="hover:text-white transition">Início</Link></li>
                            <li><Link href="#servicos" className="hover:text-white transition">Serviços</Link></li>
                            <li><Link href="#sobre" className="hover:text-white transition">Sobre</Link></li>
                            <li><Link href="#contato" className="hover:text-white transition">Contato</Link></li>
                        </ul>
                    </div>

                    {/* COLUNA 3: REDES SOCIAIS */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/emanuelsilvestre.adv" target="_blank" rel="noreferrer" className="hover:text-white transition"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
                            <a href="mailto:emanuelsilvestre.adv@gmail.com" className="hover:text-white transition"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Emanuel Silvestre Advocacia. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}