import { CheckCircle2, Wallet, ShieldCheck, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

const highlights = [
  {
    title: "Renda extra",
    description: "Ganhos adicionais sem mudar sua rotina de corridas.",
    icon: Wallet,
  },
  {
    title: "Instalação sem custo",
    description: "Equipamento instalado e mantido pela equipe InMove.",
    icon: ShieldCheck,
  },
  {
    title: "Operação leve",
    description: "Baixo consumo e funcionamento automatizado.",
    icon: Gauge,
  },
];

export function DriversSection() {
  return (
    <section id="motoristas" className="bg-surface-b py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Área de <span className="text-primary">Motoristas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Faça parte da rede InMove e transforme o tempo em rota em nova fonte de renda.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <item.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Cadastro rápido e sem custo de adesão.
          </p>
          <Link href="/motoristas">
            <Button
              className="rounded-full px-8"
              onClick={() => trackEvent("click_drivers_section_details")}
            >
              Ver detalhes para motoristas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
