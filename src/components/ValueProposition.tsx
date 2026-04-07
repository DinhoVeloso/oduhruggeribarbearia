import { Scissors, User, Sparkles, Wifi } from "lucide-react";

const items = [
  { icon: User, title: "Atendimento Individualizado", desc: "Cada cliente é tratado de forma única e personalizada." },
  { icon: Scissors, title: "Técnica de Visagismo", desc: "Análise facial para encontrar o visual que mais combina com você." },
  { icon: Sparkles, title: "Ambiente Premium", desc: "Conforto, higiene e uma experiência completa de cuidado." },
  { icon: Wifi, title: "Agendamento Rápido", desc: "Marque seu horário pelo WhatsApp de forma prática e ágil." },
];

const ValueProposition = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
        Por que nos <span className="text-gold">escolher</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Na ODuh Ruggeri Barbearia & Visagismo, cada detalhe é pensado para oferecer uma experiência única.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-card p-6 rounded-xl border border-border hover:border-gold/30 transition-colors text-center">
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
              <item.icon className="text-primary-foreground" size={22} />
            </div>
            <h3 className="font-display text-lg mb-2 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProposition;
