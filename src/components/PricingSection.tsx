import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Single Room",
    price: "€45",
    description: "Perfect for small cleaning jobs",
    features: [
      "One room cleaning",
      "Eco-friendly products",
      "Professional equipment",
      "Stain removal included",
    ],
  },
  {
    name: "November Special",
    price: "€89",
    originalPrice: "€180",
    description: "Best value - Limited time offer",
    features: [
      "Three rooms cleaning",
      "Buy 2 Get 1 FREE",
      "Eco-friendly products",
      "Professional equipment",
      "Stain removal included",
      "Deodorization",
    ],
    popular: true,
  },
  {
    name: "Whole House",
    price: "Custom",
    description: "For larger properties",
    features: [
      "Unlimited rooms",
      "Full house cleaning",
      "Eco-friendly products",
      "Professional equipment",
      "Stain removal included",
      "Deodorization",
      "Priority scheduling",
    ],
  },
];

export const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 space-y-6 relative ${
                plan.popular ? "border-primary border-2 shadow-xl" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                {plan.price !== "Custom" && <p className="text-sm text-muted-foreground">per service</p>}
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToContact}
                className={`w-full ${
                  plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
