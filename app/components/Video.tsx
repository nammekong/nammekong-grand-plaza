"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const YOUTUBE_VIDEO_ID = "yHoz5nYwgnY";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="video"
      className="relative overflow-hidden bg-[#08111F] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-[180px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[220px]"
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-300 sm:text-xs">
            <Play size={13} />
            PROJECT VIDEO
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.15] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Khám phá
            <br />
            <span className="text-[#F5C542]">
              Nam Mekong Grand Plaza
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Cùng khám phá không gian, kiến trúc và những góc nhìn
            nổi bật về Nam Mekong Grand Plaza qua video giới thiệu
            dự án.
          </p>
        </div>

        {/* ===================================================
            VIDEO CONTAINER
        =================================================== */}

        <div
          className="mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20"
          data-aos="zoom-in"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:rounded-[36px]">

            {/* =================================================
                16:9 VIDEO
            ================================================= */}

            <div className="relative aspect-video w-full">

              {/* =================================================
                  BEFORE PLAY
              ================================================= */}

              {!isPlaying && (
                <>
                  {/* YOUTUBE THUMBNAIL */}

                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                    alt="Video giới thiệu Nam Mekong Grand Plaza"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* DARK OVERLAY */}

                  <div className="absolute inset-0 bg-black/45" />

                  {/* =================================================
                      PLAY BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Phát video Nam Mekong Grand Plaza"
                    className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  >
                    {/* Glow */}

                    <span className="absolute h-24 w-24 rounded-full bg-yellow-400/20 blur-xl transition-all duration-500 group-hover:scale-125 sm:h-32 sm:w-32" />

                    {/* Button */}

                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#F5C542] text-[#08111F] shadow-[0_15px_50px_rgba(245,197,66,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-300 sm:h-24 sm:w-24">
                      <Play
                        size={32}
                        fill="currentColor"
                        className="ml-1 sm:h-10 sm:w-10"
                      />
                    </span>
                  </button>

                  {/* =================================================
                      VIDEO LABEL
                  ================================================= */}

                  <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                    <div className="rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-md">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white sm:text-xs">
                        Xem video giới thiệu
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* =================================================
                  YOUTUBE IFRAME
              ================================================= */}

              {isPlaying && (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Video giới thiệu Nam Mekong Grand Plaza"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>

        {/* ===================================================
            INFORMATION CARDS
        =================================================== */}

        <div
          className="mx-auto mt-8 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="150"
        >

          {/* =================================================
              CARD 01
          ================================================= */}

          <div className="rounded-3xl border border-white/10 bg-[#111C2C] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-[#162236]">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <Play size={20} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                  VIDEO
                </p>

                <h3 className="mt-1 text-base font-bold text-white">
                  Giới thiệu dự án
                </h3>
              </div>

            </div>
          </div>

          {/* =================================================
              CARD 02
          ================================================= */}

          <div className="rounded-3xl border border-white/10 bg-[#111C2C] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-[#162236]">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <span className="text-sm font-black">
                  02
                </span>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                  YOUTUBE
                </p>

                <h3 className="mt-1 text-base font-bold text-white">
                  Xem trực tuyến
                </h3>
              </div>

            </div>
          </div>

          {/* =================================================
              CARD 03
          ================================================= */}

          <div className="rounded-3xl border border-white/10 bg-[#111C2C] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-[#162236] sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <ExternalLink size={20} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                  ONLINE
                </p>

                <h3 className="mt-1 text-base font-bold text-white">
                  Khám phá thêm
                </h3>
              </div>

            </div>
          </div>

        </div>

        {/* ===================================================
            YOUTUBE BUTTON
        =================================================== */}

        <div
          className="mt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <a
            href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#08111F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:px-8"
          >
            Xem trên YouTube

            <ExternalLink
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}