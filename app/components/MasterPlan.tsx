"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Trees,
  Store,
  Maximize2,
  X,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Khu căn hộ",
    description:
      "Không gian được quy hoạch hướng đến trải nghiệm sống hiện đại.",
  },
  {
    icon: Store,
    title: "Khối thương mại",
    description:
      "Bố trí tại khối đế nhằm phục vụ nhu cầu mua sắm và dịch vụ.",
  },
  {
    icon: Trees,
    title: "Cảnh quan",
    description:
      "Không gian xanh và các khu vực tiện ích được quy hoạch đồng bộ.",
  },
];

export default function MasterPlan() {
  const [open, setOpen] = useState(false);

  /* =====================================================
     LIGHTBOX
  ===================================================== */

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <section
        id="masterplan"
        className="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32"
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[220px]" />

        {/* =====================================================
            CONTAINER
        ===================================================== */}

        <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
          {/* ===================================================
              HEADING
          =================================================== */}

          <div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C89A2B] sm:text-sm">
              MASTER PLAN
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#0F172A] md:text-5xl">
              Quy hoạch tổng thể
              <br />
              Nam Mekong Grand Plaza
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Khám phá quy hoạch tổng thể dự án thông qua hình ảnh trực
              quan, giúp hình dung cách tổ chức không gian, phân khu chức
              năng và định hướng phát triển của Nam Mekong Grand Plaza.
            </p>
          </div>

          {/* ===================================================
              MASTER PLAN
          =================================================== */}

          <div
            className="relative mt-16 lg:mt-20"
            data-aos="zoom-in"
          >
            {/* IMAGE CARD */}

            <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:rounded-[36px] sm:p-3">
              <div className="relative overflow-hidden rounded-[22px] bg-slate-100 sm:rounded-[30px]">
                <Image
                  src="/images/master-plan.jpg"
                  alt="Quy hoạch tổng thể Nam Mekong Grand Plaza"
                  width={2200}
                  height={1500}
                  priority
                  className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.015]"
                />
              </div>
            </div>

            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                relative mt-5
                max-w-full
                rounded-3xl
                bg-[#08111F]/95
                p-6
                shadow-2xl
                backdrop-blur-xl

                sm:absolute
                sm:bottom-7
                sm:left-7
                sm:max-w-sm
                sm:p-7
              "
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-xs">
                MASTER PLAN
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                Nam Mekong
                <br />
                Grand Plaza
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Quy hoạch tổng thể dự án với các phân khu chức năng được
                bố trí hài hòa, hướng đến không gian sống hiện đại và
                tiện nghi.
              </p>
            </div>

            {/* =================================================
                FULLSCREEN BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              data-aos="fade-left"
              data-aos-delay="400"
              aria-label="Xem master plan toàn màn hình"
              className="
                absolute
                right-5
                top-5
                flex
                h-11
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                text-sm
                font-semibold
                text-[#0F172A]
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl

                sm:right-8
                sm:top-8
                sm:h-auto
                sm:px-6
                sm:py-3
                sm:text-base
              "
            >
              <Maximize2 size={17} />

              <span className="hidden sm:inline">
                Xem toàn màn hình
              </span>

              <span className="sm:hidden">
                Phóng to
              </span>
            </button>
          </div>

          {/* ===================================================
              FEATURES
          =================================================== */}

          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#F5C542]/40 hover:shadow-2xl sm:p-8"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#F5C542] transition-all duration-300 group-hover:bg-[#F5C542] group-hover:text-[#0F172A]">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ===================================================
              CTA
          =================================================== */}

          <div
            className="mt-16 text-center lg:mt-20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="#unitplan"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl sm:px-8"
            >
              Khám phá mặt bằng căn hộ

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6"
          onClick={() => setOpen(false)}
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Đóng"
            className="absolute right-4 top-4 z-[10001] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
          >
            <X size={27} />
          </button>

          {/* COUNTER / LABEL */}

          <div className="absolute left-1/2 top-5 z-[10001] -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl sm:top-7 sm:px-5 sm:text-sm">
            MASTER PLAN
          </div>

          {/* IMAGE */}

          <div
            className="
              relative
              flex
              h-[82vh]
              w-full
              max-w-[1500px]
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              bg-white
              p-2
              shadow-2xl

              sm:h-[88vh]
              sm:rounded-[32px]
              sm:p-4
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/images/master-plan.jpg"
              alt="Quy hoạch tổng thể Nam Mekong Grand Plaza"
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}