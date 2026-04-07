import { Clock } from "lucide-react";

const schedule = [
  { day: "Segunda-feira", hours: "10:00 – 18:00", highlight: false },
  { day: "Terça-feira", hours: "10:00 – 20:00", highlight: false },
  { day: "Quarta-feira", hours: "09:00 – 20:00", highlight: false },
  { day: "Quinta-feira", hours: "09:00 – 21:00", highlight: true },
  { day: "Sexta-feira", hours: "09:00 – 21:00", highlight: true },
  { day: "Sábado", hours: "09:00 – 18:00", highlight: false },
  { day: "Domingo", hours: "Fechado", closed: true },
];

const Hours = () => (
  <section id="horarios" className="py-20 bg-secondary">
    <div className="container mx-auto px-4 max-w-lg">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-10">
        Horário de <span className="text-gold">Funcionamento</span>
      </h2>
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-3">
        {schedule.map((s) => (
          <div
            key={s.day}
            className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
              s.highlight ? "bg-gold/10 border border-gold/20" : s.closed ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Clock size={16} className={s.highlight ? "text-gold" : "text-muted-foreground"} />
              <span className={`font-medium ${s.highlight ? "text-gold" : "text-foreground"}`}>{s.day}</span>
            </div>
            <span className={`font-semibold ${s.highlight ? "text-gold" : s.closed ? "text-destructive" : "text-foreground"}`}>
              {s.hours}
              {s.highlight && (
                <span className="ml-2 text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">estendido</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hours;
