import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (location !== "/" || !window.location.hash) return;
    const section = window.location.hash.replace("#", "");
    const timeout = window.setTimeout(() => {
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timeout);
  }, [location]);

  const navLinks = [
    { name: "Topo", href: "/", type: "top" as const },
    { name: "Sobre", href: "sobre", type: "anchor" as const },
    { name: "Soluções", href: "showcase", type: "anchor" as const },
    { name: "Relatos", href: "cases", type: "anchor" as const },
    { name: "Planos", href: "planos", type: "anchor" as const },
    { name: "Motoristas", href: "motoristas", type: "anchor" as const },
    { name: "Contato", href: "contato", type: "anchor" as const },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      navigate(`/#${sectionId}`);
      window.setTimeout(() => scrollToSection(sectionId), 120);
      trackEvent("click_nav_section", { section: sectionId, route: "redirect" });
      return;
    }
    if (window.location.hash !== `#${sectionId}`) {
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
    scrollToSection(sectionId);
    trackEvent("click_nav_section", { section: sectionId, route: "home" });
  };

  const goToTop = () => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      navigate("/");
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 120);
      return;
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a
              onClick={(event) => {
                event.preventDefault();
                goToTop();
                trackEvent("click_logo_top");
              }}
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <img
                src="/brand/inmove-mark.svg"
                alt="Logo InMove"
                className="h-10 w-10 rounded-xl shadow-lg"
                loading="eager"
              />
              <span
                className={`font-display text-2xl font-bold tracking-tight transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                InMove
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" translate="no">
            {navLinks.map((link) =>
              link.type === "top" ? (
                <button
                  key={link.name}
                  onClick={() => {
                    goToTop();
                    trackEvent("click_nav_top");
                  }}
                  className={`text-sm font-medium transition-colors ${
                    location === "/"
                      ? "text-primary"
                      : isScrolled
                        ? "text-muted-foreground hover:text-primary"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ) : link.type === "link" ? (
                <Link key={link.name} href={link.href}>
                  <a
                    className={`text-sm font-medium transition-colors ${
                      location === link.href
                        ? "text-primary"
                        : isScrolled
                          ? "text-muted-foreground hover:text-primary"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => goToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              )
            )}
            <Button
              onClick={() => {
                goToSection("contato");
                trackEvent("click_nav_cta_desktop");
              }}
              className="rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            >
              Anunciar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-border absolute top-20 left-0 right-0 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) =>
            link.type === "top" ? (
              <button
                key={link.name}
                onClick={() => {
                  goToTop();
                  trackEvent("click_nav_top_mobile");
                }}
                className={`text-left text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                  location === "/"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </button>
            ) : link.type === "link" ? (
              <Link key={link.name} href={link.href}>
                <a
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => goToSection(link.href)}
                className="text-left text-base font-medium text-foreground px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                {link.name}
              </button>
            )
          )}
          <Button
            className="w-full mt-2"
            onClick={() => {
              goToSection("contato");
              trackEvent("click_nav_cta_mobile");
            }}
          >
            Anunciar Agora
          </Button>
        </div>
      )}
    </header>
  );
}
