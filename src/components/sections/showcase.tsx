import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const showcases = [
  {
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    title: "Anúncios de Turismo",
    subtitle: "Campanhas para destinos e experiências",
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    title: "Anúncios de Tecnologia",
    subtitle: "Lançamentos e ofertas digitais",
  },
  {
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    title: "Delivery e Restaurantes",
    subtitle: "Promoções durante o trajeto urbano",
  },
];

export function Showcase() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section id="showcase" className="bg-showcase-glow py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            O impacto direto no <span className="text-primary">banco de trás</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Telas de alta definição exibindo o seu anúncio num momento em que os passageiros não têm distrações.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Car Background context */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl -z-10 blur-3xl" />
          
          {/* Tablet Mockup */}
          <div className="bg-zinc-900 p-4 pb-6 rounded-[2rem] shadow-2xl border border-zinc-800 relative mx-auto overflow-hidden">
            {/* Camera/Sensor notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-xl z-20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
            
            {/* Screen */}
            <div className="bg-black rounded-xl overflow-hidden aspect-video relative">
              <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
              
              <div className="h-full" ref={emblaRef}>
                <div className="flex h-full">
                  {showcases.map((item, idx) => (
                    <div className="flex-[0_0_100%] h-full relative" key={idx}>
                      <img
                        src={item.url}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {/* Ad Overlay Mock */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-8">
                        <div className="flex items-end justify-between">
                          <div>
                            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">PATROCINADO</span>
                            <h3 className="text-white text-2xl font-bold mt-2">{item.title}</h3>
                            <p className="mt-2 text-sm text-white/80">{item.subtitle}</p>
                          </div>
                          <div className="w-16 h-16 bg-white rounded-lg p-1">
                            {/* QR Code mock */}
                            <div className="w-full h-full border-4 border-black border-dashed flex items-center justify-center">
                              <div className="w-1/2 h-1/2 bg-black" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
