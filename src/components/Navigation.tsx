import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">CS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Clean Sofa</span>
            <span className="text-xs text-muted-foreground">cleansofa.ie</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </button>
          <Button className="bg-primary hover:bg-primary/90">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
