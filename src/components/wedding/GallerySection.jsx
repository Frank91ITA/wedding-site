import React from "react";
import { motion } from "framer-motion";

const photos = [
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80", span: "col-span-1 row-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            I nostri momenti
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-foreground">
            Galleria
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${photo.span} overflow-hidden rounded-lg group cursor-pointer`}
            >
              <img
                src={photo.src}
                alt={`Wedding photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}