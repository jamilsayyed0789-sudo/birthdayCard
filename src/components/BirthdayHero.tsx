"use client";

import { motion } from "framer-motion";
import { birthday } from "@/config/birthday";

export default function BirthdayHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden border-b border-[#d4af37]/10">
      {/* Dynamic ambient pulsing lights */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#4a121a]/40 via-[#c98a90]/15 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold"
        >
          10 AUGUST 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="font-serif-cormorant text-6xl sm:text-8xl md:text-9xl tracking-tight text-[#faf6f0] whitespace-pre-line font-light gold-glow"
        >
          {birthday.heroGreeting}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif-cormorant italic text-3xl sm:text-4xl text-[#c98a90] font-light rose-glow"
        >
          {birthday.heroSubtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="pt-16 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f4e8c1]/60">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-12 border-r-2 border-[#d4af37]/60 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
