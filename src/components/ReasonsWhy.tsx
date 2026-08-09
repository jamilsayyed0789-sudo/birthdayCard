"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, RotateCw } from "lucide-react";
import { birthday } from "@/config/birthday";

export default function ReasonsWhy() {
  const [flippedIds, setFlippedIds] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative py-32 px-6 bg-[#120a17] border-b border-[#a855f7]/20 text-center overflow-hidden">
      {/* Background Soft Glow Bulbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#4a121a]/25 via-[#c98a90]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="space-y-4">
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
            Reasons Why I Love You
          </motion.h2>
          <p className="text-xs sm:text-sm text-[#f4e8c1]/70 font-light tracking-wide max-w-md mx-auto">
            Tap any card to flip it over and reveal a reason.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {birthday.reasonsWhyILoveYou.map((item, index) => {
            const isFlipped = flippedIds.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => toggleFlip(item.id)}
                className="h-[260px] cursor-pointer perspective-1000 group"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-full rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
                >
                  {/* FRONT side */}
                  <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between items-center text-center bg-[#121013] border border-[#d4af37]/30 backdrop-blur-md overflow-hidden"
                  >
                    {/* Top Decorative Pill */}
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase">
                        REASON #{String(item.id).padStart(2, "0")}
                      </span>
                      <RotateCw className="w-3.5 h-3.5 text-[#f4e8c1]/40 group-hover:rotate-180 transition-transform duration-700" />
                    </div>

                    {/* Center Icon & Title */}
                    <div className="space-y-3 my-auto">
                      <div className="w-12 h-12 rounded-full bg-[#4a121a]/60 border border-[#c98a90]/30 flex items-center justify-center mx-auto shadow-inner">
                        <Heart className="w-5 h-5 text-[#c98a90] fill-[#c98a90]/40 group-hover:fill-[#c98a90] transition-colors duration-300" />
                      </div>
                      <h3 className="font-serif-cormorant text-2xl text-[#f4e8c1] font-light">
                        {item.title}
                      </h3>
                    </div>

                    {/* Bottom Hint */}
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#c98a90]/70 group-hover:text-[#c98a90] transition-colors">
                      TAP TO REVEAL
                    </span>
                  </div>

                  {/* BACK side */}
                  <div
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#181319] via-[#4a121a]/90 to-[#121013] border border-[#d4af37]/60 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Sparkles className="w-4 h-4 text-[#d4af37]" />
                      <span className="text-[10px] tracking-[0.2em] text-[#f4e8c1]/60 uppercase">
                        #{item.id}
                      </span>
                    </div>

                    <p className="font-serif-cormorant text-lg text-[#faf6f0] font-light leading-relaxed italic my-auto">
                      &ldquo;{item.reason}&rdquo;
                    </p>

                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] font-medium">
                      TAP TO FLIP BACK
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
