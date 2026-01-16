import { createContext, useContext, useState, ReactNode } from "react";

export interface PropertyItem {
  type: "property";
  id: string;
  image: string;
  title: string;
  location: string;
  country: string;
  beds: number;
  baths: number;
  sqft: string;
  propertyType: string;
}

export interface CarItem {
  type: "car";
  id: string;
  image: string;
  name: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  condition: string;
}

export type ComparisonItem = PropertyItem | CarItem;

interface ComparisonContextType {
  items: ComparisonItem[];
  addItem: (item: ComparisonItem) => void;
  removeItem: (id: string) => void;
  clearAll: () => void;
  isInComparison: (id: string) => boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ComparisonItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: ComparisonItem) => {
    if (items.length >= 4) return;
    if (items.some((i) => i.id === item.id)) return;
    // Only allow same type comparisons
    if (items.length > 0 && items[0].type !== item.type) return;
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearAll = () => {
    setItems([]);
    setIsOpen(false);
  };

  const isInComparison = (id: string) => items.some((i) => i.id === id);

  return (
    <ComparisonContext.Provider
      value={{ items, addItem, removeItem, clearAll, isInComparison, isOpen, setIsOpen }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
};
