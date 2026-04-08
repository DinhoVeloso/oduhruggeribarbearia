import { useState, useMemo } from "react";
import { Calendar, Clock, User, Send } from "lucide-react";

const allServices = [
  { category: "Cabelo", items: [
    { name: "Corte Masculino", price: "R$80,00", value: 80 },
    { name: "Corte com Visagismo", price: "R$200,00", value: 200 },
    { name: "Visagismo", price: "R$600,00", value: 600 },
    { name: "Corte + Sobrancelhas", price: "R$100,00", value: 100 },
    { name: "Corte a Máquina", price: "R$50,00", value: 50 },
    { name: "Coloração / Tonalização", price: "R$80,00", value: 80 },
    { name: "Hidratação", price: "R$60,00", value: 60 },
    { name: "Botox Capilar", price: "a partir de R$180,00", value: 180 },
    { name: "Luzes", price: "a partir de R$180,00", value: 180 },
    { name: "Platinado", price: "a partir de R$250,00", value: 250 },
    { name: "Progressiva", price: "a partir de R$180,00", value: 180 },
    { name: "Relaxamento", price: "R$50,00", value: 50 },
  ]},
  { category: "Barba e Bigode", items: [
    { name: "Barba + Sobrancelhas", price: "R$100,00", value: 100 },
    { name: "Barba com Máquina", price: "R$50,00", value: 50 },
    { name: "Barboterapia", price: "R$85,00", value: 85 },
    { name: "Barboterapia + Combo Cera", price: "R$130,00", value: 130 },
    { name: "Barboterapia + Sobrancelhas", price: "R$100,00", value: 100 },
    { name: "Barboterapia + Sobr. + Cera", price: "R$150,00", value: 150 },
    { name: "Cabelo e Barba", price: "R$150,00", value: 150 },
    { name: "Corte e Barba + Sobrancelhas", price: "R$170,00", value: 170 },
    { name: "Cabelo + Cera Ouvido/Nariz", price: "R$150,00", value: 150 },
  ]},
  { category: "Estética & Bem-estar", items: [
    { name: "Sobrancelha na Pinça", price: "R$40,00", value: 40 },
    { name: "Depilação Combo Ouvido + Nariz", price: "R$80,00", value: 80 },
    { name: "Depilação Nariz ou Ouvido", price: "R$50,00", value: 50 },
    { name: "Massagem Terapêutica", price: "R$180,00", value: 180 },
    { name: "Massagem Relaxante", price: "R$180,00", value: 180 },
    { name: "Drenagem Linfática", price: "R$180,00", value: 180 },
  ]},
];

const getHours = (dayOfWeek: number): string[] => {
  const hours: string[] = [];
  if (dayOfWeek === 0) return [];
  const start = 9;
  const end = (dayOfWeek === 4 || dayOfWeek === 5) ? 21 : 20;
  for (let h = start; h < end; h++) {
    hours.push(`${String(h).padStart(2, "0")}:00`);
    hours.push(`${String(h).padStart(2, "0")}:30`);
  }
  return hours;
};

const Scheduling = () => {
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const selectedServiceData = useMemo(() => {
    for (const cat of allServices) {
      const found = cat.items.find((s) => s.name === selectedService);
      if (found) return found;
    }
    return null;
  }, [selectedService]);

  const dayOfWeek = useMemo(() => {
    if (!date) return -1;
    return new Date(date + "T12:00:00").getDay();
  }, [date]);

  const availableHours = useMemo(() => {
    if (dayOfWeek < 0) return [];
    return getHours(dayOfWeek);
  }, [dayOfWeek]);

  const isSunday = dayOfWeek === 0;

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const canSubmit = name.trim() && selectedService && date && time && !isSunday;

  const handleSubmit = () => {
    if (!canSubmit || !selectedServiceData) return;
    const dateFormatted = new Date(date + "T12:00:00").toLocaleDateString("pt-BR");
    const msg = `Olá, meu nome é ${name.trim()}.%0AGostaria de agendar o serviço: ${selectedServiceData.name}.%0AValor: ${selectedServiceData.price}.%0AData desejada: ${dateFormatted}.%0AHorário escolhido: ${time}.`;
    window.open(`https://wa.me/5511948830502?text=${msg}`, "_blank");
  };

  return (
    <section id="agendamento" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
          Agende seu <span className="text-gold">horário</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Preencha os dados abaixo e confirme pelo WhatsApp.
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <User size={16} className="text-gold" /> Seu nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              maxLength={100}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Calendar size={16} className="text-gold" /> Serviço
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition appearance-none"
            >
              <option value="">Selecione um serviço</option>
              {allServices.map((cat) => (
                <optgroup key={cat.category} label={cat.category}>
                  {cat.items.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — {s.price}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {selectedServiceData && (
            <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 text-center">
              <span className="text-sm text-muted-foreground">Valor:</span>
              <span className="ml-2 text-gold font-display text-xl font-bold">{selectedServiceData.price}</span>
            </div>
          )}

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Calendar size={16} className="text-gold" /> Data
            </label>
            <input
              type="date"
              value={date}
              min={minDate}
              onChange={(e) => { setDate(e.target.value); setTime(""); }}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
            />
            {isSunday && (
              <p className="text-destructive text-sm mt-1">Não abrimos aos domingos. Escolha outro dia.</p>
            )}
          </div>

          {availableHours.length > 0 && !isSunday && (
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Clock size={16} className="text-gold" /> Horário
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {availableHours.map((h) => (
                  <button
                    key={h}
                    onClick={() => setTime(h)}
                    className={`py-2 px-2 rounded-lg text-sm font-medium transition-colors border ${
                      time === h
                        ? "gradient-gold text-primary-foreground border-transparent"
                        : "bg-secondary border-border text-foreground hover:border-gold/40"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
              canSubmit
                ? "gradient-gold text-primary-foreground hover:opacity-90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <Send size={20} />
            Confirmar agendamento no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
