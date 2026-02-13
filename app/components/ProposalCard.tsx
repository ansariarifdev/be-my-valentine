"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface ProposalCardProps {
  onYes: () => void;
}

export default function ProposalCard({ onYes }: ProposalCardProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  // Phrases that show up when you try to click No
  const funnyNoPhrases = [
    "No 💔",
    "Wait... really?",
    "Please reconsider 🥺",
    "My heart...",
    "Don't break my heart",
    "Think about it?",
    "Give us a chance?",
    "Pretty please?",
    "One more chance!",
    "I believe in us",
    "Can't catch me!",
    "Still hoping... 💕",
  ];

  const moveNoButton = () => {
    const x =
      Math.random() * (window.innerWidth - 100) - (window.innerWidth - 100) / 2;
    const y =
      Math.random() * (window.innerHeight - 100) -
      (window.innerHeight - 100) / 2;

    // Keep it somewhat contained
    const limitedX = Math.max(Math.min(x, 200), -200);
    const limitedY = Math.max(Math.min(y, 200), -200);

    setNoPosition({ x: limitedX, y: limitedY });
    setHoverCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-md w-full border border-pink-100"
      >
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-pink-300 shadow-lg ring-4 ring-rose-200/30">
          <Image
            src="/beautiful girl .jpg"
            alt="Riya"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          Riya... 💕
        </h1>

        <p className="text-lg text-gray-700 mb-2 leading-relaxed">
          From the moment I met you, my life changed in the most beautiful
          way...
        </p>

        <p className="text-md text-gray-600 mb-8 italic">
          You make every day brighter just by being in it
        </p>

        <div className="text-2xl font-bold text-gray-800 mb-8">
          Will you be my Valentine? 💖✨
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 min-h-[60px]">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="px-8 py-3 bg-linear-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full shadow-lg hover:shadow-pink-300/50 transition-all text-xl z-20"
          >
            Yes 💖
          </motion.button>

          <motion.button
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton} // For mobile tap
            className="px-8 py-3 bg-gray-200 text-gray-500 font-bold rounded-full shadow-md hover:bg-gray-300 transition-colors text-xl z-10 cursor-not-allowed"
          >
            {hoverCount > 0 && hoverCount < funnyNoPhrases.length
              ? funnyNoPhrases[hoverCount]
              : funnyNoPhrases[0]}
          </motion.button>
        </div>
      </motion.div>

      <div className="mt-8 text-sm text-gray-400 opacity-60">
        Made with all my love ❤️ and endless hope ✨
      </div>
    </div>
  );
}
