import { useState } from "react";
import { clients as mockClients } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DollarSign, Edit, Search } from "lucide-react";

const Clients = () => {
  const [clients, setClients] = useState(mockClients);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<typeof mockClients[0] | null>(null);
  const [editForm, setEditForm] = useState({ mrr: 0 });

  const filtered = clients.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase())
  );

  const totalMrr = clients.reduce((sum, c) => sum + c.mrr, 0);

  const startEdit = (client: typeof mockClients[0]) => {
    setEditing(client);
    setEditForm({ mrr: client.mrr });
  };

  const saveEdit = () => {
    if (!editing) return;
    setClients(clients.map((c) => (c.id === editing.id ? { ...c, mrr: editForm.mrr } : c)));
    setEditing(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Clientes</h1>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 border border-gold/20">
          <DollarSign className="h-4 w-4 text-gold" />
          <span className="text-sm font-semibold text-gold">MRR: {totalMrr}€</span>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Buscar cliente..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="grid gap-4">
        {filtered.map((client) => (
          <div key={client.id} className="p-5 rounded-xl bg-card border border-border shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.company}</p>
              <p className="text-xs text-muted-foreground mt-1">{client.service}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600">Activo</Badge>
              <span className="text-lg font-bold text-gold">{client.mrr}€/mes</span>
              <Button size="icon" variant="ghost" onClick={() => startEdit(client)}>
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!editing} onOpenChange={() => setEditing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar {editing?.name}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">MRR (€/mes)</label>
                <Input type="number" value={editForm.mrr} onChange={(e) => setEditForm({ mrr: Number(e.target.value) })} />
              </div>
              <Button variant="gold" className="w-full" onClick={saveEdit}>Guardar</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Clients;
