import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { useScrollPosition } from "@/hooks/use-parallax";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    role: "Property Investor",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Kokonation helped me find my dream home in Nairobi. Their team was professional, patient, and truly understood what I was looking for. Highly recommended!",
  },
  {
    id: 2,
    name: "Chinedu Okonkwo",
    role: "Business Owner",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I bought my company car through Kokonation and the process was seamless. Great prices, genuine vehicles, and excellent after-sales support.",
  },
  {
    id: 3,
    name: "Amina Hassan",
    role: "Fashion Enthusiast",
    location: "Mombasa, Kenya",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The quality of their African fashion collection is outstanding. I've ordered multiple times and each piece has been beautifully crafted.",
  },
  {
    id: 4,
    name: "Emmanuel Adeyemi",
    role: "Travel Blogger",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Booked a safari tour through Kokonation and it exceeded all expectations. Well-organized, great guides, and unforgettable experiences!",
  },
  {
    id: 5,
    name: "Grace Mwangi",
    role: "Real Estate Developer",
    location: "Kisumu, Kenya",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with Kokonation on multiple property deals has been a pleasure. Their market knowledge and professionalism are unmatched.",
  },
  {
    id: 6,
    name: "Olumide Bakare",
    role: "Corporate Executive",
    location: "Port Harcourt, Nigeria",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The travel team organized our company retreat flawlessly. From flights to accommodation, everything was perfect. Highly recommended!",
  },
];

export const Testimonials = () => {
  const scrollY = useScrollPosition();

  return (
    <section className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 dark:bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-foreground text-sm font-medium tracking-wide uppercase">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers across Kenya and Nigeria have to say about their experience with Kokonation.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <AnimatedSection delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group bg-card rounded-xl p-5 shadow-lg border border-border/50 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative flex items-start gap-3">
                      <Quote className="w-6 h-6 text-gold/30 flex-shrink-0" />
                      <div className="flex-1">
                        {/* Rating */}
                        <div className="flex gap-0.5 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <p className="text-foreground/80 text-xs leading-relaxed mb-4 line-clamp-4">
                          "{testimonial.text}"
                        </p>
                        
                        {/* Author */}
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-9 h-9 rounded-full object-cover border-2 border-gold/30 group-hover:border-gold transition-colors"
                          />
                          <div>
                            <h4 className="font-semibold text-foreground text-xs group-hover:text-gold transition-colors">{testimonial.name}</h4>
                            <p className="text-muted-foreground text-[10px]">{testimonial.role}</p>
                            <p className="text-gold/70 text-[10px]">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card border-border/50 hover:bg-gold hover:text-navy-dark hover:border-gold" />
              <CarouselNext className="static translate-y-0 bg-card border-border/50 hover:bg-gold hover:text-navy-dark hover:border-gold" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};
