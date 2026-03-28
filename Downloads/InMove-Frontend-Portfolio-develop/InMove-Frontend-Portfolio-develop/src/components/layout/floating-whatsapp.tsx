import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_LINK =
  "https://wa.me/5511999999999?text=Olá,%20quero%20anunciar%20com%20a%20InMove";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("click_whatsapp_floating", { area: "global" })}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.03] hover:shadow-2xl"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
}
