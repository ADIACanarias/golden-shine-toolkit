import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

const PricingTable = ({ title, plans }: { title: string; plans: typeof whatsappPlans }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-foreground text-center mb-8">{title}</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`animate-fade-up delay-${(i + 1) * 100} relative p-6 rounded-xl bg-card shadow-card transition-all duration-300 ${
            plan.popular
              ? "border-2 border-gold shadow-gold"
              : "border border-border hover:border-gold/30"
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-gold text-accent-foreground text-xs font-semibold rounded-full shadow-gold">
              Más popular
            </span>
          )}
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h4>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-extrabold text-foreground">{plan.price}€</span>
              <span className="text-muted-foreground text-sm">
                {"oneTime" in plan ? " / único" : " /mes"}
              </span>
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-gold flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <Button
            variant={plan.popular ? "gold" : "gold-outline"}
            className="w-full"
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            Empezar ahora
          </Button>
        </div>
      ))}
    </div>
  </div>
);

const Pricing = () => {
  return (
    <section id="precios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planes y <span className="text-gradient-gold">Precios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparentes, sin sorpresas. Elige el plan que mejor se adapte a tu negocio.
          </p>
        </div>
        <PricingTable title="📱 WhatsApp Automation" plans={whatsappPlans} />
        <PricingTable title="🌐 Diseño Web" plans={webPlans} />
      </div>
    </section>
  );
};

export default Pricing;
