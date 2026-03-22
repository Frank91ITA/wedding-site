import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Shirt, Music, UtensilsCrossed, Church } from "lucide-react";

const events = [
  {
    icon: Church,
    title: "Capitolo I — La Promessa",
    time: "17:30",
    //location: "La Sorgente",
    //address: " Località, Via Tassara, 29010 Piozzano PC",
    description: "Ginevra e Francesc si uniranno in matrimonio con una cerimonia nel cuore de La Sorgente",
  },
  {
    icon: UtensilsCrossed,
    title: "Capitolo II — Il Banchetto",
    time: "18:30",
    //location: "Villa Il Borro",
    //address: "Loc. Il Borro, 1 - San Giustino Valdarno (AR)",
    description: "Aperitivo e cena tra le colline di Piozzano, per celebrare insieme questa nuova avventura",
  },
  {
    icon: Music,
    title: "Capitolo III — Una festa a lungo attesa",
    time: "22:00",
    //location: "Villa Il Borro - Sala Grande",
    //address: "Loc. Il Borro, 1 - San Giustino Valdarno (AR)",
    description: "Taglio della torta, musica, danze e brindisi sotto le stelle fino a tarda notte!",
  },
];

export default function EventDetailsSection() {
  return (
    <section id="details" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Tutto quello che c'è da sapere
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-foreground">
            Il Programma
          </h2>
        </motion.div>

        {/* Date banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-sm border border-border">
            <span className="font-heading text-2xl md:text-3xl text-foreground">
              Sabato, 29 Agosto 2026
            </span>
          </div>
        </motion.div>

        {/* Events */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <event.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-1">{event.title}</h3>
              <div className="flex items-center gap-2 text-accent font-body text-sm mb-4">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {event.description}
              </p>
              <div className="border-t border-border pt-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{event.location}</p>
                    <p className="font-body text-xs text-muted-foreground">{event.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dress code */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-card rounded-xl p-8 shadow-sm border border-border max-w-lg mx-auto"
        >
          <Shirt className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-heading text-2xl text-foreground mb-2">Dress Code</h3>
          <p className="font-body text-sm text-muted-foreground">
            Vestitevi come volete! Per favore, evitate il bianco — lasciamolo alla sposa!
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}