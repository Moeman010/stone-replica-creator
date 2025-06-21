
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import KlassiekPage from "./pages/KlassiekPage";
import ModernPage from "./pages/ModernPage";
import FamiliePage from "./pages/FamiliePage";
import HartVormPage from "./pages/HartVormPage";
import BoekVormPage from "./pages/BoekVormPage";
import NatuursteenPage from "./pages/NatuursteenPage";
import GranietPage from "./pages/GranietPage";
import MarmerPage from "./pages/MarmerPage";
import SearchResults from "./pages/SearchResults";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/klassiek" element={<KlassiekPage />} />
          <Route path="/modern" element={<ModernPage />} />
          <Route path="/familie" element={<FamiliePage />} />
          <Route path="/hart-vorm" element={<HartVormPage />} />
          <Route path="/boek-vorm" element={<BoekVormPage />} />
          <Route path="/natuursteen" element={<NatuursteenPage />} />
          <Route path="/graniet" element={<GranietPage />} />
          <Route path="/marmer" element={<MarmerPage />} />
          <Route path="/search" element={<SearchResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
