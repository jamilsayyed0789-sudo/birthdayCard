"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import { birthday } from "@/config/birthday";

interface LoveQuizProps {
  onPass: () => void;
}

export default function LoveQuiz({ onPass }: LoveQuizProps) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);

  const moveNoButton = () => {
    // Generate random offsets when she tries to hover or tap "No"
    const randomX = (Math.random() - 0.5) * 280;
    const randomY = (Math.random() - 0.5) * 220;
    setNoPos({ x: randomX, y: randomY });
    setAttempts((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center bg-[#080708] overflow-hidden"
    >
      {/* Background Image with Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={birthday.bgHeroImage}
          alt="Ruhi Background"
          fill
          priority
          className="object-cover object-center brightness-[0.3] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080708] via-[#080708]/70 to-[#080708]/90" />
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      </div>

      {/* Ambient Pulsing Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-radial from-[#c98a90]/30 via-[#4a121a]/20 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-lg mx-auto space-y-8 p-8 rounded-2xl bg-[#121013]/85 border border-[#d4af37]/30 shadow-2xl backdrop-blur-xl">
        <div className="space-y-4">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 rounded-full bg-[#4a121a]/60 border border-[#c98a90]/40 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(201,138,144,0.3)]"
          >
            <Heart className="w-7 h-7 text-[#c98a90] fill-[#c98a90]" />
          </motion.div>

          <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block">
            BEFORE WE BEGIN...
          </span>

          <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#faf6f0] font-light gold-glow">
            Will you love me forever?
          </h2>
        </div>

        {/* Buttons Container */}
        <div className="relative pt-6 flex items-center justify-center gap-6 min-h-[90px]">
          {/* YES Button */}
          <button
            onClick={onPass}
            className="group relative px-8 py-3.5 text-sm tracking-[0.25em] uppercase text-[#f4e8c1] font-semibold bg-[#4a121a]/80 border border-[#d4af37] rounded-full overflow-hidden shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 via-[#c98a90]/40 to-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              YES, FOREVER!
            </span>
          </button>

          {/* NO Button (Evasive) */}
          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onMouseMove={moveNoButton}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onTouchMove={moveNoButton}
            onClick={moveNoButton}
            className="px-8 py-3.5 text-sm tracking-[0.25em] uppercase text-[#faf6f0]/50 border border-[#faf6f0]/20 rounded-full transition-colors backdrop-blur-sm select-none cursor-pointer relative z-20"
          >
            NO
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
