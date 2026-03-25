import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".anim-up");
    if (els) {
      gsap.from(els, {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 60, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
      });
    }
  }, []);

  const contactItems = [
    { icon: Mail, labelKey: "contact.email_label", value: "contact@goldenprod.com" },
    { icon: Phone, labelKey: "contact.phone_label", value: "+229 01 94 49 29 40" },
    { icon: MapPin, labelKey: "contact.studio_label", value: "Parakou, Bénin" },
  ];

  return (
    <section ref={ref} id="contact" className="py-32 bg-background px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="anim-up font-body text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4">{t("contact.label")}</p>
          <h2 className="anim-up font-display text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            {t("contact.heading_pre")}<span className="text-gradient-gold">{t("contact.heading_gold")}</span>
          </h2>
          <p className="anim-up font-body text-lg text-muted-foreground">{t("contact.text")}</p>
        </div>
        <div className="anim-up grid md:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item) => (
            <div key={item.labelKey} className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-gold transition-shadow duration-300">
              <item.icon className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="font-display font-bold text-foreground">{t(item.labelKey)}</p>
              <p className="font-body text-sm text-muted-foreground mt-1">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="anim-up text-center">
          <a href="mailto:contact@goldenprod.com" className="inline-block font-body font-semibold bg-primary text-primary-foreground px-12 py-4 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-105 text-lg">
            {t("contact.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
