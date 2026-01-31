import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Car, Plane, Shirt, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const businesses = [
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Professional real estate services including property sales, rentals, leasing, and investment opportunities across Kenya and Nigeria.",
    ctas: [{ label: "View Properties", href: "/real-estate" }, { label: "Contact Team", href: "/real-estate" }],
    color: "from-blue-500/20 to-blue-600/20",
    iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Car,
    title: "Car Deals",
    description:
      "Reliable car dealership services offering new and used vehicles, imports, sales, and car sourcing with transparent pricing.",
    ctas: [{ label: "Browse Cars", href: "/car-deals" }, { label: "Get a Quote", href: "/car-deals" }],
    color: "from-emerald-500/20 to-emerald-600/20",
    iconBg: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Plane,
    title: "Travels & Tours",
    description:
      "End-to-end travel solutions including flight bookings, hotel reservations, visa assistance, and holiday packages.",
    ctas: [{ label: "Book a Trip", href: "/travels-tours" }, { label: "Consultation", href: "/travels-tours" }],
    color: "from-amber-500/20 to-amber-600/20",
    iconBg: "bg-gradient-to-br from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-600",
  },
  /*{
    icon: Shirt,
    title: "Clothing & Fashion",
    description:
      "A modern clothing brand offering stylish, high-quality fashion for men and women with contemporary African style.",
    ctas: [{ label: "Shop Collection", href: "/fashion" }, { label: "View Lookbook", href: "/fashion" }],
    color: "from-rose-500/20 to-rose-600/20",
    iconBg: "bg-gradient-to-br from-rose-500/20 to-rose-600/10",
    iconColor: "text-rose-600",
  },*/
];

export const Businesses = () => {
  return (
    <section id="businesses" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-foreground text-sm font-medium">
                Our Businesses
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Diverse Services,
              <span className="text-primary block">One Commitment</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              From real estate to fashion, we deliver trusted solutions across multiple industries with the same dedication to excellence.
            </p>
          </div>
        </AnimatedSection>

        {/* Business Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {businesses.map((business, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-gold/30 overflow-hidden h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${business.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <business.icon
                      className={`w-7 h-7 ${business.iconColor}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {business.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {business.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Link to={business.ctas[0].href}>
                      <Button variant="default" size="sm" className="text-xs">
                        {business.ctas[0].label}
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                    <Link to={business.ctas[1].href}>
                      <Button variant="outline" size="sm" className="text-xs">
                        {business.ctas[1].label}
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
