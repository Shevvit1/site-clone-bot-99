import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/353873719253', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed left-4 bottom-4 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] p-0"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </Button>
  );
};