import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*");
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="testimonios" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Empresas que ya <span className="text-gradient-gold">confían</span> en nosotros
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Resultados reales de negocios como el tuyo que han transformado sus procesos comerciales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative p-8 rounded-2xl bg-navy-light/30 border border-navy-light/40 backdrop-blur-sm hover:border-gold/20 transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-gold/20 mb-6" />
              <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="border-t border-primary-foreground/10 pt-4">
                <p className="font-semibold text-primary-foreground text-sm">{t.name}</p>
                <p className="text-primary-foreground/40 text-xs">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
