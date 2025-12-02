import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/353873719253', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed right-4 bottom-4 z-50 rounded-full shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] px-5 py-3 md:px-8 md:py-4 h-auto animate-bounce"
      style={{
        animation: 'bounce 1.5s ease-in-out infinite',
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 text-white" />
      <span className="text-white font-semibold text-base md:text-lg">WhatsApp</span>
    </Button>
  );
};