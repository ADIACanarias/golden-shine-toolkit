import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Gracias = () => {
  const navigate = useNavigate();

  // Redirige automáticamente al inicio después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-8">

        {/* Icono de éxito */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-gold" />
          </div>
        </div>

        {/* Texto principal */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium">
            ¡Solicitud recibida!
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
            Gracias por contactarnos
          </h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            Hemos recibido tu solicitud de diagnóstico gratuito.
            Nuestro equipo se pondrá en contacto contigo en{" "}
            <strong className="text-primary-foreground">menos de 24 horas</strong>.
          </p>
        </div>

        {/* Qué esperar */}
        <div className="p-6 rounded-2xl bg-navy-light/20 border border-navy-light/30 text-left space-y-4">
          <h3 className="font-semibold text-primary-foreground text-sm uppercase tracking-wider">
            ¿Qué pasa ahora?
          </h3>
          <ul className="space-y-3">
            {[
              "Revisamos tu solicitud y analizamos tu negocio",
              "Te llamamos para entender tus objetivos",
              "Te presentamos un plan de acción personalizado sin coste",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open("https://wa.me/34660833897?text=Hola%2C%20acabo%20de%20enviar%20el%20formulario%20en%20vuestra%20web", "_blank")}
          >
            Contactar por WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="gold-outline"
            size="lg"
            onClick={() => navigate("/")}
          >
            <Home className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </div>

        <p className="text-primary-foreground/30 text-xs">
          Serás redirigido al inicio automáticamente en 10 segundos
        </p>
      </div>
    </div>
  );
};

export default Gracias;
