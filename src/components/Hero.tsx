import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown, ChevronLeft, ChevronRight, Home, Car, Plane, Shirt } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-parallax";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop",
    title: "Real Estate",
    subtitle: "Premium Properties",
    description: "Luxury homes and investments across Kenya & Nigeria",
    icon: Home,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop",
    title: "Car Deals",
    subtitle: "Premium Vehicles",
    description: "Quality automobiles for every lifestyle",
    icon: Car,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop",
    title: "Travel & Tours",
    subtitle: "Explore Africa",
    description: "Unforgettable journeys and experiences",
    icon: Plane,
  },
  /*{
    id: 4,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=1080&fit=crop",
    title: "Fashion",
    subtitle: "African Style",
    description: "Contemporary fashion with African heritage",
    icon: Shirt,
  },*/
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollY = useScrollPosition();

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const CurrentIcon = slides[currentSlide].icon;
  const parallaxOffset = scrollY * 0.4;

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slides - Optimized transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ 
              transform: `translateY(${parallaxOffset * 0.3}px)`,
            }}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/60 to-navy-dark/90 md:bg-gradient-to-r md:from-navy-dark/95 md:via-navy-dark/70 md:to-navy-dark/40" />
        </div>
      ))}

      {/* Mobile Slide Indicators (Top) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <button
              key={slide.id}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                index === currentSlide 
                  ? "bg-gold text-navy-dark scale-110" 
                  : "bg-white/10 text-white/60 backdrop-blur-sm"
              }`}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl text-center md:text-left pt-16 md:pt-0">
              {/* Animated Badge */}
              <div 
                key={`badge-${currentSlide}`}
                className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 opacity-0 animate-fade-up"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
                  <CurrentIcon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
                <div className="text-left">
                  <span className="text-gold text-xs md:text-sm font-semibold tracking-widest uppercase block">
                    {slides[currentSlide].subtitle}
                  </span>
                  <span className="text-white/50 text-[10px] md:text-xs">Kenya • Nigeria</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 
                key={`title-${currentSlide}`}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-[1.1] opacity-0 animate-fade-up"
                style={{ animationDelay: '100ms' }}
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl text-white/80 font-medium mb-1">Kokonation</span>
                <span className="text-gold">{slides[currentSlide].title}</span>
              </h1>

              {/* Description */}
              <p 
                key={`desc-${currentSlide}`}
                className="text-base md:text-lg lg:text-xl text-white/70 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 opacity-0 animate-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons - Stack on mobile */}
              <div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 opacity-0 animate-fade-up justify-center md:justify-start"
                style={{ animationDelay: '300ms' }}
              >
                <Button variant="whatsapp" size="lg" className="group w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  WhatsApp Kenya
                </Button>
                <Button variant="whatsapp" size="lg" className="group w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  WhatsApp Nigeria
                </Button>
              </div>

              {/* Stats Row - Horizontal scroll on mobile */}
              <div 
                className="flex gap-6 md:gap-8 opacity-0 animate-fade-up justify-center md:justify-start overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0"
                style={{ animationDelay: '400ms' }}
              >
                {[
                  { number: "2", label: "Countries" },
                  { number: "3", label: "Business Lines" },
                  { number: "1000+", label: "Clients" },
                ].map((stat, index) => (
                  <div key={index} className="group cursor-default text-center md:text-left flex-shrink-0">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-gold transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Slide Navigation (Desktop only) */}
            <div className="hidden lg:flex flex-col items-end justify-center gap-6">
              <div className="flex flex-col gap-3">
                {slides.map((slide, index) => {
                  const Icon = slide.icon;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => !isAnimating && setCurrentSlide(index)}
                      className={`group flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white/10 backdrop-blur-sm border border-gold/30"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-5 h-5 transition-colors ${
                        index === currentSlide ? "text-gold" : "text-white/40 group-hover:text-white/70"
                      }`} />
                      <span className={`text-sm font-medium transition-colors ${
                        index === currentSlide ? "text-white" : "text-white/40 group-hover:text-white/70"
                      }`}>
                        {slide.title}
                      </span>
                      <div className={`w-8 h-0.5 rounded-full transition-all ${
                        index === currentSlide ? "bg-gold w-12" : "bg-white/20"
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 md:gap-6">
        {/* Arrow Controls */}
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-gold/50 hover:bg-white/5 transition-all"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        
        {/* Progress Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className="group relative h-2 overflow-hidden rounded-full transition-all duration-500"
              style={{ width: index === currentSlide ? 40 : 8 }}
            >
              <div className="absolute inset-0 bg-white/20" />
              {index === currentSlide && (
                <div 
                  className="absolute inset-0 bg-gold rounded-full animate-progress-bar"
                  style={{ animationDuration: '6s' }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-gold/50 hover:bg-white/5 transition-all"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white/40 hover:text-gold transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest mb-2 rotate-90 origin-center translate-x-4">Scroll</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 transition-colors animate-bounce">
            <ArrowDown className="w-4 h-4" />
          </div>
        </a>
      </div>
    </section>
  );
};
