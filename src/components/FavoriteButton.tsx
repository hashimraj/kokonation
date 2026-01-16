import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export const FavoriteButton = ({ isFavorite, onClick, className }: FavoriteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
        isFavorite
          ? "bg-red-500 text-white"
          : "bg-white/90 backdrop-blur-sm text-muted-foreground hover:bg-red-500 hover:text-white",
        className
      )}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart className={cn("w-3.5 h-3.5", isFavorite && "fill-current")} />
    </button>
  );
};
