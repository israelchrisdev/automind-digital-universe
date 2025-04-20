
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you'd send this to your backend
      // which would then forward to Telegram
      console.log("Form data to be sent:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success toast
      toast({
        title: "Message Sent!",
        description: "✅ You will receive a call within 4 hours.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="reason" className="block text-sm font-medium mb-1">
          Reason for Contact
        </label>
        <Textarea
          id="reason"
          name="reason"
          placeholder="How can we help you?"
          value={formData.reason}
          onChange={handleChange}
          required
          rows={4}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
