import { Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico",
    subtitle: "Analizamos tu negocio",
    description:
      "Evaluamos tus canales digitales, flujos comerciales y oportunidades de automatización con mayor impacto en tu facturación.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Implementación",
    subtitle: "Construimos la solución",
    description:
      "Diseñamos e implementamos las herramientas a medida: chatbots, web corporativa, CRM y automatizaciones — todo integrado.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Resultados",
    subtitle: "Optimizamos y escalamos",
    description:
      "Monitorizamos métricas clave en tiempo real y optimizamos continuamente para maximizar tu retorno de inversión.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Método
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Un proceso <span className="text-gradient-gold">simple y efectivo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            De la idea a los resultados en tres pasos claros, sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`animate-fade-up delay-${(i + 1) * 200} relative`}
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-sm font-bold text-accent-foreground shadow-gold">
                  {step.num}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 mt-3">
                  <step.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-gold font-medium mb-3">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 translate-x-0 w-8 border-t-2 border-dashed border-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
