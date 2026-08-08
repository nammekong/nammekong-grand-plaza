"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  Globe,
  MessageCircle,
  Play,
  Share2,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#08111F] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[380px] w-[380px] rounded-full bg-yellow-400/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[220px]" />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-16 lg:grid-cols-4">
          {/* =================================================
              LOGO + INTRO
          ================================================= */}

          <div data-aos="fade-up">
            <Link href="#home" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Nam Mekong Grand Plaza"
                width={220}
                height={80}
                className="h-auto w-auto"
              />
            </Link>

            <p className="mt-8 leading-8 text-slate-300">
              Nam Mekong Grand Plaza là tổ hợp thương mại, văn phòng
              và căn hộ hiện đại tại Thành phố mới Bình Dương.
            </p>

            {/* ================= SOCIAL ================= */}

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                aria-label="Website"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08111F]"
              >
                <Globe size={20} />
              </a>

              <a
                href="#"
                aria-label="Messenger"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08111F]"
              >
                <MessageCircle size={20} />
              </a>

              <a
                href="#"
                aria-label="Video"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08111F]"
              >
                <Play size={20} />
              </a>

              <a
                href="#"
                aria-label="Chia sẻ"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08111F]"
              >
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* =================================================
              MENU
          ================================================= */}

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="mb-8 text-2xl font-bold">
              Khám phá
            </h3>

            <ul className="space-y-5">
              <li>
                <Link
                  href="#home"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Trang chủ
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Giới thiệu
                </Link>
              </li>

              <li>
                <Link
                  href="#location"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Vị trí
                </Link>
              </li>

              <li>
                <Link
                  href="#amenities"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Tiện ích
                </Link>
              </li>

              <li>
                <Link
                  href="#gallery"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Thư viện
                </Link>
              </li>

              <li>
                <Link
                  href="#masterplan"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Master Plan
                </Link>
              </li>

              <li>
                <Link
                  href="#unitplan"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Căn hộ
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-slate-300 transition hover:text-yellow-400"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Liên hệ
            </h3>

            <div className="space-y-8">
              {/* Address */}

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Địa chỉ
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    Nam Mekong Grand Plaza
                    <br />
                    Thành phố mới Bình Dương
                  </p>
                </div>
              </div>

              {/* Hotline */}

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Hotline
                  </h4>

                  <a
                    href="tel:0767615368"
                    className="mt-2 block text-slate-300 transition hover:text-yellow-400"
                  >
                    07676 15 368
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-white">
                    Email
                  </h4>

                  <a
                    href="mailto:nammekongbinhduong@gmail.com"
                    className="mt-2 block break-all text-slate-300 transition hover:text-yellow-400"
                  >
                    nammekongbinhduong@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Đăng ký nhận thông tin
            </h3>

            <p className="mb-6 leading-7 text-slate-300">
              Để lại email để nhận bảng giá, chính sách bán hàng
              và các thông tin mới nhất về Nam Mekong Grand Plaza.
            </p>

            <form
              action="https://formsubmit.co/nammekongbinhduong@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* FormSubmit config */}

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_subject"
                value="Đăng ký nhận thông tin từ Footer"
              />

              <input
                type="hidden"
                name="_next"
                value="/"
              />

              {/* Email */}

              <input
                type="email"
                name="Email"
                required
                placeholder="Nhập email của bạn"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white/15"
              />

              {/* Submit */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 py-4 font-bold text-[#08111F] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(245,197,66,0.35)]"
              >
                Nhận thông tin

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Copyright */}

            <div>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Nam Mekong Grand Plaza.
                All Rights Reserved.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Website giới thiệu dự án Nam Mekong Grand Plaza.
              </p>
            </div>

            {/* Social */}

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Website"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08111F]"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                aria-label="Chat"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08111F]"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="#"
                aria-label="Video"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#08111F]"
              >
                <Play size={18} />
              </a>
            </div>

            {/* Back To Top */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Về đầu trang"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-[#08111F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-400/40"
            >
              <ChevronUp
                size={22}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
