import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/brand/inmove-mark.svg" alt="Logo InMove" className="h-10 w-10 rounded-xl" loading="lazy" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                InMove
              </span>
            </div>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              A InMove conecta marcas e pessoas em movimento com mídia digital urbana orientada por dados e rotas reais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-white/60 hover:text-white transition-colors">Topo</a></li>
              <li><a href="#sobre" className="text-white/60 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#showcase" className="text-white/60 hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#cases" className="text-white/60 hover:text-white transition-colors">Resultados</a></li>
              <li><a href="#planos" className="text-white/60 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#contato" className="text-white/60 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li>contato@inmove.com.br</li>
              <li>(11) 99999-9999</li>
              <li className="pt-4">
                Av. Paulista, 1000 - Bela Vista<br />
                São Paulo - SP, 01310-100
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} InMove Publicidade S.A. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
