"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface DishItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

interface DishCardProps {
  item: DishItem;
  index?: number;
}

export default function DishCard({ item, index = 0 }: DishCardProps) {
  return (
    <motion.article
      className="card group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {item.category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[var(--color-foreground)]">
            {item.category}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-[var(--color-foreground)]">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {item.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-[var(--color-primary)]">
            {item.price}
          </span>
          <motion.button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-plus text-sm"></i>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
