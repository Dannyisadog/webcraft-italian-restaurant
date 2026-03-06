"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  navigation: [
    { href: "/", label: "首頁" },
    { href: "/menu", label: "菜單" },
    { href: "/about", label: "關於我們" },
    { href: "/reservation", label: "線上訂位" },
    { href: "/gallery", label: "相簿" },
    { href: "/contact", label: "聯絡我們" },
  ],
  contact: [
    { icon: "fa-map-marker-alt", text: "台北市信義區" },
    { icon: "fa-phone", text: "+886 2 2345 6789" },
    { icon: "fa-envelope", text: "info@latavola.com" },
  ],
  hours: [
    { days: "週一至週四", time: "11:30 - 22:00" },
    { days: "週五至週六", time: "11:30 - 23:00" },
    { days: "週日", time: "11:30 - 21:00" },
  ],
};

const socialLinks = [
  { icon: "fa-facebook-f", href: "#", label: "Facebook" },
  { icon: "fa-instagram", href: "#", label: "Instagram" },
  { icon: "fa-line", href: "#", label: "LINE" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)]">
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-background)] text-[var(--color-foreground)]">
                <i className="fas fa-utensils"></i>
              </div>
              <span className="font-display text-2xl font-semibold">
                La Tavola Italiana
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              台北市中心道地義大利料理。每一道菜都帶給您義大利的熱情與溫暖。
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:bg-white/20"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 font-display text-lg font-semibold">導覽</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 transition-opacity duration-200 hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 font-display text-lg font-semibold">營業時間</h4>
            <ul className="space-y-2">
              {footerLinks.hours.map((item) => (
                <li key={item.days} className="text-sm">
                  <span className="opacity-80">{item.days}</span>
                  <br />
                  <span className="font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 font-display text-lg font-semibold">聯絡我們</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm">
                  <i className={`fas ${item.icon} mt-1 opacity-80`}></i>
                  <span className="opacity-80">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} La Tavola Italiana. 版權所有。
          </p>
          <div className="flex gap-6 text-sm opacity-60">
            <a href="#" className="hover:opacity-100">
              隱私權政策
            </a>
            <a href="#" className="hover:opacity-100">
              服務條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}