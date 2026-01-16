import { Shield, Heart, Star, Award } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { useScrollPosition } from "@/hooks/use-parallax";

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We build lasting relationships through honest dealings and open communication.",
  },
  {
    icon: Star,
    title: "Quality Service",
    description: "Every service we offer meets the highest standards of excellence.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We go above and beyond for our clients.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Our team brings expertise and dedication to every project.",
  },
];

export const About = () => {
  const scrollY = useScrollPosition();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-secondary-foreground text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Driven by Vision,
              <span className="text-primary block">Powered by Trust</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Kokonation Group of Companies is driven by a vision to offer trusted services that improve lifestyles and create value. With strong operations in Kenya and Nigeria, we combine local expertise with global standards to serve individuals, families, and businesses across Africa.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We provide dependable, high-quality solutions across real estate, car deals, travels & tours, and clothing. Our commitment is built on professionalism, transparency, and long-term client satisfaction.
            </p>
          </AnimatedSection>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  className="group relative transform-gpu p-4 sm:p-6 bg-card rounded-xl shadow-lg border border-border/50 h-full transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-gold/30 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
