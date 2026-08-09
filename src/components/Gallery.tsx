"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { birthday, PhotoItem } from "@/config/birthday";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + birthday.photos.length) % birthday.photos.length);
    }
  };

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % birthday.photos.length);
    }
  };

  return (
    <section className="relative py-32 px-6 bg-[#0c0a0d] border-b border-[#d4af37]/10">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">
            VISUAL MEMORIES
          </span>
          <h2 className="font-serif-cormorant text-4xl sm:text-6xl text-[#faf6f0] font-light">
            PHOTO JOURNEY
          </h2>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {birthday.photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative rounded-lg overflow-hidden bg-[#121013] border border-[#d4af37]/15 shadow-xl transition-all duration-500 hover:border-[#d4af37]/50"
            >
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080708] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="p-6 space-y-2 text-left bg-[#0c0a0d]">
                <p className="font-serif-cormorant text-xl text-[#f4e8c1] font-light">
                  {photo.caption}
                </p>
                {photo.location && (
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#c98a90]/80">
                    {photo.location}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center space-y-4">
              <div className="relative w-full h-[65vh] sm:h-[75vh]">
                <Image
                  src={birthday.photos[selectedIndex].src}
                  alt={birthday.photos[selectedIndex].caption}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-serif-cormorant text-2xl text-[#f4e8c1] font-light text-center">
                {birthday.photos[selectedIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
