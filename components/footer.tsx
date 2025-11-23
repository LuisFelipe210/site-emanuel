import { Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-800 text-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Identidade e Sobre */}
                    <div className="space-y-4">
                        <a href="/" className="flex items-center gap-3 group w-fit">
                            <div className="relative h-10 w-10">
                                <img
                                    src="/logo.png"
                                    alt="Logo Emanuel Silvestre"
                                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity w-10 h-10"
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-bold text-white tracking-tight group-hover:text-yellow-500 transition-colors">
                                    Emanuel Silvestre
                                </span>
                                <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest">
                                    Advocacia Previdenciária
                                </span>
                            </div>
                        </a>
                        <p className="text-neutral-400 leading-relaxed max-w-xs">
                            Escritório especializado em garantir os direitos previdenciários de trabalhadores e segurados do INSS.
                        </p>
                        <div className="pt-2">
                            <p className="text-xs text-neutral-500 font-mono">OAB/BA 79.803</p>
                        </div>
                    </div>

                    {/* Contato e Endereço */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Contato & Endereço</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-yellow-600 shrink-0" />
                                <span>
                                    Campo Formoso, BA<br />
                                    <span className="text-neutral-500 text-xs">Atendimento Presencial e Online</span>
                                </span>
                            </li>
                            <li>
                                <a href="mailto:emanuelsilvestre.adv@gmail.com" className="flex items-center gap-3 hover:text-yellow-500 transition-colors">
                                    <Mail className="h-5 w-5 text-yellow-600 shrink-0" />
                                    emanuelsilvestre.adv@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links Rápidos e Redes */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Links Úteis</h4>
                        <ul className="space-y-2 mb-6">
                            <li><a href="#servicos" className="hover:text-yellow-500 transition-colors">Tipos de Aposentadoria</a></li>
                            <li><a href="#faq" className="hover:text-yellow-500 transition-colors">Perguntas Frequentes</a></li>
                            <li><a href="#contato" className="hover:text-yellow-500 transition-colors">Agendar Consulta</a></li>
                        </ul>

                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/emanuelsilvestre.adv"
                                target="_blank"
                                rel="noreferrer"
                                className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all border border-neutral-800"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center flex flex-col items-center gap-2">
                    <p className="text-neutral-500 text-xs">
                        &copy; {currentYear} Emanuel Silvestre Advocacia. Todos os direitos reservados.
                    </p>
                    <p className="text-neutral-600 text-[10px] max-w-2xl">
                        Este site não possui vínculo com o INSS. O advogado não promete resultado, pois a decisão final cabe ao Poder Judiciário ou Administrativo. Atuamos na defesa dos interesses do cliente conforme a lei.
                    </p>
                </div>
            </div>
        </footer>
    )
}