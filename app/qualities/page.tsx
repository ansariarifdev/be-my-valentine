"use client";

import { motion } from "motion/react";
import {
  Smile,
  Zap,
  Heart,
  Star,
  Coffee,
  Music,
  BookOpen,
  Award,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const qualities = [
  {
    icon: Smile,
    title: "Your Radiant Smile",
    description:
      "Your smile lights up my entire world. Every time I see it, my day becomes infinitely better.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Zap,
    title: "Captivating Presence",
    description:
      "The way you carry yourself, the energy you radiate – it's mesmerizing. You're simply magnetic.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Beautiful Heart",
    description:
      "Your kindness, compassion, and caring nature are truly beautiful. You have the most wonderful heart.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Star,
    title: "Uniquely Perfect",
    description:
      "Everything about you is special – your laugh, your thoughts, your dreams. You're perfectly you, and that's everything.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Coffee,
    title: "My Favorite Person",
    description:
      "Every moment I spend with you is precious. You make ordinary moments feel extraordinary.",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Music,
    title: "Joyful Spirit",
    description:
      "Your laughter is my favorite sound. The joy you bring into my life is irreplaceable.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: BookOpen,
    title: "Brilliant Mind",
    description:
      "Your intelligence, creativity, and the way you see the world inspire me every single day.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: Award,
    title: "Authentically You",
    description:
      "Your authenticity, your grace, the way you stay true to yourself – it's one of the things I admire most about you.",
    color: "from-rose-400 to-pink-600",
  },
];

export default function QualitiesPage() {
  return (
    <main className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-pacifico text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-pink-600 mb-6">
            Why I Love You, Riya 💕
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            These are just some of the countless reasons why you mean the world
            to me...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Card className="p-6 bg-white/50 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all h-full">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-linear-to-br ${quality.color} flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <quality.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-pacifico text-xl text-rose-600 mb-3 text-center">
                  {quality.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {quality.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="p-8 bg-white/60 backdrop-blur-md border-2 border-rose-300">
            <div className="text-center">
              <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4 fill-current" />
              <h2 className="font-pacifico text-3xl text-rose-600 mb-4">
                From My Heart
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Riya, you've become so incredibly special to me. The way you
                make me feel, the happiness you bring into my life – it's
                something I've never experienced before. You're not just
                amazing; you're everything I didn't know I was looking for.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I built this entire website because words alone didn't feel like
                enough to express how much you mean to me. You deserve something
                as special and unique as you are, and I wanted to show you just
                how deeply I care. 💕
              </p>
              <Link href="/proposal">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xl px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Will You Be Mine? 💖
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          (Yes, I spent way too much time on this website. No regrets.) ✨
        </motion.p>
      </div>
    </main>
  );
}
