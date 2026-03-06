"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant exterior",
    category: "Interior",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Dining area",
    category: "Interior",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Chef preparing food",
    category: "Kitchen",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Gourmet dish",
    category: "Food",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Pasta dish",
    category: "Food",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Wine cellar",
    category: "Interior",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    alt: "Pizza oven",
    category: "Kitchen",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80",
    alt: "Dessert",
    category: "Food",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    alt: "Table setting",
    category: "Interior",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    alt: "Cocktails",
    category: "Drinks",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Chef team",
    category: "Team",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
    alt: "Outdoor seating",
    category: "Interior",
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <motion.article
            key={image.id}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <i className="fas fa-expand text-2xl text-white"></i>
              <span className="mt-2 text-sm text-white">{image.alt}</span>
              <span className="mt-1 text-xs text-white/70">{image.category}</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times"></i>
            </motion.button>

            <motion.div
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white">
                <p className="font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-white/70">{selectedImage.category}</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <button
              className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                const prevIndex =
                  (currentIndex - 1 + galleryImages.length) %
                  galleryImages.length;
                setSelectedImage(galleryImages[prevIndex]);
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(
                  (img) => img.id === selectedImage.id
                );
                const nextIndex = (currentIndex + 1) % galleryImages.length;
                setSelectedImage(galleryImages[nextIndex]);
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
