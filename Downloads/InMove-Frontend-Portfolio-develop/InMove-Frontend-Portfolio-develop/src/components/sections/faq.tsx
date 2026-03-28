import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o investimento mínimo para começar?",
    answer: "Os planos iniciam a partir de campanhas locais e variam conforme cidade, volume de telas e período de exibição. O simulador do site já dá uma faixa inicial.",
  },
  {
    question: "Em quanto tempo uma campanha entra no ar?",
    answer: "Com materiais aprovados, o lançamento costuma ocorrer entre 24h e 48h.",
  },
  {
    question: "Quais formatos criativos vocês aceitam?",
    answer: "Imagem estática, vídeo curto e criativos com QR dinâmico. Nossa equipe orienta as especificações técnicas para cada formato.",
  },
  {
    question: "Posso ajustar a campanha durante a veiculação?",
    answer: "Sim. É possível alterar peças, mensagens e geolocalização sem custo de reimpressão.",
  },
  {
    question: "Como recebo os resultados?",
    answer: "Você recebe relatórios com volume de exibição, áreas de entrega, faixas horárias e indicadores de interação por QR.",
  },
];

export function FAQ() {
  return (
    <section className="bg-surface-a py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Dúvidas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border px-2">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
