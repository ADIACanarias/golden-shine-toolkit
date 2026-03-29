import { services } from "@/data/mockData";
import { MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb,
};

const Services = () => {
  const activeServices = services.filter((s) => s.is_active);

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-gradient-gold">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones digitales diseñadas para automatizar, escalar y rentabilizar tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <div
                key={service.id}
                className={`animate-fade-up delay-${(i + 1) * 100} group p-6 rounded-xl bg-card border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <Icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
