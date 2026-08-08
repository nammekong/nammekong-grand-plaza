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
      className="relative overflow-hidden bg-[#08111F] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-300">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Đăng ký nhận
            <br />
            thông tin dự án
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Để lại thông tin để nhận tài liệu giới thiệu và được
            hỗ trợ giải đáp các thông tin liên quan đến dự án.
          </p>
        </div>

        {/* Main */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* FORM */}

          <div
            data-aos="fade-right"
            className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-10"
          >
            <h3 className="text-3xl font-bold text-white">
              Gửi yêu cầu tư vấn
            </h3>

            <p className="mt-3 text-slate-400">
              Vui lòng để lại thông tin để được hỗ trợ.
            </p>

            <form
              action="https://formsubmit.co/nammekongbinhduong@gmail.com"
              method="POST"
              className="mt-10 space-y-5"
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

              <input
                type="hidden"
                name="_next"
                value="/"
              />

              {/* Họ tên */}

              <input
                type="text"
                name="Họ tên"
                required
                placeholder="Họ và tên"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white/15"
              />

              {/* Điện thoại */}

              <input
                type="tel"
                name="Số điện thoại"
                required
                placeholder="Số điện thoại"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white/15"
              />

              {/* Email */}

              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white/15"
              />

              {/* Nhu cầu */}

              <select
                name="Nhu cầu"
                defaultValue=""
                required
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400"
              >
                <option value="" disabled className="text-black">
                  Chọn nhu cầu
                </option>

                <option value="Tìm hiểu dự án" className="text-black">
                  Tìm hiểu dự án
                </option>

                <option value="Nhận bảng giá" className="text-black">
                  Nhận bảng giá
                </option>

                <option value="Đăng ký tham quan" className="text-black">
                  Đăng ký tham quan
                </option>

                <option value="Tư vấn đầu tư" className="text-black">
                  Tư vấn đầu tư
                </option>
              </select>

              {/* Ghi chú */}

              <textarea
                name="Nội dung"
                rows={5}
                placeholder="Nội dung cần tư vấn..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white/15"
              />

              {/* Submit */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-[#0F172A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                Đăng ký tư vấn
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white">
              Thông tin liên hệ
            </h3>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Bạn có thể liên hệ trực tiếp để tìm hiểu thêm thông tin
              về Nam Mekong Grand Plaza.
            </p>

            <div className="mt-10 space-y-6">

              {/* Hotline */}

              <div className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-[#0F172A]">
                  <Phone size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Hotline
                  </h4>

                  <a
                    href="tel:0767615368"
                    className="mt-2 block text-lg text-slate-300 transition hover:text-yellow-400"
                  >
                    07676 15 368
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-[#0F172A]">
                  <Mail size={24} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-white">
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

              {/* Địa chỉ */}

              <div className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-[#0F172A]">
                  <MapPin size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Địa chỉ
                  </h4>

                  <p className="mt-2 text-slate-300">
                    Thành phố mới Bình Dương
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Actions */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="tel:0767615368"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-4 font-bold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Phone size={20} />
                Gọi ngay
              </a>

              <Link
                href="#home"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-[#0F172A]"
              >
                Về đầu trang
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}

        <div
          className="mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-[#0F172A] via-[#16233D] to-[#0F172A] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-10"
          data-aos="zoom-in"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-300">
            NAM MEKONG GRAND PLAZA
          </span>

          <h3 className="mt-5 text-3xl font-black text-white md:text-5xl">
            Tìm hiểu thêm về dự án
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Đăng ký để nhận thông tin mới nhất và được hỗ trợ
            khi bạn cần tìm hiểu về dự án.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="tel:0767615368"
              className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-[#0F172A] transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Hotline: 07676 15 368
            </a>

            <Link
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0F172A]"
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