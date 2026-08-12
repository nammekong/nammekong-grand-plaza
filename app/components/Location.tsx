"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  MapPin,
  Route,
  TrainFront,
} from "lucide-react";

const locationCards = [
  {
    image: "/images/location-ecosystem.jpg",
    icon: Building2,
    number: "01",
    label: "ECOSYSTEM",
    title: "Hệ sinh thái hiện hữu",
    desc: "Khu vực được giới thiệu với hệ thống mua sắm, giáo dục, y tế và F&B đang hình thành và vận hành.",
  },
  {
    image: "/images/location-infrastructure.jpg",
    icon: Route,
    number: "02",
    label: "INFRASTRUCTURE",
    title: "Dòng chảy hạ tầng",
    desc: "Câu chuyện vị trí gắn với Quốc lộ 13, Vành đai 3, Vành đai 4 và các định hướng phát triển giao thông.",
  },
  {
    image: "/images/location-tod.jpg",
    icon: TrainFront,
    number: "03",
    label: "TOD / TOC",
    title: "Đô thị gắn với giao thông",
    desc: "Định hướng TOD và TOC đặt giao thông công cộng, tiện ích và cộng đồng vào cùng một hệ sinh thái.",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[520px] w-[520px] rounded-full bg-blue-500/5 blur-[200px]" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">

        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="mx-auto max-w-4xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-sm">
            PROJECT LOCATION
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.03em] text-[#0F172A] md:text-5xl lg:text-6xl">
            Vị trí trong
            <br />
            <span className="text-[#C89A2B]">
              dòng chảy đô thị mới
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Nam Mekong Grand Plaza được giới thiệu tại Thành phố mới
            Bình Dương, trong bối cảnh hệ sinh thái đô thị, thương mại
            và hạ tầng kết nối đang tiếp tục phát triển.
          </p>
        </div>

        {/* ===================================================
            MAIN MAP
        =================================================== */}

        <div
          className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14"
          data-aos="fade-up"
        >

          {/* =================================================
              MAP IMAGE
          ================================================= */}

          <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:rounded-[40px]">

            <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] bg-slate-200 sm:rounded-[32px]">

              <Image
                src="/images/location-map.jpg"
                alt="Bản đồ vị trí Nam Mekong Grand Plaza"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/65 via-transparent to-transparent" />

              {/* LOCATION LABEL */}

              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">

                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-[#08111F]/70 px-4 py-3 backdrop-blur-xl sm:px-5 sm:py-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C542] text-[#0F172A]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-yellow-300">
                      LOCATION
                    </p>

                    <p className="mt-1 text-sm font-bold text-white sm:text-base">
                      Thành phố mới Bình Dương
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* =================================================
              MAP CONTENT
          ================================================= */}

          <div
            className="lg:pl-2"
            data-aos="fade-left"
          >

            <span className="inline-flex rounded-full bg-[#F5C542]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
              LOCATION STORY
            </span>

            <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-[42px]">
              Không chỉ là
              <br />
              một vị trí
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Giá trị vị trí được nhìn trong mối liên hệ giữa dự án,
              hệ sinh thái hiện hữu, hạ tầng kết nối và định hướng
              phát triển đô thị quanh giao thông.
            </p>

            {/* WORLD TRADE CENTER */}

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.07)]">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542]/15 text-[#C89A2B]">
                  <Landmark size={23} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C89A2B]">
                    CENTRAL POINT
                  </p>

                  <h4 className="mt-2 text-xl font-black text-[#0F172A]">
                    World Trade Center
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    World Trade Center được tài liệu giới thiệu như
                    một điểm nhấn trong hệ sinh thái Thành phố mới,
                    kết nối thương mại, triển lãm, văn phòng, khách sạn
                    và dịch vụ.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ===================================================
            3 LOCATION IMAGES
        =================================================== */}

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-7">

          {locationCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.image}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(15,23,42,0.15)]"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                {/* IMAGE */}

                <div className="relative h-[300px] overflow-hidden sm:h-[340px]">

                  <Image
                    src={item.image}
                    alt={`${item.title} - Nam Mekong Grand Plaza`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/90 via-[#08111F]/15 to-transparent" />

                  {/* NUMBER */}

                  <div className="absolute left-6 top-5">

                    <span className="text-5xl font-black leading-none text-white/25">
                      {item.number}
                    </span>

                  </div>

                  {/* ICON */}

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-xl">
                    <Icon size={20} />
                  </div>

                  {/* IMAGE TITLE */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
                      {item.label}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                      {item.title}
                    </h3>

                  </div>
                </div>

                {/* DESCRIPTION */}

                <div className="p-6 sm:p-7">

                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {item.desc}
                  </p>

                </div>
              </article>
            );
          })}

        </div>

        {/* ===================================================
            INFRASTRUCTURE STORY
        =================================================== */}

        <div
          className="mt-16 overflow-hidden rounded-[36px] bg-[#08111F] shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:mt-20"
          data-aos="fade-up"
        >

          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-[400px] w-[400px] rounded-full bg-yellow-400/10 blur-[120px]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              {/* TITLE */}

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-300">
                  INFRASTRUCTURE
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Dòng chảy
                  <br />
                  hạ tầng
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  Theo tài liệu giới thiệu dự án, câu chuyện hạ tầng
                  được đặt trong mối liên hệ với Quốc lộ 13, Vành đai 3,
                  Vành đai 4 và các tuyến metro kết nối khu vực.
                </p>

              </div>

              {/* INFRASTRUCTURE POINTS */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                    ROAD
                  </p>

                  <h4 className="mt-3 text-xl font-black text-white">
                    Quốc lộ 13
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Tuyến kết nối quan trọng được đề cập trong tài liệu.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                    RING ROAD
                  </p>

                  <h4 className="mt-3 text-xl font-black text-white">
                    Vành đai 3
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Một trong những tuyến hạ tầng trọng điểm của khu vực.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                    FUTURE
                  </p>

                  <h4 className="mt-3 text-xl font-black text-white">
                    Vành đai 4
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Được đề cập trong định hướng phát triển hạ tầng.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                    TRANSIT
                  </p>

                  <h4 className="mt-3 text-xl font-black text-white">
                    Metro
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Định hướng giao thông công cộng kết nối khu vực.
                  </p>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            TOD / TOC
        =================================================== */}

        <div
          className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20"
          data-aos="fade-up"
        >

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-9">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5C542]/15 text-[#C89A2B]">
              <TrainFront size={23} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[#C89A2B]">
              TOD
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#0F172A] sm:text-3xl">
              Đô thị gắn với
              <br />
              giao thông
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              Tài liệu giới thiệu TOD như một mô hình phát triển
              gắn giao thông công cộng với các tiện ích và hoạt động
              đô thị xung quanh.
            </p>

          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-[#F5C542] to-[#E9A900] p-7 shadow-[0_20px_50px_rgba(245,197,66,0.20)] sm:p-9">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0F172A]/70">
              TOC
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#0F172A] sm:text-3xl">
              Cộng đồng quanh
              <br />
              giao thông & tiện ích
            </h3>

            <p className="mt-5 leading-7 text-[#0F172A]/75">
              Câu chuyện được mở rộng từ TOD sang TOC – Transit Oriented
              Communities, hướng đến cộng đồng nơi nhiều nhu cầu sống
              có thể được đáp ứng trong phạm vi thuận tiện.
            </p>

          </div>

        </div>

        {/* ===================================================
            CTA
        =================================================== */}

        <div
          className="mt-16 flex flex-wrap justify-center gap-4 lg:mt-20"
          data-aos="fade-up"
        >

          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl"
          >
            Đăng ký tư vấn

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="#amenities"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:text-[#C89A2B]"
          >
            Khám phá tiện ích
          </Link>

        </div>

      </div>
    </section>
  );
}