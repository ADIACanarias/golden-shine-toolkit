import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const COLORS = ["hsl(37 93% 54%)", "hsl(215 55% 40%)", "hsl(160 60% 45%)", "hsl(280 60% 50%)"];

const statusLabels: Record<string, string> = {
  new: "Nuevo", contacted: "Contactado", qualified: "Cualificado",
  proposal: "Propuesta", won: "Ganado", lost: "Perdido",
};

const Statistics = () => {
  const { data: leads = [] } = useQuery({
    queryKey: ["admin-leads"],
    queryFn: async () => {
      const { data, error } = await supabase.from("leads").select("*");
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

  const sourceData = Object.entries(
    leads.reduce<Record<string, number>>((acc, l) => {
      acc[l.source] = (acc[l.source] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), value }));

  const statusData = Object.entries(
    leads.reduce<Record<string, number>>((acc, l) => {
      acc[l.status] = (acc[l.status] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name: statusLabels[name] || name, value }));

  const revenueData = Object.entries(
    clients.reduce<Record<string, number>>((acc, c) => {
      const svc = c.service || "Otro";
      acc[svc] = (acc[svc] || 0) + Number(c.mrr);
      return acc;
    }, {})
  ).map(([service, revenue]) => ({ service, revenue }));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Estadísticas</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-card border border-border shadow-card">
          <h3 className="font-semibold text-foreground mb-4">Leads por Fuente</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {sourceData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="p-5 rounded-xl bg-card border border-border shadow-card">
          <h3 className="font-semibold text-foreground mb-4">Leads por Estado</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 30% 91%)" />
              <XAxis dataKey="name" stroke="hsl(215 10% 50%)" fontSize={11} />
              <YAxis stroke="hsl(215 10% 50%)" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(215 55% 12%)", border: "none", borderRadius: "8px", color: "white" }} />
              <Bar dataKey="value" fill="hsl(37 93% 54%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-5 rounded-xl bg-card border border-border shadow-card md:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Ingresos por Servicio (€/mes)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 30% 91%)" />
              <XAxis dataKey="service" stroke="hsl(215 10% 50%)" fontSize={12} />
              <YAxis stroke="hsl(215 10% 50%)" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(215 55% 12%)", border: "none", borderRadius: "8px", color: "white" }} />
              <Bar dataKey="revenue" fill="hsl(215 55% 40%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
