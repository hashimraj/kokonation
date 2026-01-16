import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageGallery } from "@/components/ImageGallery";
import { 
  MapPin, Bed, Bath, Square, Star, Phone, MessageCircle, 
  ArrowLeft, Check, Shield, Home, Building2, Calendar
} from "lucide-react";

import property1 from "@/assets/properties/property-1.jpg";
import property2 from "@/assets/properties/property-2.jpg";
import property3 from "@/assets/properties/property-3.jpg";
import property4 from "@/assets/properties/property-4.jpg";
import property5 from "@/assets/properties/property-5.jpg";
import property6 from "@/assets/properties/property-6.jpg";

// All property images for gallery use
const allPropertyImages = [property1, property2, property3, property4, property5, property6];

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

const properties = [
  {
    id: "1",
    image: property1,
    title: "Luxury Villa with Pool",
    location: "Karen, Nairobi",
    country: "Kenya",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "For Sale",
    featured: true,
    price: "$850,000",
    description: "Experience the epitome of luxury living in this stunning 5-bedroom villa nestled in the prestigious Karen neighborhood. This architectural masterpiece features a sparkling infinity pool, lush tropical gardens, and panoramic views of the surrounding hills.",
    features: [
      "Infinity pool with pool house",
      "Gourmet kitchen with premium appliances",
      "Master suite with walk-in closet",
      "Smart home automation system",
      "24/7 security with CCTV",
      "Spacious landscaped gardens",
      "Double garage with EV charging",
      "Staff quarters included"
    ],
    yearBuilt: 2021,
  },
  {
    id: "2",
    image: property2,
    title: "Modern High-Rise Apartment",
    location: "Victoria Island, Lagos",
    country: "Nigeria",
    beds: 3,
    baths: 2,
    sqft: "2,200",
    type: "For Sale",
    featured: false,
    price: "$450,000",
    description: "Sleek and contemporary 3-bedroom apartment in the heart of Victoria Island with stunning city views. This premium residence offers the perfect blend of luxury and convenience in Lagos' most sought-after address.",
    features: [
      "Floor-to-ceiling windows",
      "Open concept living",
      "Private balcony with city views",
      "Concierge services",
      "Gym and spa access",
      "Underground parking",
      "24-hour security",
      "Backup power supply"
    ],
    yearBuilt: 2023,
  },
  {
    id: "3",
    image: property3,
    title: "Contemporary Family Townhouse",
    location: "Westlands, Nairobi",
    country: "Kenya",
    beds: 4,
    baths: 3,
    sqft: "3,100",
    type: "For Rent",
    featured: true,
    price: "$3,500/month",
    description: "A beautifully designed family townhouse in the vibrant Westlands neighborhood. Perfect for modern families seeking comfort, style, and convenience with easy access to schools, shopping, and entertainment.",
    features: [
      "Private garden terrace",
      "Modern fitted kitchen",
      "Home office space",
      "Secure gated community",
      "Children's play area",
      "Covered parking for 2 cars",
      "Water storage tank",
      "Solar power backup"
    ],
    yearBuilt: 2020,
  },
  {
    id: "4",
    image: property4,
    title: "Premium Office Space",
    location: "Ikoyi, Lagos",
    country: "Nigeria",
    beds: 0,
    baths: 4,
    sqft: "8,500",
    type: "Commercial",
    featured: false,
    price: "$12,000/month",
    description: "State-of-the-art commercial office space in the prestigious Ikoyi district. Ideal for corporate headquarters or professional services firms seeking a prestigious Lagos address.",
    features: [
      "Open floor plan layout",
      "Executive conference rooms",
      "High-speed fiber internet",
      "Central air conditioning",
      "Reception and waiting area",
      "Kitchenette facilities",
      "Dedicated parking spaces",
      "Professional maintenance"
    ],
    yearBuilt: 2022,
  },
  {
    id: "5",
    image: property5,
    title: "Beachfront Paradise Villa",
    location: "Diani Beach, Mombasa",
    country: "Kenya",
    beds: 6,
    baths: 5,
    sqft: "5,800",
    type: "For Sale",
    featured: true,
    price: "$1,200,000",
    description: "Breathtaking beachfront villa with direct access to the pristine white sands of Diani Beach. This exceptional property offers unparalleled ocean views and the ultimate in coastal luxury living.",
    features: [
      "Private beach access",
      "Oceanfront infinity pool",
      "Outdoor entertainment areas",
      "Fully air-conditioned",
      "Beach gazebo",
      "Guest cottage",
      "Tropical landscaping",
      "Rental income potential"
    ],
    yearBuilt: 2019,
  },
  {
    id: "6",
    image: property6,
    title: "Executive Penthouse Suite",
    location: "Banana Island, Lagos",
    country: "Nigeria",
    beds: 4,
    baths: 4,
    sqft: "4,200",
    type: "For Sale",
    featured: true,
    price: "$2,500,000",
    description: "Ultra-luxury penthouse in Nigeria's most exclusive residential enclave. This extraordinary residence features premium finishes throughout and panoramic views of the Lagos lagoon.",
    features: [
      "Private elevator access",
      "Rooftop terrace",
      "Italian marble flooring",
      "Smart home integration",
      "Wine cellar",
      "Home theater",
      "Premium concierge services",
      "Helicopter pad access"
    ],
    yearBuilt: 2024,
  },
];

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Property Not Found</h1>
            <Link to="/real-estate">
              <Button variant="gold">Back to Properties</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${property.title} | Kokonation Real Estate`}</title>
        <meta name="description" content={property.description || ''} />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/real-estate"
            className="absolute top-24 left-4 md:left-8 z-10"
          >
            <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Button>
          </Link>

          {/* Badges */}
          <div className="absolute top-24 right-4 md:right-8 flex gap-2 z-10">
            <Badge className="bg-white/95 text-navy-dark font-semibold shadow-lg backdrop-blur-sm">
              {property.type}
            </Badge>
            {property.featured && (
              <Badge className="bg-gold text-navy-dark shadow-lg">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Featured
              </Badge>
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 -mt-24 relative z-10 pb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title Card */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1 text-gold" />
                      <span>{property.location}, {property.country}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl md:text-4xl font-bold text-gold">
                      {property.price}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-border">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <Bed className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{property.beds}</p>
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Bath className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{property.baths}</p>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Square className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{property.sqft}</p>
                      <p className="text-sm text-muted-foreground">Sq Ft</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{property.yearBuilt}</p>
                      <p className="text-sm text-muted-foreground">Year Built</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-6">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5 text-gold" />
                    About This Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-gold" />
                  Property Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <ImageGallery 
                images={[property.image, ...allPropertyImages.filter(img => img !== property.image)].slice(0, 6)} 
                alt={property.title} 
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-card rounded-2xl p-6 shadow-xl border border-border sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Interested in this property?
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Contact our real estate team for more information, viewings, or to make an offer.
                </p>
                
                <div className="space-y-3">
                  <a 
                    href={getWhatsAppLink(`Hi, I'm interested in the ${property.title} (${property.price}) in ${property.location}, ${property.country}. Please provide more details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="whatsapp" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+2550758905603">
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Shield className="w-4 h-4 text-gold" />
                    <span>Verified Property</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-gold" />
                    <span>Trusted Agent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default PropertyDetails;