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
    <section id="testimonios" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Lo que dicen nuestros <span className="text-gradient-gold">clientes</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Resultados reales de negocios como el tuyo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-xl bg-navy-light/40 border border-navy-light/30 backdrop-blur-sm"
            >
              <Quote className="h-8 w-8 text-gold/30 mb-4" />
              <p className="text-primary-foreground/70 text-sm mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div>
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
