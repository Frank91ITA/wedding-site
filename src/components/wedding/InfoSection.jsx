import React from "react";
import { motion } from "framer-motion";
import { Hotel, Car, Gift, HelpCircle } from "lucide-react";

const infoCards = [
  {
    icon: Hotel,
    title: "Dove Alloggiare nelle vicinanze",
    items: [
      {
        label: "Agriturismo Agronauta",
        link: "https://maps.app.goo.gl/LDERDWcitPkJHDH39" // inserisci link vero
      },
      {
        label: "Albergo Ristorante Il Cervo",
        link: "https://maps.app.goo.gl/KU1KZwbCJ4ZUa7HG9"
      },
      {
        label: "I Galli Bed and Breakfast",
        link: "https://maps.app.goo.gl/X7yzBcNXCsCrWNoU8"
      },
    ],
  },
  {
  icon: Car,
  title: "Come Arrivare",
  link: "https://maps.app.goo.gl/SeVMKpc2Qacdyaxr5",
  items: [
    "In auto: Autostrada A1, uscita Piacenza Sud, poi circa 40 minuti verso Piozzano.",
    "In treno: Stazione di Piacenza. Da lì taxi o passaggio condiviso (circa 40 minuti).",
    "Aeroporti più vicini: Milano Linate, Milano Malpensa o Bologna (circa 1h30–2h di viaggio).",
  ],
},
  {
    icon: Gift,
    title: "Lista Nozze",
    items: [
      "Il vostro regalo più bello sarà la vostra presenza.",
      "Se vorrete accompagnarci anche nel nostro prossimo viaggio, potrete contribuire alla nostra luna di miele",
      "IBAN: Francesco Perotti e Ginevra Gargiulo",
      "IT27 M0623 0654 5100 0031 3006 44",
    ],
  },
];

const faqs = [
  { q: "C'è parcheggio?", a: "Sì, la location dispone di un ampio parcheggio gratuito per tutti gli invitati." },
  { q: "Fino a che ora dura la festa?", a: "La festa continuerà fino all'una di notte." },
  { q: "Posso scattare foto durante la cerimonia?", a: "Rilassatevi e godetevi la cerimonia con noi. Ci sarà un fotografo professionista!" },
  {q: "Dress Code", a: "Vestitevi come volete ma evitate il bianco, lasciamolo alla sposa!"},
];

export default function InfoSection() {
  return (
    <section id="info" className="pt-8 md:pt-12 pb-24 md:pb-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Informazioni pratiche
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-foreground">
            Info Utili
          </h2>
        </motion.div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-2">{card.title}</h3>
              {card.link && (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-l text-primary hover:underline mb-4 inline-block"
                >
                  Link a Google Maps
                </a>
              )}
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="font-body text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {typeof item === "string" ? (
                      item
                    ) : (
                      
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-3xl text-foreground">Domande Frequenti</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h4 className="font-body text-sm font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}