import bearLogo from "@/assets/bear-logo.png";

const Footer = () => (
  <footer className="bg-charcoal border-t border-foreground/5 py-16">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
      <img src={bearLogo} alt="Long Criminal Defense" className="h-12 w-12 object-contain opacity-60" />
      <div className="text-center">
        <p className="font-sans text-xs tracking-ultra uppercase text-gold/60">Kaz Christopher Long</p>
        <p className="font-sans text-xs tracking-ultra uppercase text-stone/60 mt-1">Criminal Defense Attorney — Omaha, Nebraska</p>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:4026817294" className="font-sans text-xs text-gold/50 hover:text-gold transition-colors">402-681-7294</a>
        <span className="text-foreground/10">|</span>
        <a href="mailto:kazclong@gmail.com" className="font-sans text-xs text-gold/50 hover:text-gold transition-colors">kazclong@gmail.com</a>
      </div>
      <p className="font-sans text-[0.65rem] text-stone/40 mt-4">
        © {new Date().getFullYear()} Long Criminal Defense. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
