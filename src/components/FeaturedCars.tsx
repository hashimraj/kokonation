import { useState, useEffect, useCallback } from "react";
import { Car, ChevronLeft, ChevronRight, Fuel, Settings, Gauge, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import car1 from "@/assets/cars/car-1.jpg";
import car2 from "@/assets/cars/car-2.jpg";
import car3 from "@/assets/cars/car-3.jpg";
import car4 from "@/assets/cars/car-4.jpg";
import car5 from "@/assets/cars/car-5.jpg";
import car6 from "@/assets/cars/car-6.jpg";

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

const cars = [
  {
    id: 1,
    image: car1,
    name: "Mercedes-Benz S-Class",
    year: 2024,
    mileage: "0 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Brand New",
    description: "The epitome of luxury and innovation. Experience unparalleled comfort with cutting-edge technology.",
  },
  {
    id: 2,
    image: car2,
    name: "Toyota Land Cruiser V8",
    year: 2023,
    mileage: "12,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Pre-Owned",
    description: "Legendary reliability meets rugged elegance. Perfect for urban adventures and off-road expeditions.",
  },
  {
    id: 3,
    image: car3,
    name: "BMW X5 xDrive",
    year: 2024,
    mileage: "5,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Like New",
    description: "The Sports Activity Vehicle that sets the benchmark. Dynamic performance with sophisticated luxury.",
  },
  {
    id: 4,
    image: car4,
    name: "Range Rover Sport",
    year: 2024,
    mileage: "0 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Brand New",
    description: "Commanding presence with exceptional capability. The ultimate expression of sporting luxury.",
  },
  {
    id: 5,
    image: car5,
    name: "Lexus LX 570",
    year: 2023,
    mileage: "8,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Pre-Owned",
    description: "Premium Japanese engineering meets uncompromising luxury. Built for those who demand the best.",
  },
  {
    id: 6,
    image: car6,
    name: "Audi Q7 Premium",
    year: 2024,
    mileage: "3,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Like New",
    description: "German precision in every detail. Advanced technology and spacious luxury for the modern family.",
  },
];

export const FeaturedCars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const goToSlide = useCallback((index: number, direction: 'left' | 'right' = 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? cars.length - 1 : currentIndex - 1;
    goToSlide(newIndex, 'left');
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === cars.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex, 'right');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentCar = cars[currentIndex];

  return (
    <section id="cars" className="relative">
      {/* Section Header */}
      <div className="bg-gradient-to-b from-background via-muted/50 to-background py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 dark:bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-4 md:mb-6">
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-foreground text-sm font-medium tracking-wide uppercase">Premium Automobiles</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 md:mb-4">
            Drive Your <span className="text-gradient-gold">Ambition</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto">
            Experience automotive excellence with our curated collection of luxury vehicles
          </p>
        </div>
      </div>

      {/* Carousel - Responsive height */}
      <div className="relative h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Images */}
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-out",
              index === currentIndex 
                ? "opacity-100 z-10 scale-100" 
                : "opacity-0 z-0 scale-105"
            )}
          >
            <img
              src={car.image}
              alt={car.name}
              className={cn(
                "w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out",
                index === currentIndex && "scale-110"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/70 to-navy-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
          </div>
        ))}

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cars.length) * 100}%` }}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full container mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col justify-center">
          <div 
            key={currentIndex}
            className={cn(
              "max-w-xl",
              slideDirection === 'right' ? "animate-slide-in-right" : "animate-slide-in-left"
            )}
          >
            <div className="flex items-center gap-2 mb-3 md:mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Badge 
                variant="outline" 
                className="border-gold/50 text-gold px-3 py-1.5 bg-navy-dark/60 backdrop-blur-md text-xs"
              >
                <Car className="w-3 h-3 mr-1.5" />
                {currentCar.condition}
              </Badge>
              <Badge 
                className="bg-white/20 text-white px-3 py-1.5 backdrop-blur-md text-xs font-semibold"
              >
                {currentCar.year}
              </Badge>
            </div>
            
            <h3 
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 md:mb-4 leading-tight animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              {currentCar.name}
            </h3>

            <p 
              className="text-white/80 text-sm md:text-base mb-4 md:mb-6 leading-relaxed max-w-md line-clamp-2 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              {currentCar.description}
            </p>

            {/* Car Details */}
            <div 
              className="flex flex-wrap items-center gap-2 md:gap-3 text-white mb-6 md:mb-8 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <Gauge className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                <span className="text-xs md:text-sm">{currentCar.mileage}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <Fuel className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                <span className="text-xs md:text-sm">{currentCar.fuel}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <Settings className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                <span className="text-xs md:text-sm">{currentCar.transmission}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div 
              className="flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <a 
                href={getWhatsAppLink(`Hi, I'm interested in the ${currentCar.year} ${currentCar.name}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gold text-navy-dark hover:bg-white font-semibold text-sm px-5 py-5 rounded-full shadow-gold hover:shadow-card-hover transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <button
              onClick={goToPrevious}
              className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="absolute left-4 sm:left-6 bottom-20 md:bottom-28 text-white">
            <span className="text-2xl md:text-4xl font-display font-bold text-gold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-base md:text-xl text-white/50 mx-1">/</span>
            <span className="text-base md:text-xl text-white/50">
              {String(cars.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-4">
          <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {cars.map((car, index) => (
              <button
                key={car.id}
                onClick={() => goToSlide(index, index > currentIndex ? 'right' : 'left')}
                className={cn(
                  "group relative flex-shrink-0 rounded-md md:rounded-lg overflow-hidden transition-all duration-500 border-2",
                  index === currentIndex
                    ? "w-12 h-8 sm:w-16 sm:h-10 md:w-24 md:h-14 border-gold ring-1 ring-gold/50"
                    : "w-10 h-7 sm:w-12 sm:h-8 md:w-20 md:h-12 border-white/20 opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
