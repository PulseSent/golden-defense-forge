import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const chargeOptions = [
  "DUI & Drunk Driving",
  "Drug Charges",
  "Assault & Violent Crimes",
  "Theft & Property Crimes",
  "Federal Crimes",
  "Juvenile Defense",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-obsidian py-24 noise-overlay">
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-tight">
            Begin Your Defense Today.
          </h2>
          <p className="mt-4 font-sans text-sm text-stone">
            All consultations are confidential. Kaz will respond within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="font-serif text-3xl text-gold mb-4">Confidentiality Confirmed.</p>
            <p className="font-sans text-sm text-stone">
              Your request has been received. Kaz will be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {[
              { name: "name", placeholder: "Full Name", type: "text" },
              { name: "phone", placeholder: "Phone Number", type: "tel" },
              { name: "email", placeholder: "Email", type: "email" },
            ].map((f) => (
              <input
                key={f.name}
                type={f.type}
                placeholder={f.placeholder}
                required
                className="w-full bg-transparent border-b border-foreground/20 py-4 font-sans text-sm text-foreground placeholder:text-stone focus:border-gold outline-none transition-colors duration-300"
              />
            ))}

            <div className="relative">
              <select
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-foreground/20 py-4 font-sans text-sm text-stone focus:border-gold outline-none transition-colors duration-300 appearance-none cursor-pointer [&:has(option:checked:not([value='']))]:text-foreground"
              >
                <option value="" disabled>Type of Charge</option>
                {chargeOptions.map((c) => (
                  <option key={c} value={c} className="bg-charcoal text-foreground">{c}</option>
                ))}
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gold pointer-events-none" />
            </div>

            <textarea
              placeholder="Brief Description of Your Case"
              rows={4}
              className="w-full bg-transparent border-b border-foreground/20 py-4 font-sans text-sm text-foreground placeholder:text-stone focus:border-gold outline-none transition-colors duration-300 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-gold text-obsidian py-5 font-sans text-sm tracking-ultra uppercase font-semibold hover:bg-foreground transition-colors duration-300"
            >
              Submit Request
            </button>
          </motion.form>
        )}

        {/* Contact Info */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <a href="tel:4026817294" className="font-sans text-sm tracking-ultra text-gold hover:text-foreground transition-colors">
            402-681-7294
          </a>
          <a href="mailto:kazclong@gmail.com" className="font-sans text-sm tracking-ultra text-gold hover:text-foreground transition-colors">
            kazclong@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
