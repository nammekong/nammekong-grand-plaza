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
    image: "/images/gallery-4.jpg",
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

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const previous = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? galleryImages.length - 1
        : current - 1;
    });
  };

  const next = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === galleryImages.length - 1
        ? 0
        : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
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
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-sm">
            PROJECT GALLERY
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#0F172A] md:text-5xl">
            Thư viện hình ảnh
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Khám phá phối cảnh kiến trúc, không gian sống và những
            góc nhìn nổi bật của Nam Mekong Grand Plaza.
          </p>
        </div>

        {/* ===================================================
            GALLERY
        =================================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[300px] xl:gap-7">

          {galleryImages.map((item, index) => {
            const isLarge = index === 0 || index === 4;

            return (
              <button
                key={item.image}
                type="button"
                onClick={() => openLightbox(index)}
                data-aos="zoom-in"
                data-aos-delay={Math.min(index * 70, 400)}
                aria-label={`Xem ${item.title}`}
                className={`group relative overflow-hidden rounded-[28px] bg-slate-200 text-left shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(15,23,42,0.20)] sm:rounded-[32px] ${
                  isLarge
                    ? "h-[420px] md:h-[500px] xl:h-auto xl:col-span-2 xl:row-span-2"
                    : "h-[300px]"
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/90 via-[#08111F]/20 to-transparent transition-all duration-500 group-hover:from-[#08111F]/75" />

                {/* NUMBER */}

                <div className="absolute left-6 top-6 sm:left-7 sm:top-7">
                  <span className="text-5xl font-black text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-300 sm:text-xs sm:tracking-[0.35em]">
                    {item.category}
                  </p>

                  <h3
                    className={`mt-3 font-black leading-tight text-white ${
                      isLarge
                        ? "text-3xl md:text-4xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* VIEW */}

                  <div className="mt-5 flex translate-y-2 items-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0F172A] shadow-xl">
                      <Search size={19} />
                    </div>

                    <span className="font-medium text-white">
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
          className="mt-16 text-center lg:mt-20"
          data-aos="fade-up"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl sm:px-8"
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
          {/* CLOSE */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Đóng"
            className="absolute right-4 top-4 z-[10002] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
          >
            <X size={26} />
          </button>

          {/* COUNTER */}

          <div className="absolute left-1/2 top-5 z-[10001] -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.25em] text-white backdrop-blur-xl sm:top-7 sm:px-5 sm:text-sm">
            {String(selectedIndex + 1).padStart(2, "0")}
            {" / "}
            {String(galleryImages.length).padStart(2, "0")}
          </div>

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            aria-label="Ảnh trước"
            className="absolute left-3 top-1/2 z-[10001] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={28} />
          </button>

          {/* NEXT */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Ảnh tiếp theo"
            className="absolute right-3 top-1/2 z-[10001] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
          >
            <ChevronRight size={28} />
          </button>

          {/* MAIN IMAGE */}

          <div
            className="absolute inset-x-14 top-16 bottom-32 sm:inset-x-20 sm:top-20 sm:bottom-36"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIndex].image}
              alt={galleryImages[selectedIndex].title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* CAPTION */}

          <div
            className="absolute bottom-[92px] left-1/2 z-[10001] w-[calc(100%-120px)] -translate-x-1/2 text-center sm:bottom-[115px]"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-300 sm:text-xs">
              {galleryImages[selectedIndex].category}
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-3xl">
              {galleryImages[selectedIndex].title}
            </h3>
          </div>

          {/* THUMBNAILS */}

          <div
            className="absolute bottom-3 left-1/2 z-[10001] flex max-w-[calc(100%-24px)] -translate-x-1/2 gap-2 overflow-x-auto rounded-2xl bg-white/10 px-3 py-2 backdrop-blur-xl sm:bottom-6 sm:gap-3 sm:rounded-full sm:px-4 sm:py-3"
            onClick={(event) => event.stopPropagation()}
          >
            {galleryImages.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Xem ${item.title}`}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-16 sm:w-24 sm:rounded-xl ${
                  selectedIndex === index
                    ? "scale-105 border-yellow-400 opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
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
            ))}
          </div>
        </div>
      )}
    </section>
  );
}