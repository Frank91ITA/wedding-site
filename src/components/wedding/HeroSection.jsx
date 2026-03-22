import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import hero from "../../../images/hero.png";

const WEDDING_DATE = new Date("2025-08-29T16:00:00");

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return timeLeft;
}

function getTimeLeft(targetDate) {
  const diff = targetDate - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function HeroSection() {
  const countdown = useCountdown(WEDDING_DATE);

  const scrollToNext = () => {
    document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          //src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          src={hero}
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-white/80"
        >
          Siamo felici di invitarvi al nostro matrimonio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light leading-tight">
            Ginevra
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="h-px w-16 md:w-24 bg-white/40" />
            <Heart className="w-5 h-5 text-accent fill-accent" />
            <div className="h-px w-16 md:w-24 bg-white/40" />
          </div>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light leading-tight">
            Francesco
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-heading text-xl md:text-2xl italic mt-8 text-white/90"
        >
          29 Agosto 2026 · Piozzano
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex justify-center gap-6 md:gap-10 mt-12"
        >
          {[
            { value: countdown.days, label: "Giorni" },
            { value: countdown.hours, label: "Ore" },
            { value: countdown.minutes, label: "Minuti" },
            { value: countdown.seconds, label: "Secondi" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-light">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm tracking-[0.15em] uppercase text-white/70 mt-1 font-body">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}