import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck, UserPlus, HelpCircle, ArrowRight, Check } from "lucide-react";

const agents = [
  {
    icon: MessageCircle,
    name: "Agente WhatsApp 24/7",
    description: "Responde automáticamente a tus clientes por WhatsApp a cualquier hora. Nunca pierdas una consulta por no estar disponible.",
    features: ["Respuestas automáticas con IA", "Historial de conversaciones", "Escalado a humano", "Notificaciones en tiempo real"],
    price: "197",
    perMonth: true,
    color: "from-green-500/20 to-green-600/10",
    border: "hover:border-green-500/40",
  },
  {
    icon: CalendarCheck,
    name: "Agente de Citas",
    description: "Gestiona reservas automáticamente. Verifica disponibilidad, confirma por email y avisa al negocio al instante.",
    features: ["Sincronización Google Calendar", "Confirmación automática por email", "Recordatorios al cliente", "Sin doble reserva"],
    price: "147",
    perMonth: true,
    color: "from-blue-500/20 to-blue-600/10",
    border: "hover:border-blue-500/40",
  },
  {
    icon: UserPlus,
    name: "Agente Captación Leads",
    description: "Captura y califica leads automáticamente con IA. Sabe cuáles son los más calientes y te avisa para cerrar la venta.",
    features: ["Puntuación IA del 1 al 10", "Guardado automático en CRM", "Email de acuse al cliente", "Alerta urgente por Telegram"],
    price: "147",
    perMonth: true,
    color: "from-gold/20 to-yellow-600/10",
    border: "hover:border-gold/40",
    popular: true,
  },
  {
    icon: HelpCircle,
    name: "Agente FAQ / Soporte",
    description: "Responde las preguntas frecuentes de tu negocio con IA. Aprende de tu propio contenido y recuerda el historial de cada cliente.",
    features: ["Knowledge base personalizada", "Memoria de conversación", "Respuestas 24/7", "Escalado automático"],
    price: "147",
    perMonth: true,
    color: "from-purple-500/20 to-purple-600/10",
    border: "hover:border-purple-500/40",
  },
];

interface AgentsProps {
  onSelectPlan: (planName: string) => void;
}

const Agents = ({ onSelectPlan }: AgentsProps) => {
  return (
    <section id="agentes" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Agentes IA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agentes de IA listos para{" "}
            <span className="text-gradient-gold">tu negocio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Implantamos agentes inteligentes en tu empresa en menos de 7 días. Cada agente trabaja 24/7 sin descanso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {agents.map((agent, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-6 rounded-2xl bg-card border transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-1 ${agent.border} ${agent.popular ? "border-gold/50 shadow-gold" : "border-border"}`}
            >
              {agent.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold text-accent-foreground text-xs font-semibold rounded-full shadow-gold">
                  Más contratado
                </span>
              )}

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} border border-white/10 flex items-center justify-center mb-5`}>
                <agent.icon className="h-7 w-7 text-gold" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{agent.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {agent.description}
              </p>

              <ul className="space-y-2 mb-6">
                {agent.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-4 h-4 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-gold" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-5">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-foreground">{agent.price}€</span>
                  <span className="text-muted-foreground text-sm">/mes</span>
                </div>
                <Button
                  variant={agent.popular ? "gold" : "gold-outline"}
                  className="w-full"
                  onClick={() => onSelectPlan(agent.name)}
                >
                  Contratar agente
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pack completo */}
        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-card border-2 border-gold/40 shadow-gold text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4">
            Ahorra un 30%
          </span>
          <h3 className="text-2xl font-bold text-foreground mb-2">Pack Completo — Los 4 Agentes</h3>
          <p className="text-muted-foreground mb-6">
            Implementamos todos los agentes integrados entre sí. Tu negocio completamente automatizado.
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-6">
            <span className="text-muted-foreground line-through text-lg">638€/mes</span>
            <span className="text-4xl font-extrabold text-foreground">447€</span>
            <span className="text-muted-foreground">/mes</span>
          </div>
          <Button variant="gold" size="lg" onClick={() => onSelectPlan("Pack Completo 4 Agentes IA")}>
            Quiero el pack completo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Agents;
