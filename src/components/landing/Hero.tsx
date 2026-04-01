import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const useCountUp = (target: number, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const Hero = () => {
  const [started, setStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const empresas = useCountUp(200, 1800, started);
  const conversiones = useCountUp(3, 1200, started);
  const dias = useCountUp(7, 1000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

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
            Inteligencia artificial para empresas en Canarias
          </div>

          <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1]">
            Lleva tu negocio canario al{" "}
            <span className="text-gradient-gold">siguiente nivel con IA</span>
          </h1>

          <p className="animate-fade-up delay-200 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
            Automatizamos la captación de clientes, optimizamos tus procesos comerciales
            y creamos soluciones de IA a medida para empresas en las Islas Canarias.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <Button variant="gold" size="lg" onClick={() => scrollTo("#contacto")}>
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="gold-outline" size="lg" onClick={() => scrollTo("#agentes")}>
              Ver Agentes IA
            </Button>
          </div>

          {/* Stats row con contador animado */}
          <div
            ref={statsRef}
            className="animate-fade-up delay-400 grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/10 max-w-xl"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gold" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  +{empresas}
                </span>
              </div>
              <span className="text-xs text-primary-foreground/50">Empresas confían en nosotros</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-gold" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {conversiones}x
                </span>
              </div>
              <span className="text-xs text-primary-foreground/50">Más conversiones de media</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-gold" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {dias} días
                </span>
              </div>
              <span className="text-xs text-primary-foreground/50">Para ver resultados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
