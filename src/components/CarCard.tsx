import { Link } from "react-router-dom";
import { Fuel, Settings2, Star, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CompareButton } from "@/components/CompareButton";
import { FavoriteButton } from "@/components/FavoriteButton";
import { useComparison, CarItem } from "@/contexts/ComparisonContext";
import { useFavorites } from "@/contexts/FavoritesContext";

interface CarCardProps {
  id: string;
  image: string;
  name: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  condition: string;
  featured?: boolean;
  price?: string;
}

const WHATSAPP_NUMBER = "0758905603";
const getWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '255')}?text=${encodeURIComponent(message)}`;

export const CarCard = ({
  id,
  image,
  name,
  year,
  mileage,
  fuel,
  transmission,
  condition,
  featured,
  price,
}: CarCardProps) => {
  const { addItem, removeItem, isInComparison, items } = useComparison();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isSelected = isInComparison(id);
  const isFav = isFavorite(id);
  const canAdd = items.length < 4 && (items.length === 0 || items[0].type === "car");

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSelected) {
      removeItem(id);
    } else {
      const carItem: CarItem = {
        type: "car",
        id,
        image,
        name,
        year,
        mileage,
        fuel,
        transmission,
        condition,
      };
      addItem(carItem);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFavorite(id);
    } else {
      addFavorite({
        type: "car",
        id,
        image,
        title: name,
        subtitle: `${year} • ${mileage}`,
        price,
      });
    }
  };

  return (
    <Link to={`/car-deals/${id}`} className="block">
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-gold/30">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
          <Badge className="bg-white/95 text-navy-dark font-semibold shadow-lg backdrop-blur-sm text-[10px] px-2 py-0.5">
            {condition}
          </Badge>
          {featured && (
            <Badge className="bg-gold text-navy-dark shadow-lg text-[10px] px-2 py-0.5">
              <Star className="w-2.5 h-2.5 mr-0.5 fill-current" />
              Featured
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex gap-1.5">
          <FavoriteButton
            isFavorite={isFav}
            onClick={handleFavoriteClick}
          />
          <CompareButton
            isSelected={isSelected}
            onClick={handleCompareClick}
            disabled={!canAdd && !isSelected}
          />
          <a 
            href={getWhatsAppLink(`Hi, I'm interested in the ${name} (${year})`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-navy-dark shadow-lg"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="relative p-3">
        <h3 className="font-bold text-sm text-foreground line-clamp-1 group-hover:text-gold transition-colors mb-1">
          {name}
        </h3>
        <p className="text-muted-foreground text-xs mb-2">{year} • {mileage}</p>
        
        <div className="flex flex-wrap gap-2 text-muted-foreground text-[10px] mb-3">
          <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-full">
            <Fuel className="w-3 h-3" />
            {fuel}
          </span>
          <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-full">
            <Settings2 className="w-3 h-3" />
            {transmission}
          </span>
        </div>

        <a 
          href={getWhatsAppLink(`Hi, I'm interested in the ${name} (${year})`)}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="whatsapp" size="sm" className="w-full text-[10px] h-7">
            Inquire Now
          </Button>
        </a>
      </div>
    </div>
    </Link>
  );
};
