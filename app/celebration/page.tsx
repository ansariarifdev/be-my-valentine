"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import {
  Heart,
  PartyPopper,
  Sparkles,
  Gift,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CelebrationPage() {
  useEffect(() => {
    // Massive confetti explosion
    const duration = 20 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
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

    // Extra burst at the start
    confetti({
      particleCount: 200,
      spread: 180,
      origin: { y: 0.6 },
      colors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd"],
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen relative py-12">
      <div className="container mx-auto px-4">
        {/* Main Celebration Card */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-white/70 backdrop-blur-md border-4 border-rose-400 shadow-2xl">
            {/* Animated Emoji */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-8xl text-center mb-6"
            >
              🥳
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-pacifico text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-pink-500 to-purple-600 mb-6 text-center drop-shadow-lg"
            >
              I KNEW IT! 😎💘
            </motion.h1>

            {/* Content Sections */}
            <div className="space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold text-rose-600 drop-shadow-sm"
              >
                "Pta tha mujhe, tera irada theek na hai!" 😏
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-2xl text-gray-700"
              >
                You were just waiting for me to ask, weren't you? Adorable. 💕
              </motion.p>

              {/* Official Duties Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Card className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-rose-200">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Gift className="w-6 h-6 text-rose-500" />
                    <h2 className="text-2xl font-pacifico text-rose-600">
                      Your New Official Duties
                    </h2>
                    <Gift className="w-6 h-6 text-rose-500" />
                  </div>
                  <ul className="space-y-3 text-left max-w-lg mx-auto">
                    {[
                      {
                        icon: MessageCircle,
                        text: "Sending me memes at 2 AM (mandatory)",
                      },
                      {
                        icon: Heart,
                        text: "Being the reason I smile randomly",
                      },
                      {
                        icon: Calendar,
                        text: "Making plans and actually showing up",
                      },
                      {
                        icon: Sparkles,
                        text: "Continuing to be your amazing self",
                      },
                      {
                        icon: PartyPopper,
                        text: "Being my Valentine (obviously!)",
                      },
                    ].map((duty, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                        className="flex items-center gap-3 text-lg text-gray-700"
                      >
                        <duty.icon className="w-5 h-5 text-rose-500 flex-shrink-0" />
                        <span>{duty.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Love Letter Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="py-8"
              >
                <div className="w-full h-px bg-linear-to-r from-transparent via-rose-300 to-transparent my-4"></div>
                <p className="text-xl text-gray-700 italic leading-relaxed max-w-2xl mx-auto mb-4">
                  "On a serious note, I'm really glad you said yes. You mean a
                  lot to me, and I'm excited to see where this goes. Thanks for
                  being you, Shivam." ❤️
                </p>
                <div className="w-full h-px bg-linear-to-r from-transparent via-rose-300 to-transparent my-4"></div>
              </motion.div>

              {/* Fun Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="grid md:grid-cols-3 gap-4 my-8"
              >
                {[
                  { label: "Hours Spent on This Site", value: "Too Many" },
                  { label: "Regrets", value: "Zero" },
                  { label: "Chances You'll Say No Now", value: "0%" },
                ].map((stat, i) => (
                  <Card key={i} className="p-4 bg-white/50 border-rose-200">
                    <div className="text-4xl font-bold text-rose-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </motion.div>

              {/* Final Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="pt-6"
              >
                <p className="text-lg text-gray-600 mb-6">
                  Now you're officially stuck with me. No refunds. 😌
                </p>
                <p className="text-sm text-gray-400 font-mono">
                  (Screenshots have been taken for blackmail purposes 📸)
                </p>
              </motion.div>

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="mt-8 border-2 border-rose-400 text-rose-600 hover:bg-rose-50"
                  >
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Extra Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <Heart className="text-rose-300 fill-current" size={30} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
