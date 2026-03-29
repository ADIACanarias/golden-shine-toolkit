import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, Globe } from "lucide-react";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 grid-tech opacity-40" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
              Automatización inteligente para tu negocio
            </div>

            <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              Escala tu negocio con{" "}
              <span className="text-gradient-gold">automatización digital</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg text-primary-foreground/60 max-w-xl">
              Chatbots de WhatsApp, webs de alto rendimiento y CRM inteligente.
              Convierte más clientes mientras duermes.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <Button variant="gold" size="lg" onClick={() => scrollTo("#contacto")}>
                Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="gold-outline" size="lg" onClick={() => scrollTo("#servicios")}>
                Ver Servicios
              </Button>
            </div>

            <div className="animate-fade-up delay-400 flex items-center gap-6 pt-4 text-primary-foreground/40 text-sm">
              <span>✓ Sin permanencia</span>
              <span>✓ Resultados en 7 días</span>
              <span>✓ Soporte 24/7</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex justify-center animate-fade-up delay-300">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-navy-light/50 border border-navy-light/30 backdrop-blur-sm p-8 flex flex-col justify-center items-center gap-6 animate-float">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-navy/60 border border-gold/20">
                    <Bot className="h-8 w-8 text-gold" />
                    <span className="text-xs text-primary-foreground/60">Chatbot IA</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-navy/60 border border-gold/20">
                    <Globe className="h-8 w-8 text-gold" />
                    <span className="text-xs text-primary-foreground/60">Web Pro</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-navy/60 border border-gold/20">
                    <BarChart3 className="h-8 w-8 text-gold" />
                    <span className="text-xs text-primary-foreground/60">Analytics</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gold/10 border border-gold/30">
                    <span className="text-2xl font-bold text-gold">3x</span>
                    <span className="text-xs text-primary-foreground/60">Más leads</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
