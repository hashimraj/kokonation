import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { FeaturedCars } from "@/components/FeaturedCars";
import { Businesses } from "@/components/Businesses";
import { Countries } from "@/components/Countries";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kokonation Group of Companies | Trusted Services Across Kenya & Nigeria</title>
        <meta
          name="description"
          content="Kokonation Group of Companies delivers excellence in real estate, car deals, travel & tours, and fashion across Kenya and Nigeria. Professional, reliable, and customer-focused services."
        />
        <meta
          name="keywords"
          content="Kokonation, real estate Kenya, car deals Nigeria, travel tours Africa, fashion Kenya Nigeria, property investment"
        />
        <link rel="canonical" href="https://kokonation.com" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kokonation Group of Companies | Trusted Services Across Kenya & Nigeria" />
        <meta property="og:description" content="Delivering excellence in real estate, car deals, travel & tours, and fashion across Kenya and Nigeria." />
        <meta property="og:site_name" content="Kokonation Group" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kokonation Group of Companies",
            description: "Multi-service enterprise operating in Kenya and Nigeria, offering real estate, car deals, travel & tours, and fashion services.",
            url: "https://kokonation.com",
            areaServed: ["Kenya", "Nigeria"],
            serviceType: ["Real Estate", "Car Dealership", "Travel & Tours", "Fashion Retail"],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <FeaturedProperties />
        <FeaturedCars />
        <Businesses />
        <Countries />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
