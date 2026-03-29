import { Stethoscope, Home, UtensilsCrossed, Dumbbell, ShoppingBag, GraduationCap, Briefcase, Car } from "lucide-react";

const types = [
  { icon: Stethoscope, label: "Clínicas y Salud" },
  { icon: Home, label: "Inmobiliarias" },
  { icon: UtensilsCrossed, label: "Restauración" },
  { icon: Dumbbell, label: "Fitness y Bienestar" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: GraduationCap, label: "Educación" },
  { icon: Briefcase, label: "Consultoría" },
  { icon: Car, label: "Automoción" },
];

const BusinessTypes = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluciones para <span className="text-gradient-gold">tu sector</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experiencia probada en más de 20 industrias diferentes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {types.map((t, i) => (
            <div
              key={i}
              className={`animate-fade-up delay-${(i + 1) * 100} flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 cursor-default`}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <t.icon className="h-6 w-6 text-gold" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
