import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb,
};

const Services = () => {
  const { data: activeServices = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true);
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="servicios" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Soluciones que <span className="text-gradient-gold">transforman</span> tu negocio
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Cada servicio está diseñado para resolver un problema concreto y generar retorno desde el primer mes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activeServices.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-navy-light/30 border border-navy-light/40 backdrop-blur-sm hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground/20 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-3">{service.name}</h3>
                <p className="text-sm text-primary-foreground/50 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
