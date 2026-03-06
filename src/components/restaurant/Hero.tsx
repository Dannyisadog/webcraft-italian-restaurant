"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImages[0]}
          alt="La Tavola Italiana 餐廳"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-[0.4em] opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            道地義大利美食
          </motion.p>
        </motion.div>

        <motion.h1
          className="font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          La Tavola
          <br />
          <span className="italic">Italiana</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          在台北市中心體驗義大利的熱情與好客。手工義大利麵、木柴披薩，
          世代相傳的美味食譜。
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="/reservation" className="btn-primary text-base">
            <i className="fas fa-calendar-alt mr-2"></i>
            立即訂位
          </Link>
          <Link href="/menu" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--color-foreground)] text-base">
            <i className="fas fa-utensils mr-2"></i>
            查看菜單
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mt-2 h-2 w-1 rounded-full bg-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}