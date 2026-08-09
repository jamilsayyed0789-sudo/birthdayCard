"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { birthday } from "@/config/birthday";

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.15,
        filter: "blur(20px)",
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 text-center bg-[#080708] overflow-hidden"
    >
      {/* Background Image with slow cinematic zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={birthday.bgHeroImage}
            alt="Ruhi"
            fill
            priority
            className="object-cover object-center brightness-[0.35] contrast-[1.15] filter"
          />
        </motion.div>

        {/* Soft Animated Ambient Glow Bulbs */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#c98a90]/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Floating Ambient Gold Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: (i - 4) * 80 }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [-20, -300],
              x: (i - 4) * 85 + (i % 2 === 0 ? 30 : -30),
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-1/2 w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_12px_#d4af37] pointer-events-none"
          />
        ))}

        {/* Dark Overlay & Grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080708] via-[#080708]/60 to-[#080708]/80" />
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      </div>

      {/* Top Header Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 pt-8"
      >
        <span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#d4af37] font-semibold drop-shadow">
          {birthday.openingSubtitle}
        </span>
      </motion.div>

      {/* Center Title */}
      <div className="relative z-10 max-w-3xl mx-auto my-auto py-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="space-y-4"
        >
          <h1 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#faf6f0] whitespace-pre-line font-light gold-glow">
            {birthday.openingTitle}
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xs sm:text-sm tracking-[0.5em] text-[#f4e8c1] uppercase font-light"
        >
          10 AUGUST 2026
        </motion.p>
      </div>

      {/* Bottom Interactive Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="relative z-10 pb-6 sm:pb-8"
      >
        <button
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm tracking-[0.3em] uppercase text-[#faf6f0] border border-[#d4af37]/60 bg-[#121013]/90 rounded-full overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]"
        >
          <motion.span
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-[#4a121a] via-[#c98a90]/40 to-[#4a121a]"
          />
          <span className="relative z-10 font-semibold text-[#f4e8c1] group-hover:text-white transition-colors duration-300">
            OPEN YOUR SURPRISE
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}
