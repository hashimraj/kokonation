import { Scale, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompareButtonProps {
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

export const CompareButton = ({ isSelected, onClick, disabled }: CompareButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg",
        isSelected
          ? "bg-gold text-navy-dark"
          : "bg-white/90 backdrop-blur-sm text-muted-foreground hover:bg-gold hover:text-navy-dark",
        disabled && !isSelected && "opacity-50 cursor-not-allowed hover:bg-white/90 hover:text-muted-foreground"
      )}
      title={isSelected ? "Remove from comparison" : "Add to comparison"}
    >
      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Scale className="w-3.5 h-3.5" />}
    </motion.button>
  );
};
