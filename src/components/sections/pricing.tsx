import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

const plans = [
  {
    name: "Starter",
    audience: "Negócios locais",
    price: "A partir de R$ 2.900/mês",
    features: ["1 cidade", "Segmentação por bairro", "Relatório mensal"],
    highlight: false,
  },
  {
    name: "Pro",
    audience: "Marcas em expansão",
    price: "A partir de R$ 7.900/mês",
    features: ["Até 4 cidades", "QR dinâmico", "Relatório semanal e otimizações"],
    highlight: true,
  },
  {
    name: "Enterprise",
    audience: "Cobertura nacional",
    price: "Sob consulta",
    features: ["Campanha multiestado", "Plano tático dedicado", "SLA prioritário"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="bg-surface-a py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Planos para cada <span className="text-primary">momento da marca</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Estrutura comercial transparente para facilitar decisão e acelerar lançamento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border-border ${plan.highlight ? "border-primary shadow-xl shadow-primary/15" : ""}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {plan.name}
                  {plan.highlight ? (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Mais escolhido
                    </span>
                  ) : null}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{plan.audience}</p>
                <p className="pt-2 text-2xl font-bold">{plan.price}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </p>
                ))}
                <Button
                  className="mt-4 w-full rounded-full"
                  variant={plan.highlight ? "default" : "outline"}
                  onClick={() => {
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                    trackEvent("click_plan_cta", { plan: plan.name });
                  }}
                >
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
