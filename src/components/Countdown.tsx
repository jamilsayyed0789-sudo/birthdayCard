"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { birthday } from "@/config/birthday";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isBirthday, setIsBirthday] = useState<boolean>(false);

  useEffect(() => {
    const targetDate = new Date(birthday.birthdayDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsBirthday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        // Trigger elegant soft golden particles
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d4af37", "#f4e8c1", "#c98a90"],
          ticks: 300,
        });
      } else {
        setIsBirthday(false);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 px-6 bg-[#0c0a0d] border-b border-[#d4af37]/10 text-center overflow-hidden">
      {/* Golden subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-radial from-[#d4af37]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {!isBirthday ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">
                COUNTING DOWN THE MOMENTS
              </span>
              <h2 className="font-serif-cormorant text-3xl sm:text-5xl text-[#faf6f0] font-light">
                UNTIL YOUR SPECIAL DAY
              </h2>
            </motion.div>

            {timeLeft && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-6">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINUTES", value: timeLeft.minutes },
                  { label: "SECONDS", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-lg bg-[#121013] border border-[#d4af37]/20 shadow-xl"
                  >
                    <span className="font-serif-cormorant text-4xl sm:text-5xl text-[#f4e8c1] font-light gold-glow block">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#c98a90] mt-2 block">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">
              CELEBRATION TIME
            </span>
            <h2 className="font-serif-cormorant text-5xl sm:text-7xl text-[#f4e8c1] font-light gold-glow">
              IT&apos;S YOUR DAY, RUHI.
            </h2>
            <p className="font-serif-cormorant text-3xl text-[#c98a90] italic">
              HAPPY BIRTHDAY ❤️
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
