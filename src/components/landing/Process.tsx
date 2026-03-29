import { Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico Gratuito",
    description: "Analizamos tu negocio, tus canales digitales y tus objetivos. Identificamos las oportunidades de automatización con mayor impacto.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Implementación a Medida",
    description: "Diseñamos e implementamos las soluciones adaptadas a tu negocio. Chatbots, web, CRM... todo integrado y funcionando en días.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Resultados & Optimización",
    description: "Monitorizamos métricas en tiempo real y optimizamos continuamente para maximizar tu retorno de inversión.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Cómo <span className="text-gradient-gold">Trabajamos</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Un proceso simple y efectivo para transformar tu negocio digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`animate-fade-up delay-${(i + 1) * 200} relative text-center`}
            >
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-navy-light/50 border border-gold/20 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-gold" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-sm font-bold text-accent-foreground shadow-gold">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">{step.title}</h3>
              <p className="text-primary-foreground/50 text-sm">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-16 border-t-2 border-dashed border-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
