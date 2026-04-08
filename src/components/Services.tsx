const categories = [
  {
    name: "Cabelo",
    services: [
      { name: "Corte Masculino", price: "R$80,00", desc: "Higienização e secagem" },
      { name: "Corte com Visagismo", price: "R$200,00", desc: "Visual harmonioso baseado no formato do rosto" },
      { name: "Visagismo", price: "R$600,00", desc: "Análise completa de estética e identidade" },
      { name: "Corte + Sobrancelhas", price: "R$100,00", desc: "Corte de cabelo e sobrancelhas" },
      { name: "Corte a Máquina", price: "R$50,00", desc: "Raspagem com pente" },
      { name: "Coloração / Tonalização", price: "R$80,00", desc: "Tintura com produtos profissionais" },
      { name: "Hidratação", price: "R$60,00", desc: "Tratamento capilar hidratante" },
      { name: "Botox Capilar", price: "R$180,00", desc: "Reconstrução e brilho — a partir" },
      { name: "Luzes", price: "a partir de R$180,00", desc: "Reflexos e mechas" },
      { name: "Platinado", price: "a partir de R$250,00", desc: "Descoloração global" },
      { name: "Progressiva", price: "a partir de R$180,00", desc: "Selagem e alisamento" },
      { name: "Relaxamento", price: "R$50,00", desc: "Alisa o cabelo de forma suave" },
      { name: "Camuflagem de Brancos", price: "Consultar", desc: "Cobertura dos fios brancos sem tintura total" },
    ],
  },
  {
    name: "Barba e Bigode",
    services: [
      { name: "Barba + Sobrancelhas", price: "R$100,00", desc: "Barboterapia e limpeza das sobrancelhas" },
      { name: "Barba com Máquina", price: "R$50,00", desc: "Aparar com máquina elétrica" },
      { name: "Barboterapia", price: "R$85,00", desc: "Creme esfoliante, toalha quente e massagem facial" },
      { name: "Barboterapia + Combo Cera", price: "R$130,00", desc: "Barboterapia com depilação nariz e ouvido" },
      { name: "Barboterapia + Sobrancelhas", price: "R$100,00", desc: "Barboterapia com limpeza das sobrancelhas" },
      { name: "Barboterapia + Sobr. + Cera", price: "R$150,00", desc: "Barboterapia completa com depilação" },
      { name: "Cabelo e Barba", price: "R$150,00", desc: "Corte de cabelo e barboterapia" },
      { name: "Corte e Barba + Sobrancelhas", price: "R$170,00", desc: "Combo completo com sobrancelhas" },
      { name: "Cabelo + Cera Ouvido/Nariz", price: "R$150,00", desc: "Corte com depilação" },
    ],
  },
  {
    name: "Estética & Bem-estar",
    services: [
      { name: "Sobrancelha na Pinça", price: "R$40,00", desc: "Modelagem com pinça" },
      { name: "Depilação Combo Ouvido + Nariz", price: "R$80,00", desc: "Depilação com cera quente" },
      { name: "Depilação Nariz ou Ouvido", price: "R$50,00", desc: "Depilação com cera quente" },
      { name: "Massagem Terapêutica", price: "R$180,00", desc: "Alívio de tensões e dores" },
      { name: "Massagem Relaxante", price: "R$180,00", desc: "Relaxamento profundo" },
      { name: "Drenagem Linfática", price: "R$180,00", desc: "Redução de inchaço e toxinas" },
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
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
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
