import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "./BookingForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your carpets? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+353873719253" className="text-muted-foreground hover:text-primary transition-colors">
                    +353 87 371 9253
                  </a>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:procleansofa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    procleansofa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Service Area</h3>
                  <p className="text-muted-foreground">Mullingar & surrounding areas</p>
                  <p className="text-sm text-muted-foreground">Free quotes available nationwide</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/353873719253', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <BookingForm />
        </div>
      </div>
    </section>
  );
};
