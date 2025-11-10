export const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">CS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">Clean Sofa</span>
              <span className="text-xs text-muted-foreground">cleansofa.ie</span>
            </div>
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
