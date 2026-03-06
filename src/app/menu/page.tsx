"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MenuSection from "@/components/restaurant/MenuSection";
import { DishItem } from "@/components/restaurant/DishCard";

const menuCategories = [
  { id: "antipasti", label: "開胃菜", icon: "fa-leaf" },
  { id: "pasta", label: "義大利麵", icon: "fa-utensils" },
  { id: "pizza", label: "披薩", icon: "fa-pizza-slice" },
  { id: "main", label: "主菜", icon: "fa-drumstick-bite" },
  { id: "dessert", label: "甜點", icon: "fa-ice-cream" },
  { id: "wine", label: "紅酒", icon: "fa-wine-glass" },
];

const menuData: Record<string, { category: string; items: DishItem[] }> = {
  antipasti: {
    category: "開胃菜",
    items: [
      {
        name: "卡布里沙拉",
        description: "新鮮番茄、布拉塔起司、羅勒、特級初榨橄欖油",
        price: "NT$ 380",
        image:
          "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80",
      },
      {
        name: "經典巧巴達",
        description: "烘烤巧巴達、聖馬札諾番茄、蒜頭、新鮮羅勒",
        price: "NT$ 280",
        image:
          "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80",
      },
      {
        name: "生牛肉片",
        description: "薄切牛肉、芝麻菜、續隨子、帕瑪森起司、松露油",
        price: "NT$ 480",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      },
      {
        name: "帕瑪火腿哈密瓜",
        description: "帕瑪生火腿、新鮮哈密瓜、蜂蜜",
        price: "NT$ 420",
        image:
          "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&q=80",
      },
      {
        name: "普利亞布拉塔",
        description: "奶油布拉塔起司、帕瑪火腿、櫻桃番茄、陳年巴薩米克",
        price: "NT$ 520",
        image:
          "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?w=800&q=80",
      },
      {
        name: "什錦炸物",
        description: "酥炸花枝、蝦子、紫羅蘭花瓣、美乃滋",
        price: "NT$ 420",
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
      },
    ],
  },
  pasta: {
    category: "義大利麵",
    items: [
      {
        name: "培根蛋麵",
        description: "義式培根、蛋黃、佩科里諾羊奶起司、黑胡椒",
        price: "NT$ 480",
        image:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
      },
      {
        name: "肉醬寬麵",
        description: "手工寬麵、慢燉波隆那肉醬、帕瑪森起司",
        price: "NT$ 520",
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
      },
      {
        name: "番茄義大利麵",
        description: "聖馬札諾番茄、新鮮羅勒、蒜頭、特級初榨橄欖油",
        price: "NT$ 380",
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
      },
      {
        name: "松露義大利麵",
        description: "新鮮義大利麵、黑松露、奶油、帕瑪森起司、松露油",
        price: "NT$ 880",
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
      },
      {
        name: "蛤蜊義大利麵",
        description: "菲律宾蛤、白酒、蒜頭、香辣椒",
        price: "NT$ 580",
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
      },
      {
        name: "辣味番茄通心粉",
        description: "辣味番茄醬、蒜頭辣椒、新鮮羅勒",
        price: "NT$ 360",
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
      },
    ],
  },
  pizza: {
    category: "披薩",
    items: [
      {
        name: "瑪格麗特 DOP",
        description: "聖馬札諾番茄、水牛奶酪、新鮮羅勒、橄欖油",
        price: "NT$ 420",
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
      },
      {
        name: "四重起司披薩",
        description: "莫札里拉、戈爾貢佐拉、芳蒂娜、帕瑪森、蜂蜜",
        price: "NT$ 520",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
      },
      {
        name: "火腿芝麻菜披薩",
        description: "帕瑪火腿、新鮮莫札里拉、芝麻菜、櫻桃番茄",
        price: "NT$ 540",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      },
      {
        name: "地獄披薩",
        description: "辣味香腸、辣椒、莫札里拉、番茄醬",
        price: "NT$ 480",
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
      },
      {
        name: "素食披薩",
        description: "烤蔬菜、茄子、櫛瓜、甜椒、莫札里拉",
        price: "NT$ 460",
        image:
          "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80",
      },
      {
        name: "海鮮披薩",
        "description": "蝦子、花枝、貽貝、蛤蜊、蒜頭、白酒",
        price: "NT$ 620",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      },
    ],
  },
  main: {
    category: "主菜",
    items: [
      {
        name: "燉牛膝",
        description: "紅燒牛膝、香芹醬、奶油玉米糊、烤蔬菜",
        price: "NT$ 980",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      },
      {
        name: "佛羅倫斯牛排",
        description: "烤丁骨牛排（800克）、迷迭香、蒜頭、烤蔬菜",
        price: "NT$ 2,200",
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      },
      {
        name: "香煎鮭魚",
        description: "烤大西洋鮭魚、檸檬香草奶油、蘆筍",
        price: "NT$ 680",
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      },
      {
        name: "米蘭炸雞排",
        description: "麵包屑雞胸肉、芝麻菜、櫻桃番茄、帕瑪森",
        price: "NT$ 520",
        image:
          "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
      },
      {
        name: "烘烤鱸魚",
        description: "整條烘烤海鱸魚、香草、檸檬、橄欖油、蔬菜",
        price: "NT$ 880",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
      },
      {
        name: "檸檬燉小牛肉",
        description: "小牛肉片、檸檬醬、續隨子、香芹、馬鈴薯泥",
        price: "NT$ 680",
        image:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
      },
    ],
  },
  dessert: {
    category: "甜點",
    items: [
      {
        name: "提拉米蘇",
        description: "經典義大利甜點、馬斯卡彭、濃縮咖啡、Ladyfinger餅乾",
        price: "NT$ 280",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      },
      {
        name: "西西里奶油酥",
        description: "酥脆外殼、甜瑞可塔、巧克力碎、開心果",
        price: "NT$ 240",
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      },
      {
        name: "烤奶酪",
        description: "香草奶油醬、莓果醬、薄荷",
        price: "NT$ 220",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      },
      {
        name: "冰淇淋拼盤",
        description: "任選三種：香草、巧克力、開心果、碎巧克力",
        price: "NT$ 180",
        image:
          "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=800&q=80",
      },
      {
        name: "焦糖布丁",
        description: "香草卡士達、焦糖糖漿、新鮮莓果",
        price: "NT$ 260",
        image:
          "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
      },
      {
        name: "濃縮咖啡浸冰淇淋",
        description: "香草冰淇淋、熱濃縮咖啡、杏仁酒",
        price: "NT$ 180",
        image:
          "https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&q=80",
      },
    ],
  },
  wine: {
    category: "紅酒",
    items: [
      {
        name: "經典基安蒂 DOCG",
        description: "托斯卡尼 | 桑嬌維塞 | 紅酒",
        price: "NT$ 1,200",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      },
      {
        name: "巴羅洛 DOCG",
        description: "皮埃蒙特 | 內比奧羅 | 紅酒",
        price: "NT$ 2,400",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      },
      {
        name: "普羅賽克氣泡酒 DOCG",
        description: "威尼托 | 格雷拉 | 氣泡酒",
        price: "NT$ 680",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        name: "蒙特普爾恰諾",
        description: "阿布魯佐 | 蒙特普爾恰諾 | 紅酒",
        price: "NT$ 880",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      },
      {
        name: "維爾蒙提諾",
        description: "撒丁島 | 維爾蒙提諾 | 白酒",
        price: "NT$ 720",
        image:
          "https://images.unsplash.com/photo-1566754436893-a5fc3af4eb33?w=800&q=80",
      },
      {
        name: "阿瑪羅尼",
        description: "威尼托 | 科維納 | 紅酒",
        price: "NT$ 2,800",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      },
    ],
  },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("antipasti");

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="菜單"
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
            菜單
          </motion.h1>
          <motion.p
            className="mt-4 text-lg opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            道地義大利風味，用心烹調
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-16 z-40 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-sm">
        <div className="container-main">
          <nav className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
                }`}
              >
                <i className={`fas ${category.icon}`}></i>
                {category.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Content */}
      <div className="py-12">
        {Object.entries(menuData).map(
          ([key, data]) =>
            activeCategory === key && (
              <MenuSection
                key={key}
                category={data.category}
                items={data.items}
                icon={menuCategories.find((c) => c.id === key)?.icon || ""}
              />
            )
        )}
      </div>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-foreground)] py-16 text-[var(--color-background)]">
        <div className="container-main text-center">
          <h2 className="font-display text-3xl font-semibold">
            準備好品嚐義大利了嗎？
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">
            今日就訂位，在台北市中心體驗正統義大利美食。
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