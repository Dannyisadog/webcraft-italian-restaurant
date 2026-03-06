"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const timeSlots = [
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

export default function ReservationForm() {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequest: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "請輸入姓名";
    }

    if (!formData.email.trim()) {
      newErrors.email = "請輸入電子郵件";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "電子郵件格式錯誤";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "請輸入電話號碼";
    } else if (!/^[\d\s\-+()]{8,}$/.test(formData.phone)) {
      newErrors.phone = "電話號碼格式錯誤";
    }

    if (!formData.date) {
      newErrors.date = "請選擇日期";
    }

    if (!formData.time) {
      newErrors.time = "請選擇時間";
    }

    if (!formData.guests) {
      newErrors.guests = "請選擇用餐人數";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <i className="fas fa-check text-2xl text-green-600"></i>
        </div>
        <h3 className="font-display text-2xl font-semibold">訂位成功！</h3>
        <p className="mt-2 text-[var(--color-muted-foreground)]">
          感謝您，{formData.name}！我們期待在 {formData.date} {formData.time} 見到您。
        </p>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          確認信已發送至 {formData.email}。
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              date: "",
              time: "",
              guests: "2",
              specialRequest: "",
            });
          }}
          className="btn-secondary mt-6"
        >
          再次訂位
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="label">
            姓名 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input ${errors.name ? "border-red-500" : ""}`}
            placeholder="王小明"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="label">
            電子郵件 *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input ${errors.email ? "border-red-500" : ""}`}
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="label">
            電話號碼 *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input ${errors.phone ? "border-red-500" : ""}`}
            placeholder="+886 912 345 678"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="label">
            用餐人數 *
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`input ${errors.guests ? "border-red-500" : ""}`}
          >
            {guestOptions.map((num) => (
              <option key={num} value={num}>
                {num} {num === "1" ? "位" : "位"}
              </option>
            ))}
          </select>
          {errors.guests && (
            <p className="mt-1 text-xs text-red-500">{errors.guests}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="label">
            日期 *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={`input ${errors.date ? "border-red-500" : ""}`}
          />
          {errors.date && (
            <p className="mt-1 text-xs text-red-500">{errors.date}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="label">
            時間 *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`input ${errors.time ? "border-red-500" : ""}`}
          >
            <option value="">選擇時間</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="mt-1 text-xs text-red-500">{errors.time}</p>
          )}
        </div>
      </div>

      {/* Special Request */}
      <div>
        <label htmlFor="specialRequest" className="label">
          特別需求（選填）
        </label>
        <textarea
          id="specialRequest"
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          rows={3}
          className="input resize-none"
          placeholder="過敏原、飲食限制、特殊場合..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-base"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin mr-2"></i>
            處理中...
          </>
        ) : (
          <>
            <i className="fas fa-calendar-check mr-2"></i>
            確認訂位
          </>
        )}
      </motion.button>
    </form>
  );
}