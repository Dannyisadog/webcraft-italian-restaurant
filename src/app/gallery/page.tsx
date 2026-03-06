"use client";

import { motion } from "framer-motion";
import GalleryGrid from "@/components/restaurant/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&q=80"
            alt="相簿"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="font-display text-5xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            相簿
          </motion.h1>
          <motion.p
            className="mt-4 text-lg opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            La Tavola Italiana 的精彩瞬間
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 md:px-10">
        <div className="container-main">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-foreground)] py-16 text-[var(--color-background)]">
        <div className="container-main text-center">
          <h2 className="font-display text-3xl font-semibold">
            親自體驗
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">
            預訂座位，親眼欣賞我們美麗的餐廳。
          </p>
          <a
            href="/reservation"
            className="btn-primary mt-8 inline-flex bg-white text-[var(--color-foreground)]"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            立即訂位
          </a>
        </div>
      </section>
    </div>
  );
}