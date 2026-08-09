"use client";

import { motion } from "framer-motion";
import { birthday } from "@/config/birthday";
import { Sparkles, Heart } from "lucide-react";

export default function LoveLetter() {
  return (
    <section className="relative py-36 px-6 bg-[#07120e] overflow-hidden border-b border-[#e5c378]/15">
      {/* Dynamic Pulsing Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#348e71]/25 via-[#0b3226]/20 to-transparent blur-3xl pointer-events-none"
      />

      {/* Floating Sparkle Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-10, -120],
            x: (i - 3) * 60 + (i % 2 === 0 ? 20 : -20),
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
          className="absolute bottom-12 left-1/2 w-1.5 h-1.5 rounded-full bg-[#e5c378] shadow-[0_0_10px_#e5c378] pointer-events-none"
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0b3226] border border-[#e5c378]/30 mb-2 shadow-[0_0_20px_rgba(52,142,113,0.3)]"
          >
            <Sparkles className="w-5 h-5 text-[#e5c378] animate-pulse" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-[#e5c378] font-medium block"
          >
            FROM THE HEART
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-cormorant text-4xl sm:text-6xl text-[#faf7f2] font-light gold-glow"
          >
            {birthday.loveLetterTitle}
          </motion.h2>
        </div>

        {/* Cinematic Animated Letter Content */}
        <div className="relative p-8 sm:p-12 rounded-2xl bg-[#0e2019]/70 border border-[#e5c378]/25 backdrop-blur-xl shadow-2xl space-y-8 text-center sm:text-left">
          {birthday.loveLetterBody.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif-cormorant text-xl sm:text-2xl text-[#f9f1df]/90 font-light leading-relaxed tracking-wide italic"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Signoff with glowing heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-10 text-center space-y-3 border-t border-[#e5c378]/15"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full bg-[#348e71]/30 border border-[#e5c378]/40 flex items-center justify-center mx-auto"
            >
              <Heart className="w-5 h-5 text-[#e5c378] fill-[#e5c378]" />
            </motion.div>

            <p className="font-serif-cormorant text-3xl sm:text-4xl text-[#e5c378] font-medium gold-glow">
              {birthday.loveLetterSignoff}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
