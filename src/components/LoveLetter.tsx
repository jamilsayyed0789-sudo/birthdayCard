"use client";

import { motion } from "framer-motion";
import { birthday } from "@/config/birthday";

export default function LoveLetter() {
  return (
    <section className="relative py-36 px-6 bg-[#080708] overflow-hidden border-b border-[#d4af37]/10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#4a121a]/20 via-[#c98a90]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-[#d4af37]"
          >
            FROM THE HEART
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-cormorant text-4xl sm:text-6xl text-[#faf6f0] font-light"
          >
            {birthday.loveLetterTitle}
          </motion.h2>
        </div>

        {/* Cinematic Letter Area (No standard box) */}
        <div className="relative pt-8 space-y-8 text-center sm:text-left">
          {birthday.loveLetterBody.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              className="font-serif-cormorant text-xl sm:text-2xl text-[#f4e8c1]/90 font-light leading-relaxed tracking-wide italic"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Signoff */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12 text-center"
          >
            <p className="font-serif-cormorant text-3xl sm:text-4xl text-[#c98a90] font-medium rose-glow">
              {birthday.loveLetterSignoff}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
