"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "主廚 Alessia Moretti",
    role: "行政主廚",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
    bio: "在佛羅倫斯和巴勒莫接受訓練，主廚 Alessia 擁有 15 年烹調正統義大利料理的經驗。",
  },
  {
    name: "Marco Rossi",
    role: "甜點主廚",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    bio: "擁有傳統義大利甜點專業知識，Marco 創造的甜點讓您彷彿置身拿坡里。",
  },
  {
    name: "Sofia Chen",
    role: "侍酒師",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    bio: "認證侍酒師，專精義大利葡萄酒，Sofia 為我們策劃了獲獎的酒單。",
  },
];

const values = [
  {
    icon: "fa-leaf",
    title: "新鮮食材",
    description:
      "我們採購最優質的本地農產品和進口義大利食材，確保正統風味。",
  },
  {
    icon: "fa-heart",
    title: "用心烹調",
    description:
      "每道菜都充滿熱情烹調，致敬義大利烹飪傳統。",
  },
  {
    icon: "fa-wine-glass",
    title: "精選酒單",
    description:
      "我們的酒單包含來自著名義大利產區的精選葡萄酒。",
  },
  {
    icon: "fa-users",
    title: "溫暖款待",
    description:
      "我們像對待家人一樣對待每位客人，確保您有難忘的用餐體驗。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
            alt="關於 La Tavola Italiana"
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
            我們的故事
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            自 2018 年起，將正統義大利美食帶進台北心臟地帶
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 md:px-10">
        <div className="container-main">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                我們的故事
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                在台北品嚐義大利
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-muted-foreground)]">
                <p>
                  La Tavola Italiana 誕生於一個簡單的夢想：與充滿活力的台北分享正統義大利家庭的溫暖和風味。
                </p>
                <p>
                  我們的旅程始於 2018 年，當主廚 Alessia Moretti 決定將她祖母的食譜帶到台灣。使用代代相傳的技術和最新鮮的本地食材，她創造的菜餚致敬義大利傳統，同時融入台灣風味。
                </p>
                <p>
                  今天，La Tavola Italiana 不只是一家餐廳——這是一個朋友和家人聚在一起分享餐點、創造回憶並體驗真正義大利款待精神的場所。
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80"
                  alt="主廚備餐中"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <p className="font-display text-2xl font-bold text-[var(--color-primary)]">
                  6+
                </p>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                   years of Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-secondary)] py-20 px-6 md:px-10">
        <div className="container-main">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
              我們的價值
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              我們的信念
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                  <i className={`fas ${value.icon} text-xl`}></i>
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Spotlight */}
      <section className="py-20 px-6 md:px-10">
        <div className="container-main">
          <motion.div
            className="grid gap-12 md:grid-cols-2 md:items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-2 md:order-1">
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                認識我們的主廚
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                主廚 Alessia Moretti
              </h2>
              <p className="mt-2 text-sm font-medium text-[var(--color-primary)]">
                行政主廚
              </p>
              <div className="mt-6 space-y-4 text-[var(--color-muted-foreground)]">
                <p>
                  Alessia 出生於拿坡里，在充滿熱情廚師的家庭中成長，她從祖母 Maria 奶奶那裡學會了義大利烹飪的藝術。
                </p>
                <p>
                  在佛羅倫斯著名的烹飪學院接受訓練並在義大利各知名餐廳工作後，她於 2018 年搬到台北，與大家分享她的烹飪遺產。
                </p>
                <p>
                  她的理念很簡單：使用最好的食材，尊重傳統，用心烹調。從她廚房出來的每一道菜都講述著義大利傳統和台灣新鲜的故事。
                </p>
              </div>
            </div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="主廚 Alessia Moretti"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-secondary)] py-20 px-6 md:px-10">
        <div className="container-main">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
              我們的團隊
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              魔法背後的團隊
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-primary)]">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10">
        <div className="container-main">
          <motion.div
            className="glass rounded-3xl border border-[var(--color-border)] p-8 text-center md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              在 La Tavola 體驗義大利
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted-foreground)]">
              今日就訂位，讓我們帶您踏上一場穿越義大利的美食之旅。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="/reservation" className="btn-primary inline-flex">
                <i className="fas fa-calendar-alt mr-2"></i>
                立即訂位
              </a>
              <a href="/menu" className="btn-secondary inline-flex">
                <i className="fas fa-utensils mr-2"></i>
                查看菜單
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}