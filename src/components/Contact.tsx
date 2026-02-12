import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      country: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-foreground text-sm font-medium">
                Get in Touch
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Start a
              <span className="text-primary block">Conversation</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ready to work with us? Reach out through any of our channels and our team will respond within 24 hours.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[hsl(142,70%,49%)]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[hsl(142,70%,49%)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">WhatsApp</h3>
                  <p className="text-muted-foreground text-xs">
                    Kenya: +254 746 613 210
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Nigeria: +234 800 000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">Email</h3>
                  <p className="text-muted-foreground text-xs">
                    info@kokonation.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="whatsapp" size="sm" className="w-auto">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Kenya
              </Button>
              <Button variant="whatsapp" size="sm" className="w-auto">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Nigeria
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Content - Form */}
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border/50">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-11"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email / Phone
                  </label>
                  <Input
                    placeholder="Enter your email or phone number"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-11"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Country
                    </label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) =>
                        setFormData({ ...formData, country: value })
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="car-deals">Car Deals</SelectItem>
                        <SelectItem value="travels">Travels & Tours</SelectItem>
                        <SelectItem value="clothing">Fashion</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
