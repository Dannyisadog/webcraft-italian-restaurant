"use client";

import { motion } from "framer-motion";

const contactInfo = {
  address: "台北市信義區",
  phone: "+886 2 2345 6789",
  email: "info@latavola.com",
  hours: [
    { day: "週一至週四", time: "11:30 - 22:00" },
    { day: "週五至週六", time: "11:30 - 23:00" },
    { day: "週日", time: "11:30 - 21:00" },
  ],
};

const socialLinks = [
  { icon: "fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fa-instagram", label: "Instagram", href: "#" },
  { icon: "fa-line", label: "LINE", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="聯絡我們"
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
            聯絡我們
          </motion.h1>
          <motion.p
            className="mt-4 text-lg opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們很樂意聽到您的意見
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-10">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                與我們聯繫
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                歡迎蒞臨
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                La Tavola Italiana 位於台北市中心信義區，靠近台北 101 及主要購物區。
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">地址</h3>
                    <p className="text-[var(--color-muted-foreground)]">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">電話</h3>
                    <p className="text-[var(--color-muted-foreground)]">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">電子郵件</h3>
                    <p className="text-[var(--color-muted-foreground)]">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">營業時間</h3>
                    <div className="mt-1 space-y-1 text-[var(--color-muted-foreground)]">
                      {contactInfo.hours.map((h) => (
                        <p key={h.day}>
                          <span className="font-medium">{h.day}</span>: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-medium">追蹤我們</h3>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-foreground)] transition-all hover:bg-[var(--color-primary)] hover:text-white"
                    >
                      <i className={`fab ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[500px] w-full rounded-2xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.723456789!2d121.5637!3d25.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93d27%3A0x5b8aeecb5a8d4f!2sXinyi%20District%2C%20Taipei%2C%20Taiwan!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}