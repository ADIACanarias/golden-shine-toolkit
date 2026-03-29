import { useState } from "react";
import { services as mockServices } from "@/data/mockData";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb,
};

const AdminServices = () => {
  const [services, setServices] = useState(mockServices);

  const toggleActive = (id: string) => {
    setServices(services.map((s) => (s.id === id ? { ...s, is_active: !s.is_active } : s)));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Servicios</h1>

      <div className="grid gap-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Zap;
          return (
            <div key={service.id} className="p-5 rounded-xl bg-card border border-border shadow-card flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{service.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{service.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{service.is_active ? "Activo" : "Inactivo"}</span>
                <Switch checked={service.is_active} onCheckedChange={() => toggleActive(service.id)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminServices;
