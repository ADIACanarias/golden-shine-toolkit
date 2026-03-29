import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "+200", label: "Empresas confían en nosotros", icon: Users },
  { value: "3x", label: "Más conversiones de media", icon: TrendingUp },
  { value: "7 días", label: "Para ver resultados", icon: Zap },
];

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy/75" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
            Soluciones digitales para empresas que quieren crecer
          </div>

          <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1]">
            Impulsa tu negocio con{" "}
            <span className="text-gradient-gold">tecnología inteligente</span>
          </h1>

          <p className="animate-fade-up delay-200 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
            Automatizamos la captación de clientes, optimizamos tus procesos comerciales
            y creamos experiencias digitales que generan resultados medibles para tu empresa.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <Button variant="gold" size="lg" onClick={() => scrollTo("#contacto")}>
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="gold-outline" size="lg" onClick={() => scrollTo("#servicios")}>
              Descubrir Servicios
            </Button>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up delay-400 grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/10 max-w-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <stat.icon className="h-4 w-4 text-gold" />
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</span>
                </div>
                <span className="text-xs text-primary-foreground/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
