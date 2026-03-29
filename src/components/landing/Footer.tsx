import { Zap, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-navy-light/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 text-primary-foreground font-bold text-xl mb-4">
              <Zap className="h-5 w-5 text-gold" />
              Digital<span className="text-gold">Boost</span>
            </a>
            <p className="text-primary-foreground/50 text-sm">
              Automatización digital inteligente para negocios que quieren escalar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/aviso-legal" className="text-primary-foreground/50 hover:text-gold transition-colors">Aviso Legal</a></li>
              <li><a href="/privacidad" className="text-primary-foreground/50 hover:text-gold transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-light/50 border border-navy-light/30 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/30 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-light/50 border border-navy-light/30 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/30 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-light/50 border border-navy-light/30 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/30 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light/20 pt-6 text-center">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} DigitalBoost. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
