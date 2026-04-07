import { Star, Quote } from "lucide-react";

const SocialProof = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-display mb-4">
        Reconhecimento & <span className="text-gold">Confiança</span>
      </h2>
      <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
        Clientes satisfeitos e reconhecimento crescente na região.
      </p>

      <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 relative">
        <Quote className="text-gold/20 absolute top-4 left-4" size={48} />
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-gold fill-gold" size={20} />
          ))}
        </div>
        <p className="text-lg md:text-xl text-foreground font-display italic mb-4">
          "A barbearia já recebeu nomes conhecidos como o humorista Thiago Ventura."
        </p>
        <p className="text-sm text-muted-foreground">
          Referência em estilo e atendimento na Casa Verde, SP.
        </p>
      </div>
    </div>
  </section>
);

export default SocialProof;
