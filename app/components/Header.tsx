"use client";

import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const menu = [
  { name: "Trang chủ", link: "#home" },
  { name: "Giới thiệu", link: "#about" },
  { name: "Vị trí", link: "#location" },
  { name: "Tiện ích", link: "#amenities" },
  { name: "Thư viện", link: "#gallery" },
  { name: "Master Plan", link: "#masterplan" },
  { name: "Căn hộ", link: "#unitplan" },
  { name: "Liên hệ", link: "#contact" },
];

const HEADER_OFFSET = 80;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  /* =========================================================
     THEO DÕI SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 30);

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
      );

      let currentSection = "#home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= HEADER_OFFSET + 40 &&
          rect.bottom > HEADER_OFFSET + 40
        ) {
          currentSection = `#${section.id}`;
          break;
        }
      }

      // Khi gần cuối trang
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        const lastSection = sections[sections.length - 1];

        if (lastSection) {
          currentSection = `#${lastSection.id}`;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* =========================================================
     KHÓA SCROLL KHI MENU MOBILE MỞ
  ========================================================= */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================================
     CLICK MENU
  ========================================================= */

  const handleMenuClick = (link: string) => {
    // Đóng menu trước
    setOpen(false);

    // Chờ menu đóng rồi mới scroll
    window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(link);

      if (!target) {
        return;
      }

      const targetTop =
        target.getBoundingClientRect().top +
        window.scrollY -
        HEADER_OFFSET;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    }, 100);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[9999] w-full transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-[#0B1023]/98 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "bg-[#0B1023]/95 backdrop-blur-md"
        }`}
      >
        {/* ===================================================
            HEADER BAR
        =================================================== */}

        <div
          className={`mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 ${
            scrolled
              ? "h-[68px] md:h-[76px]"
              : "h-[72px] md:h-[82px]"
          }`}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <button
            type="button"
            onClick={() => handleMenuClick("#home")}
            aria-label="Trang chủ"
            className="relative z-[10001] flex h-full shrink-0 items-center"
          >
            <Image
              src="/images/logo-white.png"
              alt="Nam Mekong Grand Plaza"
              width={320}
              height={120}
              priority
              sizes="(max-width: 768px) 145px, 190px"
              className={`block w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? "h-[48px] sm:h-[52px] md:h-[56px]"
                  : "h-[54px] sm:h-[58px] md:h-[62px]"
              }`}
            />
          </button>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <nav
            aria-label="Điều hướng chính"
            className="hidden items-center gap-4 lg:flex xl:gap-6"
          >
            {menu.map((item) => {
              const isActive = activeSection === item.link;

              return (
                <button
                  key={item.link}
                  type="button"
                  onClick={() => handleMenuClick(item.link)}
                  className={`group relative whitespace-nowrap py-2 text-[13px] font-semibold transition-all duration-300 xl:text-[14px] ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white/90 hover:text-yellow-400"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-yellow-400 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP HOTLINE
          ================================================= */}

          <a
            href="tel:0767615368"
            aria-label="Gọi hotline 07676 15 368"
            className="hidden h-11 items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 px-5 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-yellow-400/30 lg:flex xl:h-12 xl:px-6"
          >
            <Phone
              size={17}
              strokeWidth={2.5}
            />

            <span className="whitespace-nowrap text-sm xl:text-[15px]">
              07676 15 368
            </span>
          </a>

          {/* =================================================
              MOBILE HAMBURGER
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            className="relative z-[10001] flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-lg active:scale-95 lg:hidden"
          >
            {open ? (
              <X
                size={27}
                strokeWidth={2.2}
              />
            ) : (
              <Menu
                size={27}
                strokeWidth={2.2}
              />
            )}
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
        =================================================== */}

        <div
          className={`absolute left-0 top-full w-full border-t border-white/10 bg-[#0B1023]/98 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }`}
        >
          <nav
            aria-label="Điều hướng mobile"
            className="mx-auto max-h-[calc(100vh-80px)] w-full max-w-xl overflow-y-auto px-4 py-4 sm:px-6"
          >
            {menu.map((item) => {
              const isActive = activeSection === item.link;

              return (
                <button
                  key={item.link}
                  type="button"
                  onClick={() => handleMenuClick(item.link)}
                  className={`mb-1 flex min-h-[52px] w-full touch-manipulation items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200 active:scale-[0.98] ${
                    isActive
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "text-white hover:bg-white/5 hover:text-yellow-400"
                  }`}
                >
                  <span className="text-[15px] font-medium">
                    {item.name}
                  </span>

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  )}
                </button>
              );
            })}

            {/* =================================================
                MOBILE HOTLINE
            ================================================= */}

            <a
              href="tel:0767615368"
              className="mt-3 flex h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 font-bold text-slate-900 shadow-lg active:scale-[0.98]"
            >
              <Phone
                size={18}
                strokeWidth={2.5}
              />

              <span>07676 15 368</span>
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================
          MOBILE BACKDROP
          Bấm ra ngoài để đóng menu
      ===================================================== */}

      {open && (
        <button
          type="button"
          aria-label="Đóng menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9990] bg-black/40 lg:hidden"
        />
      )}
    </>
  );
}