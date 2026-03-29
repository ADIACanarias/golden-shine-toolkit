import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, Globe, Users, Mail, BarChart3, Zap, Lightbulb,
};

const AdminServices = () => {
  const queryClient = useQueryClient();

  const { data: services = [] } = useQuery({
    queryKey: ["admin-services"],
    queryFn: async () => {
      const { data, error } = await supabase.from("services").select("*");
      if (error) throw error;
      return data;
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, is_active }: { id: string; is_active: boolean }) => {
      const { error } = await supabase.from("services").update({ is_active }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-services"] }),
  });

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
                <Switch
                  checked={service.is_active}
                  onCheckedChange={(checked) => toggleMutation.mutate({ id: service.id, is_active: checked })}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminServices;
