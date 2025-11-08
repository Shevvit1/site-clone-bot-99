import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/353873719253', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed right-4 bottom-4 z-50 rounded-full shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] px-6 py-3 h-auto"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 mr-2 text-white" />
      <span className="text-white font-semibold">WhatsApp</span>
    </Button>
  );
};