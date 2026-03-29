import { Clock, TrendingDown, MessageSquareOff, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Pierdes horas respondiendo mensajes",
    description: "Responder manualmente cada consulta te roba tiempo que podrías invertir en hacer crecer tu negocio.",
  },
  {
    icon: TrendingDown,
    title: "Leads que se enfrían",
    description: "Si no respondes en minutos, el cliente potencial se va con tu competencia. No puedes estar 24/7.",
  },
  {
    icon: MessageSquareOff,
    title: "Web que no convierte",
    description: "Tu web actual no transmite profesionalidad ni guía al visitante hacia la acción que necesitas.",
  },
  {
    icon: DollarSign,
    title: "Sin visibilidad de resultados",
    description: "No sabes qué canales te traen clientes ni cuánto te cuesta cada lead. Inviertes a ciegas.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Te suena alguno de estos <span className="text-gradient-gold">problemas</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si tu negocio enfrenta estos retos, la automatización digital es la solución.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className={`animate-fade-up delay-${(i + 1) * 100} group p-6 rounded-xl bg-card border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <point.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
