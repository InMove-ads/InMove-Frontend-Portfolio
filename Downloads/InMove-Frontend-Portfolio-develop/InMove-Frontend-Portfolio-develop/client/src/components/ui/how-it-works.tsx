import { MessageSquareText, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Contato e Alinhamento",
    description: "Você nos conta sobre seu negócio e os objetivos da campanha.",
    icon: MessageSquareText,
  },
  {
    id: "02",
    title: "Criação da Arte",
    description: "Seu time ou a nossa equipe cria peças visuais de alto impacto para a tela.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Veiculação Imediata",
    description: "Em menos de 48h, sua marca já está rodando nos carros pela cidade.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Como Funciona?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para colocar sua marca em movimento.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-background border-4 border-card shadow-lg flex items-center justify-center relative mb-6 group-hover:border-primary transition-colors duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center shadow-md">
                    {step.id}
                  </div>
                  <step.icon className="w-10 h-10 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
