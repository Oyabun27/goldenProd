export type Lang = "en" | "fr";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.about": "About",
    "nav.team": "Team",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Get in Touch",

    // Hero
    "hero.tagline": "Music Production • Beatmaking • Studio • DJ Booking",
    "hero.cta1": "Explore Services",
    "hero.cta2": "Our Work",
    "hero.scroll": "Scroll",

    // Services
    "services.heading_pre": "What We ",
    "services.heading_gold": "Do",
    "services.beatmaking": "Beatmaking",
    "services.beatmaking_desc": "Custom beats crafted for your unique sound. From trap to amapiano, we produce hits that resonate.",
    "services.recording": "Voice Recording",
    "services.recording_desc": "Professional vocal recording in our acoustically treated studio with top-tier equipment.",
    "services.production": "Music Production",
    "services.production_desc": "Full-service production from arrangement to final master. We bring your vision to life.",
    "services.dj": "DJ Booking",
    "services.dj_desc": "Book world-class DJs for your events. From intimate sets to festival stages.",

    // About
    "about.label": "About Us",
    "about.heading_line1": "Crafting Sound,",
    "about.heading_line2": "Building ",
    "about.heading_gold": "Legends",
    "about.text": "Golden Prod is a premium music production agency based in the heart of the creative industry. We bring together the best producers, engineers, and DJs to deliver exceptional sonic experiences. From chart-topping beats to unforgettable live events, we turn artistic vision into reality.",
    "about.stat1_num": "200+",
    "about.stat1_label": "Beats Produced",
    "about.stat2_num": "30+",
    "about.stat2_label": "Creative collaborations",
    "about.stat3_num": "6+",
    "about.stat3_label": "Years Experience",

    // Team
    "team.label": "Our Team",
    "team.heading_pre": "Meet the ",
    "team.heading_gold": "Team",

    // Portfolio
    "portfolio.heading_pre": "Our ",
    "portfolio.heading_gold": "Work",

    // Testimonials
    "testimonials.heading_pre": "What Artists ",
    "testimonials.heading_gold": "Say",

    // Contact
    "contact.label": "Contact",
    "contact.heading_pre": "Let's Create ",
    "contact.heading_gold": "Together",
    "contact.text": "Ready to take your music to the next level? Get in touch.",
    "contact.email_label": "Email",
    "contact.phone_label": "Phone",
    "contact.studio_label": "Studio",
    "contact.cta": "Send Us a Message",

    // Footer
    "footer.rights": "All rights reserved.",

    // Portfolio items
    "portfolio.midnight": "Midnight Beats",
    "portfolio.midnight_cat": "Beat Tape",
    "portfolio.neon": "Neon Sessions",
    "portfolio.neon_cat": "EP Production",
    "portfolio.urban": "Urban Flow",
    "portfolio.urban_cat": "Album Mix",
    "portfolio.golden": "Golden Hour",
    "portfolio.golden_cat": "Live Set",
    "portfolio.deep": "Deep Cuts Vol.1",
    "portfolio.deep_cat": "Compilation",
    "portfolio.studio": "Studio Vibes",
    "portfolio.studio_cat": "Single",
  },
  fr: {
    // Navbar
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.team": "Équipe",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Témoignages",
    "nav.contact": "Contact",
    "nav.cta": "Nous Contacter",

    // Hero
    "hero.tagline": "Production Musicale • Beatmaking • Studio • Booking DJ",
    "hero.cta1": "Nos Services",
    "hero.cta2": "Nos Réalisations",
    "hero.scroll": "Défiler",

    // Services
    "services.heading_pre": "Ce Que Nous ",
    "services.heading_gold": "Faisons",
    "services.beatmaking": "Beatmaking",
    "services.beatmaking_desc": "Des beats sur mesure pour votre son unique. De la trap à l'amapiano, nous produisons des hits qui résonnent.",
    "services.recording": "Enregistrement Vocal",
    "services.recording_desc": "Enregistrement vocal professionnel dans notre studio traité acoustiquement avec un équipement haut de gamme.",
    "services.production": "Production Musicale",
    "services.production_desc": "Production complète de l'arrangement au mastering final. Nous donnons vie à votre vision.",
    "services.dj": "Booking DJ",
    "services.dj_desc": "Réservez des DJs de classe mondiale pour vos événements. Des sets intimistes aux scènes de festivals.",

    // About
    "about.label": "À Propos",
    "about.heading_line1": "Créer le Son,",
    "about.heading_line2": "Bâtir des ",
    "about.heading_gold": "Légendes",
    "about.text": "Golden Prod est une agence de production musicale premium au cœur de l'industrie créative. Nous réunissons des producteurs, ingénieurs et DJs de renom pour offrir des expériences sonores exceptionnelles. Des beats au sommet des charts aux événements live inoubliables, nous transformons la vision artistique en réalité.",
    "about.stat1_num": "200+",
    "about.stat1_label": "Beats Produits",
    "about.stat2_num": "30+",
    "about.stat2_label": "Collaborations Artistiques",
    "about.stat3_num": "6+",
    "about.stat3_label": "Ans d'Expérience",

    // Team
    "team.label": "Notre Équipe",
    "team.heading_pre": "Rencontrez ",
    "team.heading_gold": "L'Équipe",

    // Portfolio
    "portfolio.heading_pre": "Nos ",
    "portfolio.heading_gold": "Réalisations",

    // Testimonials
    "testimonials.heading_pre": "Ce Que Disent ",
    "testimonials.heading_gold": "Les Artistes",

    // Contact
    "contact.label": "Contact",
    "contact.heading_pre": "Créons ",
    "contact.heading_gold": "Ensemble",
    "contact.text": "Prêt à amener votre musique au niveau supérieur ? Contactez-nous.",
    "contact.email_label": "Email",
    "contact.phone_label": "Téléphone",
    "contact.studio_label": "Studio",
    "contact.cta": "Envoyez-nous un Message",

    // Footer
    "footer.rights": "Tous droits réservés.",

    // Portfolio items
    "portfolio.midnight": "Midnight Beats",
    "portfolio.midnight_cat": "Beat Tape",
    "portfolio.neon": "Neon Sessions",
    "portfolio.neon_cat": "Production EP",
    "portfolio.urban": "Urban Flow",
    "portfolio.urban_cat": "Mixage Album",
    "portfolio.golden": "Golden Hour",
    "portfolio.golden_cat": "Set Live",
    "portfolio.deep": "Deep Cuts Vol.1",
    "portfolio.deep_cat": "Compilation",
    "portfolio.studio": "Studio Vibes",
    "portfolio.studio_cat": "Single",
  },
};
