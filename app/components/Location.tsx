"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Building2,
  Route,
  Landmark,
  ShoppingBag,
} from "lucide-react";

const locations = [
  {
    icon: Building2,
    title: "Thành phố mới Bình Dương",
    desc: "Dự án được giới thiệu tại khu vực Thành phố mới Bình Dương, nơi tập trung các chức năng đô thị, thương mại và dịch vụ.",
  },
  {
    icon: Route,
    title: "Quốc lộ 13",
    desc: "Quốc lộ 13 là một trong các tuyến kết nối được đề cập trong thông tin giới thiệu dự án.",
  },
  {
    icon: Route,
    title: "Vành đai 3",
    desc: "Vành đai 3 được đề cập trong thông tin dự án như một yếu tố hạ tầng kết nối khu vực.",
  },
  {
    icon: Landmark,
    title: "Metro tương lai",
    desc: "Metro tương lai được đề cập trong định hướng kết nối khu vực của dự án.",
  },
];

const areaHighlights = [
  {
    icon: Landmark,
    label: "KHU VỰC",
    title: "Thành phố mới",
    desc: "Bình Dương",
  },
  {
    icon: Route,
    label: "KẾT NỐI",
    title: "Quốc lộ 13",
    desc: "Tuyến kết nối được đề cập",
  },
  {
    icon: ShoppingBag,
    label: "KHU CHỨC NĂNG",
    title: "Tiện ích khu vực",
    desc: "Các chức năng đô thị, thương mại và dịch vụ",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="relative scroll-mt-[100px] overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/5 blur-[220px]" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-sm">
            PROJECT LOCATION
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.12] text-[#0F172A] md:text-5xl">
            Vị trí chiến lược
            <br />
            Thành phố mới Bình Dương
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Nam Mekong Grand Plaza được giới thiệu tại Thành phố mới
            Bình Dương, với định hướng kết nối đến các khu chức năng,
            tiện ích và hạ tầng giao thông trong khu vực.
          </p>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div className="mt-16 grid items-start gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              MAP
          ================================================= */}

          <div
            className="relative"
            data-aos="fade-right"
          >
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:rounded-[36px]">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] sm:rounded-[30px]">
                <Image
                  src="/images/location-map.jpg"
                  alt="Vị trí Nam Mekong Grand Plaza tại Thành phố mới Bình Dương"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

            </div>

            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <div
              className="absolute -bottom-6 right-4 max-w-[300px] rounded-[28px] border border-white/80 bg-white p-5 shadow-2xl sm:right-8 sm:max-w-[330px] sm:p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#C89A2B]">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C89A2B]">
                    STRATEGIC LOCATION
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-[#0F172A]">
                    Thành phố mới
                    <br />
                    Bình Dương
                  </h3>
                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Vị trí dự án được giới thiệu tại khu vực Thành phố mới
                Bình Dương.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div data-aos="fade-left">

            <span className="inline-flex rounded-full bg-[#F5C542]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
              CONNECTIVITY
            </span>

            <h3 className="mt-6 text-3xl font-black leading-[1.15] text-[#0F172A] sm:text-4xl md:text-[42px]">
              Kết nối hạ tầng
              <br />
              và khu vực
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Theo thông tin được giới thiệu, dự án nằm tại Thành phố
              mới Bình Dương và có các thông tin kết nối với những tuyến
              hạ tầng và khu chức năng trong khu vực.
            </p>

            {/* =================================================
                LOCATION CARDS
            ================================================= */}

            <div className="mt-8 space-y-4">

              {locations.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group flex items-start gap-4 rounded-[26px] border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542]/50 hover:shadow-xl sm:gap-5 sm:p-6"
                  >

                    {/* Icon */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#F5C542] transition-all duration-300 group-hover:bg-[#F5C542] group-hover:text-[#0F172A] sm:h-14 sm:w-14">
                      <Icon size={22} />
                    </div>

                    {/* Content */}

                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-[#0F172A] sm:text-lg">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* =================================================
                HIGHLIGHT
            ================================================= */}

            <div
              className="mt-8 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0F172A] via-[#16233D] to-[#0F172A] p-6 shadow-[0_25px_60px_rgba(15,23,42,0.18)] sm:p-7"
              data-aos="fade-up"
              data-aos-delay="450"
            >

              <div className="flex items-start gap-4 sm:gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542] text-[#0F172A] sm:h-14 sm:w-14">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-300 sm:text-xs">
                    LOCATION ADVANTAGE
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                    Kết nối hạ tầng khu vực
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    Vị trí được giới thiệu với khả năng kết nối
                    Quốc lộ 13, Vành đai 3 và Metro tương lai,
                    theo thông tin dự án hiện có.
                  </p>
                </div>

              </div>
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="mt-8 flex flex-wrap gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="550"
            >

              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-7 py-4 font-semibold !text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl sm:px-8"
              >
                <span className="!text-white">
                  Đăng ký tư vấn
                </span>

                <ArrowRight
                  size={18}
                  className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#amenities"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold !text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:text-[#C89A2B] sm:px-8"
              >
                Khám phá tiện ích
              </Link>

            </div>

          </div>
        </div>

        {/* ===================================================
            BOTTOM INFORMATION
        =================================================== */}

        <div
          className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          {areaHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#C89A2B] transition-all duration-300 group-hover:bg-[#F5C542] group-hover:text-[#0F172A]">
                  <Icon size={22} />
                </div>

                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
                  {item.label}
                </p>

                <h3 className="mt-3 text-xl font-black text-[#0F172A] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}