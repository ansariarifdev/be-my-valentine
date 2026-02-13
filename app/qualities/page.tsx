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
    title: "Your Infectious Smile",
    description:
      "That smile of yours could light up the darkest room. Seriously, it's unfair how good your smile is.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Zap,
    title: "Energy & Enthusiasm",
    description:
      "Your energy is contagious! Every conversation with you feels like an adventure.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Kindness",
    description:
      "You have the biggest heart. The way you care about people is genuinely beautiful.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Star,
    title: "Uniquely You",
    description:
      "There's literally no one else like you. You're one of a kind, and that's what makes you special.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Coffee,
    title: "Great Company",
    description:
      "Whether we're talking about life or just random stuff, spending time with you is always the highlight.",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Music,
    title: "Sense of Humor",
    description:
      "You make me laugh even when I'm trying to be serious. That's a superpower.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: BookOpen,
    title: "Intelligence",
    description:
      "You're incredibly smart, and I love how our conversations can go from silly to deep in seconds.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: Award,
    title: "Being Yourself",
    description:
      "You're unapologetically yourself, and that authenticity is rare and precious.",
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
            Why I Like You 💝
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Let me count the ways... (Actually, there are too many, but here are
            my favorites)
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
                The Real Deal
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Shivam, you've been an incredible friend, and honestly, you make
                my days better just by being you. This isn't just some random
                crush—I genuinely admire who you are as a person.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                So yeah, I thought... why not take a shot and ask you something
                special? (And build an entire website while I'm at it, because
                apparently that's what I do when I care about someone) 😅
              </p>
              <Link href="/proposal">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xl px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Ready for the Question? 💘
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
