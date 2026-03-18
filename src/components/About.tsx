import { motion } from "framer-motion";
import kazPhoto from "@/assets/kaz-long-hd.jpg";

const About = () => (
  <section id="about" className="bg-charcoal">
    <div className="flex flex-col lg:flex-row">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:w-1/2 min-h-[400px] lg:min-h-[700px]"
      >
        <img
          src={kazPhoto}
          alt="Kaz Christopher Long, Criminal Defense Attorney"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Copy */}
      <div className="lg:w-1/2 bg-charcoal px-8 py-16 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs tracking-ultra uppercase text-gold mb-6">About the Attorney</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-tight mb-8">
            Kaz Christopher Long
          </h2>
          <div className="space-y-6 font-sans text-lg leading-[1.7] text-body">
            <p>
              For over fifteen years, Kaz Christopher Long has stood between the state and the accused in courtrooms across Nebraska. He has built his career on one principle: every person charged with a crime deserves a defense that is as relentless, strategic, and unyielding as the prosecution they face.
            </p>
            <p>
              From complex federal indictments to high-profile DUI cases, Kaz brings an aggressive, detail-obsessed approach to every matter he takes on. He is personally invested in every case — not because it's a business philosophy, but because that's who he is. His clients aren't case numbers; they're people with families, futures, and freedoms at stake.
            </p>
          </div>

          <blockquote className="mt-12 font-serif text-[clamp(1.8rem,3vw,2.5rem)] italic text-gold leading-tight">
            "I don't just manage cases. I defend people."
          </blockquote>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
