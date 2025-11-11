import { Card } from "@/components/ui/card";
import upholsteryImage from "@/assets/upholstery-cleaning.jpg";
import rugImage from "@/assets/rug-cleaning.jpg";
import mattressImage from "@/assets/mattress-cleaning.jpg";
import stairsImage from "@/assets/stairs-cleaning.jpg";
import carpetImage from "@/assets/carpet-cleaning.jpg";
import commercialImage from "@/assets/commercial-cleaning.jpg";

const services = [
  {
    title: "Upholstery cleaning",
    image: upholsteryImage,
    pricing: [
      { label: "3-seater sofa:", price: "€100" },
      { label: "5-seater sofa:", price: "€160" },
      { label: "Armchairs:", price: "€105" },
      { label: "Dining chairs:", price: "€10" },
    ],
    note: "Additional €10 per cushion",
  },
  {
    title: "Area rug cleaning",
    image: rugImage,
    pricing: [
      { label: "Small:", price: "€40" },
      { label: "Medium:", price: "€50", highlight: true },
      { label: "Large:", price: "€60" },
    ],
    note: "Pricing based on rug size and material",
  },
  {
    title: "Mattress Cleaning",
    image: mattressImage,
    pricing: [
      { label: "Single bed mattress:", price: "€50" },
      { label: "Double bed mattress:", price: "€60" },
      { label: "King size mattress:", price: "€75" },
    ],
    note: "Headboard cleaning from €30",
  },
  {
    title: "Stairs cleaning",
    image: stairsImage,
    startingPrice: "€75",
    description: "Price varies by number of steps and layout. Discounts available for multiple staircases.",
  },
  {
    title: "Carpet cleaning",
    image: carpetImage,
    startingPrice: "€40 per room",
    description: "Price varies by room size. Discounts for multiple rooms.",
  },
  {
    title: "Commercial Cleaning",
    image: commercialImage,
    customPricing: true,
    description: "Tailored to your needs. Prices discussed individually based on scope and size.",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                
                {service.pricing && (
                  <div className="space-y-2">
                    {service.pricing.map((item, i) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center ${
                          item.highlight ? "text-primary font-semibold" : ""
                        }`}
                      >
                        <span className="text-sm">{item.label}</span>
                        <span className="font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {service.startingPrice && (
                  <div className="space-y-2">
                    <p className="text-lg font-bold">
                      Starting at {service.startingPrice}
                    </p>
                  </div>
                )}

                {service.customPricing && (
                  <p className="text-lg font-bold">Custom Pricing</p>
                )}

                {(service.note || service.description) && (
                  <p className="text-sm text-muted-foreground">
                    {service.note || service.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
