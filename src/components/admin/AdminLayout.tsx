import { useState } from "react";
import { NavLink as RouterNavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, UserCheck, Settings, BarChart3, LogOut, Zap, Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const navItems = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Leads", to: "/admin/leads", icon: Users },
  { label: "Clientes", to: "/admin/clientes", icon: UserCheck },
  { label: "Servicios", to: "/admin/servicios", icon: Settings },
  { label: "Estadísticas", to: "/admin/estadisticas", icon: BarChart3 },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-surface">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-navy transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-navy-light/20 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-primary-foreground font-bold text-lg">
              <Zap className="h-5 w-5 text-gold" />
              Digital<span className="text-gold">Boost</span>
            </a>
            <button className="lg:hidden text-primary-foreground" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {navItems.map((item) => (
              <RouterNavLink
                key={item.to}
                to={item.to}
                end={item.to === "/admin"}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-gold/10 text-gold font-medium"
                      : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-navy-light/30"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </RouterNavLink>
            ))}
          </nav>

          <div className="p-3 border-t border-navy-light/20">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-primary-foreground/60 hover:text-destructive hover:bg-navy-light/30 transition-colors w-full"
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-navy-dark/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-card border-b border-border flex items-center px-4 gap-3">
          <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="font-semibold text-foreground">Admin Panel</h2>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
