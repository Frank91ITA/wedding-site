import React from "react";
import { Heart } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-4">
           Ginevra & Francesco
        </h2>
        <p className="font-body text-sm text-primary-foreground/60 mb-6">
          29 Agosto 2026 · Piozzano, Piacenza
        </p>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/40">
          <span className="font-body text-xs">Fatto con</span>
          <Heart className="w-3 h-3 fill-accent text-accent" />
        </div>
      </div>
    </footer>
  );
}