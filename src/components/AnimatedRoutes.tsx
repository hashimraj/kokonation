import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { PageTransition } from "./PageTransition";
import { Loader2 } from "lucide-react";

// Lazy load all pages for faster initial load
const Index = lazy(() => import("@/pages/Index"));
const RealEstate = lazy(() => import("@/pages/RealEstate"));
const PropertyDetails = lazy(() => import("@/pages/PropertyDetails"));
const CarDeals = lazy(() => import("@/pages/CarDeals"));
const CarDetails = lazy(() => import("@/pages/CarDetails"));
const TravelsTours = lazy(() => import("@/pages/TravelsTours"));
const Fashion = lazy(() => import("@/pages/Fashion"));
const FashionCategory = lazy(() => import("@/pages/FashionCategory"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-10 h-10 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Index />
              </PageTransition>
            }
          />
          <Route
            path="/real-estate"
            element={
              <PageTransition>
                <RealEstate />
              </PageTransition>
            }
          />
          <Route
            path="/real-estate/:id"
            element={
              <PageTransition>
                <PropertyDetails />
              </PageTransition>
            }
          />
          <Route
            path="/car-deals"
            element={
              <PageTransition>
                <CarDeals />
              </PageTransition>
            }
          />
          <Route
            path="/car-deals/:id"
            element={
              <PageTransition>
                <CarDetails />
              </PageTransition>
            }
          />
          <Route
            path="/travels-tours"
            element={
              <PageTransition>
                <TravelsTours />
              </PageTransition>
            }
          />
          <Route
            path="/fashion"
            element={
              <PageTransition>
                <Fashion />
              </PageTransition>
            }
          />
          <Route
            path="/fashion/:category"
            element={
              <PageTransition>
                <FashionCategory />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
