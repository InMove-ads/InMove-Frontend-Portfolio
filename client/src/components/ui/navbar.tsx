import { useState, useEffect } from "react";
import { Menu, X, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/", type: "link" },
    { name: "Soluções", href: "/#showcase", type: "anchor" },
    { name: "Vantagens", href: "/#vantagens", type: "anchor" },
    { name: "Motoristas", href: "/motoristas", type: "link" },
    { name: "Contato", href: "/#contato", type: "anchor" },
  ];

  const handleNavClick = (href: string, type: string) => {
    setMobileMenuOpen(false);
    if (type === "anchor") {
      const [path, hash] = href.split("#");
      if (location !== path && path !== "" && path !== "/") {
        window.location.href = href;
      } else if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
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
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent-foreground flex items-center justify-center shadow-lg">
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                InMove
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link key={link.name} href={link.href}>
                  <a
                    className={`text-sm font-medium transition-colors ${
                      location === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.type)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              )
            )}
            <Button
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#contato";
                } else {
                  const el = document.getElementById("contato");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
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
            link.type === "link" ? (
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
                onClick={() => handleNavClick(link.href, link.type)}
                className="text-left text-base font-medium text-foreground px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                {link.name}
              </button>
            )
          )}
          <Button
            className="w-full mt-2"
            onClick={() => {
              setMobileMenuOpen(false);
              if (location !== "/") {
                window.location.href = "/#contato";
              } else {
                const el = document.getElementById("contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Anunciar Agora
          </Button>
        </div>
      )}
    </header>
  );
}
