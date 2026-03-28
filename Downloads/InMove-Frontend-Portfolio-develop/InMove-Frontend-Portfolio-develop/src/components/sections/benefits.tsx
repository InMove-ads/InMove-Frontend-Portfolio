import { MapPin, Users, QrCode, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: "Geolocalização",
    description: "Anúncios direcionados exatamente para os bairros ou rotas de interesse do seu negócio.",
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Público Cativo",
    description: "Passageiros de app ficam, em média, 15 a 20 minutos olhando para a nossa tela.",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Interação por QR Code",
    description: "Transforme visualizações em vendas instantâneas com escaneamento direto da tela.",
    icon: QrCode,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Relatórios Precisos",
    description: "Acompanhe impressões, engajamento e métricas da campanha em tempo real.",
    icon: BarChart,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export function Benefits() {
  return (
    <section id="vantagens" className="bg-surface-a py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Por que anunciar em <span className="text-primary">nossas telas?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos a cobertura das ruas com a precisão do marketing digital para maximizar o seu ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <Card 
              key={i} 
              className="border border-border bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${item.bg} group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
