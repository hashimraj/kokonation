import { ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem } from "@/contexts/CartContext";
import { useState } from "react";

interface AddToCartButtonProps {
  item: Omit<CartItem, 'quantity'>;
  variant?: 'icon' | 'full';
  className?: string;
}

export const AddToCartButton = ({ item, variant = 'icon', className = '' }: AddToCartButtonProps) => {
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const isInCart = items.some(i => i.id === item.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleClick}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          justAdded || isInCart 
            ? 'bg-green-500 text-white' 
            : 'bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground'
        } ${className}`}
        aria-label="Add to cart"
      >
        {justAdded ? (
          <Check className="w-4 h-4 animate-scale-in" />
        ) : (
          <ShoppingBag className="w-4 h-4" />
        )}
      </button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      variant={justAdded || isInCart ? "default" : "outline"}
      size="sm"
      className={className}
    >
      {justAdded ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  );
};
