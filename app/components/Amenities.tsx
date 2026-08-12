"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BriefcaseBusiness,
  Coffee,
  Eye,
  Footprints,
  HeartPulse,
  Hotel,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react";

const amenities = [
  {
    title: "Sky BBQ Garden",
    subtitle: "ROOFTOP LIFESTYLE",
    description:
      "Không gian trên cao dành cho những hoạt động thư giãn, gặp gỡ và trải nghiệm ngoài trời.",
    image: "/images/amenity-1.jpg",
    icon: Coffee,
  },
  {
    title: "Zen Garden",
    subtitle: "GREEN RETREAT",
    description:
      "Không gian xanh và vườn dạo bộ tạo nên những khoảng lặng để thư giãn trong nhịp sống đô thị.",
    image: "/images/amenity-2.jpg",
    icon: Trees,
  },
  {
    title: "Tropical Garden",
    subtitle: "LANDSCAPE",
    description:
      "Cảnh quan cây xanh mang đến thêm những không gian kết nối với thiên nhiên trong tổng thể dự án.",
    image: "/images/amenity-3.jpg",
    icon: Trees,
  },
  {
    title: "Sky Observatory",
    subtitle: "PANORAMIC VIEW",
    description:
      "Không gian trên cao mở ra góc nhìn rộng, góp phần tạo nên trải nghiệm khác biệt cho cư dân.",
    image: "/images/amenity-4.jpg",
    icon: Eye,
  },
  {
    title: "Kids Outdoor Playground",
    subtitle: "FAMILY SPACE",
    description:
      "Không gian vui chơi ngoài trời dành cho trẻ em, hướng đến những hoạt động gia đình.",
    image: "/images/amenity-5.jpg",
    icon: Baby,
  },
  {
    title: "Resort Swimming Pool",
    subtitle: "WELLNESS",
    description:
      "Không gian hồ bơi phục vụ nhu cầu thư giãn và tái tạo năng lượng sau những giờ làm việc.",
    image: "/images/amenity-6.jpg",
    icon: Waves,
  },
  {
    title: "Rooftop Lounge",
    subtitle: "LIFESTYLE",
    description:
      "Không gian thư giãn trên cao dành cho gặp gỡ, trò chuyện và tận hưởng những khoảng thời gian riêng.",
    image: "/images/amenity-7.jpg",
    icon: Sparkles,
  },
  {
    title: "Co-working Space",
    subtitle: "SMART WORKSPACE",
    description:
      "Thư viện kết hợp Co-working Space được giới thiệu với diện tích gần 600 m², phục vụ nhu cầu học tập và làm việc linh hoạt.",
    image: "/images/amenity-8.jpg",
    icon: BriefcaseBusiness,
  },
  {
    title: "Sky Garden Walk",
    subtitle: "OUTDOOR EXPERIENCE",
    description:
      "Không gian dạo bộ kết hợp cảnh quan xanh, tạo thêm những trải nghiệm thư giãn ngoài trời.",
    image: "/images/amenity-9.jpg",
    icon: Footprints,
  },
  {
    title: "Kids Club",
    subtitle: "FAMILY LIFESTYLE",
    description:
      "Không gian dành cho trẻ em và gia đình, hướng đến vui chơi, kết nối và sinh hoạt cộng đồng.",
    image: "/images/amenity-10.jpg",
    icon: Baby,
  },
  {
    title: "Onsen & Wellness",
    subtitle: "BODY & MIND",
    description:
      "Nhóm tiện ích chăm sóc sức khỏe và thư giãn được định hướng để hỗ trợ quá trình phục hồi năng lượng mỗi ngày.",
    image: "/images/amenity-11.jpg",
    icon: HeartPulse,
  },
  {
    title: "Grand Lobby",
    subtitle: "ARRIVAL EXPERIENCE",
    description:
      "Không gian đón tiếp tạo nên điểm chạm đầu tiên trong trải nghiệm của cư dân và khách đến dự án.",
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

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Hệ tiện ích
            <br />
            <span className="text-[#C89A2B]">
              nâng tầm trải nghiệm sống
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Khám phá hệ thống không gian tiện ích được giới thiệu tại
            Nam Mekong Grand Plaza, từ cảnh quan, thư giãn, chăm sóc
            sức khỏe, vui chơi gia đình đến những không gian học tập
            và làm việc linh hoạt.
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
            AMENITIES GRID
        =================================================== */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 60, 480)}
                className="group overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#F5C542]/50 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
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

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101F] via-[#06101F]/30 to-transparent" />

                  {/* TOP GRADIENT */}

                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

                  {/* NUMBER */}

                  <div className="absolute left-6 top-5 sm:left-7 sm:top-6">
                    <span className="text-5xl font-extrabold leading-none tracking-[-0.05em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* ICON */}

                  <div className="absolute right-6 top-5 sm:right-7 sm:top-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-yellow-300 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-[#F5C542] group-hover:bg-[#F5C542] group-hover:text-[#0F172A]">
                      <Icon
                        size={22}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* IMAGE CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-yellow-300 sm:text-xs">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-3 text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[28px]">
                      {item.title}
                    </h3>

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
                  <p className="min-h-[84px] text-sm leading-7 text-slate-600 sm:text-[15px]">
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
            WELLNESS HIGHLIGHT
        =================================================== */}

        <div
          className="mt-16 overflow-hidden rounded-[32px] bg-[#08111F] shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:mt-20"
          data-aos="fade-up"
        >
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-400/10 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* LEFT */}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
                  BODY • MIND • INTELLIGENCE
                </p>

                <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                  Hệ tiện ích
                  <br className="hidden sm:block" />
                  hướng đến trải nghiệm toàn diện
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Tài liệu dự án giới thiệu hệ tiện ích theo ba nhóm
                  trải nghiệm: chăm sóc thể chất, thư giãn tinh thần và
                  hỗ trợ học tập, làm việc linh hoạt.
                </p>
              </div>

              {/* RIGHT */}

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
                    THÂN
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Hồ bơi khoáng nóng, gym, xông hơi và yoga.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
                    TÂM
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Vườn dạo bộ, không gian gặp gỡ và thư giãn.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
                    TRÍ
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Thư viện kết hợp Co-working Space gần 600 m².
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            CTA
        =================================================== */}

        <div
          className="mt-12 flex justify-center"
          data-aos="fade-up"
        >
          <Link
            href="#gallery"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F5C542] px-8 py-4 font-bold text-[#0F172A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
          >
            Khám phá thư viện

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}