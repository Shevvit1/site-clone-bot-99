import { Star, X } from "lucide-react";
import { useState } from "react";

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center space-x-4 text-sm font-medium">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-current" />
          <span>5-Star Rated Cleaning Service</span>
        </div>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">☘️ Register now for exclusive deals!</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
