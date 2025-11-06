import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sofa, Armchair } from "lucide-react";

const services = [
  {
    title: "3-Seater Sofa",
    price: "€100",
    icon: Sofa,
  },
  {
    title: "5-Seater Sofa",
    price: "€160",
    icon: Sofa,
  },
  {
    title: "Armchairs",
    price: "€105",
    icon: Armchair,
  },
  {
    title: "Dining Chairs",
    price: "€10",
    description: "per chair",
    icon: Armchair,
  },
  {
    title: "Cushions",
    price: "€10",
    description: "per cushion",
    icon: Armchair,
  },
  {
    title: "Custom Quote",
    price: "Contact Us",
    description: "for other items",
    icon: Sofa,
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
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Upholstery Cleaning</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning services for all your furniture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                    {service.description && (
                      <div className="text-sm text-muted-foreground">
                        {service.description}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full"
                >
                  Book Now
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
