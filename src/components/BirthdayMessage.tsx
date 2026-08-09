"use client";

import { motion } from "framer-motion";
import { birthday } from "@/config/birthday";

export default function BirthdayMessage() {
  return (
    <section className="relative py-28 px-6 bg-[#0c0a0d] overflow-hidden border-b border-[#d4af37]/10">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif-cormorant text-3xl sm:text-5xl text-[#f4e8c1] font-light leading-snug tracking-wide"
        >
          &ldquo;{birthday.birthdayMessageTitle}&rdquo;
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-20 h-[1px] bg-[#c98a90]/40 mx-auto"
        />

        <div className="space-y-6 text-base sm:text-lg text-[#faf6f0]/80 font-light leading-relaxed tracking-wide">
          {birthday.birthdayMessageBody.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
