"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import LoveQuiz from "@/components/LoveQuiz";
import BirthdayHero from "@/components/BirthdayHero";
import BirthdayMessage from "@/components/BirthdayMessage";
import Story from "@/components/Story";
import ReasonsWhy from "@/components/ReasonsWhy";
import LoveLetter from "@/components/LoveLetter";
import BirthdayCandle from "@/components/BirthdayCandle";
import Countdown from "@/components/Countdown";
import FinalSurprise from "@/components/FinalSurprise";
import MusicControl from "@/components/MusicControl";
import { birthday } from "@/config/birthday";

export default function Home() {
  // Step flow: 0 = OpeningScreen, 1 = LoveQuiz, 2 = Main Surprise Content
  const [step, setStep] = useState<number>(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(birthday.musicSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenSurprise = () => {
    // Transition from Opening Screen to Love Quiz
    setStep(1);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch((err) => {
          console.log("Audio play prevented:", err);
          setIsPlayingMusic(false);
        });
    }
  };

  const handlePassQuiz = () => {
    // Transition from Love Quiz to Main Content
    setStep(2);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <main className="relative min-h-screen bg-[#080708] text-[#faf6f0] selection:bg-[#4a121a] selection:text-[#f4e8c1]">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <OpeningScreen key="opening" onOpen={handleOpenSurprise} />
        )}

        {step === 1 && (
          <LoveQuiz key="quiz" onPass={handlePassQuiz} />
        )}

        {step === 2 && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <BirthdayHero />
            <BirthdayMessage />
            <Story />
            <ReasonsWhy />
            <LoveLetter />
            <BirthdayCandle />
            <Countdown />
            <FinalSurprise />

            {/* Music Floating Control */}
            <MusicControl isPlaying={isPlayingMusic} onToggle={toggleMusic} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
