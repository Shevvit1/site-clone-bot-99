import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown, Clover } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-secondary/50 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center relative">
            <Clover className="w-10 h-10 text-primary-foreground absolute" />
            <span className="text-sm font-bold text-primary-foreground relative z-10">CS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">Clean Sofa</span>
            <span className="text-sm text-primary">cleansofa.ie</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Button 
            className="bg-primary hover:bg-primary/90 px-6 py-3 h-auto text-base"
            onClick={() => window.open('https://wa.me/353873719253', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Us
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2 relative">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="relative">
            <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              Quick Links
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute right-0 top-full mt-2 bg-background border rounded-lg shadow-lg p-4 min-w-[200px] z-[100]">
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    scrollToSection("services");
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium hover:text-primary transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection("pricing");
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium hover:text-primary transition-colors text-left"
                >
                  Pricing
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about");
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium hover:text-primary transition-colors text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsOpen(false);
                  }}
                  className="text-sm font-medium hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </nav>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </nav>
  );
};
