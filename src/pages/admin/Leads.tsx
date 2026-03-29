import { useState } from "react";
import { leads as mockLeads } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Eye, MessageCircle } from "lucide-react";

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

const Leads = () => {
  const [leads, setLeads] = useState(mockLeads);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<typeof mockLeads[0] | null>(null);

  const filtered = leads.filter((l) => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const updateStatus = (id: string, status: string) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, status } : l)));
    if (selected?.id === id) setSelected({ ...selected, status });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Gestión de Leads</h1>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar por nombre o empresa..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {Object.entries(statusLabels).map(([k, v]) => (
              <SelectItem key={k} value={k}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-xl bg-card border border-border shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left p-3 text-muted-foreground font-medium">Nombre</th>
                <th className="text-left p-3 text-muted-foreground font-medium hidden md:table-cell">Empresa</th>
                <th className="text-left p-3 text-muted-foreground font-medium hidden lg:table-cell">Servicio</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Estado</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id} className="border-b border-border/50 hover:bg-surface/50">
                  <td className="p-3 text-foreground font-medium">{lead.name}</td>
                  <td className="p-3 text-muted-foreground hidden md:table-cell">{lead.company}</td>
                  <td className="p-3 text-muted-foreground text-xs hidden lg:table-cell">{lead.service_interest}</td>
                  <td className="p-3">
                    <Badge variant="secondary" className={statusColors[lead.status]}>{statusLabels[lead.status]}</Badge>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" onClick={() => setSelected(lead)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" asChild>
                        <a href={`https://wa.me/${lead.phone?.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4 text-green-500" />
                        </a>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead detail modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Email:</span> <p className="text-foreground">{selected.email}</p></div>
                <div><span className="text-muted-foreground">Teléfono:</span> <p className="text-foreground">{selected.phone}</p></div>
                <div><span className="text-muted-foreground">Empresa:</span> <p className="text-foreground">{selected.company}</p></div>
                <div><span className="text-muted-foreground">Fuente:</span> <p className="text-foreground capitalize">{selected.source}</p></div>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Servicio de interés:</span>
                <p className="text-foreground">{selected.service_interest}</p>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Mensaje:</span>
                <p className="text-foreground">{selected.message}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground block mb-2">Cambiar estado:</span>
                <Select value={selected.status} onValueChange={(v) => updateStatus(selected.id, v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(statusLabels).map(([k, v]) => (
                      <SelectItem key={k} value={k}>{v}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button variant="gold" className="w-full" asChild>
                <a href={`https://wa.me/${selected.phone?.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contactar por WhatsApp
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Leads;
