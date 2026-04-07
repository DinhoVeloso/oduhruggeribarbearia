import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl pt-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
          Eleve seu estilo com{" "}
          <span className="gradient-gold-text">precisão, técnica e identidade.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Cortes personalizados, visagismo profissional e atendimento de alto padrão na Casa Verde.
        </p>
        <button
          onClick={() => scrollTo("#agendamento")}
          className="gradient-gold text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Agende agora e transforme seu visual
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
