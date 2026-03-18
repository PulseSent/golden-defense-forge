import { motion } from "framer-motion";

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "1,000+", label: "Cases Defended" },
  { number: "24/7", label: "Available to Clients" },
];

const Stats = () => (
  <section className="bg-charcoal py-20">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center">
          {i > 0 && (
            <div className="hidden md:block h-12 w-px bg-gold/30 mx-16" />
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-gold leading-none">{s.number}</div>
            <div className="mt-3 font-sans text-xs tracking-ultra uppercase text-stone">{s.label}</div>
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
