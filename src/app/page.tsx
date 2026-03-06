"use client";

import Hero from "@/components/restaurant/Hero";
import DishCard, { DishItem } from "@/components/restaurant/DishCard";
import ReservationForm from "@/components/restaurant/ReservationForm";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredDishes: DishItem[] = [
  {
    name: "香料牛排",
    description: "頂級牛肋排搭配迷迭香橄欖油、巴薩米克醋珠，配上烤青花菜。",
    price: "NT$ 1,450",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    name: "墨魚義大利麵",
    description: "墨魚汁義大利麵搭配新鮮花枝、醃檸檬、紫蘇葉與蛋黃。",
    price: "NT$ 980",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
  },
  {
    name: "南瓜燉飯",
    description: "慢煮奶油燉飯搭配北海道南瓜與陳年帕瑪森起司。",
    price: "NT$ 780",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
  },
];

const testimonials = [
  {
    quote:
      "La Tavola Italiana 就像被邀請到義大利人家中。主廚讓每一道菜都充滿靈魂。",
    author: "Sophia L., 台北",
  },
  {
    quote:
      "我為了美食而旅行，這家餐廳媲美羅馬的餐館。服務周到、風味濃郁。",
    author: "Marco R., 米蘭",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12 pb-20">
      <Hero />

      {/* Introduction Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="container-main">
          <motion.div
            className="glass rounded-3xl border border-[var(--color-border)] p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
              歡迎光臨
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
              體驗永恆的義式款待。
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              La Tavola Italiana 是位於台北信義區的主廚餐廳。我們精心烹調精緻但親民的義大利料理，
              靈感來自拿坡里、托斯卡尼和西西里的回憶。每一道料理都使用台灣本地食材，
              同時致敬義大利傳統——木柴烤麵包、手工義大利麵和自制肉品。
            </p>
            <Link href="/about" className="btn-secondary mt-6 inline-flex">
              <i className="fas fa-arrow-right mr-2"></i>
              我們的故事
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <motion.section
        id="featured-dishes"
        className="space-y-6 px-6 md:px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-main">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-muted-foreground)]">
              主廚精選
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              招牌菜色
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredDishes.map((dish, index) => (
              <DishCard key={dish.name} item={dish} index={index} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/menu" className="btn-secondary">
              <i className="fas fa-book-open mr-2"></i>
              查看完整菜單
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Chef Section */}
      <motion.section
        className="px-6 py-16 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-main">
          <div className="glass grid gap-8 rounded-3xl border border-[var(--color-border)] p-8 md:grid-cols-2 md:p-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="主廚 Alessia Moretti"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                主廚
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold">
                主廚 Alessia Moretti
              </h3>
              <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">
                Alessia 在佛羅倫斯和巴勒莫接受訓練後定居台北。她根據季節設計菜單——
                每一道料理都充滿層次感、微妙的火候和芳香的香草。Alessia 支持本地農民和海鮮供應商，
                將義大利技法與台北的新鮮食材完美結合。
              </p>
              <Link href="/about" className="btn-primary mt-6 inline-flex w-fit">
                <i className="fas fa-user mr-2"></i>
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="px-6 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-main">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((item, idx) => (
              <motion.article
                key={item.author}
                className="card rounded-3xl border border-[var(--color-border)] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <i className="fas fa-quote-left text-2xl text-[var(--color-primary)]"></i>
                <p className="mt-4 font-display text-lg leading-relaxed">
                  “{item.quote}”
                </p>
                <p className="mt-4 font-medium text-[var(--color-foreground)]">
                  — {item.author}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reservation CTA Section */}
      <motion.section
        id="reservation-cta"
        className="px-6 md:px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-main">
          <div className="glass grid gap-8 rounded-3xl border border-[var(--color-border)] p-8 lg:grid-cols-[2fr,3fr]">
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                訂位
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold">
                預訂您的座位
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                讓我們為您精心準備慢燉佳餚、木柴披薩和時令甜點。提交您的資料，
                我們的客服人員將在 24 小時內確認預訂。
              </p>
              <div className="mt-6 flex gap-4 text-sm text-[var(--color-muted-foreground)]">
                <div className="flex items-center gap-2">
                  <i className="fas fa-phone text-[var(--color-primary)]"></i>
                  <span>+886 2 2345 6789</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-envelope text-[var(--color-primary)]"></i>
                  <span>reserve@latavola.com</span>
                </div>
              </div>
            </div>
            <ReservationForm />
          </div>
        </div>
      </motion.section>
    </div>
  );
}