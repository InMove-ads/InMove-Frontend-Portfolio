import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é o custo mínimo para anunciar?",
    answer: "Trabalhamos com pacotes flexíveis adaptados ao tamanho do seu negócio. Os valores dependem do número de telas, região de veiculação e duração da campanha. Entre em contato para um orçamento personalizado.",
  },
  {
    question: "Em quais cidades vocês operam?",
    answer: "Atualmente operamos nas principais capitais do Brasil, com expansão contínua para novas regiões metropolitanas.",
  },
  {
    question: "Posso alterar a arte da campanha durante a veiculação?",
    answer: "Sim! Nossa plataforma é 100% digital e conectada. Você pode atualizar o material criativo ou alterar o QR Code a qualquer momento sem custo adicional de impressão.",
  },
  {
    question: "Como são entregues os relatórios de resultados?",
    answer: "Você recebe acesso a um painel online com métricas atualizadas diariamente, mostrando volume de viagens, tempo médio de exposição e estimativa de impactos.",
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-card">
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
