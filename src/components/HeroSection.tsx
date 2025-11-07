import { Leaf, Users, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[hsl(var(--pastel-mint))] opacity-60 blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-48 h-48 rounded-full bg-[hsl(var(--pastel-lavender))] opacity-40 blur-3xl" />
      <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full bg-[hsl(var(--pastel-blue))] opacity-50 blur-3xl" />
      <div className="absolute bottom-20 right-1/3 w-36 h-36 rounded-full bg-[hsl(var(--pastel-mint))] opacity-40 blur-3xl" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Professional{" "}
            <span className="text-primary">Carpet Cleaning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your home with our expert cleaning services. Eco-friendly, professional, and affordable.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Expert Team</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="font-medium">Quick Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
