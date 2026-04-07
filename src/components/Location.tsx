import { MapPin, Navigation } from "lucide-react";

const Location = () => (
  <section id="localizacao" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
        <span className="text-gold">Localização</span>
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
        Localização privilegiada na Zona Norte de São Paulo, com fácil acesso.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden border border-border aspect-video md:aspect-auto">
          <iframe
            title="Localização ODuh Ruggeri"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-46.65!3d-23.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXYuIEJyYXogTGVtZSwgNzQz!5e0!3m2!1spt-BR!2sbr!4v1"
            className="w-full h-full min-h-[280px]"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-start gap-3 mb-6">
            <MapPin className="text-gold mt-1 flex-shrink-0" size={22} />
            <div>
              <p className="font-semibold text-foreground text-lg">Av. Braz Leme, 743</p>
              <p className="text-muted-foreground">Casa Verde – São Paulo – SP</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 text-sm text-muted-foreground">
            <p>📞 (11) 94883-0502</p>
            <p>📧 oduhruggeribare@gmail.com</p>
            <p>
              📸{" "}
              <a href="https://instagram.com/oduhruggeribarbearia" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                @oduhruggeribarbearia
              </a>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/Avenida+Braz+Leme+743+Casa+Verde+São+Paulo"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground font-semibold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Navigation size={18} />
            Como chegar
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Location;
