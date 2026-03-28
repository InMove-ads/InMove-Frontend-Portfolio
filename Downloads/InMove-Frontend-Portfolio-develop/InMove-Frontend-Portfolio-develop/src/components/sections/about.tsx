import { Compass, Route, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Missão",
    text: "Transformar deslocamentos urbanos em oportunidades de conexão relevante entre marcas e pessoas.",
    icon: Compass,
  },
  {
    title: "Como operamos",
    text: "Planejamento por rota, janela horária e perfil de deslocamento, com execução rápida e acompanhamento contínuo.",
    icon: Route,
  },
  {
    title: "Compromisso",
    text: "Qualidade de exibição, transparência de dados e experiência respeitosa para passageiros e motoristas.",
    icon: ShieldCheck,
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-about-soft py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Quem somos</p>
          <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
            A InMove nasceu para liderar a <span className="text-primary">mídia em mobilidade</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Somos uma operação de mídia digital urbana focada em atenção qualificada durante o trajeto. Nossa proposta é unir inteligência de rota, tecnologia de exibição e valor comercial mensurável.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="h-7 w-7 text-primary" />
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {item.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
