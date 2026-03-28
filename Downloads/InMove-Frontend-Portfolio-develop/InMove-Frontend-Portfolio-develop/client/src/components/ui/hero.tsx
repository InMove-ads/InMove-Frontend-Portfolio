import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply opacity-70 pointer-events-none -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>A nova era da publicidade móvel</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-extrabold text-foreground tracking-tight text-balance max-w-5xl mx-auto leading-tight"
        >
          Transforme a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">jornada dos passageiros</span> em lucro.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-xl text-muted-foreground text-balance max-w-2xl mx-auto"
        >
          Conecte sua marca a um público 100% focado e em movimento. Anúncios interativos em tablets de carros de aplicativo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="animate-pulse-glow h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero Anunciar
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg rounded-full hover:bg-primary/5 transition-all"
            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Demonstração
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
