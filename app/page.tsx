"use client";

import { motion } from "motion/react";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rose-400 shadow-2xl ring-4 ring-pink-200/50">
              <Image
                src="/beautiful girl .jpg"
                alt="Riya"
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-pacifico text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-pink-600 mb-6"
          >
            Dear Riya 💝
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl font-nunito"
          >
            I've been wanting to tell you something special for a while now...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-600 mb-12 italic"
          >
            (And I built this whole website to express it) ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/qualities">
              <Button
                size="lg"
                className="bg-linear-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                What Makes You Special 💭
                <ArrowRight className="ml-2" />
              </Button>
            </Link>

            <Link href="/proposal">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 font-bold text-lg px-8 py-6 rounded-full"
              >
                Skip to the Question
                <Heart className="ml-2" fill="currentColor" />
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-gray-400"
            >
              <ArrowRight className="rotate-90" />
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Preview Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Heart,
                title: "A Beautiful Soul",
                desc: "Every moment with you feels like a blessing",
              },
              {
                icon: Sparkles,
                title: "Enchanting Presence",
                desc: "You light up my world in ways I never imagined",
              },
              {
                icon: Heart,
                title: "My Heart's Wish",
                desc: "There's something I need to ask you...",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="p-6 bg-white/40 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-shadow">
                  <item.icon className="w-12 h-12 text-rose-500 mb-4 mx-auto" />
                  <h3 className="font-pacifico text-xl text-rose-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
