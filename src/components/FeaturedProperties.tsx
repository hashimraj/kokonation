import { useState, useEffect, useCallback } from "react";
import { Building2, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import property1 from "@/assets/properties/property-1.jpg";
import property2 from "@/assets/properties/property-2.jpg";
import property3 from "@/assets/properties/property-3.jpg";
import property4 from "@/assets/properties/property-4.jpg";
import property5 from "@/assets/properties/property-5.jpg";
import property6 from "@/assets/properties/property-6.jpg";

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

const properties = [
  {
    id: 1,
    image: property1,
    title: "Luxury Villa with Pool",
    location: "Karen, Nairobi",
    country: "Kenya",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "For Sale",
    description: "Experience ultimate luxury in this stunning villa featuring a private pool, landscaped gardens, and breathtaking views.",
  },
  {
    id: 2,
    image: property2,
    title: "Modern High-Rise Apartment",
    location: "Victoria Island, Lagos",
    country: "Nigeria",
    beds: 3,
    baths: 2,
    sqft: "2,200",
    type: "For Sale",
    description: "Premium waterfront living with panoramic ocean views. Modern finishes with 24/7 security and exclusive amenities.",
  },
  {
    id: 3,
    image: property3,
    title: "Contemporary Townhouse",
    location: "Westlands, Nairobi",
    country: "Kenya",
    beds: 4,
    baths: 3,
    sqft: "3,100",
    type: "For Rent",
    description: "Spacious family townhouse in the heart of Westlands. Close to shopping centers, schools, and business districts.",
  },
  {
    id: 4,
    image: property4,
    title: "Premium Office Space",
    location: "Ikoyi, Lagos",
    country: "Nigeria",
    beds: 0,
    baths: 4,
    sqft: "8,500",
    type: "Commercial",
    description: "Prime commercial property in Lagos's most prestigious business district. Perfect for corporate headquarters.",
  },
  {
    id: 5,
    image: property5,
    title: "Beachfront Paradise Villa",
    location: "Diani Beach, Mombasa",
    country: "Kenya",
    beds: 6,
    baths: 5,
    sqft: "5,800",
    type: "For Sale",
    description: "Wake up to the sound of waves in this exclusive beachfront property with direct beach access.",
  },
  {
    id: 6,
    image: property6,
    title: "Executive Penthouse Suite",
    location: "Banana Island, Lagos",
    country: "Nigeria",
    beds: 4,
    baths: 4,
    sqft: "4,200",
    type: "For Sale",
    description: "The pinnacle of luxury living in Nigeria's most exclusive neighborhood with unparalleled city views.",
  },
];

export const FeaturedProperties = () => {
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
    const newIndex = currentIndex === 0 ? properties.length - 1 : currentIndex - 1;
    goToSlide(newIndex, 'left');
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === properties.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex, 'right');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentProperty = properties[currentIndex];

  return (
    <section id="properties" className="relative">
      {/* Section Header */}
      <div className="bg-gradient-to-b from-background via-muted/50 to-background py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 dark:bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-4 md:mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-foreground text-sm font-medium tracking-wide uppercase">Premium Properties</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 md:mb-4">
            Discover Your Dream <span className="text-gradient-gold">Home</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto">
            Explore our handpicked selection of luxury properties across Kenya and Nigeria
          </p>
        </div>
      </div>

      {/* Carousel - Responsive height */}
      <div className="relative h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Images */}
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-out",
              index === currentIndex 
                ? "opacity-100 z-10 scale-100" 
                : "opacity-0 z-0 scale-105"
            )}
          >
            <img
              src={property.image}
              alt={property.title}
              className={cn(
                "w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out",
                index === currentIndex && "scale-110"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        ))}

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / properties.length) * 100}%` }}
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
            <Badge 
              variant="outline" 
              className="mb-3 md:mb-6 border-gold/50 text-gold px-3 py-1.5 bg-black/40 backdrop-blur-md text-xs animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              <Building2 className="w-3 h-3 mr-1.5" />
              {currentProperty.type}
            </Badge>
            
            <h3 
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 md:mb-4 leading-tight animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              {currentProperty.title}
            </h3>

            <p 
              className="text-white/80 text-sm md:text-base mb-4 md:mb-6 leading-relaxed max-w-md line-clamp-2 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              {currentProperty.description}
            </p>

            {/* Property Details */}
            <div 
              className="flex flex-wrap items-center gap-2 md:gap-3 text-white mb-6 md:mb-8 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                <span className="text-xs md:text-sm">{currentProperty.location}</span>
              </div>
              {currentProperty.beds > 0 && (
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                  <Bed className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                  <span className="text-xs md:text-sm">{currentProperty.beds} Beds</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <Bath className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                <span className="text-xs md:text-sm">{currentProperty.baths} Baths</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <Square className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                <span className="text-xs md:text-sm">{currentProperty.sqft} sqft</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <a 
                href={getWhatsAppLink(`Hi, I'm interested in ${currentProperty.title} at ${currentProperty.location}`)}
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
              className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
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
              {String(properties.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-4">
          <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {properties.map((property, index) => (
              <button
                key={property.id}
                onClick={() => goToSlide(index, index > currentIndex ? 'right' : 'left')}
                className={cn(
                  "group relative flex-shrink-0 rounded-md md:rounded-lg overflow-hidden transition-all duration-500 border-2",
                  index === currentIndex
                    ? "w-12 h-8 sm:w-16 sm:h-10 md:w-24 md:h-14 border-gold ring-1 ring-gold/50"
                    : "w-10 h-7 sm:w-12 sm:h-8 md:w-20 md:h-12 border-white/20 opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={property.image}
                  alt={property.title}
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
