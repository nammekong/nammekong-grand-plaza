"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";

/* =========================================================
   GALLERY DATA
========================================================= */

const galleryImages = [
  {
    image: "/images/gallery-1.jpg",
    title: "Phối cảnh dự án",
    category: "PROJECT",
  },
  {
    image: "/images/gallery-2.jpg",
    title: "Không gian cảnh quan",
    category: "LANDSCAPE",
  },
  {
    image: "/images/gallery-3.jpg",
    title: "Không gian thương mại",
    category: "COMMERCIAL",
  },
  {
    image: "/images/amenity-10.jpg",
    title: "Không gian tiện ích",
    category: "AMENITIES",
  },
  {
    image: "/images/gallery-5.jpg",
    title: "Kiến trúc dự án",
    category: "ARCHITECTURE",
  },
  {
    image: "/images/gallery-6.jpg",
    title: "Không gian căn hộ",
    category: "RESIDENCE",
  },
  {
    image: "/images/gallery-7.jpg",
    title: "Không gian sinh hoạt",
    category: "LIFESTYLE",
  },
  {
    image: "/images/gallery-8.jpg",
    title: "Phối cảnh về đêm",
    category: "NIGHT VIEW",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null
  );

  /* =======================================================
     OPEN
  ======================================================= */

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  /* =======================================================
     CLOSE
  ======================================================= */

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previous = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return null;
      }

      if (current === 0) {
        return galleryImages.length - 1;
      }

      return current - 1;
    });
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const next = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return null;
      }

      if (current === galleryImages.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/[0.06] blur-[200px]" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="mx-auto mb-14 max-w-4xl text-center lg:mb-20"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-xs">
            PROJECT GALLERY
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Thư viện
            <br />
            <span className="text-[#C89A2B]">
              hình ảnh dự án
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Khám phá những góc nhìn nổi bật về kiến trúc,
            cảnh quan, không gian thương mại, căn hộ và
            phong cách sống tại Nam Mekong Grand Plaza.
          </p>
        </div>

        {/* ===================================================
            DECORATIVE LINE
        =================================================== */}

        <div className="mb-12 flex items-center justify-center gap-3 lg:mb-16">
          <span className="h-px w-14 bg-[#F5C542]" />

          <span className="h-2.5 w-2.5 rounded-full bg-[#F5C542]" />

          <span className="h-px w-14 bg-[#F5C542]" />
        </div>

        {/* ===================================================
            GALLERY GRID
        =================================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[300px] xl:gap-7">
          {galleryImages.map((item, index) => {
            const isLarge =
              index === 0 || index === 4;

            return (
              <button
                key={`${item.image}-${index}`}
                type="button"
                onClick={() =>
                  openLightbox(index)
                }
                aria-label={`Xem ${item.title}`}
                data-aos="zoom-in"
                data-aos-delay={Math.min(
                  index * 70,
                  420
                )}
                className={`group relative overflow-hidden rounded-[28px] bg-slate-200 text-left shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(15,23,42,0.20)] sm:rounded-[32px] ${
                  isLarge
                    ? "h-[430px] md:h-[520px] xl:col-span-2 xl:row-span-2 xl:h-auto"
                    : "h-[310px] sm:h-[330px] xl:h-auto"
                }`}
              >
                {/* IMAGE */}

                <Image
                  src={item.image}
                  alt={`${item.title} - Nam Mekong Grand Plaza`}
                  fill
                  priority={index < 2}
                  sizes={
                    isLarge
                      ? "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 50vw"
                      : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#06101F]/95 via-[#06101F]/25 to-transparent transition-all duration-500 group-hover:from-[#06101F]/80" />

                {/* TOP GRADIENT */}

                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="absolute left-6 top-5 sm:left-7 sm:top-6">
                  <span className="text-5xl font-black leading-none tracking-[-0.05em] text-white/20">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                {/* =================================================
                    SEARCH ICON
                ================================================= */}

                <div className="absolute right-6 top-5 sm:right-7 sm:top-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-[#F5C542] group-hover:text-[#0F172A]">
                    <Search
                      size={21}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-yellow-300 sm:text-xs">
                    {item.category}
                  </p>

                  <h3
                    className={`mt-3 font-black leading-tight tracking-[-0.02em] text-white ${
                      isLarge
                        ? "text-3xl sm:text-4xl"
                        : "text-2xl sm:text-3xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* HOVER ACTION */}

                  <div className="mt-5 flex translate-y-2 items-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="h-px w-8 bg-yellow-300" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                      Xem hình ảnh
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ===================================================
            CTA
        =================================================== */}

        <div
          className="mt-16 flex justify-center lg:mt-20"
          data-aos="fade-up"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl"
          >
            Đăng ký nhận thông tin

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >

          {/* =================================================
              CLOSE
          ================================================= */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Đóng thư viện"
            className="absolute right-4 top-4 z-[10003] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7 sm:h-12 sm:w-12"
          >
            <X size={25} />
          </button>

          {/* =================================================
              COUNTER
          ================================================= */}

          <div className="absolute left-1/2 top-5 z-[10002] -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-white backdrop-blur-xl sm:top-7 sm:text-sm">
            {String(selectedIndex + 1).padStart(
              2,
              "0"
            )}

            <span className="mx-2 text-white/40">
              /
            </span>

            {String(galleryImages.length).padStart(
              2,
              "0"
            )}
          </div>

          {/* =================================================
              PREVIOUS
          ================================================= */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            aria-label="Ảnh trước"
            className="absolute left-3 top-1/2 z-[10002] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-7 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={28} />
          </button>

          {/* =================================================
              NEXT
          ================================================= */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Ảnh tiếp theo"
            className="absolute right-3 top-1/2 z-[10002] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:h-14 sm:w-14"
          >
            <ChevronRight size={28} />
          </button>

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <div
            className="absolute inset-x-14 top-16 bottom-32 sm:inset-x-20 sm:top-20 sm:bottom-36"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <Image
              src={
                galleryImages[selectedIndex]
                  .image
              }
              alt={
                galleryImages[selectedIndex]
                  .title
              }
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* =================================================
              CAPTION
          ================================================= */}

          <div
            className="absolute bottom-[92px] left-1/2 z-[10002] w-[calc(100%-120px)] -translate-x-1/2 text-center sm:bottom-[115px]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300 sm:text-xs">
              {
                galleryImages[selectedIndex]
                  .category
              }
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-3xl">
              {
                galleryImages[selectedIndex]
                  .title
              }
            </h3>
          </div>

          {/* =================================================
              THUMBNAILS
          ================================================= */}

          <div
            className="absolute bottom-3 left-1/2 z-[10002] flex max-w-[calc(100%-24px)] -translate-x-1/2 gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl sm:bottom-6 sm:gap-3 sm:rounded-full sm:px-4 sm:py-3"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {galleryImages.map(
              (item, index) => (
                <button
                  key={`${item.image}-${index}`}
                  type="button"
                  onClick={() =>
                    setSelectedIndex(index)
                  }
                  aria-label={`Xem ${item.title}`}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-16 sm:w-24 sm:rounded-xl ${
                    selectedIndex === index
                      ? "scale-105 border-yellow-400 opacity-100"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
}