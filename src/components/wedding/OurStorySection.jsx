import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import incontro from "../../../images/incontro.png";
import malta from "../../../images/malta.png";
import pavia from "../../../images/pavia.png";
import anelli from "../../../images/anelli.png";




const storyEvents = [
  {
    year: "Estate 2023",
    title: "Il Primo Incontro",
    description: "Una sera d’estate sulle rive del Ticino. Tra una chiacchiera e una passeggiata lungo il fiume è iniziata, quasi senza accorgercene, la nostra avventura insieme.",
    //image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    image: incontro,
  },
  {
    year: "Inverno 2024",
    title: "Il Primo Viaggio",
    description: "Il primo viaggio insieme: Malta. Tra città di pietra chiara, mare e lunghe camminate, abbiamo scoperto quanto fosse naturale esplorare il mondo fianco a fianco.",
    //image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    image: malta,
  },
  {
    year: "Autunno 2024",
    title: "Andare a Vivere Insieme",
    description: "Abbiamo iniziato a vivere insieme. Una nuova tappa del viaggio, fatta di quotidianità, progetti e nuove avventure.",
    //image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80",
    image: pavia,
  },
  {
    year: "Primavera 2025",
    title: "La Proposta",
    description: "Durante una passeggiata tra le colline, con il sole che scendeva all’orizzonte, è arrivata la domanda più importante. La risposta è stata semplice: sì, continuiamo questo viaggio insieme",
    //image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
    image: anelli,
  },
];

export default function OurStorySection() {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Come tutto è iniziato
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-foreground">
            La Nostra Storia
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          {storyEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary items-center justify-center z-10">
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                <span className="font-heading text-4xl text-accent font-semibold">
                  {event.year}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mt-2 mb-3">
                  {event.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}