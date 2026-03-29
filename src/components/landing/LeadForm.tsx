import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { services } from "@/data/mockData";

const LeadForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service_interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock submit — will be replaced with Supabase
    await new Promise((r) => setTimeout(r, 1000));

    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });
    setForm({ name: "", email: "", phone: "", company: "", service_interest: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solicita tu <span className="text-gradient-gold">Diagnóstico Gratuito</span>
            </h2>
            <p className="text-muted-foreground">
              Analizamos tu negocio y te proponemos un plan de acción sin compromiso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Nombre completo *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email *"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Teléfono"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Input
                placeholder="Empresa"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <Select
              value={form.service_interest}
              onValueChange={(v) => setForm({ ...form, service_interest: v })}
            >
              <SelectTrigger>
                <SelectValue placeholder="¿Qué servicio te interesa?" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.id} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Cuéntanos sobre tu negocio y tus objetivos..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button variant="gold" size="lg" className="w-full" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Diagnóstico Gratis"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Al enviar aceptas nuestra{" "}
              <a href="/privacidad" className="text-gold hover:underline">política de privacidad</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
