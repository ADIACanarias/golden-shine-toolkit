import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

const whatsappPlans = [
  {
    name: "Starter",
    price: "197",
    popular: false,
    features: ["1 chatbot básico", "500 mensajes/mes", "Respuestas automáticas", "Soporte email", "Panel de métricas"],
  },
  {
    name: "Business",
    price: "297",
    popular: true,
    features: ["3 chatbots avanzados", "2.000 mensajes/mes", "IA conversacional", "Soporte prioritario", "CRM integrado", "Integraciones API"],
  },
  {
    name: "Enterprise",
    price: "497",
    popular: false,
    features: ["Chatbots ilimitados", "Mensajes ilimitados", "IA personalizada", "Gestor dedicado", "SLA garantizado", "Desarrollo a medida"],
  },
];

const webPlans = [
  {
    name: "Landing Page",
    price: "497",
    popular: false,
    oneTime: true,
    features: ["Diseño personalizado", "Responsive", "SEO básico", "Formulario de contacto", "Entrega en 7 días"],
  },
  {
    name: "Web Corporativa",
    price: "997",
    popular: true,
    oneTime: true,
    features: ["Hasta 10 páginas", "Diseño premium", "SEO avanzado", "Blog integrado", "Panel administración", "Entrega en 15 días"],
  },
  {
    name: "E-commerce",
    price: "1.497",
    popular: false,
    oneTime: true,
    features: ["Tienda completa", "Pasarela de pago", "Gestión inventario", "SEO e-commerce", "Formación incluida", "Soporte 3 meses"],
  },
];

const PricingTable = ({ title, plans, onSelectPlan }: { title: string; plans: typeof whatsappPlans; onSelectPlan: (name: string) => void }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-foreground text-center mb-8">{title}</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`animate-fade-up relative p-8 rounded-2xl bg-card transition-all duration-300 ${
            plan.popular
              ? "border-2 border-gold shadow-gold scale-[1.02]"
              : "border border-border hover:border-gold/30 shadow-card"
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold text-accent-foreground text-xs font-semibold rounded-full shadow-gold">
              Más popular
            </span>
          )}
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-3">{plan.name}</h4>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-extrabold text-foreground">{plan.price}€</span>
              <span className="text-muted-foreground text-sm">
                {"oneTime" in plan ? " / único" : " /mes"}
              </span>
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-gold" />
                </div>
                {f}
              </li>
            ))}
          </ul>
          <Button
            variant={plan.popular ? "gold" : "gold-outline"}
            className="w-full"
            onClick={() => onSelectPlan(plan.name)}
          >
            Empezar ahora
          </Button>
        </div>
      ))}
    </div>
  </div>
);

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

const Pricing = ({ onSelectPlan }: PricingProps) => {
  return (
    <section id="precios" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inversión <span className="text-gradient-gold">transparente</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sin sorpresas ni letra pequeña. Elige el plan que mejor se adapte al tamaño de tu empresa.
          </p>
        </div>
        <PricingTable title="📱 Automatización WhatsApp" plans={whatsappPlans} onSelectPlan={onSelectPlan} />
        <PricingTable title="🌐 Desarrollo Web Profesional" plans={webPlans} onSelectPlan={onSelectPlan} />

        {/* Maintenance add-on */}
        <div className="max-w-3xl mx-auto mt-4 p-8 rounded-2xl bg-card border border-gold/20 shadow-card">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-semibold">Opcional</span>
                <h3 className="text-xl font-bold text-foreground">Gestión y Mantenimiento Web</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Delega la digitalización de tu negocio: actualizaciones, seguridad, hosting, soporte técnico y modificaciones menores incluidas. Tú céntrate en tu negocio, nosotros nos ocupamos de tu web.
              </p>
              <div className="flex items-start gap-2 text-xs text-muted-foreground/80 bg-muted/50 rounded-lg p-3">
                <Info className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Tu web es tuya.</strong> No hay permanencia ni ataduras. Si decides gestionar tu web por tu cuenta, te la entregamos sin problema. El servicio de mantenimiento es 100% opcional.
                </span>
              </div>
            </div>
            <div className="text-center md:text-right flex-shrink-0">
              <div className="flex items-baseline justify-center md:justify-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-foreground">29,90€</span>
                <span className="text-muted-foreground text-sm">/mes</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">por web contratada</p>
              <Button
                variant="gold-outline"
                onClick={() => onSelectPlan("Gestión y Mantenimiento Web")}
              >
                Más información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
