import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <img src={logo} alt="ODuh Ruggeri" className="h-8 w-8 rounded-full object-cover" />
        <span>© {new Date().getFullYear()} ODuh Ruggeri Barbearia & Visagismo</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://instagram.com/oduhruggeribarbearia" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
          Instagram
        </a>
        <a href="https://wa.me/5511948830502" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
