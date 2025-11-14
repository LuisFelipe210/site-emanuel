import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        // DE: bg-white text-gray-900 ... border-gray-200
        // PARA: bg-muted text-foreground ... border-border (Muted dá um leve contraste com o fundo)
        <footer className="bg-muted text-foreground py-12 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* --- Bloco do Logo/Nome Atualizado --- */}
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
                                {/* DE: text-[#d4af37] */}
                                {/* PARA: text-primary */}
                                <span className="text-xl font-semibold text-primary tracking-tight">
                                    Emanuel Silvestre
                                </span>
                                {/* DE: text-gray-600 */}
                                {/* PARA: text-muted-foreground */}
                                <span className="text-sm font-medium text-muted-foreground">
                                    Advocacia
                                </span>
                            </div>
                        </Link>
                    </div>
                    {/* --- Fim do Bloco --- */}

                    <div>
                        {/* DE: text-gray-900 */}
                        {/* PARA: text-foreground */}
                        <h4 className="font-semibold text-foreground mb-4">Links</h4>
                        {/* DE: text-gray-600 ... hover:text-[#d4af37] */}
                        {/* PARA: text-muted-foreground ... hover:text-primary */}
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#servicos" className="hover:text-primary transition">Serviços</a></li>
                            <li><a href="#sobre" className="hover:text-primary transition">Sobre</a></li>
                            <li><a href="#depoimentos" className="hover:text-primary transition">Depoimentos</a></li>
                            <li><a href="#contato" className="hover:text-primary transition">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        {/* DE: text-gray-900 */}
                        {/* PARA: text-foreground */}
                        <h4 className="font-semibold text-foreground mb-4">Contato</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                {/* DE: bg-[#d4af37]/10 ... text-[#d4af37] */}
                                {/* PARA: bg-primary/10 ... text-primary */}
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="text-primary" size={20} />
                                </div>
                                <div>
                                    {/* DE: text-gray-600 */}
                                    {/* PARA: text-muted-foreground */}
                                    <p className="text-muted-foreground text-sm">Telefone</p>
                                    {/* DE: text-gray-900 hover:text-[#d4af37] */}
                                    {/* PARA: text-foreground hover:text-primary */}
                                    <a href="tel:+5587996128608" className="text-sm font-medium text-foreground hover:text-primary transition">
                                        (87) 99612-8608
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* DE: bg-[#d4af37]/10 ... text-[#d4af37] */}
                                {/* PARA: bg-primary/10 ... text-primary */}
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    {/* DE: text-gray-600 */}
                                    {/* PARA: text-muted-foreground */}
                                    <p className="text-muted-foreground text-sm">Email</p>
                                    {/* DE: text-gray-900 hover:text-[#d4af37] */}
                                    {/* PARA: text-foreground hover:text-primary */}
                                    <a href="mailto:smazen21sv@gmail.com" className="text-sm font-medium text-foreground hover:text-primary transition">
                                        smazen21sv@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* DE: bg-[#d4af37]/10 ... text-[#d4af37] */}
                                {/* PARA: bg-primary/10 ... text-primary */}
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    {/* DE: text-gray-600 */}
                                    {/* PARA: text-muted-foreground */}
                                    <p className="text-muted-foreground text-sm">Endereço</p>
                                    {/* DE: text-gray-900 */}
                                    {/* PARA: text-foreground */}
                                    <p className="text-sm font-medium text-foreground">Campo Formoso, BA - Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* DE: text-gray-900 */}
                        {/* PARA: text-foreground */}
                        <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
                        <div className="flex gap-4">
                            {/* DE: bg-[#d4af37]/10 text-[#d4af37] ... hover:bg-[#d4af37]/20 */}
                            {/* PARA: bg-primary/10 text-primary ... hover:bg-primary/20 */}
                            <a href="https://instagram.com/emanuelsilvestre.adv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary/20 transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary/20 transition">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:smazen21sv@gmail.com" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary/20 transition">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* DE: border-gray-200 ... text-gray-600 ... hover:text-[#d4af37] */}
                {/* PARA: border-border ... text-muted-foreground ... hover:text-primary */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; 2025 Emanuel Silvestre. Todos os direitos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition">Política de Privacidade</a>
                        <a href="#" className="hover:text-primary transition">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}