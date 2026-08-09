"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { birthday } from "@/config/birthday";

export default function Story() {
  return (
    <section className="relative py-32 px-6 bg-[#080708] border-b border-[#d4af37]/10">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-[#d4af37]"
          >
            CHAPTERS OF US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-cormorant text-4xl sm:text-6xl text-[#faf6f0] font-light tracking-wide"
          >
            OUR STORY
          </motion.h2>
        </div>

        {/* Moments Timeline */}
        <div className="space-y-28">
          {birthday.storyMoments.map((moment, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center justify-between`}
              >
                {/* Photo Container with Scale Effect */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="w-full md:w-1/2 relative h-[380px] sm:h-[450px] rounded-xl overflow-hidden group shadow-2xl border border-[#d4af37]/30"
                >
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.88] contrast-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080708]/90 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700" />
                </motion.div>

                {/* Text Container with Slide reveal */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-full md:w-1/2 space-y-4 text-left md:px-6"
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-[#c98a90] font-medium block">
                    {moment.tagline} • {moment.date}
                  </span>
                  <h3 className="font-serif-cormorant text-3xl sm:text-4xl text-[#f4e8c1] font-light gold-glow">
                    {moment.title}
                  </h3>
                  <p className="text-base text-[#faf6f0]/80 font-light leading-relaxed tracking-wide">
                    {moment.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
