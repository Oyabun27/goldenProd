import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="font-display text-xl font-bold text-primary-foreground flex ">
          <img src="/GoldenProd.jpeg" alt="logo" className="w-30 h-20" />
          <div className="items-center justify-center mt-7 mx-2"> Golden<span className="text-gold ml-1">Prod</span>
            </div> 
        </div>
        <p className="font-body text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Golden Prod. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
