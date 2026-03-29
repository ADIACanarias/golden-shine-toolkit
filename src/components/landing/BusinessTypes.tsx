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
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Sectores
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiencia probada en <span className="text-gradient-gold">tu sector</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hemos trabajado con más de 200 empresas de 20 industrias distintas. Conocemos los retos de cada una.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {types.map((t, i) => (
            <div
              key={i}
              className={`animate-fade-up delay-${(i + 1) * 100} group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 cursor-default`}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
                <t.icon className="h-7 w-7 text-gold group-hover:text-accent-foreground transition-colors" />
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
