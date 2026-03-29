import { Clock, TrendingDown, MessageSquareOff, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Pierdes horas en tareas repetitivas",
    description:
      "Tu equipo comercial dedica más tiempo a gestionar consultas que a cerrar ventas. La automatización libera ese tiempo.",
  },
  {
    icon: TrendingDown,
    title: "Tus leads se enfrían sin respuesta",
    description:
      "Un cliente potencial espera respuesta en minutos. Si tardas, se va con tu competencia. No puedes estar 24/7 pendiente.",
  },
  {
    icon: MessageSquareOff,
    title: "Tu web no genera confianza",
    description:
      "Una presencia digital poco profesional puede costarte contratos. Tu web debería ser tu mejor comercial, disponible siempre.",
  },
  {
    icon: DollarSign,
    title: "Inviertes sin medir resultados",
    description:
      "Sin datos claros, cada euro invertido en marketing es una apuesta. Necesitas visibilidad total sobre tu retorno.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            El reto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Tu negocio enfrenta estos <span className="text-gradient-gold">desafíos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Son problemas comunes en empresas que aún no han digitalizado sus procesos comerciales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className={`animate-fade-up delay-${(i + 1) * 100} group flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <point.icon className="h-7 w-7 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5 text-lg">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
