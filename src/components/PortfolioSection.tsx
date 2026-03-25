import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const projectKeys = [
  { titleKey: "portfolio.midnight", catKey: "portfolio.midnight_cat", color: "from-brown-deep to-primary" },
  { titleKey: "portfolio.neon", catKey: "portfolio.neon_cat", color: "from-gold to-gold-glow" },
  { titleKey: "portfolio.urban", catKey: "portfolio.urban_cat", color: "from-primary to-brown-warm" },
  { titleKey: "portfolio.golden", catKey: "portfolio.golden_cat", color: "from-gold-glow to-accent" },
  { titleKey: "portfolio.deep", catKey: "portfolio.deep_cat", color: "from-brown-warm to-primary" },
  { titleKey: "portfolio.studio", catKey: "portfolio.studio_cat", color: "from-accent to-gold" },
];

const PortfolioSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(ref.current?.querySelector("h2")!, {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      y: 60, opacity: 0, duration: 0.8, ease: "power3.out",
    });
    itemsRef.current.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 85%" },
        y: 60, opacity: 0, scale: 0.95, duration: 0.7, delay: i * 0.1, ease: "power3.out",
      });
    });
  }, []);

  return (
    <section ref={ref} id="portfolio" className="py-32 bg-background px-6">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold text-center tracking-tight text-foreground mb-20">
          {t("portfolio.heading_pre")}<span className="text-gradient-gold">{t("portfolio.heading_gold")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectKeys.map((p, i) => (
            <div key={p.titleKey} ref={(el) => { if (el) itemsRef.current[i] = el; }} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {t(p.catKey)}
                </p>
                <h3 className="font-display text-2xl font-bold text-primary-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {t(p.titleKey)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
