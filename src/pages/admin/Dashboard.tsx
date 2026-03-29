import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Users, DollarSign, TrendingUp, UserCheck } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Badge } from "@/components/ui/badge";

const statusColors: Record<string, string> = {
  new: "bg-blue-500/10 text-blue-600",
  contacted: "bg-yellow-500/10 text-yellow-600",
  qualified: "bg-green-500/10 text-green-600",
  proposal: "bg-purple-500/10 text-purple-600",
  won: "bg-emerald-500/10 text-emerald-600",
  lost: "bg-red-500/10 text-red-600",
};

const statusLabels: Record<string, string> = {
  new: "Nuevo",
  contacted: "Contactado",
  qualified: "Cualificado",
  proposal: "Propuesta",
  won: "Ganado",
  lost: "Perdido",
};

const Dashboard = () => {
  const { data: leads = [] } = useQuery({
    queryKey: ["admin-leads"],
    queryFn: async () => {
      const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: clients = [] } = useQuery({
    queryKey: ["admin-clients"],
    queryFn: async () => {
      const { data, error } = await supabase.from("clients").select("*");
      if (error) throw error;
      return data;
    },
  });

  const mrr = clients.reduce((sum, c) => sum + Number(c.mrr), 0);
  const conversionRate = leads.length > 0 ? Math.round((clients.length / leads.length) * 100) : 0;

  const kpis = [
    { label: "Total Leads", value: leads.length, icon: Users, color: "text-blue-500" },
    { label: "Clientes Activos", value: clients.length, icon: UserCheck, color: "text-emerald-500" },
    { label: "MRR", value: `${mrr}€`, icon: DollarSign, color: "text-gold" },
    { label: "Tasa Conversión", value: `${conversionRate}%`, icon: TrendingUp, color: "text-purple-500" },
  ];

  // Group leads by month
  const monthlyData = (() => {
    const months: Record<string, number> = {};
    leads.forEach((l) => {
      const d = new Date(l.created_at);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      months[key] = (months[key] || 0) + 1;
    });
    return Object.entries(months)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-6)
      .map(([key, count]) => {
        const [y, m] = key.split("-");
        const monthNames = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
        return { month: monthNames[parseInt(m) - 1], leads: count };
      });
  })();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <div key={i} className="p-5 rounded-xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-lg bg-surface flex items-center justify-center ${kpi.color}`}>
                <kpi.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="p-5 rounded-xl bg-card border border-border shadow-card">
        <h3 className="font-semibold text-foreground mb-4">Leads por Mes</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 30% 91%)" />
            <XAxis dataKey="month" stroke="hsl(215 10% 50%)" fontSize={12} />
            <YAxis stroke="hsl(215 10% 50%)" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(215 55% 12%)", border: "none", borderRadius: "8px", color: "white" }} />
            <Bar dataKey="leads" fill="hsl(37 93% 54%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-5 rounded-xl bg-card border border-border shadow-card">
        <h3 className="font-semibold text-foreground mb-4">Últimos Leads</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">Nombre</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Empresa</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Servicio</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {leads.slice(0, 5).map((lead) => (
                <tr key={lead.id} className="border-b border-border/50">
                  <td className="py-3 text-foreground">{lead.name}</td>
                  <td className="py-3 text-muted-foreground">{lead.company}</td>
                  <td className="py-3 text-muted-foreground text-xs">{lead.service_interest}</td>
                  <td className="py-3">
                    <Badge variant="secondary" className={statusColors[lead.status]}>
                      {statusLabels[lead.status]}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
