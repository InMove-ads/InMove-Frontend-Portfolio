import { Car, CarFront, Gauge, ShieldCheck, Map, CreditCard } from "lucide-react";

export function Partners() {
  const logos = [
    { icon: CarFront, name: "AutoFleet" },
    { icon: Map, name: "GeoAds" },
    { icon: ShieldCheck, name: "SafeRide" },
    { icon: Gauge, name: "VeloMetrics" },
    { icon: Car, name: "UrbanMob" },
    { icon: CreditCard, name: "PayRide" },
  ];

  // Duplicate for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-background overflow-hidden border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Em parceria com os maiores apps de mobilidade e agências
        </h3>
      </div>
      
      <div className="relative w-full flex items-center">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {duplicatedLogos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-muted-foreground/50 hover:text-primary transition-colors duration-300 grayscale hover:grayscale-0"
            >
              <logo.icon className="w-8 h-8" />
              <span className="font-display font-bold text-2xl">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
