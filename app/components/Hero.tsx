"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Play } from "lucide-react";

export default function Hero() {
  /* =========================================================
     SCROLL TO VIDEO
  ========================================================= */

  const handleVideoClick = () => {
    const videoSection = document.getElementById("video");

    if (!videoSection) {
      console.warn("Không tìm thấy section #video");
      return;
    }

    videoSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-[#08111F] sm:min-h-[760px] lg:min-h-[calc(100vh-0px)]"
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

      <div className="absolute inset-0 bg-gradient-to-b from-[#08111F]/85 via-[#08111F]/65 to-[#08111F]/95 lg:bg-gradient-to-r lg:from-[#08111F]/95 lg:via-[#08111F]/75 lg:to-[#08111F]/35" />

      {/* =====================================================
          LIGHT EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-32 top-0 h-[360px] w-[360px] rounded-full bg-yellow-500/10 blur-[140px] sm:h-[460px] sm:w-[460px] sm:blur-[170px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[150px] sm:h-[460px] sm:w-[460px] sm:blur-[180px]" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-20 mx-auto flex min-h-[720px] w-full max-w-7xl flex-col px-5 pb-14 pt-[105px] sm:min-h-[760px] sm:px-6 sm:pb-16 sm:pt-[120px] lg:min-h-screen lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-20 lg:pt-24 xl:gap-14">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div
          className="relative z-20 min-w-0"
          data-aos="fade-right"
        >
          {/* =================================================
              BADGE
          ================================================= */}

          <span className="inline-flex max-w-full rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl sm:px-5 sm:text-xs sm:tracking-[0.28em]">
            Dòng chảy hội tụ
          </span>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="mt-5 leading-[0.92] sm:mt-7">
            <span className="block text-[38px] font-black tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[58px] xl:text-7xl">
              NAM MEKONG
            </span>

            <span className="mt-2 block bg-gradient-to-r from-yellow-100 via-yellow-400 to-amber-500 bg-clip-text text-[38px] font-black tracking-[-0.045em] text-transparent sm:text-5xl md:text-6xl lg:text-[58px] xl:text-7xl">
              GRAND PLAZA
            </span>
          </h1>

          {/* =================================================
              POSITIONING
          ================================================= */}

          <p className="mt-5 max-w-xl text-[14px] leading-6 text-slate-300 sm:mt-7 sm:text-base sm:leading-7 lg:text-[17px] lg:leading-8">
            Nơi hội tụ những dòng chảy giá trị của một đô thị đang chuyển mình:
            năng lượng, hạ tầng, dưỡng lành và thặng dư.
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* =================================================
                CONTACT BUTTON
            ================================================= */}

            <Link
              href="#contact"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 text-sm font-bold text-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-yellow-400/30 sm:px-8 sm:py-4 sm:text-base"
            >
              Nhận thông tin dự án
            </Link>

            {/* =================================================
                VIDEO BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={handleVideoClick}
              className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-[0.98] sm:px-8 sm:py-4 sm:text-base"
            >
              <Play
                size={16}
                fill="currentColor"
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>Xem video dự án</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* =================================================
              MOBILE BUILDING
          ================================================= */}

          <div
            className="relative -mx-2 mt-1 flex h-[235px] items-end justify-center sm:h-[290px] lg:hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute bottom-0 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-yellow-400/15 blur-[80px] sm:h-[340px] sm:w-[340px]" />

            <Image
              src="/images/hero-building.png"
              alt="Nam Mekong Grand Plaza"
              width={760}
              height={980}
              priority
              className="relative z-10 h-auto max-h-[300px] w-auto max-w-[88%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)] sm:max-h-[350px]"
            />
          </div>

          {/* =================================================
              STATISTICS
          ================================================= */}

          <div
            className="mt-3 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-4 lg:mt-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* CARD 01 */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-5">
              <h3 className="text-xl font-black text-yellow-400 sm:text-3xl">
                4
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-300 sm:mt-2 sm:text-sm sm:leading-6">
                Dòng chảy giá trị
              </p>
            </div>

            {/* CARD 02 */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-5">
              <h3 className="text-xl font-black text-yellow-400 sm:text-3xl">
                TOD
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-300 sm:mt-2 sm:text-sm sm:leading-6">
                Định hướng kết nối
              </p>
            </div>

            {/* CARD 03 */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-5">
              <h3 className="text-xl font-black text-yellow-400 sm:text-3xl">
                15'
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-300 sm:mt-2 sm:text-sm sm:leading-6">
                Tầm nhìn cộng đồng
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT VISUAL - DESKTOP
        =================================================== */}

        <div
          className="relative hidden min-w-0 justify-center lg:flex"
          data-aos="fade-left"
        >
          {/* GLOW */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[460px] w-[460px] rounded-full bg-yellow-400/15 blur-[120px] xl:h-[560px] xl:w-[560px] xl:blur-[140px]" />
          </div>

          {/* BUILDING */}

          <Image
            src="/images/hero-building.png"
            alt="Nam Mekong Grand Plaza"
            width={760}
            height={980}
            priority
            className="relative z-10 w-full max-w-[500px] object-contain transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] xl:max-w-[570px]"
          />

          {/* =================================================
              FLOATING CARD 01
          ================================================= */}

          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="absolute left-0 top-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl xl:left-2 xl:top-10 xl:p-6"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-300 xl:text-xs xl:tracking-[0.35em]">
              LOCATION
            </span>

            <h4 className="mt-2 text-xl font-bold text-white xl:mt-3 xl:text-2xl">
              Thành phố mới
            </h4>

            <p className="mt-1 text-sm text-slate-300 xl:mt-2">
              Bình Dương
            </p>
          </div>

          {/* =================================================
              FLOATING CARD 02
          ================================================= */}

          <div
            data-aos="zoom-in"
            data-aos-delay="900"
            className="absolute bottom-12 right-0 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl xl:bottom-16 xl:p-6"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-300 xl:text-xs xl:tracking-[0.35em]">
              CONCEPT
            </span>

            <h4 className="mt-2 text-xl font-bold text-white xl:mt-3 xl:text-2xl">
              Dòng chảy hội tụ
            </h4>

            <p className="mt-1 text-sm text-slate-300 xl:mt-2">
              Năng lượng • Hạ tầng • Dưỡng lành • Thặng dư
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 lg:block">
        <Link
          href="#about"
          className="group flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 transition group-hover:text-yellow-400">
            Scroll
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
            <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-yellow-400" />
          </div>

          <ArrowDown
            size={16}
            className="animate-bounce text-white/70 transition group-hover:text-yellow-400"
          />
        </Link>
      </div>

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08111F] via-[#08111F]/60 to-transparent" />

      {/* =====================================================
          DECORATIVE LIGHTS
      ===================================================== */}

      <div className="pointer-events-none absolute -bottom-20 -left-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[200px]" />
    </section>
  );
}