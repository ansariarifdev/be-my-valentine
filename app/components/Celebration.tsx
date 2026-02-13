"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

export default function Celebration() {
  useEffect(() => {
    // Big confetti explosion
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-4 border-pink-300 max-w-2xl w-full"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-6xl mb-6"
        >
          🥰
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-6 drop-shadow-sm">
          I KNEW IT! 😎💘
        </h1>

        <div className="space-y-6 text-xl text-gray-700 font-medium">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-rose-600 drop-shadow-sm"
          >
            "Pta tha mujhe, tera irada theek na hai!" 😏
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-2xl"
          >
            You were just waiting for me to ask, weren't you? Adorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-white/40 p-6 rounded-2xl border border-pink-200 shadow-inner mx-4"
          >
            <p className="text-gray-800 text-lg mb-4 font-bold text-left">
              Your new official duties:
            </p>
            <ul className="list-disc text-left pl-6 text-gray-800 space-y-2 text-base">
              <li>Laughing at my bad jokes (mandatory)</li>
              <li>Ordering food when I'm "not hungry"</li>
              <li>Sending me reels I've already seen</li>
              <li>Being my Valentine (obviously)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            className="py-4"
          >
            <div className="w-full h-px bg-pink-300/50 my-2"></div>
            <p className="italic text-gray-600 font-serif">
              "Contract signed with a click. No take-backs, no exchanges, no
              refunds."
            </p>
            <div className="w-full h-px bg-pink-300/50 my-2"></div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-8 text-sm text-gray-500 font-mono opacity-80"
        >
          (Screenshotted for future blackmail purposes �)
        </motion.p>
      </motion.div>
    </div>
  );
}
