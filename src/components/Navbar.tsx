import { useState, useEffect } from "react";
import bearLogo from "@/assets/bear-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-sm border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src={bearLogo} alt="Long Criminal Defense" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-sans text-sm font-semibold tracking-ultra text-gold">LONG</span>
            <span className="font-sans text-[0.6rem] tracking-ultra text-stone">CRIMINAL DEFENSE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans text-xs tracking-ultra uppercase text-stone hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:4026817294"
            className="font-sans text-xs tracking-ultra uppercase text-gold hover:text-foreground transition-colors duration-300"
          >
            402-681-7294
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-gold transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-sm border-t border-gold/10 px-6 py-8 space-y-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block font-sans text-xs tracking-ultra uppercase text-stone hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:4026817294" className="block font-sans text-xs tracking-ultra uppercase text-gold">
            402-681-7294
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
