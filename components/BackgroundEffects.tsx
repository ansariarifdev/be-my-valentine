"use client";

import { motion } from "motion/react";
import { Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const [hearts, setHearts] = useState<FloatingElement[]>([]);
  const [sparkles, setSparkles] = useState<FloatingElement[]>([]);
  const [stars, setStars] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate all random values after mount to avoid hydration mismatch
    setHearts(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: 0,
        delay: Math.random() * 5,
        duration: 12 + Math.random() * 8,
        size: 20 + Math.random() * 20,
      })),
    );

    setSparkles(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3,
        size: 16,
      })),
    );

    setStars(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
        size: 12,
      })),
    );

    setMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className="absolute"
          style={{ left: `${heart.x}%` }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart
            className="text-pink-300/40"
            size={heart.size}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        >
          <Sparkles className="text-yellow-300/50" size={sparkle.size} />
        </motion.div>
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <Star
            className="text-pink-200/40"
            size={star.size}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}
