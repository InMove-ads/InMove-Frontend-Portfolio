import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { SectionDivider } from "@/components/layout/section-divider";

const Partners = lazy(() => import("@/components/sections/partners").then((m) => ({ default: m.Partners })));
const Showcase = lazy(() => import("@/components/sections/showcase").then((m) => ({ default: m.Showcase })));
const Stats = lazy(() => import("@/components/sections/stats").then((m) => ({ default: m.Stats })));
const Benefits = lazy(() => import("@/components/sections/benefits").then((m) => ({ default: m.Benefits })));
const HowItWorks = lazy(() => import("@/components/sections/how-it-works").then((m) => ({ default: m.HowItWorks })));
const Cases = lazy(() => import("@/components/sections/cases").then((m) => ({ default: m.Cases })));
const Pricing = lazy(() => import("@/components/sections/pricing").then((m) => ({ default: m.Pricing })));
const Coverage = lazy(() => import("@/components/sections/coverage").then((m) => ({ default: m.Coverage })));
const DriversSection = lazy(() =>
  import("@/components/sections/drivers-section").then((m) => ({ default: m.DriversSection })),
);
const FAQ = lazy(() => import("@/components/sections/faq").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/sections/contact").then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return <div className="h-28 animate-pulse bg-muted/40" aria-hidden />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="brand" />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Partners />
          <Showcase />
          <SectionDivider variant="brand" />
          <Stats />
          <Benefits />
          <HowItWorks />
          <SectionDivider variant="brand" />
          <Cases />
          <Coverage />
          <Pricing />
          <SectionDivider variant="brand" />
          <DriversSection />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
