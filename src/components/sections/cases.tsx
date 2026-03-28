import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const cases = [
  {
    segment: "Rede de restaurantes",
    challenge: "Baixa lembrança de marca no horário de jantar.",
    result: "+38% de visitas no período da campanha.",
    metric: "2.1M impressões",
  },
  {
    segment: "Fintech regional",
    challenge: "Aquisição cara em mídias tradicionais.",
    result: "Custo por lead 27% menor com QR dinâmico.",
    metric: "18.4k interações",
  },
  {
    segment: "Shopping center",
    challenge: "Necessidade de impulsionar fluxo no fim de semana.",
    result: "+22% de fluxo na praça de alimentação.",
    metric: "4 cidades ativas",
  },
];

export function Cases() {
  return (
    <section id="cases" className="bg-surface-a py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Relatos com <span className="text-primary">resultado real</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Exemplos de campanhas que geraram impacto em marca, tráfego e conversão.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <Card key={item.segment} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">{item.segment}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Desafio:</strong> {item.challenge}
                </p>
                <p>
                  <strong className="text-foreground">Resultado:</strong> {item.result}
                </p>
                <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.metric}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            className="rounded-full px-8"
            onClick={() => {
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              trackEvent("click_case_cta", { destination: "contato" });
            }}
          >
            Quero um relato da minha marca
          </Button>
        </div>
      </div>
    </section>
  );
}
