import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageGallery } from "@/components/ImageGallery";
import { 
  Fuel, Gauge, Settings2, Star, Phone, MessageCircle, 
  ArrowLeft, Check, Shield, Car, Calendar, Palette
} from "lucide-react";

import car1 from "@/assets/cars/car-1.jpg";
import car2 from "@/assets/cars/car-2.jpg";
import car3 from "@/assets/cars/car-3.jpg";
import car4 from "@/assets/cars/car-4.jpg";
import car5 from "@/assets/cars/car-5.jpg";
import car6 from "@/assets/cars/car-6.jpg";

// All car images for gallery use
const allCarImages = [car1, car2, car3, car4, car5, car6];

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

const cars = [
  {
    id: "1",
    image: car1,
    name: "Mercedes-Benz S-Class",
    year: 2023,
    mileage: "15,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Excellent",
    featured: true,
    price: "$95,000",
    color: "Obsidian Black",
    engine: "3.0L Inline-6 Turbo",
    description: "Experience unparalleled luxury with the flagship Mercedes-Benz S-Class. This executive sedan combines cutting-edge technology with supreme comfort, making every journey an extraordinary experience.",
    features: [
      "MBUX infotainment system",
      "Burmester 3D surround sound",
      "Active ambient lighting",
      "Massage seats front and rear",
      "Head-up display",
      "360-degree camera",
      "Adaptive cruise control",
      "Rear-seat entertainment"
    ],
  },
  {
    id: "2",
    image: car2,
    name: "Range Rover Sport",
    year: 2023,
    mileage: "22,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Excellent",
    featured: false,
    price: "$85,000",
    color: "Fuji White",
    engine: "3.0L Diesel I6",
    description: "The Range Rover Sport combines dynamic performance with legendary Land Rover capability. Perfect for both city driving and off-road adventures across East Africa.",
    features: [
      "Terrain response system",
      "Air suspension",
      "Panoramic roof",
      "Meridian sound system",
      "Matrix LED headlights",
      "Wade sensing",
      "Touch Pro Duo",
      "Heated steering wheel"
    ],
  },
  {
    id: "3",
    image: car3,
    name: "BMW X5 xDrive",
    year: 2022,
    mileage: "35,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Very Good",
    featured: true,
    price: "$72,000",
    color: "Arctic Grey",
    engine: "3.0L TwinPower Turbo",
    description: "The BMW X5 delivers the ultimate driving pleasure in a spacious SUV package. With its powerful engine and sophisticated suspension, it's equally at home on highways and city streets.",
    features: [
      "iDrive 8 system",
      "Harman Kardon audio",
      "Gesture control",
      "Live cockpit professional",
      "Parking assistant plus",
      "Active protection",
      "Adaptive LED headlights",
      "Electric tailgate"
    ],
  },
  {
    id: "4",
    image: car4,
    name: "Toyota Land Cruiser V8",
    year: 2021,
    mileage: "48,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Very Good",
    featured: false,
    price: "$78,000",
    color: "Silver Metallic",
    engine: "4.5L V8 Twin Turbo Diesel",
    description: "The legendary Toyota Land Cruiser V8 is built for African roads. Renowned for its reliability and rugged capability, this is the preferred choice for adventurers and executives alike.",
    features: [
      "Multi-terrain select",
      "Crawl control",
      "Kinetic dynamic suspension",
      "Cool box",
      "Premium leather interior",
      "JBL audio system",
      "Multi-terrain monitor",
      "Third row seating"
    ],
  },
  {
    id: "5",
    image: car5,
    name: "Audi Q7 55 TFSI",
    year: 2023,
    mileage: "18,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Excellent",
    featured: true,
    price: "$82,000",
    color: "Navarra Blue",
    engine: "3.0L V6 TFSI",
    description: "The Audi Q7 combines Quattro all-wheel drive capability with luxurious refinement. Its spacious interior and advanced technology make it the perfect family SUV.",
    features: [
      "Quattro all-wheel drive",
      "Virtual cockpit plus",
      "Bang & Olufsen 3D sound",
      "Adaptive air suspension",
      "Matrix LED headlights",
      "Four-zone climate",
      "Audi pre sense city",
      "Power-adjustable seats"
    ],
  },
  {
    id: "6",
    image: car6,
    name: "Porsche Cayenne Turbo",
    year: 2023,
    mileage: "12,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Excellent",
    featured: true,
    price: "$145,000",
    color: "Carmine Red",
    engine: "4.0L V8 Twin Turbo",
    description: "The Porsche Cayenne Turbo delivers sports car performance in an SUV body. With its powerful V8 engine and dynamic chassis, it's the ultimate performance SUV.",
    features: [
      "Sport Chrono package",
      "PASM adaptive suspension",
      "Porsche Ceramic brakes",
      "Bose surround sound",
      "Sport exhaust system",
      "Rear-axle steering",
      "Night vision assist",
      "Panoramic tilt roof"
    ],
  },
];

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Vehicle Not Found</h1>
            <Link to="/car-deals">
              <Button variant="gold">Back to Car Deals</Button>
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
        <title>{`${car.name} (${car.year}) | Kokonation Car Deals`}</title>
        <meta name="description" content={car.description || ''} />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/car-deals"
            className="absolute top-24 left-4 md:left-8 z-10"
          >
            <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Car Deals
            </Button>
          </Link>

          {/* Badges */}
          <div className="absolute top-24 right-4 md:right-8 flex gap-2 z-10">
            <Badge className="bg-white/95 text-navy-dark font-semibold shadow-lg backdrop-blur-sm">
              {car.condition}
            </Badge>
            {car.featured && (
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
                      {car.name}
                    </h1>
                    <p className="text-muted-foreground">{car.year} • {car.mileage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl md:text-4xl font-bold text-gold">
                      {car.price}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{car.year}</p>
                      <p className="text-sm text-muted-foreground">Year</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Gauge className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{car.mileage}</p>
                      <p className="text-sm text-muted-foreground">Mileage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Fuel className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{car.fuel}</p>
                      <p className="text-sm text-muted-foreground">Fuel Type</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Settings2 className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{car.transmission}</p>
                      <p className="text-sm text-muted-foreground">Transmission</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid sm:grid-cols-2 gap-4 py-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-sm text-muted-foreground">Exterior Color</p>
                      <p className="font-medium text-foreground">{car.color}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-sm text-muted-foreground">Engine</p>
                      <p className="font-medium text-foreground">{car.engine}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-6">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Car className="w-5 h-5 text-gold" />
                    About This Vehicle
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {car.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Settings2 className="w-5 h-5 text-gold" />
                  Features & Equipment
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
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
                images={[car.image, ...allCarImages.filter(img => img !== car.image)].slice(0, 6)} 
                alt={car.name} 
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-card rounded-2xl p-6 shadow-xl border border-border sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Interested in this vehicle?
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Contact our car deals team for more information, test drives, or to make an offer.
                </p>
                
                <div className="space-y-3">
                  <a 
                    href={getWhatsAppLink(`Hi, I'm interested in the ${car.name} (${car.year}) priced at ${car.price}. Please provide more details.`)}
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
                    <span>Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-gold" />
                    <span>Mechanical Inspection Available</span>
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

export default CarDetails;