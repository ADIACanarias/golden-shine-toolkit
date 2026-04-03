import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { MailX, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`;
        const res = await fetch(url, { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } });
        if (!res.ok) { setStatus("invalid"); return; }
        const data = await res.json();
        if (data.valid === false && data.reason === "already_unsubscribed") setStatus("already");
        else if (data.valid) setStatus("valid");
        else setStatus("invalid");
      } catch { setStatus("error"); }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    if (!token) return;
    setProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (error) { setStatus("error"); return; }
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch { setStatus("error"); }
    setProcessing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-card border border-border shadow-lg">
        {status === "loading" && (
          <>
            <Loader2 className="h-12 w-12 mx-auto text-gold animate-spin" />
            <p className="text-muted-foreground">Verificando...</p>
          </>
        )}
        {status === "valid" && (
          <>
            <MailX className="h-12 w-12 mx-auto text-gold" />
            <h1 className="text-2xl font-bold text-foreground">Cancelar suscripción</h1>
            <p className="text-muted-foreground">¿Estás seguro de que no deseas recibir más correos de AD IA Canarias?</p>
            <Button variant="gold" onClick={handleUnsubscribe} disabled={processing} className="w-full">
              {processing ? "Procesando..." : "Confirmar cancelación"}
            </Button>
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle className="h-12 w-12 mx-auto text-green-500" />
            <h1 className="text-2xl font-bold text-foreground">¡Listo!</h1>
            <p className="text-muted-foreground">Has sido dado de baja correctamente. No recibirás más correos.</p>
          </>
        )}
        {status === "already" && (
          <>
            <CheckCircle className="h-12 w-12 mx-auto text-muted-foreground" />
            <h1 className="text-2xl font-bold text-foreground">Ya estás dado de baja</h1>
            <p className="text-muted-foreground">Tu email ya estaba cancelado de nuestra lista.</p>
          </>
        )}
        {(status === "invalid" || status === "error") && (
          <>
            <AlertCircle className="h-12 w-12 mx-auto text-destructive" />
            <h1 className="text-2xl font-bold text-foreground">Enlace no válido</h1>
            <p className="text-muted-foreground">Este enlace de cancelación no es válido o ha expirado.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
