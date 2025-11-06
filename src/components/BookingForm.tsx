import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", service: "", details: "" });
  };

  return (
    <div className="bg-card border rounded-2xl shadow-2xl p-8 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">Book Your Cleaning</h3>
        <p className="text-muted-foreground">Get your free estimate now</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+353 89 123 4567"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Service Needed</label>
          <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="special">🔥 November Special (€89)</SelectItem>
              <SelectItem value="carpet">Carpet Cleaning</SelectItem>
              <SelectItem value="upholstery">Upholstery Cleaning</SelectItem>
              <SelectItem value="rug">Rug Cleaning</SelectItem>
              <SelectItem value="mattress">Mattress Cleaning</SelectItem>
              <SelectItem value="commercial">Commercial Cleaning</SelectItem>
              <SelectItem value="other">Other / Custom Quote</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Additional Details</label>
          <Textarea
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Tell us about your cleaning needs..."
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
          Submit
        </Button>
      </form>
    </div>
  );
};
