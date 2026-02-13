"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/qualities", label: "Why You?" },
    { href: "/proposal", label: "The Question" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg border-b border-pink-200/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            </motion.div>
            <span className="font-pacifico text-2xl text-rose-600">
              Be My Valentine
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-nunito font-semibold transition-colors ${
                  pathname === item.href
                    ? "text-rose-600"
                    : "text-gray-700 hover:text-rose-500"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href
                    ? "text-rose-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item.label.split(" ")[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
