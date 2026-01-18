
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";

import Calculator from "./pages/Calculator";
import Team from "./pages/Team";
import Certificates from "./pages/Certificates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<Services />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/projects/:category" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/calculator" element={<Calculator />} />
          <Route path="/team" element={<Team />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/reviews" element={<NotFound />} />
          <Route path="/production" element={<NotFound />} />
          <Route path="/vacancies" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;