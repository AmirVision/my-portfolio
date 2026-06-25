"use client"

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

import TitleHeader from "@/components/TitleHeader";
import ContactExperience from "@/components/Models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
      "w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-right placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors";
  const labelClasses = "block text-white-50 text-sm mb-2 text-right";

  return (
      <section
          id="contact"
          className="flex-center section-padding"
          aria-label="فرم تماس"
          dir="rtl"
      >
        <div className="w-full h-full md:px-10 px-5">
          <TitleHeader
              title="تماس بگیرید — با هم صحبت کنیم"
              sub="💬 سوال یا ایده دارید؟ بیایید صحبت کنیم! 🚀"
          />

          <div className="grid-12-cols mt-16">
            {/* Form */}
            <div className="xl:col-span-5">
              <div className="flex-center card-border rounded-xl p-10">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-7"
                    noValidate
                >
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      نام شما
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="نام شما چیست؟"
                        className={inputClasses}
                        required
                        minLength={2}
                        autoComplete="name"
                        dir="rtl"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      ایمیل شما
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="آدرس ایمیل شما چیست؟"
                        className={inputClasses}
                        required
                        autoComplete="email"
                        // Email addresses are LTR even in RTL layouts
                        dir="ltr"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      پیام شما
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="چطور می‌توانم کمک کنم؟"
                        rows={5}
                        className={`${inputClasses} resize-y min-h-[120px]`}
                        required
                        minLength={10}
                        dir="rtl"
                    />
                  </div>

                  <button
                      type="submit"
                      disabled={loading}
                      className="disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    <div className="cta-button group">
                      <div className="bg-circle" />
                      <p className="text">
                        {loading ? "در حال ارسال..." : "ارسال پیام"}
                      </p>
                      {/* Flip arrow for RTL */}
                      <div className="arrow-wrapper scale-x-[-1]">
                        <Image
                            src="/images/arrow-down.svg"
                            alt=""
                            width={20}
                            height={20}
                            aria-hidden="true"
                        />
                      </div>
                    </div>
                  </button>

                  {status === "success" && (
                      <p className="text-green-400 text-sm text-center" role="alert">
                        ✅ پیام با موفقیت ارسال شد! به زودی با شما تماس می‌گیرم.
                      </p>
                  )}
                  {status === "error" && (
                      <p className="text-red-400 text-sm text-center" role="alert">
                        ❌ مشکلی پیش آمد. لطفاً دوباره امتحان کنید یا مستقیماً ایمیل بزنید.
                      </p>
                  )}
                </form>
              </div>
            </div>

            {/* 3D Scene */}
            <div className="xl:col-span-7 min-h-96">
              <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;