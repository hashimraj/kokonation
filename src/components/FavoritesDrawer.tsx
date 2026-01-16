import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Trash2, Home, Car, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/contexts/FavoritesContext";

export const FavoritesDrawer = () => {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (favorites.length === 0) return null;

  const propertyCount = favorites.filter((f) => f.type === "property").length;
  const carCount = favorites.filter((f) => f.type === "car").length;

  return (
    <>
      {/* Floating favorites bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="bg-card/95 backdrop-blur-md rounded-full shadow-2xl border border-border px-4 py-2 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
            <span className="text-sm font-medium text-foreground">
              {favorites.length} saved
            </span>
          </div>
          
          {/* Mini preview */}
          <div className="flex -space-x-2">
            {favorites.slice(0, 3).map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className="w-8 h-8 rounded-full border-2 border-card object-cover"
              />
            ))}
            {favorites.length > 3 && (
              <div className="w-8 h-8 rounded-full border-2 border-card bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                +{favorites.length - 3}
              </div>
            )}
          </div>

          <Button
            variant="gold"
            size="sm"
            onClick={() => setIsOpen(true)}
            className="rounded-full"
          >
            View All
          </Button>
        </div>
      </motion.div>

      {/* Full drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: isMinimized ? "calc(100% - 60px)" : 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[80vh] flex flex-col"
            >
              {/* Handle */}
              <div 
                className="flex justify-center pt-3 pb-2 cursor-pointer"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                <div className="w-12 h-1.5 rounded-full bg-border" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">My Favorites</h2>
                    <p className="text-sm text-muted-foreground">
                      {propertyCount > 0 && `${propertyCount} properties`}
                      {propertyCount > 0 && carCount > 0 && " • "}
                      {carCount > 0 && `${carCount} cars`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="rounded-full"
                  >
                    {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFavorites}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              {!isMinimized && (
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                      {favorites.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="group relative bg-secondary rounded-xl overflow-hidden"
                        >
                          <Link
                            to={item.type === "property" ? `/real-estate/${item.id}` : `/car-deals/${item.id}`}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="aspect-video relative">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              
                              {/* Type badge */}
                              <div className="absolute top-2 left-2">
                                <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                                  {item.type === "property" ? (
                                    <Home className="w-3 h-3 text-navy-dark" />
                                  ) : (
                                    <Car className="w-3 h-3 text-navy-dark" />
                                  )}
                                </div>
                              </div>

                              {/* Remove button */}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  removeFavorite(item.id);
                                }}
                                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-3 h-3" />
                              </button>

                              {/* Info */}
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h3 className="text-white font-semibold text-sm line-clamp-1">
                                  {item.title}
                                </h3>
                                <p className="text-white/80 text-xs line-clamp-1">
                                  {item.subtitle}
                                </p>
                                {item.price && (
                                  <p className="text-gold font-bold text-sm mt-1">
                                    {item.price}
                                  </p>
                                )}
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
