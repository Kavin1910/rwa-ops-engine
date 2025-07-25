
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import CustodyReconciliation from "./pages/CustodyReconciliation";
import InvestorServices from "./pages/InvestorServices";
import RegulatoryCompliance from "./pages/RegulatoryCompliance";
import FinancialReporting from "./pages/FinancialReporting";
import TechnologyIntegration from "./pages/TechnologyIntegration";
import FundAdministration from "./pages/FundAdministration";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/custody-reconciliation" element={<CustodyReconciliation />} />
          <Route path="/investor-services" element={<InvestorServices />} />
          <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
          <Route path="/financial-reporting" element={<FinancialReporting />} />
          <Route path="/technology-integration" element={<TechnologyIntegration />} />
          <Route path="/fund-administration" element={<FundAdministration />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
