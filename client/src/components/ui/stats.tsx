import CountUp from "react-countup";
import { Eye, Clock, Car } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Visualizações mensais",
    value: 500000,
    suffix: "+",
    icon: Eye,
  },
  {
    id: 2,
    name: "Minutos de atenção média",
    value: 15,
    suffix: " min",
    icon: Clock,
  },
  {
    id: 3,
    name: "Carros parceiros",
    value: 1200,
    suffix: "+",
    icon: Car,
  }
];

export function Stats() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center pt-8 md:pt-0">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-display font-bold text-white mb-2 tracking-tight">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator="."
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </div>
              <p className="text-lg text-primary-foreground/80 font-medium">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
