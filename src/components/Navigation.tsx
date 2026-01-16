import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CartButton } from "@/components/CartButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Car Deals", href: "/car-deals" },
  { label: "Travels & Tours", href: "/travels-tours" },
  { label: "Fashion", href: "/fashion" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/30"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 group">
            <div className="relative">
              <span
                className={`font-display text-xl md:text-2xl font-bold transition-all duration-300 group-hover:scale-105 inline-block ${
                  scrolled || !isHomePage ? "text-foreground" : "text-white"
                }`}
              >
                Kokonation
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold/50"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span
              className={`text-xs md:text-sm font-semibold px-1.5 py-0.5 rounded transition-colors duration-300 ${
                scrolled || !isHomePage 
                  ? "text-gold bg-gold/10" 
                  : "text-gold-light bg-white/10"
              }`}
            >
              Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-background/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive(item.href)
                      ? scrolled || !isHomePage
                        ? "text-primary-foreground bg-primary shadow-md"
                        : "text-primary-foreground bg-white/20 backdrop-blur-sm"
                      : scrolled || !isHomePage
                      ? "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center gap-2">
              <CartButton />
              <ThemeToggle />
              <Button 
                variant={scrolled || !isHomePage ? "gold" : "hero"} 
                size="sm"
                className="rounded-full px-5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className="flex lg:hidden items-center gap-2">
            <CartButton />
            <ThemeToggle />
            <button
              className={`p-2 rounded-lg transition-colors ${
                scrolled || !isHomePage 
                  ? "hover:bg-accent/50" 
                  : "hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X
                      className={`w-5 h-5 ${
                        scrolled || !isHomePage ? "text-foreground" : "text-white"
                      }`}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu
                      className={`w-5 h-5 ${
                        scrolled || !isHomePage ? "text-foreground" : "text-white"
                      }`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-card border-t border-border/30 px-4 py-4 shadow-xl">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between font-medium transition-all duration-300 py-3 px-4 rounded-xl text-sm ${
                        isActive(item.href) 
                          ? "text-primary-foreground bg-primary shadow-md" 
                          : "text-foreground hover:text-primary hover:bg-accent/50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-3 mt-2 border-t border-border/30"
                >
                  <Button variant="gold" size="sm" className="w-full rounded-full font-semibold">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
