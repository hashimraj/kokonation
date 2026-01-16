import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/hooks/use-theme";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { ComparisonProvider } from "@/contexts/ComparisonContext";
import { ComparisonDrawer } from "@/components/ComparisonDrawer";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { FavoritesDrawer } from "@/components/FavoritesDrawer";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <CartProvider>
        <FavoritesProvider>
          <ComparisonProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <ScrollToTop />
                  <AnimatedRoutes />
                  <ComparisonDrawer />
                  <FavoritesDrawer />
                  <CartDrawer />
                </BrowserRouter>
              </TooltipProvider>
            </QueryClientProvider>
          </ComparisonProvider>
        </FavoritesProvider>
      </CartProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
