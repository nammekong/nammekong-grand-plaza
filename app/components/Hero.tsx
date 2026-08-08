"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-[#08111F] sm:min-h-[820px] lg:min-h-screen"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <Image
        src="/images/hero-bg.jpg"
        alt="Nam Mekong Grand Plaza"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-[#08111F]/70" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#08111F]/85 via-[#08111F]/60 to-[#08111F]/95 lg:bg-gradient-to-r lg:from-[#08111F] lg:via-[#08111F]/75 lg:to-[#08111F]/30" />

      {/* =====================================================
          LIGHT EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-yellow-500/10 blur-[140px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[160px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-20 mx-auto flex min-h-[760px] w-full max-w-7xl flex-col px-5 pb-20 pt-[115px] sm:min-h-[820px] sm:px-6 sm:pt-[130px] lg:min-h-screen lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-32">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div
          className="relative z-20"
          data-aos="fade-right"
        >
          {/* Badge */}

          <span className="inline-flex max-w-full rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow-300 backdrop-blur-xl sm:px-5 sm:text-xs sm:tracking-[0.3em]">
            Premium Mixed-use Development
          </span>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="mt-6 leading-[0.92] sm:mt-8">
            <span className="block whitespace-nowrap text-[42px] font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
              NAM MEKONG
            </span>

            <span className="mt-2 block whitespace-nowrap bg-gradient-to-r from-yellow-100 via-yellow-400 to-amber-500 bg-clip-text text-[42px] font-black tracking-[-0.04em] text-transparent sm:text-5xl md:text-6xl xl:text-7xl">
              GRAND PLAZA
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8 lg:text-lg lg:leading-9">
            Biểu tượng thương mại, văn phòng và căn hộ cao cấp
            ngay trung tâm Thành phố mới Bình Dương.
            Kiến tạo chuẩn sống hiện đại với hệ tiện ích đồng bộ,
            không gian sang trọng và giá trị bền vững.
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-yellow-400/30 sm:px-8 sm:py-4 sm:text-base"
            >
              Nhận thông tin dự án
            </Link>

            <Link
              href="#about"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900 sm:px-8 sm:py-4 sm:text-base"
            >
              Khám phá dự án

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE BUILDING
              Chỉ hiện trên mobile/tablet
          ================================================= */}

          <div
            className="relative -mx-2 mt-2 flex h-[260px] items-end justify-center sm:h-[320px] lg:hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Glow */}

            <div className="absolute bottom-0 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-yellow-400/15 blur-[90px] sm:h-[360px] sm:w-[360px]" />

            <Image
              src="/images/hero-building.png"
              alt="Nam Mekong Grand Plaza"
              width={760}
              height={980}
              priority
              className="relative z-10 h-auto max-h-[330px] w-auto max-w-[90%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)] sm:max-h-[390px]"
            />
          </div>

          {/* =================================================
              STATISTICS
          ================================================= */}

          <div
            className="mt-3 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-4 lg:mt-16"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* Card 01 */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-5 lg:p-6">
              <h3 className="text-xl font-black text-yellow-400 sm:text-3xl">
                50+
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-300 sm:mt-2 sm:text-sm sm:leading-6">
                Tiện ích được giới thiệu
              </p>
            </div>

            {/* Card 02 */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-5 lg:p-6">
              <h3 className="text-xl font-black text-yellow-400 sm:text-3xl">
                5★
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-300 sm:mt-2 sm:text-sm sm:leading-6">
                Chuẩn sống hiện đại
              </p>
            </div>

            {/* Card 03 */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-5 lg:p-6">
              <h3 className="text-xl font-black text-yellow-400 sm:text-3xl">
                TOD
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-300 sm:mt-2 sm:text-sm sm:leading-6">
                Vị trí tâm điểm TOD
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT VISUAL
            Chỉ hiện desktop
        =================================================== */}

        <div
          className="relative hidden justify-center lg:flex"
          data-aos="fade-left"
        >
          {/* Glow */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[560px] w-[560px] rounded-full bg-yellow-400/15 blur-[140px]" />
          </div>

          {/* Building */}

          <Image
            src="/images/hero-building.png"
            alt="Nam Mekong Grand Plaza"
            width={760}
            height={980}
            priority
            className="relative z-10 w-full max-w-[600px] transition-all duration-700 hover:-translate-y-3 hover:scale-105"
          />

          {/* Floating Card 01 */}

          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="absolute left-0 top-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
              LOCATION
            </span>

            <h4 className="mt-3 text-2xl font-bold text-white">
              Thành phố mới
            </h4>

            <p className="mt-2 text-slate-300">
              Bình Dương
            </p>
          </div>

          {/* Floating Card 02 */}

          <div
            data-aos="zoom-in"
            data-aos-delay="900"
            className="absolute bottom-20 right-0 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
              DEVELOPMENT
            </span>

            <h4 className="mt-3 text-2xl font-bold text-white">
              Mixed-use
            </h4>

            <p className="mt-2 text-slate-300">
              Thương mại • Văn phòng • Căn hộ
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          Ẩn trên mobile để tránh che nội dung
      ===================================================== */}

      <div className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 lg:block">
        <Link
          href="#about"
          className="group flex flex-col items-center gap-3"
        >
          <span className="text-[11px] uppercase tracking-[0.45em] text-white/70 transition group-hover:text-yellow-400">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
            <div className="mt-2 h-2.5 w-2.5 animate-bounce rounded-full bg-yellow-400" />
          </div>

          <ArrowDown
            size={18}
            className="animate-bounce text-white/70 transition group-hover:text-yellow-400"
          />
        </Link>
      </div>

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08111F] via-[#08111F]/70 to-transparent" />

      {/* =====================================================
          DECORATIVE LIGHTS
      ===================================================== */}

      <div className="pointer-events-none absolute -bottom-20 -left-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[220px]" />
    </section>
  );
}