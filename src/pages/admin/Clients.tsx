import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DollarSign, Edit, Search } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Client = Database["public"]["Tables"]["clients"]["Row"];

const Clients = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Client | null>(null);
  const [editForm, setEditForm] = useState({ mrr: 0 });

  const { data: clients = [] } = useQuery({
    queryKey: ["admin-clients"],
    queryFn: async () => {
      const { data, error } = await supabase.from("clients").select("*");
      if (error) throw error;
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, mrr }: { id: string; mrr: number }) => {
      const { error } = await supabase.from("clients").update({ mrr }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-clients"] });
      setEditing(null);
    },
  });

  const filtered = clients.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || (c.company || "").toLowerCase().includes(search.toLowerCase())
  );

  const totalMrr = clients.reduce((sum, c) => sum + Number(c.mrr), 0);

  const startEdit = (client: Client) => {
    setEditing(client);
    setEditForm({ mrr: Number(client.mrr) });
  };

  const saveEdit = () => {
    if (!editing) return;
    updateMutation.mutate({ id: editing.id, mrr: editForm.mrr });
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
              <span className="text-lg font-bold text-gold">{Number(client.mrr)}€/mes</span>
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
