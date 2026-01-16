import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shirt, Star, MessageCircle, ArrowRight, SlidersHorizontal } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { AddToCartButton } from "@/components/AddToCartButton";

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

const categories = [
  { 
    name: "Men's Collection", 
    count: 45, 
    slug: "mens-collection",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop",
    description: "Tailored suits, casual wear & accessories"
  },
  { 
    name: "Women's Collection", 
    count: 62, 
    slug: "womens-collection",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
    description: "Elegant dresses, modern styles & more"
  },
  { 
    name: "Traditional Wear", 
    count: 35, 
    slug: "traditional-wear",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=500&fit=crop",
    description: "Ankara, Kente, Dashiki & African prints"
  },
  { 
    name: "Accessories", 
    count: 28, 
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop",
    description: "Bags, jewelry, shoes & belts"
  },
];

const collections = [
  {
    id: 1,
    name: "Classic Navy Suit",
    category: "Men",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    rating: 4.8,
    reviews: 56,
    tag: "Best Seller",
    price: 450000,
  },
  {
    id: 2,
    name: "Ankara Print Dress",
    category: "Women",
    image: "https://images.unsplash.com/photo-1485968579169-04f5e8bbb4e9?w=300&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    tag: "New Arrival",
    price: 85000,
  },
  {
    id: 3,
    name: "African Print Shirt",
    category: "Men",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=400&fit=crop",
    rating: 4.7,
    reviews: 42,
    tag: null,
    price: 55000,
  },
  {
    id: 4,
    name: "Elegant Evening Gown",
    category: "Women",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=400&fit=crop",
    rating: 5.0,
    reviews: 34,
    tag: "Premium",
    price: 280000,
  },
  {
    id: 5,
    name: "Casual Linen Shirt",
    category: "Unisex",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop",
    rating: 4.6,
    reviews: 67,
    tag: null,
    price: 45000,
  },
  {
    id: 6,
    name: "Traditional Kaftan",
    category: "Men",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=300&h=400&fit=crop",
    rating: 4.9,
    reviews: 28,
    tag: "Exclusive",
    price: 180000,
  },
  {
    id: 7,
    name: "Floral Summer Dress",
    category: "Women",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop",
    rating: 4.8,
    reviews: 45,
    tag: null,
    price: 75000,
  },
  {
    id: 8,
    name: "Polo Shirt Collection",
    category: "Men",
    image: "https://images.unsplash.com/photo-1625910513413-5fc4e5e20bd9?w=300&h=400&fit=crop",
    rating: 4.5,
    reviews: 52,
    tag: "Popular",
    price: 35000,
  },
];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under KSH 50,000", min: 0, max: 50000 },
  { label: "KSH 50,000 - 100,000", min: 50000, max: 100000 },
  { label: "KSH 100,000 - 200,000", min: 100000, max: 200000 },
  { label: "Over KSH 200,000", min: 200000, max: Infinity },
];

const categoryFilters = ["All", "Men", "Women", "Unisex"];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
];

const Fashion = () => {
  const [priceRange, setPriceRange] = useState("All Prices");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredAndSortedItems = useMemo(() => {
    let filtered = [...collections];

    // Filter by category
    if (categoryFilter !== "All") {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }

    // Filter by price range
    const range = priceRanges.find(r => r.label === priceRange);
    if (range && range.max !== Infinity) {
      filtered = filtered.filter(item => item.price >= range.min && item.price <= range.max);
    } else if (range && range.min > 0) {
      filtered = filtered.filter(item => item.price >= range.min);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [priceRange, categoryFilter, sortBy]);

  return (
    <>
      <Helmet>
        <title>Fashion & Clothing | Kokonation Group - Contemporary African Style</title>
        <meta
          name="description"
          content="Modern clothing brand offering stylish, high-quality fashion for men and women. Contemporary African style with comfort and elegance."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        <PageHeader
          title="Fashion & Clothing"
          subtitle="A modern clothing brand offering stylish, high-quality fashion for men and women. Designed for comfort, elegance, and contemporary African style."
          breadcrumb="Fashion"
        />

        {/* Categories Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block opacity-0 animate-fade-up">
                Shop by Category
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground opacity-0 animate-fade-up" style={{ animationDelay: '150ms' }}>
                Explore Our Collections
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat, index) => (
                <Link
                  key={index}
                  to={`/fashion/${cat.slug}`}
                  className="group block opacity-0 animate-fade-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={cat.image} 
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <Badge className="bg-gold/90 text-navy-dark text-[10px] px-2 py-0.5 mb-2">
                        {cat.count} items
                      </Badge>
                      <h3 className="font-semibold text-sm text-white group-hover:text-gold transition-colors">
                        {cat.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1 text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Shop</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <Shirt className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Our Collection</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground">
                    Featured Styles
                  </h2>
                </div>
                <a 
                  href={getWhatsAppLink("Hi, I'd like to order from your fashion collection")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order via WhatsApp
                  </Button>
                </a>
              </div>
            </AnimatedSection>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 p-3 sm:p-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Filters:</span>
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-24 sm:w-32 h-8 text-xs sm:text-sm">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryFilters.map(cat => (
                    <SelectItem key={cat} value={cat} className="text-xs sm:text-sm">{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-32 sm:w-44 h-8 text-xs sm:text-sm">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map(range => (
                    <SelectItem key={range.label} value={range.label} className="text-xs sm:text-sm">{range.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 sm:w-40 h-8 text-xs sm:text-sm">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value} className="text-xs sm:text-sm">{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <span className="ml-auto text-xs text-muted-foreground">
                {filteredAndSortedItems.length} items
              </span>
            </div>

            {/* Products Grid - Modern compact cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {filteredAndSortedItems.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 50}>
                  <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-gold/30">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {item.tag && (
                        <Badge className="absolute top-2 left-2 bg-gold text-navy-dark text-[10px] px-2 py-0.5 shadow-lg">
                          {item.tag}
                        </Badge>
                      )}

                      {/* Add to cart button */}
                      <AddToCartButton 
                        item={{
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          category: item.category,
                        }}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    
                    <div className="relative p-2.5">
                      <h3 className="font-medium text-xs text-foreground line-clamp-1 group-hover:text-gold transition-colors mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-1">
                        KSH {item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        <span className="text-foreground text-[10px]">{item.rating}</span>
                        <span className="text-muted-foreground text-[10px]">({item.reviews})</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Section */}
            <AnimatedSection delay={400}>
              <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-navy-dark to-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gold rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                    Custom Tailoring Available
                  </h3>
                  <p className="text-white/80 mb-8">
                    Need something unique? Our skilled tailors can create custom pieces designed just for you. Perfect fit guaranteed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href={getWhatsAppLink("Hi, I'd like to inquire about custom tailoring")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="gold" size="lg">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact Us
                      </Button>
                    </a>
                    <Button variant="hero-outline" size="lg">
                      View Lookbook
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Fashion;
