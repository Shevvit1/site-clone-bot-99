export const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center relative">
              <svg
                className="w-8 h-8 text-primary-foreground absolute"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8 4C8 2.9 7.1 2 6 2C4.9 2 4 2.9 4 4C4 5.1 4.9 6 6 6C7.1 6 8 5.1 8 4ZM20 4C20 2.9 19.1 2 18 2C16.9 2 16 2.9 16 4C16 5.1 16.9 6 18 6C19.1 6 20 5.1 20 4ZM12 8C8.69 8 6 10.69 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 10.69 15.31 8 12 8Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm font-bold text-primary-foreground relative z-10">CS</span>
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
