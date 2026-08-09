"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { birthday } from "@/config/birthday";

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicControl({ isPlaying, onToggle }: MusicControlProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggle}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#121013]/80 border border-[#d4af37]/30 text-[#f4e8c1] backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#d4af37]"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#c98a90]/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></span>
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-[#d4af37] animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-[#faf6f0]/60" />
        )}
      </button>
    </div>
  );
}
