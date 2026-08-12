"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  HeartPulse,
  Route,
  Waves,
} from "lucide-react";

const values = [
  {
    icon: Waves,
    number: "01",
    title: "Dòng chảy năng lượng",
    desc: "Nam Mekong Grand Plaza được đặt trong bối cảnh một Bình Dương đang chuyển mình mạnh mẽ, nơi các hoạt động kinh tế, đô thị và hệ sinh thái dịch vụ ngày càng hội tụ.",
  },
  {
    icon: Route,
    number: "02",
    title: "Dòng chảy hạ tầng",
    desc: "Giá trị vị trí được nhìn từ khả năng kết nối với hệ thống giao thông, các khu chức năng và hệ sinh thái đô thị đang hình thành quanh khu vực.",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Dòng chảy dưỡng lành",
    desc: "Dự án theo đuổi triết lý Wellness Real Estate, hướng đến một môi trường sống quan tâm đồng thời đến thể chất, tinh thần và trải nghiệm của cư dân.",
  },
  {
    icon: Building2,
    number: "04",
    title: "Dòng chảy thặng dư",
    desc: "Giá trị của bất động sản được nhìn từ khả năng khai thác, nhu cầu ở thực và sự hoàn thiện của hạ tầng, thay vì chỉ nhìn vào một yếu tố đơn lẻ.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
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
          className="mx-auto max-w-4xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-xs">
            ABOUT NAM MEKONG
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Nam Mekong Grand Plaza
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Dòng chảy hội tụ
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Nam Mekong Grand Plaza được định vị như một điểm hội tụ
            của nhiều dòng chảy giá trị: sự chuyển mình của đô thị,
            hạ tầng kết nối, chất lượng sống và những giá trị có thể
            được hình thành theo thời gian.
          </p>
        </div>

        {/* ===================================================
            MAIN INTRODUCTION
        =================================================== */}

        <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              IMAGE
          ================================================= */}

          <div
            className="relative"
            data-aos="fade-right"
          >
            <div className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:rounded-[36px]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] sm:rounded-[28px]">

                <Image
                  src="/images/about.jpg"
                  alt="Nam Mekong Grand Plaza"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>
            </div>

            {/* FLOATING CARD */}

            <div
              className="absolute -bottom-7 right-3 max-w-[285px] rounded-3xl border border-white/80 bg-white/95 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:right-8 sm:p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C89A2B]">
                THE CORE IDEA
              </p>

              <h3 className="mt-3 text-xl font-black leading-tight text-[#0F172A] sm:text-2xl">
                Hội tụ để tạo nên
                <br />
                giá trị dài hạn
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Một dự án không chỉ được nhìn từ công trình,
                mà từ những dòng chảy tạo nên giá trị xung quanh.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div
            data-aos="fade-left"
          >

            <span className="inline-flex rounded-full bg-[#F5C542]/10 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-xs">
              PROJECT STORY
            </span>

            <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.025em] text-[#0F172A] sm:text-4xl lg:text-[42px]">
              Không chỉ là một
              <br />
              dự án bất động sản
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

              <p>
                Một dòng sông lớn không được tạo nên từ một nguồn nước
                duy nhất. Nó hình thành từ sự hội tụ của nhiều dòng chảy.
              </p>

              <p>
                Nam Mekong Grand Plaza cũng được xây dựng câu chuyện
                theo tinh thần đó: giá trị không nằm ở một yếu tố riêng
                lẻ, mà đến từ sự hội tụ của nhiều yếu tố trong cùng
                một hệ sinh thái.
              </p>

              <p>
                Từ bối cảnh phát triển của Bình Dương, hệ thống hạ tầng,
                môi trường sống đến khả năng hình thành giá trị theo
                thời gian — tất cả được kết nối thành một câu chuyện
                thống nhất.
              </p>

            </div>

            {/* HIGHLIGHT */}

            <div className="mt-9 rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-7">

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C89A2B] sm:text-xs">
                FOUR FLOWS
              </p>

              <h4 className="mt-3 text-xl font-black text-[#0F172A] sm:text-2xl">
                Bốn dòng chảy giá trị
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Năng lượng hội tụ • Hạ tầng • Dưỡng lành • Thặng dư
              </p>

            </div>

            {/* CTA */}

            <div
              className="mt-9 flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >

              <Link
                href="#location"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl sm:px-8"
              >
                Khám phá vị trí

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#video"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:text-[#C89A2B] sm:px-8"
              >
                Xem video dự án
              </Link>

            </div>

          </div>
        </div>

        {/* ===================================================
            FOUR FLOWS
        =================================================== */}

        <div className="mt-20 lg:mt-28">

          <div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C89A2B] sm:text-xs">
              FOUR FLOWS OF VALUE
            </span>

            <h3 className="mt-4 text-3xl font-black tracking-[-0.025em] text-[#0F172A] sm:text-4xl">
              Bốn dòng chảy tạo nên câu chuyện Nam Mekong
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Đây là cách tài liệu dự án trình bày nền tảng giá trị
              của Nam Mekong Grand Plaza.
            </p>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">

            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 100, 300)}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)] sm:p-7"
                >

                  {/* NUMBER */}

                  <div className="absolute right-5 top-3 text-6xl font-black tracking-[-0.05em] text-slate-100 transition-colors duration-300 group-hover:text-yellow-50">
                    {item.number}
                  </div>

                  {/* ICON */}

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#C89A2B] transition-all duration-300 group-hover:bg-[#F5C542] group-hover:text-[#0F172A]">
                    <Icon size={25} strokeWidth={2} />
                  </div>

                  {/* CONTENT */}

                  <h4 className="relative mt-6 text-xl font-black leading-tight text-[#0F172A]">
                    {item.title}
                  </h4>

                  <p className="relative mt-4 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                </article>
              );
            })}

          </div>
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
        =================================================== */}

        <div
          className="mt-16 overflow-hidden rounded-[32px] bg-[#08111F] shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:mt-20"
          data-aos="zoom-in"
        >

          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            <div className="pointer-events-none absolute -right-24 -top-32 h-[350px] w-[350px] rounded-full bg-yellow-400/10 blur-[100px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-300 sm:text-xs">
                  NAM MEKONG GRAND PLAZA
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                  Giá trị không chỉ nằm ở
                  <span className="text-yellow-400">
                    {" "}một điểm chạm
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Mà nằm ở sự hội tụ của những dòng chảy tạo nên
                  một môi trường sống, làm việc và kết nối trong
                  một đô thị đang chuyển mình.
                </p>

              </div>

              <Link
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#0F172A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:px-8"
              >
                Nhận thông tin dự án

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