import { Sofa, Home, Package, Bed, Building, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Carpet Cleaning",
    description: "Deep cleaning for all types of carpets using eco-friendly solutions",
  },
  {
    icon: Sofa,
    title: "Upholstery Cleaning",
    description: "Professional cleaning for sofas, chairs, and furniture",
  },
  {
    icon: Package,
    title: "Rug Cleaning",
    description: "Specialized care for delicate and valuable rugs",
  },
  {
    icon: Bed,
    title: "Mattress Cleaning",
    description: "Thorough sanitization and stain removal for mattresses",
  },
  {
    icon: Building,
    title: "Commercial Cleaning",
    description: "Large-scale cleaning services for offices and businesses",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Tailored cleaning packages for your specific needs",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
