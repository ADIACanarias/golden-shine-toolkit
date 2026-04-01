import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ctaBg from "@/assets/cta-bg.jpg";

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

  const { data: services = [] } = useQuery({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      company: form.company || null,
      service_interest: form.service_interest || null,
      message: form.message || null,
      source: "web",
    });

    if (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      setForm({ name: "", email: "", phone: "", company: "", service_interest: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-navy-dark/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          {/* Left info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                Contacto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Solicita tu <span className="text-gradient-gold">Diagnóstico Gratuito</span>
              </h2>
              <p className="text-primary-foreground/60 text-lg leading-relaxed">
                Analizamos tu negocio y te proponemos un plan de acción personalizado, sin compromiso ni coste.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-primary-foreground/40 text-sm">Teléfono</p>
                  <p className="text-primary-foreground font-medium">+34 660 833 897</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-primary-foreground/40 text-sm">Email</p>
                  <p className="text-primary-foreground font-medium">info@adiacanarias.es</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-primary-foreground/40 text-sm">Oficina</p>
                  <p className="text-primary-foreground font-medium">Las Palmas de Gran Canaria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-card/95 backdrop-blur-sm border border-border shadow-card space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Nombre completo *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email corporativo *"
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
                placeholder="Nombre de la empresa"
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
              placeholder="Cuéntanos sobre tu empresa y sus objetivos comerciales..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button variant="gold" size="lg" className="w-full" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Solicitar Diagnóstico Gratuito"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Al enviar aceptas nuestra{" "}
              <a href="/privacidad" className="text-gold hover:underline">
                política de privacidad
              </a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
