"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

export default function ProposalPage() {
  const router = useRouter();
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const funnyNoPhrases = [
    "No 💔",
    "Wait... please?",
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
    "Please?",
    "Are you certain?",
    "Really sure?",
  ];

  const moveNoButton = () => {
    const x =
      Math.random() * (window.innerWidth - 200) - (window.innerWidth - 200) / 2;
    const y =
      Math.random() * (window.innerHeight - 200) -
      (window.innerHeight - 200) / 2;

    const limitedX = Math.max(Math.min(x, 250), -250);
    const limitedY = Math.max(Math.min(y, 150), -150);

    setNoPosition({ x: limitedX, y: limitedY });
    setHoverCount((prev) => prev + 1);

    // Make Yes button bigger each time
    setYesButtonSize((prev) => Math.min(prev + 0.1, 2));
  };

  const handleYesClick = () => {
    // Navigate to celebration page
    router.push("/celebration");
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full border-4 border-rose-300"
      >
        {/* Profile Image */}
        <div className="relative w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-rose-400 shadow-xl ring-4 ring-pink-200/40">
          <Image
            src="/beautiful girl .jpg"
            alt="Riya"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <Heart className="w-16 h-16 text-rose-500 fill-current mx-auto" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-pacifico text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-pink-600 mb-6">
            Riya... 💕
          </h1>

          <p className="text-2xl md:text-3xl text-gray-800 mb-4 font-nunito font-bold">
            Will you be my Valentine?
          </p>

          <p className="text-lg text-gray-600 italic mb-2">
            You've brought so much joy into my life...
          </p>

          <p className="text-md text-gray-500 mb-8">
            And I can't imagine celebrating this day without you 💖
          </p>
        </div>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[100px] relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: yesButtonSize }}
            onClick={handleYesClick}
            className="px-12 py-4 bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-pink-400/50 transition-all text-2xl z-20 relative"
          >
            Yes! 💖
            {hoverCount > 5 && (
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 text-rose-600 text-sm whitespace-nowrap"
              >
                Click me! I'm the right choice! 👆
              </motion.span>
            )}
          </motion.button>

          <motion.button
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="px-12 py-4 bg-gray-200 text-gray-600 font-bold rounded-full shadow-md hover:bg-gray-300 transition-colors text-2xl z-10 cursor-not-allowed"
          >
            {hoverCount > 0 && hoverCount < funnyNoPhrases.length
              ? funnyNoPhrases[hoverCount]
              : funnyNoPhrases[0]}
          </motion.button>
        </div>

        {/* Hint Text */}
        {hoverCount > 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-gray-500 text-sm italic"
          >
            (The "No" button seems to be running away... maybe it's a sign? 💫)
          </motion.p>
        )}

        {hoverCount > 8 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mt-4"
          >
            <p className="text-rose-600 font-bold">
              I think the universe is trying to tell you something...
            </p>
            <p className="text-gray-600 text-sm mt-2">
              (The answer your heart knows is the right one 💝)
            </p>
          </motion.div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2 text-gray-400 text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Made with all my love and hope ✨</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
