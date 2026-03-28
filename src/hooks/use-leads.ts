import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export type InsertLead = {
  name: string;
  company: string;
  phone: string;
  message?: string;
};

type LeadResponse = {
  success: true;
};

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead): Promise<LeadResponse> => {
      if (!data.name || !data.company || !data.phone) {
        throw new Error("Preencha os campos obrigatórios.");
      }
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: error.message,
      });
    }
  });
}
