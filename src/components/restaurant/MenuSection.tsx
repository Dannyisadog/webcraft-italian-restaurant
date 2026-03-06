"use client";

import { motion } from "framer-motion";
import { DishItem } from "./DishCard";

interface MenuSectionProps {
  category: string;
  items: DishItem[];
  icon: string;
}

export default function MenuSection({ category, items, icon }: MenuSectionProps) {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-main">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <i className={`fas ${icon} text-2xl text-[var(--color-primary)]`}></i>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              {category}
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-[var(--color-muted-foreground)]">
            使用頂級食材用心烹調的道地食譜
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.article
              key={item.name}
              className="card group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-4 p-4">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--color-foreground)]">
                      {item.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[var(--color-muted-foreground)]">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-base font-semibold text-[var(--color-primary)]">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}