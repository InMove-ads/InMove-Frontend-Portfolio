import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Showcase } from "@/components/showcase";
import { Stats } from "@/components/stats";
import { Benefits } from "@/components/benefits";
import { HowItWorks } from "@/components/how-it-works";
import { Partners } from "@/components/partners";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Showcase />
        <Stats />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
