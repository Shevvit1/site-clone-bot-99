import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">CS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">Clean Sofa</span>
              <span className="text-xs text-muted-foreground">cleansofa.ie</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-4">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                Quick Links
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <nav className="flex flex-col space-y-2">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    Contact
                  </button>
                </nav>
              </CollapsibleContent>
            </Collapsible>

            <div>
              <p className="text-sm text-muted-foreground">
                © 2024 Clean Sofa. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Professional Carpet & Upholstery Cleaning Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
