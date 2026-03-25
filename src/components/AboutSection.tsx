import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const statRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".anim-up");
    if (els) {
      gsap.from(els, {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 60, opacity: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
      });
    }

    // Animated stat counters
    statRefs.current.forEach((el) => {
      if (!el) return;
      const raw = el.getAttribute("data-value") || "0";
      const numericValue = parseInt(raw.replace(/\D/g, ""), 10);
      const suffix = raw.replace(/[0-9]/g, "");

      const obj = { val: 0 };
      gsap.to(obj, {
        val: numericValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        },
      });
    });
  }, []);

  const stats = [
    { numKey: "about.stat1_num", labelKey: "about.stat1_label" },
    { numKey: "about.stat2_num", labelKey: "about.stat2_label" },
    { numKey: "about.stat3_num", labelKey: "about.stat3_label" },
  ];

  return (
    <section ref={ref} id="about" className="py-32 bg-secondary/30 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="anim-up font-body text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4">{t("about.label")}</p>
        <h2 className="anim-up font-display text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-8">
          {t("about.heading_line1")}<br />{t("about.heading_line2")}<span className="text-gradient-gold">{t("about.heading_gold")}</span>
        </h2>
        <p className="anim-up font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          {t("about.text")}
        </p>
        <div className="anim-up grid grid-cols-3 gap-8 mt-16">
          {stats.map((stat, i) => (
            <div key={stat.numKey}>
              <p
                ref={(el) => { statRefs.current[i] = el; }}
                data-value={t(stat.numKey)}
                className="font-display text-3xl md:text-5xl font-extrabold text-gradient-gold"
              >
                0
              </p>
              <p className="font-body text-sm text-muted-foreground mt-2">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
