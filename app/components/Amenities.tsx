"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Trees,
  Waves,
  Eye,
  Baby,
  Coffee,
  Sparkles,
  BriefcaseBusiness,
  Footprints,
  Users,
  HeartPulse,
  Hotel,
} from "lucide-react";

const amenities = [
  {
    title: "Sky BBQ Garden",
    subtitle: "Rooftop Lifestyle",
    description:
      "Không gian BBQ trên cao được giới thiệu như một điểm sinh hoạt và thư giãn ngoài trời.",
    image: "/images/amenity-1.jpg",
    icon: Coffee,
  },
  {
    title: "Zen Garden",
    subtitle: "Relax & Nature",
    description:
      "Không gian cảnh quan xanh mang đến cảm giác thư giãn và gần gũi với thiên nhiên.",
    image: "/images/amenity-2.jpg",
    icon: Trees,
  },
  {
    title: "Tropical Garden",
    subtitle: "Green Landscape",
    description:
      "Không gian cây xanh và cảnh quan nhiệt đới tạo nên trải nghiệm dạo bộ và thư giãn.",
    image: "/images/amenity-3.jpg",
    icon: Trees,
  },
  {
    title: "Sky Observatory",
    subtitle: "Panoramic View",
    description:
      "Không gian trên cao được giới thiệu với góc nhìn rộng và trải nghiệm ngắm cảnh.",
    image: "/images/amenity-4.jpg",
    icon: Eye,
  },
  {
    title: "Kids Outdoor Playground",
    subtitle: "Family Space",
    description:
      "Không gian vui chơi ngoài trời dành cho trẻ em và các hoạt động gia đình.",
    image: "/images/amenity-5.jpg",
    icon: Baby,
  },
  {
    title: "Resort Swimming Pool",
    subtitle: "Resort Experience",
    description:
      "Không gian hồ bơi được thiết kế theo hướng thư giãn và trải nghiệm nghỉ dưỡng.",
    image: "/images/amenity-6.jpg",
    icon: Waves,
  },
  {
    title: "Rooftop Lounge",
    subtitle: "Luxury Lifestyle",
    description:
      "Không gian lounge trên cao dành cho thư giãn, gặp gỡ và tận hưởng không gian.",
    image: "/images/amenity-7.jpg",
    icon: Sparkles,
  },
  {
    title: "Co-working Space",
    subtitle: "Modern Workspace",
    description:
      "Không gian làm việc được giới thiệu theo định hướng hiện đại và linh hoạt.",
    image: "/images/amenity-8.jpg",
    icon: BriefcaseBusiness,
  },
  {
    title: "Sky Garden Walk",
    subtitle: "Outdoor Experience",
    description:
      "Không gian dạo bộ kết hợp cảnh quan xanh, tạo thêm trải nghiệm ngoài trời.",
    image: "/images/amenity-9.jpg",
    icon: Footprints,
  },
  {
    title: "Kids Club",
    subtitle: "Creative Space",
    description:
      "Không gian dành cho trẻ em với định hướng vui chơi, sinh hoạt và khám phá.",
    image: "/images/amenity-10.jpg",
    icon: Baby,
  },
  {
    title: "Onsen & Spa",
    subtitle: "Wellness",
    description:
      "Không gian chăm sóc sức khỏe và thư giãn được giới thiệu trong hệ thống tiện ích.",
    image: "/images/amenity-11.jpg",
    icon: HeartPulse,
  },
  {
    title: "Grand Lobby",
    subtitle: "Luxury Arrival",
    description:
      "Không gian sảnh đón được giới thiệu với phong cách sang trọng và hiện đại.",
    image: "/images/amenity-12.jpg",
    icon: Hotel,
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative scroll-mt-[100px] overflow-hidden bg-[#F7F9FC] py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[520px] w-[520px] rounded-full bg-blue-500/[0.06] blur-[200px]" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="mx-auto max-w-4xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center rounded-full border border-[#F5C542]/50 bg-[#FFF9E8] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-[#B88916] sm:text-xs">
            LIFESTYLE AMENITIES
          </span>

          <h2 className="mt-6 font-[var(--font-jakarta)] text-4xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Hệ tiện ích
            <br />
            <span className="text-[#C89A2B]">
              nâng tầm trải nghiệm sống
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Khám phá hệ thống không gian tiện ích được giới thiệu tại
            Nam Mekong Grand Plaza, từ cảnh quan, thư giãn, vui chơi
            đến những không gian phục vụ phong cách sống hiện đại.
          </p>
        </div>

        {/* ===================================================
            DECORATIVE LINE
        =================================================== */}

        <div className="mx-auto mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#F5C542]" />
          <span className="h-2 w-2 rounded-full bg-[#F5C542]" />
          <span className="h-px w-12 bg-[#F5C542]" />
        </div>

        {/* ===================================================
            GRID
        =================================================== */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 60, 480)}
                className="group overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#F5C542]/40 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative h-[340px] overflow-hidden sm:h-[370px]">

                  <Image
                    src={item.image}
                    alt={`${item.title} - Nam Mekong Grand Plaza`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  {/* DARK GRADIENT */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101F] via-[#06101F]/25 to-transparent" />

                  {/* TOP LIGHT GRADIENT */}

                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/20 to-transparent" />

                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div className="absolute left-6 top-5 sm:left-7 sm:top-6">
                    <span className="font-[var(--font-jakarta)] text-5xl font-extrabold leading-none tracking-[-0.05em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div className="absolute right-6 top-5 sm:right-7 sm:top-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-yellow-300 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-[#F5C542] group-hover:bg-[#F5C542] group-hover:text-[#0F172A]">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                  </div>

                  {/* =================================================
                      IMAGE CONTENT
                  ================================================= */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                    <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-yellow-300 sm:text-xs">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-3 font-[var(--font-jakarta)] text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[28px]">
                      {item.title}
                    </h3>

                    {/* HOVER INDICATOR */}

                    <div className="mt-5 flex items-center gap-2 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      <span className="h-px w-8 bg-yellow-300" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        Explore
                      </span>
                    </div>

                  </div>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <div className="p-6 sm:p-7">

                  <p className="min-h-[72px] text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C89A2B]">
                      Nam Mekong
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#0F172A] transition-all duration-300 group-hover:bg-[#F5C542]">
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* ===================================================
            BOTTOM HIGHLIGHT
        =================================================== */}

        <div
          className="mt-16 overflow-hidden rounded-[32px] bg-[#08111F] shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:mt-20"
          data-aos="fade-up"
        >
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14">

            {/* Background glow */}

            <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-400/10 blur-[100px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
                  LIFESTYLE EXPERIENCE
                </p>

                <h3 className="mt-4 font-[var(--font-jakarta)] text-3xl font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                  Một hệ sinh thái tiện ích
                  <br className="hidden sm:block" />
                  cho nhiều nhu cầu trải nghiệm
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Từ những không gian xanh, vui chơi, thư giãn đến các
                  khu vực sinh hoạt và làm việc, hệ tiện ích được giới
                  thiệu theo hướng đa dạng và hiện đại.
                </p>

              </div>

              <Link
                href="#gallery"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#0F172A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:px-8"
              >
                Khám phá thư viện

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}