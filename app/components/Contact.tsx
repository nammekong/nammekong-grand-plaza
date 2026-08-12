"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  FileText,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

const CONTACT_PHONE = "0767615368";
const CONTACT_EMAIL = "nammekongbinhduong@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#08111F] pb-24 pt-24 lg:pb-32 lg:pt-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[180px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[220px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.03] blur-[160px]"
      />

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
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-xs">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Đăng ký nhận
            <br />
            <span className="text-[#F5C542]">
              thông tin dự án
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Để lại thông tin để nhận tài liệu giới thiệu và được
            hỗ trợ giải đáp những thông tin bạn quan tâm về
            Nam Mekong Grand Plaza.
          </p>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          {/* =================================================
              FORM
          ================================================= */}

          <div
            data-aos="fade-right"
            className="rounded-[32px] border border-white/10 bg-[#111C2C] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-8 lg:rounded-[36px] lg:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-[#0F172A]">
                <MessageCircle size={25} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Gửi yêu cầu tư vấn
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                  Vui lòng để lại thông tin để được hỗ trợ.
                </p>
              </div>
            </div>

            <form
              action={`https://formsubmit.co/${CONTACT_EMAIL}`}
              method="POST"
              className="mt-8 space-y-5"
            >
              {/* FORM SUBMIT CONFIG */}

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

              {/* =================================================
                  HỌ VÀ TÊN
              ================================================= */}

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Họ và tên
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="Họ và tên"
                  required
                  autoComplete="name"
                  placeholder="Nhập họ và tên"
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* =================================================
                  SỐ ĐIỆN THOẠI
              ================================================= */}

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Số điện thoại
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="Số điện thoại"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="Email"
                  autoComplete="email"
                  placeholder="Nhập email (không bắt buộc)"
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* =================================================
                  NHU CẦU
              ================================================= */}

              <div>
                <label
                  htmlFor="contact-demand"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Bạn đang quan tâm
                </label>

                <select
                  id="contact-demand"
                  name="Nhu cầu"
                  defaultValue=""
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                >
                  <option
                    value=""
                    disabled
                    className="bg-white text-black"
                  >
                    Chọn nhu cầu
                  </option>

                  <option
                    value="Tìm hiểu dự án"
                    className="bg-white text-black"
                  >
                    Tìm hiểu dự án
                  </option>

                  <option
                    value="Tìm hiểu mặt bằng căn hộ"
                    className="bg-white text-black"
                  >
                    Tìm hiểu mặt bằng căn hộ
                  </option>

                  <option
                    value="Tìm hiểu tiện ích"
                    className="bg-white text-black"
                  >
                    Tìm hiểu tiện ích
                  </option>

                  <option
                    value="Tìm hiểu vị trí"
                    className="bg-white text-black"
                  >
                    Tìm hiểu vị trí
                  </option>

                  <option
                    value="Đăng ký tham quan"
                    className="bg-white text-black"
                  >
                    Đăng ký tham quan
                  </option>
                </select>
              </div>

              {/* =================================================
                  NỘI DUNG
              ================================================= */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Nội dung cần tư vấn
                </label>

                <textarea
                  id="contact-message"
                  name="Nội dung"
                  rows={5}
                  placeholder="Bạn muốn tìm hiểu thêm điều gì?"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#2B3442] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-yellow-400 focus:bg-[#323C4B] focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-[#0F172A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                Đăng ký nhận thông tin
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Thông tin được sử dụng để hỗ trợ tư vấn theo nhu cầu
                bạn đăng ký.
              </p>
            </form>
          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
              NAM MEKONG GRAND PLAZA
            </span>

            <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Bắt đầu từ điều
              <br />
              bạn quan tâm
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Mỗi nhu cầu tìm hiểu là khác nhau. Bạn có thể liên hệ
              trực tiếp hoặc để lại thông tin để được hỗ trợ theo
              nội dung mình quan tâm.
            </p>

            {/* =================================================
                CONTACT CARDS
            ================================================= */}

            <div className="mt-8 space-y-4 lg:mt-10">
              {/* HOTLINE */}

              <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-[#111C2C] p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-[#162236] sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-[#0F172A]">
                  <Phone size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
                    HOTLINE
                  </p>

                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="mt-2 block text-xl font-bold text-white transition hover:text-yellow-400"
                  >
                    07676 15 368
                  </a>

                  <p className="mt-1 text-sm text-slate-400">
                    Liên hệ trực tiếp để được hỗ trợ.
                  </p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-[#111C2C] p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-[#162236] sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-[#0F172A]">
                  <Mail size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
                    EMAIL
                  </p>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 block break-all text-base font-bold text-white transition hover:text-yellow-400 sm:text-lg"
                  >
                    {CONTACT_EMAIL}
                  </a>

                  <p className="mt-1 text-sm text-slate-400">
                    Kênh tiếp nhận thông tin và yêu cầu tư vấn.
                  </p>
                </div>
              </div>

              {/* ADDRESS */}

              <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-[#111C2C] p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-[#162236] sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-[#0F172A]">
                  <MapPin size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
                    LOCATION
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    Thành phố mới Bình Dương
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Vị trí dự án được giới thiệu tại Thành phố mới
                    Bình Dương.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <div className="mt-8 flex flex-wrap gap-3 lg:mt-10">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-4 font-bold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Phone size={19} />
                Gọi ngay
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-[#0F172A]"
              >
                <Mail size={19} />
                Gửi email
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            INFORMATION HIGHLIGHTS
        ===================================================== */}

        <div
          className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16"
          data-aos="fade-up"
        >
          {/* ITEM 01 */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:bg-white/[0.07]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
              <FileText size={22} />
            </div>

            <h4 className="mt-4 font-bold text-white">
              Thông tin dự án
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tìm hiểu tổng quan, vị trí, tiện ích và các nội dung
              được giới thiệu về dự án.
            </p>
          </div>

          {/* ITEM 02 */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:bg-white/[0.07]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
              <CalendarDays size={22} />
            </div>

            <h4 className="mt-4 font-bold text-white">
              Đăng ký tham quan
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Gửi yêu cầu để được hỗ trợ thông tin về lịch tham quan
              và trải nghiệm dự án.
            </p>
          </div>

          {/* ITEM 03 */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:bg-white/[0.07]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
              <MessageCircle size={22} />
            </div>

            <h4 className="mt-4 font-bold text-white">
              Tư vấn theo nhu cầu
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Chia sẻ nhu cầu để nhận thông tin phù hợp với điều bạn
              đang quan tâm.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div
          className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0F172A] via-[#16233D] to-[#0F172A] p-7 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:mt-20 sm:rounded-[36px] sm:p-10 lg:p-14"
          data-aos="zoom-in"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-sm">
            NAM MEKONG GRAND PLAZA
          </span>

          <h3 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Tìm hiểu dự án
            <br />
            theo nhu cầu của bạn
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Khám phá thêm về vị trí, tiện ích, quy hoạch và mặt bằng
            căn hộ trước khi đưa ra quyết định phù hợp.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:px-8"
            >
              <Phone size={19} />
              Hotline: 07676 15 368
            </a>

            <Link
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0F172A] sm:px-8"
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