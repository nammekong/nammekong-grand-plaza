"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

const unitPlans = [
  {
    id: 1,
    name: "Studio",
    shortName: "Studio",
    category: "STUDIO",
    area: "36–45 m²",
    image: "/images/studio.jpg",
    description:
      "Căn hộ Studio được giới thiệu với cách bố trí không gian gọn gàng, phù hợp với nhu cầu sử dụng linh hoạt trong một diện tích vừa phải.",
  },
  {
    id: 2,
    name: "2 Phòng ngủ",
    shortName: "2PN",
    category: "2 BEDROOMS",
    area: "65–73 m²",
    image: "/images/2br.jpg",
    description:
      "Mặt bằng 2 phòng ngủ được tổ chức với các khu vực chức năng riêng biệt, phù hợp cho nhu cầu sinh hoạt của gia đình.",
  },
  {
    id: 3,
    name: "3 Phòng ngủ A1",
    shortName: "3PN A1",
    category: "3 BEDROOMS A1",
    area: "81–125 m²",
    image: "/images/3br-a1.jpg",
    description:
      "Mặt bằng 3 phòng ngủ A1 được trình bày trực quan, giúp người xem tham khảo cách bố trí các không gian chức năng.",
  },
  {
    id: 4,
    name: "3 Phòng ngủ A4",
    shortName: "3PN A4",
    category: "3 BEDROOMS A4",
    area: "81–125 m²",
    image: "/images/3br-a4.jpg",
    description:
      "Mặt bằng 3 phòng ngủ A4 được giới thiệu với bố cục rộng rãi, giúp người xem dễ hình dung cách tổ chức không gian.",
  },
  {
    id: 5,
    name: "Penthouse",
    shortName: "Penthouse",
    category: "PENTHOUSE",
    area: "267–442 m²",
    image: "/images/penthouse.jpg",
    description:
      "Penthouse thuộc nhóm sản phẩm diện tích lớn, được giới thiệu nhằm cung cấp một lựa chọn không gian sống cao cấp và riêng tư.",
  },
];

export default function UnitPlan() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const current = unitPlans[active];

  const nextImage = () => {
    setActive((prev) =>
      prev === unitPlans.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActive((prev) =>
      prev === 0 ? unitPlans.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <section
        id="unitplan"
        className="relative overflow-hidden bg-white py-24 lg:py-32"
      >
        {/* Background */}

        <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-[180px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/5 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Heading */}

          <div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C89A2B]">
              UNIT PLAN
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#0F172A] md:text-5xl">
              Mặt bằng căn hộ
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Khám phá các loại mặt bằng được giới thiệu,
              giúp người xem dễ dàng tham khảo cách bố trí
              không gian của từng loại căn hộ.
            </p>
          </div>

          {/* Tabs */}

          <div
            className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {unitPlans.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                  active === index
                    ? "bg-[#F5C542] text-[#0F172A] shadow-xl"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-[#F5C542] hover:text-[#C89A2B]"
                }`}
              >
                <span className="hidden sm:inline">
                  {item.name}
                </span>

                <span className="sm:hidden">
                  {item.shortName}
                </span>
              </button>
            ))}
          </div>

          {/* Main content */}

          <div className="mt-16 grid items-start gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">

            {/* Image */}

            <div data-aos="fade-right" className="min-w-0">
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-4">

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-label={`Xem lớn mặt bằng ${current.name}`}
                  className="group relative block w-full overflow-hidden rounded-[26px] bg-slate-100"
                >
                  <Image
                    src={current.image}
                    alt={`Mặt bằng ${current.name} - Nam Mekong Grand Plaza`}
                    width={1800}
                    height={1400}
                    priority
                    className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-[#08111F]/30 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] shadow-xl">
                      <Maximize2 size={17} />
                      Xem lớn
                    </span>
                  </div>
                </button>

                {/* Navigation */}

                <div className="pointer-events-none absolute left-7 top-1/2 flex w-[calc(100%-56px)] -translate-y-1/2 justify-between">

                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Mặt bằng trước"
                    className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0F172A] shadow-xl transition hover:-translate-x-1 hover:bg-[#F5C542]"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Mặt bằng tiếp theo"
                    className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0F172A] shadow-xl transition hover:translate-x-1 hover:bg-[#F5C542]"
                  >
                    <ChevronRight size={22} />
                  </button>

                </div>
              </div>

              {/* Thumbnails */}

              <div className="mt-5 grid grid-cols-5 gap-2 sm:gap-3">
                {unitPlans.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Chọn ${item.name}`}
                    className={`group overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300 ${
                      active === index
                        ? "border-[#F5C542] shadow-lg"
                        : "border-slate-200 hover:border-yellow-300"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={260}
                      height={180}
                      className="h-16 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-20"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Information */}

            <div data-aos="fade-left" className="lg:pt-4">

              <span className="inline-flex rounded-full bg-yellow-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C89A2B]">
                {current.category}
              </span>

              <h3 className="mt-6 text-4xl font-black leading-tight text-[#0F172A] sm:text-5xl">
                {current.name}
              </h3>

              {/* Area */}

              <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 px-6 py-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C89A2B]">
                    DIỆN TÍCH THAM KHẢO
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#0F172A] sm:text-3xl">
                    {current.area}
                  </p>
                </div>
              </div>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                {current.description}
              </p>

              {/* Cards */}

              <div className="mt-10 space-y-4">

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#C89A2B]">
                      <span className="text-sm font-black">01</span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#0F172A]">
                        Diện tích
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        Khoảng diện tích tham khảo của nhóm sản phẩm
                        đang được lựa chọn.
                      </p>

                      <p className="mt-2 font-bold text-[#C89A2B]">
                        {current.area}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#C89A2B]">
                      <span className="text-sm font-black">02</span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#0F172A]">
                        Bố trí trực quan
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        Hình ảnh mặt bằng giúp người xem dễ hình dung
                        cách tổ chức các không gian chức năng.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-[#C89A2B]">
                      <span className="text-sm font-black">03</span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#0F172A]">
                        Xem chi tiết
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        Nhấn vào hình ảnh để mở chế độ phóng lớn
                        và xem mặt bằng rõ hơn.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* CTA */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16233D] hover:shadow-xl"
                >
                  Nhận tư vấn mặt bằng

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542] hover:text-[#C89A2B]"
                >
                  <Maximize2 size={18} />
                  Xem mặt bằng lớn
                </button>

              </div>
            </div>
          </div>

          {/* Note */}

          <div
            className="mt-16 rounded-3xl border border-yellow-200 bg-yellow-50/70 p-6 text-center"
            data-aos="fade-up"
          >
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-[#0F172A]">
                Lưu ý:
              </strong>{" "}
              Diện tích hiển thị trên website là thông tin tham khảo
              theo nhóm sản phẩm. Diện tích và thông số chính thức
              của từng mã căn được xác định theo hồ sơ, mặt bằng và
              tài liệu giao dịch chính thức.
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox */}

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-6"
          onClick={() => setOpen(false)}
        >

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Đóng"
            className="absolute right-4 top-4 z-[10000] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            aria-label="Mặt bằng trước"
            className="absolute left-3 top-1/2 z-[10000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Mặt bằng tiếp theo"
            className="absolute right-3 top-1/2 z-[10000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
          >
            <ChevronRight size={30} />
          </button>

          <div
            className="relative flex h-[78vh] w-[88vw] max-w-7xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.image}
              alt={`Mặt bằng ${current.name} - Nam Mekong Grand Plaza`}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center sm:top-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-xs">
              {current.category}
            </p>

            <h3 className="mt-2 text-xl font-black text-white sm:text-3xl">
              {current.name}
            </h3>

            <p className="mt-1 text-sm font-semibold text-white/70">
              Diện tích tham khảo: {current.area}
            </p>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.3em] text-white backdrop-blur-xl sm:bottom-7 sm:text-sm">
            {String(active + 1).padStart(2, "0")}
            {" / "}
            {String(unitPlans.length).padStart(2, "0")}
          </div>

          <div
            className="absolute bottom-16 left-1/2 flex max-w-[90vw] -translate-x-1/2 gap-2 overflow-x-auto rounded-full bg-white/10 px-3 py-2 backdrop-blur-xl sm:bottom-20 sm:gap-3 sm:px-4 sm:py-3"
            onClick={(event) => event.stopPropagation()}
          >
            {unitPlans.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Xem ${item.name}`}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-14 sm:w-20 ${
                  active === index
                    ? "scale-105 border-yellow-400 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      )}
    </>
  );
}