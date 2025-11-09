import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

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
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Clean Sofa Logo" className="h-16 w-auto" />
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
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.open('https://wa.me/353873719253', '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
