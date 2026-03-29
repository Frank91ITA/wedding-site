import React from "react";
import { motion } from "framer-motion";

export default function RSVPSection() {
  const googleFormUrl = "https://forms.gle/rh7FL9EJrDwhqu3q8";

  return (
    <section id="rsvp" className="pt-8 md:pt-12 pb-24 md:pb-32 bg-[#f5f3ef]">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-background rounded-xl p-10 md:p-12 shadow-sm border border-border"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Vi aspettiamo
          </p>

          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
            Conferma la tua presenza
          </h2>

          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
            Ci farebbe molto piacere sapere se potrai condividere con noi questo
            giorno speciale. Compila il modulo per confermare la tua presenza e
            indicarci eventuali preferenze o allergie alimentari.
          </p>

          <p className="font-body text-sm text-muted-foreground italic mb-8">
            Ti chiediamo gentilmente di rispondere entro il 1° luglio 2026.
          </p>

          <a
            href={googleFormUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-body tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
          >
            Conferma la presenza
          </a>
        </motion.div>
      </div>
    </section>
  );
}