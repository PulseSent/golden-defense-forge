import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-obsidian noise-overlay overflow-hidden">
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
        className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-[-0.03em] text-foreground"
        style={{ textWrap: "balance" }}
      >
        Your Freedom Deserves a Fighter.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.4 }}
        className="mt-6 font-sans text-sm tracking-ultra uppercase text-gold"
      >
        Criminal Defense Attorney — Omaha, Nebraska
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="bg-gold text-obsidian px-10 py-5 font-sans tracking-ultra uppercase text-sm font-semibold hover:bg-foreground transition-colors duration-300"
        >
          Request a Consultation
        </a>
        <a
          href="tel:4026817294"
          className="border border-gold text-gold px-10 py-5 font-sans tracking-ultra uppercase text-sm hover:bg-gold hover:text-obsidian transition-colors duration-300"
        >
          Call Now: 402-681-7294
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
