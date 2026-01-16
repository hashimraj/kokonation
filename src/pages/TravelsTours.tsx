import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, MapPin, Calendar, Users, Star, MessageCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

import property5 from "@/assets/properties/property-5.jpg";

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

const destinations = [
  {
    id: 1,
    name: "Zanzibar Beach Escape",
    location: "Tanzania",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 156,
    type: "Beach Holiday",
    featured: true,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Masai Mara Safari",
    location: "Kenya",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 243,
    type: "Safari",
    featured: true,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Dubai City Tour",
    location: "UAE",
    duration: "6 Days / 5 Nights",
    rating: 4.7,
    reviews: 189,
    type: "City Tour",
    featured: false,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Cape Town Explorer",
    location: "South Africa",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 134,
    type: "Adventure",
    featured: true,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Paris Romance Package",
    location: "France",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 98,
    type: "City Tour",
    featured: false,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Serengeti Wildlife Safari",
    location: "Tanzania",
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    reviews: 201,
    type: "Safari",
    featured: true,
    image: "https://images.unsplash.com/photo-1534177616064-ef1c2c4c3af4?w=600&h=400&fit=crop",
  },
];

const services = [
  { icon: Plane, title: "Flight Bookings", desc: "Domestic & international flights" },
  { icon: MapPin, title: "Hotel Reservations", desc: "Premium accommodations worldwide" },
  { icon: Calendar, title: "Tour Packages", desc: "Curated travel experiences" },
  { icon: Users, title: "Group Tours", desc: "Corporate & family packages" },
];

const TravelsTours = () => {
  return (
    <>
      <Helmet>
        <title>Travels & Tours | Kokonation Group - African & International Travel</title>
        <meta
          name="description"
          content="End-to-end travel solutions including flights, hotels, visa assistance, and curated tour packages across Africa and internationally."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        <PageHeader
          title="Travels & Tours"
          subtitle="End-to-end travel solutions including flight bookings, hotel reservations, visa assistance, and curated holiday packages."
          breadcrumb="Travels & Tours"
          backgroundImage={property5}
        />

        {/* Services Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-card rounded-xl p-4 text-center shadow-lg border border-border/50 hover:shadow-xl hover:border-gold/30 transition-all duration-300 group">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1">{service.title}</h3>
                    <p className="text-xs text-muted-foreground">{service.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <Plane className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Popular Destinations</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Tour Packages
                  </h2>
                </div>
                <a 
                  href={getWhatsAppLink("Hi, I'd like to inquire about your travel packages")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Travel Consultation
                  </Button>
                </a>
              </div>
            </AnimatedSection>

            {/* Destinations Grid - Compact modern cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
              {destinations.map((dest, index) => (
                <AnimatedSection key={dest.id} delay={index * 50}>
                  <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-gold/30">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={dest.image} 
                        alt={dest.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
                        <Badge className="bg-white/95 text-navy-dark font-semibold shadow-lg backdrop-blur-sm text-[10px] px-2 py-0.5">
                          {dest.type}
                        </Badge>
                        {dest.featured && (
                          <Badge className="bg-gold text-navy-dark shadow-lg text-[10px] px-2 py-0.5">
                            <Star className="w-2.5 h-2.5 mr-0.5 fill-current" />
                            Popular
                          </Badge>
                        )}
                      </div>

                      {/* Quick action button */}
                      <a 
                        href={getWhatsAppLink(`Hi, I'm interested in the ${dest.name} package`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-navy-dark shadow-lg"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="relative p-3">
                      <h3 className="font-bold text-sm text-foreground line-clamp-1 group-hover:text-gold transition-colors mb-1">
                        {dest.name}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-xs mb-2">
                        <MapPin className="w-3 h-3 mr-1 text-gold" />
                        {dest.location}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 text-muted-foreground text-[10px] mb-3">
                        <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {dest.duration.split('/')[0].trim()}
                        </span>
                        <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 fill-gold text-gold" />
                          {dest.rating}
                        </span>
                      </div>

                      <a 
                        href={getWhatsAppLink(`Hi, I'd like to know more about the ${dest.name} package`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button variant="whatsapp" size="sm" className="w-full text-[10px] h-7">
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Section */}
            <AnimatedSection delay={300}>
              <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-navy-dark to-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gold rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Plan Your Dream Vacation
                  </h3>
                  <p className="text-white/80 mb-8">
                    Let our travel experts craft the perfect itinerary for you. From visa assistance to custom tour packages, we've got you covered.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href={getWhatsAppLink("Hi, I'd like to book a trip")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="gold" size="lg">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book a Trip
                      </Button>
                    </a>
                    <Button variant="hero-outline" size="lg">
                      View All Packages
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default TravelsTours;
