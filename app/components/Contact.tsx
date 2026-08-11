"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section

  id="contact"
  className="relative overflow-hidden bg-[#08111F] pb-24 pt-48 lg:pb-32 lg:pt-52"
>
      
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[220px]" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-sm">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight !text-white md:text-5xl">
            Đăng ký nhận
            <br />
            thông tin dự án
          </h2>

          <p className="mt-6 text-base leading-8 !text-slate-300 sm:text-lg">
            Để lại thông tin để nhận tài liệu giới thiệu và được
            hỗ trợ giải đáp các thông tin liên quan đến dự án.
          </p>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          {/* =================================================
              FORM
          ================================================= */}

          <div
            data-aos="fade-right"
            className="rounded-[32px] border border-white/10 bg-[#111C2C] p-6 shadow-2xl sm:p-8 lg:rounded-[36px] lg:p-10"
          >
            <h3 className="text-3xl font-bold !text-white">
              Gửi yêu cầu tư vấn
            </h3>

            <p className="mt-3 !text-slate-400">
              Vui lòng để lại thông tin để được hỗ trợ.
            </p>

            <form
              action="https://formsubmit.co/nammekongbinhduong@gmail.com"
              method="POST"
              className="mt-8 space-y-5 lg:mt-10"
            >
              {/* FormSubmit */}

              <input
                type="hidden"
                name="_subject"
                value="Khách hàng đăng ký tư vấn - Nam Mekong Grand Plaza"
              />

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

              {/* HỌ VÀ TÊN */}

              <div>
                <label
                  htmlFor="contact-name"
                  className="sr-only"
                >
                  Họ và tên
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="Họ và tên"
                  required
                  autoComplete="name"
                  placeholder="Họ và tên"
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 !text-white outline-none transition-all duration-300 placeholder:!text-slate-400 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* SỐ ĐIỆN THOẠI */}

              <div>
                <label
                  htmlFor="contact-phone"
                  className="sr-only"
                >
                  Số điện thoại
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="Số điện thoại"
                  required
                  autoComplete="tel"
                  placeholder="Số điện thoại"
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 !text-white outline-none transition-all duration-300 placeholder:!text-slate-400 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="contact-email"
                  className="sr-only"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="Email"
                  autoComplete="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 !text-white outline-none transition-all duration-300 placeholder:!text-slate-400 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* NHU CẦU */}

              <div>
                <label
                  htmlFor="contact-demand"
                  className="sr-only"
                >
                  Nhu cầu
                </label>

                <select
                  id="contact-demand"
                  name="Nhu cầu"
                  defaultValue=""
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 !text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                >
                  <option
                    value=""
                    disabled
                    className="bg-white !text-black"
                  >
                    Chọn nhu cầu
                  </option>

                  <option
                    value="Tìm hiểu dự án"
                    className="bg-white !text-black"
                  >
                    Tìm hiểu dự án
                  </option>

                  <option
                    value="Nhận bảng giá"
                    className="bg-white !text-black"
                  >
                    Nhận bảng giá
                  </option>

                  <option
                    value="Đăng ký tham quan"
                    className="bg-white !text-black"
                  >
                    Đăng ký tham quan
                  </option>

                  <option
                    value="Tư vấn đầu tư"
                    className="bg-white !text-black"
                  >
                    Tư vấn đầu tư
                  </option>
                </select>
              </div>

              {/* NỘI DUNG */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="sr-only"
                >
                  Nội dung cần tư vấn
                </label>

                <textarea
                  id="contact-message"
                  name="Nội dung"
                  rows={5}
                  placeholder="Nội dung cần tư vấn..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 !text-white outline-none transition-all duration-300 placeholder:!text-slate-400 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold !text-[#0F172A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                Đăng ký tư vấn
              </button>
            </form>
          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold !text-white sm:text-4xl">
              Thông tin liên hệ
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 !text-slate-300 sm:text-lg">
              Bạn có thể liên hệ trực tiếp để tìm hiểu thêm thông tin
              về Nam Mekong Grand Plaza.
            </p>

            <div className="mt-8 space-y-5 lg:mt-10 lg:space-y-6">
              {/* =================================================
                  HOTLINE
              ================================================= */}

              <div className="flex items-start gap-5 rounded-3xl border border-white/10 bg-[#111C2C] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-[#162236]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 !text-[#0F172A]">
                  <Phone size={24} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold !text-white">
                    Hotline
                  </h4>

                  <a
  href="tel:0767615368"
  style={{ color: "#ffffff" }}
  className="mt-2 block text-lg font-semibold transition hover:!text-yellow-400"
>
  07676 15 368
</a>
                    
                  
                
                  
                </div>
              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="flex items-start gap-5 rounded-3xl border border-white/10 bg-[#111C2C] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-[#162236]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 !text-[#0F172A]">
                  <Mail size={24} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold !text-white">
                    Email
                  </h4>

                  <a
  href="mailto:nammekongbinhduong@gmail.com"
  style={{ color: "#ffffff" }}
  className="mt-2 block break-all text-base font-semibold transition hover:!text-yellow-400"
>
  nammekongbinhduong@gmail.com
</a>
                </div>
              </div>

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div className="flex items-start gap-5 rounded-3xl border border-white/10 bg-[#111C2C] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-[#162236]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 !text-[#0F172A]">
                  <MapPin size={24} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold !text-white">
                    Địa chỉ
                  </h4>

                  <p className="mt-2 text-base font-medium !text-white">
                    Thành phố mới Bình Dương
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <div className="mt-8 flex flex-wrap gap-4 lg:mt-10">
              <a
                href="tel:0767615368"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-4 font-bold !text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Phone size={20} />

                Gọi ngay
              </a>

              <Link
                href="#home"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-7 py-4 font-semibold !text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:!text-[#0F172A]"
              >
                Về đầu trang
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div
          className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0F172A] via-[#16233D] to-[#0F172A] p-7 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:mt-24 sm:rounded-[36px] sm:p-10"
          data-aos="zoom-in"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-sm">
            NAM MEKONG GRAND PLAZA
          </span>

          <h3 className="mt-5 text-3xl font-black !text-white md:text-5xl">
            Tìm hiểu thêm về dự án
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 !text-slate-300 sm:text-lg">
            Đăng ký để nhận thông tin mới nhất và được hỗ trợ
            khi bạn cần tìm hiểu về dự án.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:gap-5">
            <a
              href="tel:0767615368"
              className="rounded-full bg-yellow-400 px-8 py-4 font-bold !text-[#0F172A] transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Hotline: 07676 15 368
            </a>

            <Link
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold !text-white backdrop-blur transition-all duration-300 hover:bg-white hover:!text-[#0F172A]"
            >
              Khám phá dự án

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}