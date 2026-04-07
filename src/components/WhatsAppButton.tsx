import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511948830502?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    style={{ backgroundColor: "#25D366" }}
    aria-label="WhatsApp"
  >
    <MessageCircle className="text-primary-foreground" size={28} />
  </a>
);

export default WhatsAppButton;
