import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Horários", href: "#horarios" },
  { label: "Localização", href: "#localizacao" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" onClick={() => scrollTo("#inicio")} className="flex items-center gap-2">
          <img src={logo} alt="ODuh Ruggeri" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-lg text-foreground">ODuh Ruggeri</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#agendamento")}
            className="gradient-gold text-primary-foreground font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Agendar
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-foreground py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#agendamento")}
              className="gradient-gold text-primary-foreground font-semibold py-3 px-4 rounded-lg text-center mt-2"
            >
              Agendar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
