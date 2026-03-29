import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Clients from "./pages/admin/Clients";
import AdminServices from "./pages/admin/AdminServices";
import Statistics from "./pages/admin/Statistics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="clientes" element={<Clients />} />
            <Route path="servicios" element={<AdminServices />} />
            <Route path="estadisticas" element={<Statistics />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
