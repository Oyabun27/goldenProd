import { useEffect, useRef } from "react";
import gsap from "gsap";
import headphonesImg from "@/assets/headphones.png";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headphoneRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    gsap.to(headphoneRef.current, {
      rotateY: 360, duration: 12, repeat: -1, ease: "none",
    });

    tl.from(headphoneRef.current, {
      scale: 0.5, opacity: 0, y: 60, duration: 1.2, ease: "power3.out",
    });

    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.innerHTML = text
        .split("")
        .map((ch) => `<span class="inline-block">${ch === " " ? "&nbsp;" : ch}</span>`)
        .join("");
      tl.from(titleRef.current.querySelectorAll("span"), {
        y: 80, opacity: 0, rotateX: -90, stagger: 0.04, duration: 0.8, ease: "back.out(1.7)",
      }, "-=0.4");
    }

    tl.from(taglineRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.3");
    tl.from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <img ref={headphoneRef} src={headphonesImg} alt="Premium studio headphones" className="w-56 h-56 md:w-72 md:h-72 object-contain mb-8" style={{ perspective: "1000px" }} />
        <h1 ref={titleRef} className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-foreground leading-none">
          Golden Prod
        </h1>
        <p ref={taglineRef} className="mt-6 font-body text-lg md:text-xl text-muted-foreground tracking-wide">
          {t("hero.tagline")}
        </p>
        <div ref={ctaRef} className="mt-10 flex gap-4">
          <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="font-body font-semibold bg-primary text-primary-foreground px-8 py-3.5 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-105">
            {t("hero.cta1")}
          </button>
          <button onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })} className="font-body font-semibold border-2 border-foreground/20 text-foreground px-8 py-3.5 rounded-full hover:border-gold hover:text-gold transition-all duration-300">
            {t("hero.cta2")}
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs font-body tracking-widest uppercase">{t("hero.scroll")}</span>
        <div className="w-px h-8 bg-muted-foreground/30" />
      </div>
    </section>
  );
};

export default HeroSection;
