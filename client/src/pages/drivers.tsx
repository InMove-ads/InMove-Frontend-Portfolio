import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Zap, MapPin, Info, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Drivers() {
  const benefits = [
    {
      title: "Renda Extra Passiva",
      description: "Ganhe dinheiro apenas por dirigir como você já faz todos os dias.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Instalação Gratuita",
      description: "Nós instalamos e mantemos o equipamento sem custo nenhum para você.",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Tecnologia de Ponta",
      description: "Tablets modernos que não atrapalham sua visão ou direção.",
      icon: <Info className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Seja um Motorista Parceiro <span className="text-primary">InMove</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Transforme seu carro em uma vitrine digital e aumente seus ganhos mensais de forma simples e segura.
            </motion.p>
          </div>

          {/* How it works for drivers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-secondary">Como funciona?</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  A InMove instala um tablet de alta definição no encosto de cabeça do banco do passageiro do seu veículo. 
                  Enquanto você realiza suas corridas pelos aplicativos (Uber, 99, etc), o tablet exibe anúncios geolocalizados para os passageiros.
                </p>
                <p>
                  Você não precisa fazer nada além de dirigir! O sistema é totalmente automatizado e começa a funcionar assim que você liga o carro.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-muted rounded-3xl p-8 border-2 border-primary/10 relative overflow-hidden"
            >
              <div className="aspect-video bg-background rounded-xl shadow-2xl flex items-center justify-center border border-border">
                 <div className="text-center p-6">
                    <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="font-medium">Simulação do Tablet no Carco</p>
                    <p className="text-sm text-muted-foreground mt-2">Instalado com segurança atrás do encosto de cabeça.</p>
                 </div>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  Conectado 5G
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  Alimentado via USB
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  Onde o tablet fica?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O tablet é fixado de forma rígida e segura atrás do encosto de cabeça do banco do passageiro dianteiro, ficando na altura dos olhos de quem está no banco de trás.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  Como é alimentado?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O dispositivo é conectado à saída de energia 12V (acendedor) ou USB do veículo através de um cabo discreto que passa por dentro do acabamento do banco, garantindo que não haja fios soltos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-secondary" />
                  Consumo de Bateria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O consumo de energia é equivalente ao de carregar um celular comum. O tablet desliga automaticamente alguns minutos após o motor ser desligado para preservar a bateria do seu carro.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="bg-primary/5 rounded-3xl p-12 mb-24">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Benefícios Exclusivos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-background rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 border border-primary/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Pronto para começar?</h2>
            <button 
              onClick={() => {
                 window.open('https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20em%20ser%20um%20motorista%20parceiro%20InMove', '_blank');
              }}
              className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-pulse-glow"
            >
              Quero ser um parceiro
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
