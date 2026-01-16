import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const countries = [
  {
    flag: "🇰🇪",
    name: "Kenya",
    code: "KE",
    description:
      "Our Kenya operations serve clients across Nairobi, Mombasa, Kisumu, and other major cities with comprehensive real estate, automotive, travel, and fashion services.",
    whatsapp: "+254700000000",
    email: "kenya@kokonation.com",
    location: "Nairobi, Kenya",
    gradient: "from-green-600 to-red-600",
  },
  {
    flag: "🇳🇬",
    name: "Nigeria",
    code: "NG",
    description:
      "Our Nigeria operations cater to Lagos, Abuja, Port Harcourt, and nationwide, delivering the same trusted Kokonation experience with local expertise.",
    whatsapp: "+2348000000000",
    email: "nigeria@kokonation.com",
    location: "Lagos, Nigeria",
    gradient: "from-green-600 to-green-700",
  },
];

export const Countries = () => {
  return (
    <section id="countries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-secondary-foreground text-sm font-medium">
                Where We Operate
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Countries We Serve
            </h2>

            <p className="text-muted-foreground text-lg">
              Strategically positioned in East and West Africa to serve you better.
            </p>
          </div>
        </AnimatedSection>

        {/* Country Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {countries.map((country, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-gold/30">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Top Banner */}
                <div className={`h-2 bg-gradient-to-r ${country.gradient}`} />

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Flag and Name */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                        {country.name} Operations
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {country.code} Region
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-3 text-sm bg-secondary/50 rounded-full px-3 py-1.5 w-fit">
                      <Mail className="w-3.5 h-3.5 text-gold" />
                      <span className="text-foreground text-xs">{country.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm bg-secondary/50 rounded-full px-3 py-1.5 w-fit">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span className="text-foreground text-xs">{country.location}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="whatsapp" className="w-full" size="sm">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp {country.name}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
