import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateLead } from "@/hooks/use-leads";
import { trackEvent } from "@/lib/analytics";

const insertLeadSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  company: z.string().min(2, "Informe sua empresa"),
  phone: z.string().min(8, "Informe um WhatsApp válido"),
  message: z.string().optional(),
});

export function Contact() {
  const { mutateAsync: createLead, isPending } = useCreateLead();

  const form = useForm<z.infer<typeof insertLeadSchema>>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof insertLeadSchema>) {
    await createLead(data);
    form.reset();
    
    // Optional: Open WhatsApp after successful form submission
    const wppMessage = `Olá, meu nome é ${data.name} da empresa ${data.company}. Gostaria de saber mais sobre anúncios.`;
    const wppLink = `https://wa.me/5511999999999?text=${encodeURIComponent(wppMessage)}`;
    trackEvent("submit_contact_form", { source: "section_contact" });
    window.open(wppLink, "_blank");
  }

  return (
    <section id="contato" className="bg-contact-focus py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Pronto para <span className="text-primary">acelerar suas vendas?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato rapidamente com uma proposta focada nos seus objetivos de marketing.
            </p>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Ou fale direto no WhatsApp</p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => trackEvent("click_contact_whatsapp")}
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-2xl border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Nome Completo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ex: João da Silva" 
                          {...field} 
                          className="h-12 bg-background border-border focus-visible:ring-primary/20" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Empresa</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Sua Empresa" 
                            {...field} 
                            className="h-12 bg-background border-border" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">WhatsApp</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(00) 00000-0000" 
                            {...field} 
                            className="h-12 bg-background border-border" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Mensagem (opcional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Conte um pouco sobre o que você precisa..." 
                          className="min-h-[120px] resize-none bg-background border-border" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending} 
                  className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
                >
                  {isPending ? "Enviando..." : "Solicitar Orçamento"}
                  {!isPending && <Send className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
