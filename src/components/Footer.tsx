import { MessageCircle, ArrowUp, Sparkles, MapPin, Phone, Mail, Building2, Car, Plane, Shirt } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  businesses: [
    { label: "Real Estate", href: "/real-estate", icon: Building2 },
    { label: "Car Deals", href: "/car-deals", icon: Car },
    { label: "Travels & Tours", href: "/travels-tours", icon: Plane },
    { label: "Clothing & Fashion", href: "/fashion", icon: Shirt },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  countries: [
    { label: "Kenya Operations", href: "#countries", flag: "🇰🇪" },
    { label: "Nigeria Operations", href: "#countries", flag: "🇳🇬" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-card to-background overflow-hidden">
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent rounded-2xl p-8 mb-12 border border-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Stay Connected</h3>
              <p className="text-muted-foreground">Get updates on our latest offerings and exclusive deals.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 min-w-0 sm:w-48 md:w-64 px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
              />
              <button className="px-6 py-3 bg-gold hover:bg-gold/90 text-navy-dark font-semibold rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-3xl font-bold text-foreground">Kokonation</span>
              <span className="text-gold text-lg font-semibold">Group</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              A multi-service enterprise delivering trusted solutions across real estate, car deals, travels & tours, and fashion in Kenya and Nigeria.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm">info@kokonation.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gold/10 hover:bg-gold/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Our Businesses
            </h4>
            <ul className="space-y-4">
              {footerLinks.businesses.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/50 group-hover:bg-gold/20 flex items-center justify-center transition-all duration-300">
                      <link.icon className="w-4 h-4 group-hover:text-gold transition-colors" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-foreground">Countries</h4>
            <ul className="space-y-4">
              {footerLinks.countries.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="text-xl">{link.flag}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-accent/30 border border-border/30">
              <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gold" />
                WhatsApp Support
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                🇰🇪 +254 700 000 000
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                🇳🇬 +234 800 000 0000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30 relative z-10 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kokonation Group of Companies. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-all duration-300 text-sm group"
            >
              <span>Back to Top</span>
              <div className="w-10 h-10 rounded-full bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
                <ArrowUp className="w-4 h-4 group-hover:text-gold transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};