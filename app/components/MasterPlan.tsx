
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

/* =========================================================
   MASTER PLAN IMAGE
   File thực tế:
   public/images/master-plan.png
========================================================= */

const MASTER_PLAN_IMAGE = "/images/master-plan.png";

/* =========================================================
   FEATURES
========================================================= */

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

/* =========================================================
   COMPONENT
========================================================= */

export default function MasterPlan() {
  const [open, setOpen] = useState(false);

  /* =======================================================
     LOCK BODY SCROLL WHEN LIGHTBOX IS OPEN
  ======================================================= */

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
      {/* =====================================================
          MASTER PLAN SECTION
      ===================================================== */}

      <section
        id="masterplan"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32"
      >
        {/* ===================================================
            BACKGROUND DECORATION
        =================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[220px]"
        />

        {/* ===================================================
            CONTAINER
        =================================================== */}

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10">
          {/* =================================================
              HEADING
          ================================================= */}

          <div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            {/* LABEL */}

            <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C89A2B] sm:text-xs">
              MASTER PLAN
            </span>

            {/* TITLE */}

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Quy hoạch tổng thể
              <br />
              Nam Mekong Grand Plaza
            </h2>

            {/* DESCRIPTION */}

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              Khám phá quy hoạch tổng thể dự án thông qua hình ảnh trực
              quan, giúp hình dung cách tổ chức không gian, phân khu chức
              năng và định hướng phát triển của Nam Mekong Grand Plaza.
            </p>
          </div>

          {/* =================================================
              MASTER PLAN IMAGE AREA
          ================================================= */}

          <div
            className="relative mt-12 sm:mt-14 lg:mt-20"
            data-aos="zoom-in"
          >
            {/* =================================================
                IMAGE CARD
            ================================================= */}

            <div className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:rounded-[32px] sm:p-3 lg:rounded-[36px]">
              <div className="relative overflow-hidden rounded-[18px] bg-slate-100 sm:rounded-[26px] lg:rounded-[30px]">
                <Image
                  src={MASTER_PLAN_IMAGE}
                  alt="Quy hoạch tổng thể Nam Mekong Grand Plaza"
                  width={3871}
                  height={2145}
                  priority
                  quality={90}
                  className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* =================================================
                FLOATING INFORMATION CARD
            ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                relative
                mt-4
                w-full
                rounded-3xl
                bg-[#08111F]/95
                p-5
                shadow-2xl
                backdrop-blur-xl

                sm:absolute
                sm:bottom-6
                sm:left-6
                sm:mt-0
                sm:max-w-sm
                sm:p-6

                lg:bottom-8
                lg:left-8
                lg:p-7
              "
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-[10px]">
                MASTER PLAN
              </p>

              <h3 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
                Nam Mekong
                <br />
                Grand Plaza
              </h3>

              <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
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
              aria-label="Xem quy hoạch tổng thể toàn màn hình"
              data-aos="fade-left"
              data-aos-delay="400"
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-10
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                text-xs
                font-semibold
                text-[#0F172A]
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl

                sm:right-7
                sm:top-7
                sm:h-auto
                sm:px-5
                sm:py-3
                sm:text-sm

                lg:right-8
                lg:top-8
                lg:px-6
                lg:text-base
              "
            >
              <Maximize2 size={16} />

              <span className="hidden sm:inline">
                Xem toàn màn hình
              </span>

              <span className="sm:hidden">
                Phóng to
              </span>
            </button>
          </div>

          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="mt-10 grid gap-5 sm:mt-12 md:mt-16 md:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#F5C542]/40
                    hover:shadow-2xl

                    sm:p-7
                    lg:p-8
                  "
                >
                  {/* ICON */}

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#F5C542] transition-all duration-300 group-hover:bg-[#F5C542] group-hover:text-[#0F172A] sm:h-16 sm:w-16">
                    <Icon size={28} />
                  </div>

                  {/* TITLE */}

                  <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            className="mt-12 text-center sm:mt-14 lg:mt-20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="#unitplan"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#0F172A]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#16233D]
                hover:shadow-xl

                sm:px-8
                sm:py-4
                sm:text-base
              "
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
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            p-2
            backdrop-blur-xl

            sm:p-5
            lg:p-8
          "
          onClick={() => setOpen(false)}
        >
          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Đóng"
            className="
              absolute
              right-3
              top-3
              z-[10001]
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition
              hover:bg-white/20

              sm:right-5
              sm:top-5
              sm:h-12
              sm:w-12
            "
          >
            <X size={25} />
          </button>

          {/* =================================================
              LABEL
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-3
              z-[10001]
              -translate-x-1/2
              rounded-full
              bg-white/10
              px-4
              py-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white
              backdrop-blur-xl

              sm:top-5
              sm:px-5
              sm:text-xs
            "
          >
            MASTER PLAN
          </div>

          {/* =================================================
              LIGHTBOX IMAGE
          ================================================= */}

          <div
            className="
              relative
              flex
              h-[88vh]
              w-full
              max-w-[1600px]
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              bg-white
              p-1
              shadow-2xl

              sm:h-[90vh]
              sm:rounded-[24px]
              sm:p-3

              lg:rounded-[32px]
              lg:p-4
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={MASTER_PLAN_IMAGE}
              alt="Quy hoạch tổng thể Nam Mekong Grand Plaza"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}