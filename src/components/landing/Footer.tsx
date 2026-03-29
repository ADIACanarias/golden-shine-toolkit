import { Zap, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy border-t border-navy-light/20">
      {/* CTA band */}
      <div className="border-b border-navy-light/20">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-primary-foreground/50 text-sm mt-1">
              Habla con un experto y recibe un plan de acción personalizado.
            </p>
          </div>
          <Button variant="gold" size="lg" onClick={() => scrollTo("#contacto")}>
            Empieza Ahora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 text-primary-foreground font-bold text-xl mb-4">
              <Zap className="h-5 w-5 text-gold" />
              AD <span className="text-gold">IA</span> Canarias
            </a>
            <p className="text-primary-foreground/50 text-sm max-w-md leading-relaxed">
              Soluciones de inteligencia artificial y automatización digital para empresas en Canarias
              que quieren escalar sus procesos y multiplicar resultados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollTo("#servicios")} className="text-primary-foreground/50 hover:text-gold transition-colors">
                  Chatbots WhatsApp
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#servicios")} className="text-primary-foreground/50 hover:text-gold transition-colors">
                  Diseño Web
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#servicios")} className="text-primary-foreground/50 hover:text-gold transition-colors">
                  CRM Inteligente
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#precios")} className="text-primary-foreground/50 hover:text-gold transition-colors">
                  Precios
                </button>
              </li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a href="/aviso-legal" className="text-primary-foreground/50 hover:text-gold transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="/privacidad" className="text-primary-foreground/50 hover:text-gold transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
            <h4 className="font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-navy-light/50 border border-navy-light/30 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/30 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-navy-light/50 border border-navy-light/30 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/30 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-navy-light/50 border border-navy-light/30 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/30 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light/20 pt-6 text-center">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} AD IA Canarias. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
