import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a dedicated family-run business based in Ireland, specializing in expert carpet and upholstery cleaning. Our service is defined by three standards: European-level quality, meticulous attention to every detail, and an honest, transparent approach with every client.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For us, this is a commitment, not just a job. It is a passion we pour our hearts into, focused on delivering exceptional cleanliness, true comfort, and lasting freshness to your home.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">❓ Quick Answers</h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                What types of cleaning services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We specialize in professional deep cleaning of carpets, rugs, sofas, and armchairs (upholstery). Please contact us for a complete list of our specialized services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                How do I book a cleaning service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Simply call or text us! We'll discuss the details, provide a precise quote, and schedule a convenient time for your service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                What areas do you service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We currently service Mullingar & surrounding areas. If you are outside this area, please inquire with us directly—we are often able to accommodate nearby locations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept cash payment and Revolut transfers. Payment is due upon completion of the job and your full satisfaction with the result.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
