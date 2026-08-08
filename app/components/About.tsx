"use client";

import Image from "next/image";
import { Building2, MapPin, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Vị trí trung tâm",
    desc: "Nằm tại Thành phố mới Bình Dương với khả năng kết nối thuận tiện đến các khu chức năng.",
  },
  {
    icon: Building2,
    title: "Mô hình Mixed-use",
    desc: "Kết hợp thương mại, văn phòng và căn hộ trong cùng một dự án.",
  },
  {
    icon: Sparkles,
    title: "Không gian hiện đại",
    desc: "Định hướng phát triển môi trường sống, làm việc và kinh doanh đồng bộ.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/5 blur-[220px]" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-sm">
            ABOUT PROJECT
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#0F172A] md:text-5xl">
            Giới thiệu
            <br />
            Nam Mekong Grand Plaza
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Nam Mekong Grand Plaza được giới thiệu là tổ hợp trung tâm
            thương mại, văn phòng và căn hộ cao cấp tại Thành phố mới
            Bình Dương, hướng đến không gian sống, làm việc và kinh doanh
            hiện đại.
          </p>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div className="mt-16 grid items-center gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* =================================================
              IMAGE
          ================================================= */}

          <div
            className="relative"
            data-aos="fade-right"
          >
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:rounded-[36px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <Image
                  src="/images/about.jpg"
                  alt="Nam Mekong Grand Plaza"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <div
              className="absolute -bottom-7 right-4 max-w-[250px] rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:right-8 sm:max-w-[290px] sm:p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
                MIXED-USE
              </span>

              <h3 className="mt-3 text-xl font-black leading-tight text-[#0F172A] sm:text-2xl">
                Thương mại
                <br />
                Văn phòng
                <br />
                Căn hộ
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Mô hình phát triển đa chức năng được giới thiệu trên
                website dự án.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div
            className="lg:pl-2"
            data-aos="fade-left"
          >
            <span className="inline-flex rounded-full bg-[#F5C542]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
              PROJECT OVERVIEW
            </span>

            <h3 className="mt-6 text-4xl font-black leading-tight text-[#0F172A] md:text-[42px]">
              Biểu tượng mới
              <br />
              tại Thành phố mới
              <br />
              Bình Dương
            </h3>

            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
              Dự án được giới thiệu với định hướng phát triển tổ hợp
              trung tâm thương mại, văn phòng và căn hộ cao cấp,
              góp phần hình thành không gian sống và kinh doanh hiện đại
              tại khu vực Thành phố mới Bình Dương.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-9 space-y-4 sm:mt-10 sm:space-y-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                    className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542]/50 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:gap-5 sm:p-6"
                  >
                    {/* Icon */}

                    <div className="flex h-13 w-13 h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#F5C542] transition duration-300 group-hover:bg-[#F5C542] group-hover:text-[#0F172A]">
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    {/* Text */}

                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-[#0F172A]">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="mt-10 flex flex-wrap gap-4 sm:mt-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl sm:px-8"
              >
                Đăng ký tư vấn
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:text-[#C89A2B] sm:px-8"
              >
                Khám phá vị trí
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================
            STATISTICS / KEY POINTS
        =================================================== */}

        <div
          className="mt-20 grid gap-5 sm:grid-cols-3 lg:mt-24 lg:gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Item 1 */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
              MODEL
            </p>

            <h4 className="mt-4 text-3xl font-black text-[#0F172A]">
              Mixed-use
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Thương mại • Văn phòng • Căn hộ
            </p>
          </div>

          {/* Item 2 */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
              LOCATION
            </p>

            <h4 className="mt-4 text-3xl font-black text-[#0F172A]">
              Thành phố mới
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Bình Dương
            </p>
          </div>

          {/* Item 3 */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
              ORIENTATION
            </p>

            <h4 className="mt-4 text-3xl font-black text-[#0F172A]">
              Hiện đại
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Không gian sống, làm việc và kinh doanh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}