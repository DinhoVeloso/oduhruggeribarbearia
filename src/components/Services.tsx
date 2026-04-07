const categories = [
  {
    name: "Barbearia",
    services: [
      { name: "Cabelo", price: "R$80,00" },
      { name: "Barba", price: "R$80,00" },
      { name: "Barba e Cabelo", price: "R$130,00" },
      { name: "Corte com Visagismo", price: "R$200,00" },
      { name: "Consultoria de Visagismo", price: "R$700,00" },
      { name: "Corte Raspado", price: "R$50,00" },
      { name: "Acabamento", price: "R$40,00" },
      { name: "Sobrancelhas", price: "R$40,00" },
    ],
  },
  {
    name: "Tratamentos Capilares",
    services: [
      { name: "Luzes", price: "a partir de R$150,00" },
      { name: "Platinado", price: "a partir de R$200,00" },
      { name: "Progressiva", price: "a partir de R$150,00" },
      { name: "Botox Capilar", price: "a partir de R$150,00" },
      { name: "Relaxamento", price: "R$60,00" },
      { name: "Corte & Relaxamento", price: "R$130,00" },
    ],
  },
  {
    name: "Estética & Bem-estar",
    services: [
      { name: "Cera (Ouvido, Nariz)", price: "R$40,00" },
      { name: "Massagem Terapêutica", price: "R$180,00" },
      { name: "Massagem Relaxante", price: "R$180,00" },
      { name: "Drenagem Linfática", price: "R$180,00" },
    ],
  },
];

const Services = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
          Serviços & <span className="text-gold">Valores</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Cada serviço é executado com precisão, técnica e atenção aos detalhes.
        </p>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-display text-xl text-gold mb-6 text-center md:text-left">{cat.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.services.map((s) => (
                  <div
                    key={s.name}
                    className="bg-card border border-border rounded-xl p-5 hover:border-gold/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{s.name}</h4>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gold font-display text-lg font-bold">{s.price}</span>
                      <button
                        onClick={() => scrollTo("#agendamento")}
                        className="text-xs bg-secondary hover:bg-gold hover:text-primary-foreground text-secondary-foreground px-3 py-1.5 rounded-md transition-colors font-medium"
                      >
                        Agendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Atendimento com horário marcado para melhor experiência.
        </p>
      </div>
    </section>
  );
};

export default Services;
