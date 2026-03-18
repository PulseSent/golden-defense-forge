import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const areas = [
  { name: "DUI & Drunk Driving", desc: "Aggressive defense against DUI, DWI, and impaired driving charges." },
  { name: "Drug Charges", desc: "Strategic representation for possession, distribution, and trafficking cases." },
  { name: "Assault & Violent Crimes", desc: "Protecting your rights when facing serious violent crime allegations." },
  { name: "Theft & Property Crimes", desc: "Defending against burglary, robbery, fraud, and property offense charges." },
  { name: "Federal Crimes", desc: "High-stakes defense in federal court with meticulous preparation." },
  { name: "Juvenile Defense", desc: "Safeguarding the futures of young people facing criminal charges." },
];

const PracticeAreas = () => (
  <section id="practice" className="bg-obsidian py-24 noise-overlay">
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <div className="w-12 h-px bg-gold mb-6" />
        <p className="font-sans text-xs tracking-ultra uppercase text-gold mb-6">Areas of Practice</p>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground">
          Strategic Defense
        </h2>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-gold italic">
          Across All Jurisdictions.
        </h2>
      </motion.div>

      {/* Rows */}
      <div>
        {areas.map((area, i) => (
          <motion.a
            key={area.name}
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className={`group flex items-center justify-between min-h-[100px] md:min-h-[120px] py-6 border-t border-foreground/10 ${
              i === areas.length - 1 ? "border-b" : ""
            } cursor-pointer`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:gap-12 flex-1">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors duration-300 md:w-1/2">
                {area.name}
              </h3>
              <p className="font-sans text-sm text-stone group-hover:text-foreground transition-colors duration-300 mt-2 md:mt-0 md:w-1/2">
                {area.desc}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ml-4 flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
