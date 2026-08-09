"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import { birthday } from "@/config/birthday";

import confetti from "canvas-confetti";

export default function FinalSurprise() {
  const [showSecret, setShowSecret] = useState(false);

  const handleRevealSecret = () => {
    setShowSecret(true);

    // Trigger golden and rose confetti fireworks
    confetti({
      particleCount: 90,
      spread: 90,
      origin: { y: 0.7 },
      colors: ["#d4af37", "#f4e8c1", "#c98a90", "#ffffff"],
      ticks: 400,
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 bg-[#120a17] overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 opacity-20 filter brightness-75 contrast-125">
        <Image
          src={birthday.bgHeroImage}
          alt="Ruhi Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080708] via-[#080708]/80 to-[#080708]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        {/* Main Final Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="font-serif-cormorant text-5xl sm:text-7xl text-[#faf6f0] font-light">
            Happy Birthday,
            <span className="block text-[#f4e8c1] gold-glow">Ruhi.</span>
          </h2>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-6" />

          <div className="space-y-4 max-w-xl mx-auto text-lg sm:text-xl text-[#faf6f0]/85 font-serif-cormorant italic">
            {birthday.finalWishMessage.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <p className="font-serif-cormorant text-2xl text-[#c98a90] pt-6">
            {birthday.finalWishTitle}
          </p>

          <p className="text-sm tracking-[0.4em] uppercase text-[#d4af37] font-medium pt-4">
            {birthday.finalSignoff} ❤️
          </p>
        </motion.div>

        {/* Hidden Surprise Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-16"
        >
          {!showSecret ? (
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c98a90]/90 whitespace-pre-line">
                {birthday.secretSurpriseTeaser}
              </p>
              <button
                onClick={handleRevealSecret}
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-xs tracking-[0.3em] uppercase text-[#f4e8c1] border border-[#d4af37]/40 rounded-full backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
              >
                <Sparkles className="w-4 h-4 text-[#d4af37] animate-spin" />
                <span>ONE LAST SURPRISE</span>
              </button>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="p-8 sm:p-12 rounded-xl bg-[#121013]/90 border border-[#d4af37]/40 shadow-2xl backdrop-blur-xl space-y-6 max-w-xl mx-auto text-center"
              >
                <Heart className="w-8 h-8 text-[#c98a90] mx-auto animate-pulse" />
                <div className="space-y-4 font-serif-cormorant text-xl sm:text-2xl text-[#f4e8c1] italic font-light">
                  {birthday.secretSurpriseContent.map((sentence, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3, duration: 0.6 }}
                    >
                      {sentence}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
