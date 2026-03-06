"use client";

import { motion } from "framer-motion";
import ReservationForm from "@/components/restaurant/ReservationForm";

export default function ReservationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="訂位"
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
            線上訂位
          </motion.h1>
          <motion.p
            className="mt-4 text-lg opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            預訂您在 La Tavola Italiana 的用餐體驗
          </motion.p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                訂位
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                預訂您的用餐體驗
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                我們期待歡迎您來到 La Tavola Italiana。超過 10 人的團體，請直接與我們聯繫。
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">電話訂位</h3>
                    <p className="text-[var(--color-muted-foreground)]">
                      +886 2 2345 6789
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">電子郵件</h3>
                    <p className="text-[var(--color-muted-foreground)]">
                      reserve@latavola.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">營業時間</h3>
                    <p className="text-[var(--color-muted-foreground)]">
                      週一至週四: 11:30 - 22:00
                      <br />
                      週五至週六: 11:30 - 23:00
                      <br />
                      週日: 11:30 - 21:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-[var(--color-secondary)] p-5">
                <h3 className="font-medium">
                  <i className="fas fa-info-circle mr-2 text-[var(--color-primary)]"></i>
                  重要資訊
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• 請在預訂時間 15 分鐘內到達</li>
                  <li>• 取消請於 24 小時前通知</li>
                  <li>• 提供包廂預訂用於特殊場合</li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card rounded-2xl p-6 md:p-8">
                <ReservationForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.723456789!2d121.5637!3d25.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93d27%3A0x5b8aeecb5a8d4f!2sXinyi%20District%2C%20Taipei%2C%20Taiwan!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}