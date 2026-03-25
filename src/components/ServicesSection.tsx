import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Music, Mic, Headphones, Disc3 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const services = [
    { icon: Music, titleKey: "services.beatmaking", descKey: "services.beatmaking_desc" },
    { icon: Mic, titleKey: "services.recording", descKey: "services.recording_desc" },
    { icon: Headphones, titleKey: "services.production", descKey: "services.production_desc" },
    { icon: Disc3, titleKey: "services.dj", descKey: "services.dj_desc" },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.from(sectionRef.current?.querySelector("h2")!, {
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      y: 60, opacity: 0, duration: 0.8, ease: "power3.out",
    });

    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 80, opacity: 0, duration: 0.8, delay: i * 0.15, ease: "power3.out",
      });
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, rotateX: 2, rotateY: -2, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, rotateX: 0, rotateY: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-background px-6">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold text-center tracking-tight text-foreground mb-20">
          {t("services.heading_pre")}<span className="text-gradient-gold">{t("services.heading_gold")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.titleKey}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group relative bg-card border border-border rounded-2xl p-8 cursor-pointer transition-shadow duration-300 hover:shadow-gold"
              style={{ perspective: "800px", transformStyle: "preserve-3d" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <s.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(s.titleKey)}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{t(s.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
