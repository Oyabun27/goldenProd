import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const testimonials =  [
  { 
    name: "OZIRIS", 
    role: { en: "Artist", fr: "Artiste" }, 
    text: { 
      en: "Golden Prod transformed my sound completely. Their production quality is unmatched.", 
      fr: "Golden Prod a complètement transformé mon son. Leur qualité de production est inégalée." 
    } 
  },
  { 
    name: "Tonnerre-X", 
    role: { en: "Singer-Songwriter", fr: "Auteur-compositeur-interprète" }, 
    text: { 
      en: "The studio vibes are incredible. Every session feels like a creative breakthrough.", 
      fr: "L'ambiance du studio est incroyable. Chaque session semble être une percée créative." 
    } 
  },
  { 
    name: "Mr Baba", 
    role: { en: "Independent Artist", fr: "Artiste Indépendant" }, 
    text: { 
      en: "Best beatmakers in the game. They understand exactly what you need before you say it.", 
      fr: "Les meilleurs beatmakers du marché. Ils comprennent exactement ce dont vous avez besoin avant même que vous le disiez." 
    } 
  },
  { 
    name: "Alvin DJ", 
    role: { en: "DJ", fr: "DJ" }, 
    text: { 
      en: "Their DJ booking service connected me with the biggest events. Absolute game changer.", 
      fr: "Leur service de booking DJ m'a connecté aux plus gros événements. Un véritable changement de jeu." 
    } 
  },
  { 
    name: "Layno prod", 
    role: { en: "Label Owner", fr: "Propriétaire de Label" }, 
    text: { 
      en: "We've partnered with Golden Prod for years. Consistently exceptional quality and professionalism.", 
      fr: "Nous collaborons avec Golden Prod depuis des années. Qualité et professionnalisme exceptionnels de manière constante." 
    } 
  },
  { 
    name: "Dalton Fresh", 
    role: { en: "Artist Group", fr: "Groupe d'Artistes" }, 
    text: { 
      en: "From recording to mastering, every step was handled with precision and creative flair.", 
      fr: "De l'enregistrement au mastering, chaque étape a été gérée avec précision et créativité." 
    } 
  },
];

const TestimonialsSection = () => {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(ref.current?.querySelector("h2")!, {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      y: 60, opacity: 0, duration: 0.8, ease: "power3.out",
    });

    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const inner = marquee.querySelector(".marquee-inner") as HTMLElement;
      if (!inner) return;
      const width = inner.scrollWidth / 2;
      const tween = gsap.to(inner, { x: -width, duration: 30, ease: "none", repeat: -1 });
      marquee.addEventListener("mouseenter", () => tween.pause());
      marquee.addEventListener("mouseleave", () => tween.resume());
    }
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section ref={ref} id="testimonials" className="py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold text-center tracking-tight text-foreground">
          {t("testimonials.heading_pre")}<span className="text-gradient-gold">{t("testimonials.heading_gold")}</span>
        </h2>
      </div>
      <div ref={marqueeRef} className="relative">
        <div className="marquee-inner flex gap-6 w-max">
          {doubled.map((item, i) => (
            <div key={i} className="w-[400px] flex-shrink-0 bg-card border border-border rounded-2xl p-8 hover:shadow-gold transition-shadow duration-300">
              <p className="font-body text-muted-foreground leading-relaxed mb-6">"{item.text[lang]}"</p>
              <div>
                <p className="font-display font-bold text-foreground">{item.name}</p>
                <p className="font-body text-sm text-gold">{item.role[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
