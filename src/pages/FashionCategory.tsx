import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MessageCircle, ArrowLeft, SlidersHorizontal } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under KSH 50,000", min: 0, max: 50000 },
  { label: "KSH 50,000 - 100,000", min: 50000, max: 100000 },
  { label: "KSH 100,000 - 200,000", min: 100000, max: 200000 },
  { label: "Over KSH 200,000", min: 200000, max: Infinity },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
];

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

const categoryData: Record<string, { 
  title: string; 
  description: string;
  items: { id: number; name: string; image: string; rating: number; reviews: number; tag: string | null; price: number; }[]
}> = {
  "mens-collection": {
    title: "Men's Collection",
    description: "Tailored suits, casual wear & accessories for the modern gentleman",
    items: [
      { id: 101, name: "Classic Navy Suit", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop", rating: 4.8, reviews: 56, tag: "Best Seller", price: 450000 },
      { id: 102, name: "African Print Shirt", image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=500&fit=crop", rating: 4.7, reviews: 42, tag: null, price: 55000 },
      { id: 103, name: "Casual Dashiki Set", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop", rating: 4.6, reviews: 67, tag: null, price: 85000 },
      { id: 104, name: "Modern Agbada Ensemble", image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=400&h=500&fit=crop", rating: 4.9, reviews: 28, tag: "Exclusive", price: 320000 },
      { id: 105, name: "Linen Summer Blazer", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=500&fit=crop", rating: 4.5, reviews: 35, tag: "New", price: 180000 },
      { id: 106, name: "Kaftan Traditional Set", image: "https://images.unsplash.com/photo-1611601322175-ef92c86ab249?w=400&h=500&fit=crop", rating: 4.8, reviews: 44, tag: null, price: 150000 },
    ]
  },
  "womens-collection": {
    title: "Women's Collection",
    description: "Elegant dresses, modern styles & more for the sophisticated woman",
    items: [
      { id: 201, name: "Ankara Print Dress", image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=500&fit=crop", rating: 4.9, reviews: 89, tag: "Best Seller", price: 85000 },
      { id: 202, name: "Elegant Kente Gown", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", rating: 5.0, reviews: 34, tag: "Premium", price: 280000 },
      { id: 203, name: "Office Blazer Set", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop", rating: 4.7, reviews: 52, tag: null, price: 165000 },
      { id: 204, name: "Flowing Maxi Dress", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop", rating: 4.6, reviews: 78, tag: "New", price: 95000 },
      { id: 205, name: "Casual Jumpsuit", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop", rating: 4.5, reviews: 41, tag: null, price: 75000 },
      { id: 206, name: "Evening Cocktail Dress", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop", rating: 4.9, reviews: 63, tag: "Exclusive", price: 220000 },
    ]
  },
  "traditional-wear": {
    title: "Traditional Wear",
    description: "Ankara, Kente, Dashiki & African prints celebrating our heritage",
    items: [
      { id: 301, name: "Kente Royale Set", image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=500&fit=crop", rating: 5.0, reviews: 45, tag: "Premium", price: 380000 },
      { id: 302, name: "Ankara Two-Piece", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", rating: 4.8, reviews: 67, tag: "Best Seller", price: 120000 },
      { id: 303, name: "Dashiki Festival Wear", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop", rating: 4.7, reviews: 38, tag: null, price: 95000 },
      { id: 304, name: "Agbada Ceremonial", image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=400&h=500&fit=crop", rating: 4.9, reviews: 29, tag: "Exclusive", price: 450000 },
      { id: 305, name: "Kitenge Wrap Dress", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop", rating: 4.6, reviews: 54, tag: null, price: 85000 },
      { id: 306, name: "African Print Kaftan", image: "https://images.unsplash.com/photo-1611601322175-ef92c86ab249?w=400&h=500&fit=crop", rating: 4.8, reviews: 42, tag: "New", price: 140000 },
    ]
  },
  "accessories": {
    title: "Accessories",
    description: "Bags, jewelry, shoes & belts to complete your look",
    items: [
      { id: 401, name: "Leather Tote Bag", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop", rating: 4.8, reviews: 89, tag: "Best Seller", price: 125000 },
      { id: 402, name: "African Beaded Necklace", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop", rating: 4.9, reviews: 56, tag: "Handmade", price: 45000 },
      { id: 403, name: "Oxford Leather Shoes", image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=400&h=500&fit=crop", rating: 4.7, reviews: 34, tag: null, price: 185000 },
      { id: 404, name: "Woven Belt Collection", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop", rating: 4.5, reviews: 28, tag: null, price: 35000 },
      { id: 405, name: "Gold Cuff Bracelet", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop", rating: 4.9, reviews: 45, tag: "Premium", price: 95000 },
      { id: 406, name: "Crossbody Mini Bag", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop", rating: 4.6, reviews: 62, tag: "New", price: 78000 },
    ]
  }
};

const FashionCategory = () => {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;
  const [priceRange, setPriceRange] = useState("All Prices");
  const [sortBy, setSortBy] = useState("featured");

  const filteredAndSortedItems = useMemo(() => {
    if (!data) return [];
    let filtered = [...data.items];

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
  }, [data, priceRange, sortBy]);

  if (!data) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link to="/fashion">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Fashion
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title} | Kokonation Fashion</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        <PageHeader
          title={data.title}
          subtitle={data.description}
          breadcrumb={data.title}
        />

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <Link to="/fashion">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Collections
                </Button>
              </Link>
              <a 
                href={getWhatsAppLink(`Hi, I'd like to browse your ${data.title}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order via WhatsApp
                </Button>
              </a>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 p-3 sm:p-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Filters:</span>
              </div>

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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {filteredAndSortedItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.tag && (
                      <Badge className="absolute top-1.5 left-1.5 bg-gold text-navy-dark text-[10px] px-1.5 py-0.5 shadow-lg">
                        {item.tag}
                      </Badge>
                    )}
                    <AddToCartButton 
                      item={{
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        category: data.title,
                      }}
                      className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-xs text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      KSH {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-2.5 h-2.5 fill-gold text-gold" />
                      <span className="text-foreground text-[10px]">{item.rating}</span>
                      <span className="text-muted-foreground text-[10px]">({item.reviews})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default FashionCategory;