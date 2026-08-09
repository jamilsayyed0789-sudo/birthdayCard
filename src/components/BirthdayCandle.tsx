"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Flame, Heart } from "lucide-react";
import { birthday } from "@/config/birthday";

export default function BirthdayCandle() {
  const [isBlown, setIsBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleBlowCandle = () => {
    if (isBlown) return;
    setIsBlowing(true);

    setTimeout(() => {
      setIsBlown(true);
      setIsBlowing(false);

      // Trigger soft golden sparkle explosion
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#f4e8c1", "#c98a90", "#ffffff"],
        ticks: 350,
      });
    }, 1200);
  };

  return (
    <section className="relative py-32 px-6 bg-[#120a17] border-b border-[#a855f7]/20 text-center overflow-hidden">
      {/* Background Ambient Warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#d4af37]/15 via-[#4a121a]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto space-y-10">
        {/* Title */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-[#d4af37]"
          >
            MAKE A WISH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-cormorant text-4xl sm:text-6xl text-[#faf6f0] font-light"
          >
            Blow Your Candle
          </motion.h2>
          <p className="text-xs sm:text-sm text-[#f4e8c1]/70 font-light tracking-wide max-w-md mx-auto">
            Close your eyes, make a wish from your heart, and blow out the flame.
          </p>
        </div>

        {/* Candle Visual */}
        <div className="relative py-8 flex flex-col items-center justify-center">
          {/* Candle Flame Container */}
          <div className="relative h-20 w-12 flex items-center justify-center">
            <AnimatePresence>
              {!isBlown && (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0, filter: "blur(10px)", transition: { duration: 0.6 } }}
                  animate={
                    isBlowing
                      ? {
                          scale: [1, 1.3, 0.4, 1.1, 0.2],
                          rotate: [-5, 10, -12, 15, -20],
                          opacity: [1, 0.8, 0.5, 0.9, 0.1],
                        }
                      : {
                          scale: [1, 1.08, 0.95, 1.05, 1],
                          rotate: [-2, 3, -3, 2, 0],
                        }
                  }
                  transition={
                    isBlowing
                      ? { duration: 1.2, ease: "easeInOut" }
                      : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="relative flex items-center justify-center cursor-pointer"
                  onClick={handleBlowCandle}
                >
                  {/* Outer Flame Glow */}
                  <div className="absolute w-16 h-16 bg-[#d4af37]/40 rounded-full blur-md" />
                  {/* Flame Core Icon */}
                  <Flame className="w-10 h-10 text-[#f4e8c1] fill-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Smoke Effect when blown out */}
            {isBlown && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.6, 0], y: -40, scale: 1.8 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute -top-4 w-6 h-12 bg-gradient-to-t from-gray-400/40 to-transparent blur-md rounded-full pointer-events-none"
              />
            )}
          </div>

          {/* Candle Body */}
          <div className="w-6 h-28 bg-gradient-to-b from-[#f4e8c1] via-[#d4af37]/80 to-[#4a121a]/60 rounded-t-sm rounded-b-md shadow-2xl border-x border-t border-[#d4af37]/40 relative">
            <div className="w-1.5 h-3 bg-gray-800 mx-auto -mt-3 rounded-sm" />
          </div>

          {/* Candle Plate / Base */}
          <div className="w-24 h-4 bg-gradient-to-r from-[#121013] via-[#4a121a] to-[#121013] rounded-full border border-[#d4af37]/30 shadow-2xl -mt-1" />
        </div>

        {/* Action Button & Wish Card */}
        <div className="pt-2">
          {!isBlown ? (
            <button
              onClick={handleBlowCandle}
              disabled={isBlowing}
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-xs tracking-[0.3em] uppercase text-[#f4e8c1] border border-[#d4af37]/50 rounded-full backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-60"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>{isBlowing ? "BLOWING OUT..." : "TAP TO BLOW CANDLE"}</span>
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-8 rounded-2xl bg-[#121013]/90 border border-[#d4af37]/40 shadow-2xl backdrop-blur-xl space-y-4 max-w-md mx-auto"
            >
              <Heart className="w-8 h-8 text-[#c98a90] fill-[#c98a90] mx-auto animate-bounce" />
              <h3 className="font-serif-cormorant text-3xl text-[#f4e8c1] font-light gold-glow">
                Your wish is sealed.
              </h3>
              <p className="font-serif-cormorant text-lg text-[#faf6f0]/85 italic">
                &ldquo;May every secret wish in your heart come true this year, Ruhi.&rdquo;
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
