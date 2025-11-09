export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">CS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Clean Sofa</span>
                <span className="text-xs text-muted-foreground">cleansofa.ie</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("pricing")} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="text-center md:text-right">
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
