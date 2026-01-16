import { motion, AnimatePresence } from "framer-motion";
import { X, Bed, Bath, Square, Fuel, Settings2, Gauge, Trash2, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useComparison, PropertyItem, CarItem } from "@/contexts/ComparisonContext";

export const ComparisonDrawer = () => {
  const { items, removeItem, clearAll, isOpen, setIsOpen } = useComparison();

  if (items.length === 0) return null;

  const isProperty = items[0]?.type === "property";

  return (
    <>
      {/* Floating comparison bar */}
      <AnimatePresence>
        {items.length > 0 && !isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-card border border-border shadow-2xl rounded-full px-4 py-2 flex items-center gap-3">
              <Scale className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-foreground">
                {items.length} {isProperty ? "properties" : "cars"} selected
              </span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsOpen(true)}
                  className="rounded-full text-xs"
                >
                  Compare Now
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={clearAll}
                  className="rounded-full text-xs text-muted-foreground"
                >
                  Clear
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full comparison drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-3xl max-h-[85vh] overflow-hidden"
            >
              {/* Header */}
              <div className="sticky top-0 bg-background border-b border-border px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-gold" />
                  <h2 className="text-xl font-bold text-foreground">
                    Compare {isProperty ? "Properties" : "Vehicles"}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={clearAll}>
                    <Trash2 className="w-4 h-4 mr-1" />
                    Clear All
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Comparison grid */}
              <div className="overflow-x-auto p-4">
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(200px, 1fr))` }}>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card border border-border rounded-xl overflow-hidden relative group"
                    >
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute top-2 right-2 z-10 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      <div className="aspect-video">
                        <img
                          src={item.image}
                          alt={isProperty ? (item as PropertyItem).title : (item as CarItem).name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-sm text-foreground mb-2 line-clamp-2">
                          {isProperty ? (item as PropertyItem).title : (item as CarItem).name}
                        </h3>
                        {isProperty ? (
                          <PropertyDetails item={item as PropertyItem} />
                        ) : (
                          <CarDetails item={item as CarItem} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comparison table */}
                {items.length >= 2 && (
                  <div className="mt-6 border border-border rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-3 text-sm font-semibold text-foreground">Feature</th>
                          {items.map((item) => (
                            <th key={item.id} className="text-left p-3 text-sm font-semibold text-foreground">
                              {isProperty ? (item as PropertyItem).title : (item as CarItem).name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {isProperty ? (
                          <>
                            <ComparisonRow label="Location" values={items.map((i) => `${(i as PropertyItem).location}, ${(i as PropertyItem).country}`)} />
                            <ComparisonRow label="Type" values={items.map((i) => (i as PropertyItem).propertyType)} />
                            <ComparisonRow label="Bedrooms" values={items.map((i) => String((i as PropertyItem).beds))} />
                            <ComparisonRow label="Bathrooms" values={items.map((i) => String((i as PropertyItem).baths))} />
                            <ComparisonRow label="Size" values={items.map((i) => `${(i as PropertyItem).sqft} sqft`)} />
                          </>
                        ) : (
                          <>
                            <ComparisonRow label="Year" values={items.map((i) => String((i as CarItem).year))} />
                            <ComparisonRow label="Condition" values={items.map((i) => (i as CarItem).condition)} />
                            <ComparisonRow label="Mileage" values={items.map((i) => (i as CarItem).mileage)} />
                            <ComparisonRow label="Fuel Type" values={items.map((i) => (i as CarItem).fuel)} />
                            <ComparisonRow label="Transmission" values={items.map((i) => (i as CarItem).transmission)} />
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const PropertyDetails = ({ item }: { item: PropertyItem }) => (
  <div className="space-y-1.5 text-xs text-muted-foreground">
    <p className="line-clamp-1">{item.location}, {item.country}</p>
    <div className="flex flex-wrap gap-2">
      {item.beds > 0 && (
        <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded-full">
          <Bed className="w-3 h-3" /> {item.beds}
        </span>
      )}
      <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded-full">
        <Bath className="w-3 h-3" /> {item.baths}
      </span>
      <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded-full">
        <Square className="w-3 h-3" /> {item.sqft}
      </span>
    </div>
  </div>
);

const CarDetails = ({ item }: { item: CarItem }) => (
  <div className="space-y-1.5 text-xs text-muted-foreground">
    <p>{item.year} • {item.condition}</p>
    <div className="flex flex-wrap gap-2">
      <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded-full">
        <Gauge className="w-3 h-3" /> {item.mileage}
      </span>
      <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded-full">
        <Fuel className="w-3 h-3" /> {item.fuel}
      </span>
      <span className="flex items-center gap-1 bg-secondary/50 px-2 py-0.5 rounded-full">
        <Settings2 className="w-3 h-3" /> {item.transmission}
      </span>
    </div>
  </div>
);

const ComparisonRow = ({ label, values }: { label: string; values: string[] }) => (
  <tr className="border-t border-border">
    <td className="p-3 text-sm font-medium text-foreground bg-muted/50">{label}</td>
    {values.map((value, idx) => (
      <td key={idx} className="p-3 text-sm text-muted-foreground">{value}</td>
    ))}
  </tr>
);
