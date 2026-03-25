import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/i18n/LanguageContext";
import backyard from "@/assets/backyard.jpeg";
import alvin from "@/assets/alvin.jpeg";
import oxymore from "@/assets/oxymore.jpeg";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Golden DJ",
    role: { en: "Sound Engineer / Producer / DJ", fr: "Ingénieur Son / Producteur / DJ" },
    image: backyard,
  },
  {
    name: "Alvin DJ",
    role: { en: "DJ", fr: "DJ" },
    image: alvin,
  },
  {
    name: "Aurel Oxymore",
    role: { en: "Communications Manager", fr: "Chargé de Communication" },
    image: oxymore,
  },
];

const TeamSection = () => {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".team-card");
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section ref={ref} id="team" className="py-32 bg-background px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4 text-center">
          {t("team.label")}
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-16 text-center">
          {t("team.heading_pre")}
          <span className="text-gradient-gold">{t("team.heading_gold")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="team-card group flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-2 border-border group-hover:border-gold transition-colors duration-500 shadow-lg group-hover:shadow-gold">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Name */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                {member.name}
              </h3>
              {/* Role */}
              <p className="font-body text-sm text-muted-foreground tracking-wide">
                {member.role[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
