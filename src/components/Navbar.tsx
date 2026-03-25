import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { key: "nav.services", id: "services" },
    { key: "nav.about", id: "about" },
    { key: "nav.team", id: "team" },
    { key: "nav.portfolio", id: "portfolio" },
    { key: "nav.testimonials", id: "testimonials" },
    { key: "nav.contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -12, pointerEvents: "none" },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out", pointerEvents: "auto" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo */}
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-2xl font-800 tracking-tight"
        >
          <span className="text-foreground">Golden</span>
          <span className="text-gradient-gold ml-1">Prod</span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(link.key)}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="font-body text-xs font-bold border border-border rounded-full px-3 py-1.5 hover:bg-accent/10 transition-colors duration-300 tracking-wider uppercase"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="font-body text-sm font-semibold bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
          >
            {t("nav.cta")}
          </button>
        </div>

        {/* Mobile right side: lang toggle + burger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="font-body text-xs font-bold border border-border rounded-full px-3 py-1.5 hover:bg-accent/10 transition-colors duration-300 tracking-wider uppercase"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

          {/* Burger button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-accent/10 transition-colors duration-200"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        ref={mobileMenuRef}
        style={{ pointerEvents: menuOpen ? "auto" : "none", opacity: 0 }}
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t border-border/40`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground text-left py-3 border-b border-border/20 last:border-0 transition-colors duration-200"
            >
              {t(link.key)}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-3 font-body text-sm font-semibold bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105 w-full"
          >
            {t("nav.cta")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;