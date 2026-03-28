import { MapPin, Route } from "lucide-react";

const cities = [
  { name: "São Paulo", screens: 420, neighborhoods: 38 },
  { name: "Rio de Janeiro", screens: 210, neighborhoods: 21 },
  { name: "Belo Horizonte", screens: 160, neighborhoods: 16 },
  { name: "Curitiba", screens: 140, neighborhoods: 12 },
];

export function Coverage() {
  return (
    <section id="cobertura" className="bg-surface-b py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Cobertura por <span className="text-primary">cidade e rota</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Planeje sua campanha por áreas de maior circulação e horários com melhor atenção.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Mapa de atuação
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {cities.map((city) => (
                <div key={city.name} className="rounded-2xl border border-border bg-background p-4">
                  <p className="flex items-center gap-2 font-semibold">
                    <MapPin className="h-4 w-4 text-primary" />
                    {city.name}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{city.screens} telas ativas</p>
                  <p className="text-sm text-muted-foreground">{city.neighborhoods} bairros segmentáveis</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Corredores de alta demanda
            </p>
            <div className="space-y-4">
              {[
                ["Eixos corporativos", "08:00 - 10:00 | 17:00 - 20:00"],
                ["Região de shoppings", "12:00 - 14:00 | 18:00 - 22:00"],
                ["Centros médicos", "07:00 - 09:00 | 13:00 - 16:00"],
                ["Polo universitário", "10:00 - 12:00 | 18:00 - 21:00"],
              ].map(([name, range]) => (
                <div key={name} className="rounded-xl border border-border bg-background p-4">
                  <p className="flex items-center gap-2 font-medium">
                    <Route className="h-4 w-4 text-primary" />
                    {name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{range}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
