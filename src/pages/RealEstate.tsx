import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { PropertyCard } from "@/components/PropertyCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Phone } from "lucide-react";

import property1 from "@/assets/properties/property-1.jpg";
import property2 from "@/assets/properties/property-2.jpg";
import property3 from "@/assets/properties/property-3.jpg";
import property4 from "@/assets/properties/property-4.jpg";
import property5 from "@/assets/properties/property-5.jpg";
import property6 from "@/assets/properties/property-6.jpg";

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
  },
];

const RealEstate = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate | Kokonation Group - Properties in Kenya & Nigeria</title>
        <meta
          name="description"
          content="Explore premium properties across Kenya and Nigeria. Luxury villas, apartments, commercial spaces, and land investments with Kokonation Real Estate."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        <PageHeader
          title="Real Estate"
          subtitle="Professional real estate services including property sales, rentals, leasing, and investment opportunities across Kenya and Nigeria."
          breadcrumb="Real Estate"
          backgroundImage={property1}
        />

        {/* Properties Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 text-gold mb-2">
                  <Building2 className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Our Listings</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Featured Properties
                </h2>
              </div>
              <Button variant="whatsapp" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Contact Real Estate Team
              </Button>
            </div>

            {/* Property Grid - Compact cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  image={property.image}
                  title={property.title}
                  location={property.location}
                  country={property.country}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  type={property.type}
                  featured={property.featured}
                  price={property.price}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-navy-dark to-navy relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-72 h-72 bg-gold rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Looking for a Specific Property?
                </h3>
                <p className="text-white/80 mb-8">
                  Our team can help you find the perfect property tailored to your needs and budget. Contact us for a personalized consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg">
                    Schedule Consultation
                  </Button>
                  <Button variant="hero-outline" size="lg">
                    View All Properties
                  </Button>
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

export default RealEstate;
