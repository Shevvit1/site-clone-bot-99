import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Clean Sofa. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Professional Carpet & Upholstery Cleaning Services
            </p>
          </div>

          <Button
            onClick={scrollToTop}
            variant="secondary"
            className="flex items-center gap-2"
          >
            Go Up <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
