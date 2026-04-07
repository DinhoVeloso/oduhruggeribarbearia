const CtaFinal = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-display mb-4">
        Seu visual merece <span className="text-gold">atenção profissional.</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Agende agora e tenha uma experiência premium na ODuh Ruggeri Barbearia & Visagismo.
      </p>
      <a
        href="https://wa.me/5511948830502?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block gradient-gold text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        Agendar agora no WhatsApp
      </a>
    </div>
  </section>
);

export default CtaFinal;
