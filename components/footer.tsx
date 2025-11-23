import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Emanuel Silvestre</h3>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Advocacia especializada em Direito Previdenciário. Lutando pelo seu benefício com ética e dedicação.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navegação</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#home" className="hover:text-white transition">Início</Link></li>
                            <li><Link href="#servicos" className="hover:text-white transition">Serviços</Link></li>
                            <li><Link href="#sobre" className="hover:text-white transition">Sobre</Link></li>
                            <li><Link href="#contato" className="hover:text-white transition">Contato</Link></li>
                        </ul>
                    </div>
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