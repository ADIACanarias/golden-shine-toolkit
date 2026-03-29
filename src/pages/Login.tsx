import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Zap, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock login — replace with Supabase Auth
    await new Promise((r) => setTimeout(r, 800));

    if (email === "admin@digitalboost.com" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin");
    } else {
      toast({
        title: "Error de autenticación",
        description: "Email o contraseña incorrectos.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-primary-foreground font-bold text-2xl">
            <Zap className="h-7 w-7 text-gold" />
            Digital<span className="text-gold">Boost</span>
          </a>
          <p className="text-primary-foreground/50 mt-2">Panel de Administración</p>
        </div>

        <div className="bg-navy-light/40 border border-navy-light/30 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="text-xl font-semibold text-primary-foreground mb-6">Iniciar Sesión</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm text-primary-foreground/60 mb-1 block">Email</label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@digitalboost.com"
                className="bg-navy/50 border-navy-light/30 text-primary-foreground placeholder:text-primary-foreground/30"
              />
            </div>
            <div>
              <label className="text-sm text-primary-foreground/60 mb-1 block">Contraseña</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-navy/50 border-navy-light/30 text-primary-foreground placeholder:text-primary-foreground/30 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/40 hover:text-gold"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button variant="gold" className="w-full" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/30 text-center mt-4">
            Demo: admin@digitalboost.com / admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
