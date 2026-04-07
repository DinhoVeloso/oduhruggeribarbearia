import clientHappy from "@/assets/client-happy.jpeg";
import team from "@/assets/team.jpeg";
import team2 from "@/assets/team-2.jpeg";

const images = [
  { src: clientHappy, alt: "Cliente satisfeito na ODuh Ruggeri" },
  { src: team, alt: "Equipe da barbearia ODuh Ruggeri" },
  { src: team2, alt: "Time completo da ODuh Ruggeri" },
];

const Gallery = () => (
  <section id="galeria" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
        Ambiente & <span className="text-gold">Clientes</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Conheça nosso espaço e a energia que faz a diferença.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((img) => (
          <div key={img.alt} className="overflow-hidden rounded-xl border border-border aspect-square">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-xl border border-border aspect-video bg-card">
          <iframe
            src="https://www.instagram.com/reel/Cr873oeJQSs/embed/"
            className="w-full h-full"
            loading="lazy"
            title="Vídeo ODuh Ruggeri"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
