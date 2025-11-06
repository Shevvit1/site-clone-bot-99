import { BookingForm } from "./BookingForm";
import { Leaf, Users, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[hsl(var(--pastel-mint))] opacity-60 blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-48 h-48 rounded-full bg-[hsl(var(--pastel-lavender))] opacity-40 blur-3xl" />
      <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full bg-[hsl(var(--pastel-blue))] opacity-50 blur-3xl" />
      <div className="absolute bottom-20 right-1/3 w-36 h-36 rounded-full bg-[hsl(var(--pastel-mint))] opacity-40 blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Promo Badge */}
            <div className="relative inline-block">
              <div className="bg-gradient-to-br from-[hsl(30,100%,60%)] to-[hsl(45,100%,55%)] text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  50% OFF!
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg rotate-[-12deg]">
                  LIMITED TIME
                </div>
                <div className="text-sm font-semibold mb-2 opacity-90">NOVEMBER SPECIAL</div>
                <div className="text-3xl font-bold mb-2">Buy 2 Rooms for €89</div>
                <div className="text-4xl font-extrabold mb-2">GET 1 FREE</div>
                <div className="text-sm line-through opacity-75">Regular Price: €180</div>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Professional{" "}
                <span className="text-primary">Carpet Cleaning</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Transform your home with our expert cleaning services. Eco-friendly, professional, and affordable.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
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

          {/* Right side - Form */}
          <div className="lg:mt-12">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};
