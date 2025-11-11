import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Clover } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 order-2 md:order-1 ml-auto md:ml-0">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center relative">
              <Clover className="w-10 h-10 text-primary-foreground absolute" />
              <span className="text-sm font-bold text-primary-foreground relative z-10">CS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Clean Sofa</span>
              <span className="text-sm text-primary">cleansofa.ie</span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="flex items-center gap-2"
            >
              Go Up <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center md:text-right order-3">
            <p className="text-sm text-muted-foreground">
              © 2024 Clean Sofa. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Professional Carpet & Upholstery Cleaning Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
