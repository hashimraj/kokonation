import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { CarCard } from "@/components/CarCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Phone } from "lucide-react";

import car1 from "@/assets/cars/car-1.jpg";
import car2 from "@/assets/cars/car-2.jpg";
import car3 from "@/assets/cars/car-3.jpg";
import car4 from "@/assets/cars/car-4.jpg";
import car5 from "@/assets/cars/car-5.jpg";
import car6 from "@/assets/cars/car-6.jpg";

const cars = [
  {
    id: "1",
    image: car1,
    name: "Mercedes-Benz S-Class",
    year: 2024,
    mileage: "0 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Brand New",
    featured: true,
    price: "$95,000",
  },
  {
    id: "2",
    image: car2,
    name: "Toyota Land Cruiser V8",
    year: 2023,
    mileage: "12,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Pre-Owned",
    featured: true,
    price: "$78,000",
  },
  {
    id: "3",
    image: car3,
    name: "BMW X5 xDrive",
    year: 2024,
    mileage: "5,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Like New",
    featured: false,
    price: "$72,000",
  },
  {
    id: "4",
    image: car4,
    name: "Range Rover Sport",
    year: 2024,
    mileage: "0 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Brand New",
    featured: true,
    price: "$85,000",
  },
  {
    id: "5",
    image: car5,
    name: "Lexus LX 570",
    year: 2023,
    mileage: "8,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Pre-Owned",
    featured: false,
    price: "$68,000",
  },
  {
    id: "6",
    image: car6,
    name: "Audi Q7 Premium",
    year: 2024,
    mileage: "3,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Like New",
    featured: true,
    price: "$82,000",
  },
];

const CarDeals = () => {
  return (
    <>
      <Helmet>
        <title>Car Deals | Kokonation Group - Premium Vehicles in Kenya & Nigeria</title>
        <meta
          name="description"
          content="Explore our premium vehicle collection. New and pre-owned luxury cars with transparent pricing across Kenya and Nigeria."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        <PageHeader
          title="Car Deals"
          subtitle="Reliable car dealership services offering new and used vehicles, imports, sales, and car sourcing with transparent pricing."
          breadcrumb="Car Deals"
          backgroundImage={car1}
        />

        {/* Cars Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 text-gold mb-2">
                  <Car className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Our Collection</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Premium Vehicles
                </h2>
              </div>
              <Button variant="whatsapp" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </div>

            {/* Cars Grid - Compact cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id}
                  image={car.image}
                  name={car.name}
                  year={car.year}
                  mileage={car.mileage}
                  fuel={car.fuel}
                  transmission={car.transmission}
                  condition={car.condition}
                  featured={car.featured}
                  price={car.price}
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
                  Can't Find What You're Looking For?
                </h3>
                <p className="text-white/80 mb-8">
                  We specialize in car sourcing and imports. Tell us your dream car and we'll find it for you with the best deal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg">
                    Request Custom Search
                  </Button>
                  <Button variant="hero-outline" size="lg">
                    View All Vehicles
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

export default CarDeals;
