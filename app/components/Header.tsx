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

const HEADER_OFFSET = 90;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  /* =========================================================
     SCROLL
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
          rect.top <= HEADER_OFFSET + 30 &&
          rect.bottom > HEADER_OFFSET + 30
        ) {
          currentSection = `#${section.id}`;
          break;
        }
      }

      /* Khi gần cuối trang */
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
     MOBILE SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================================
     MENU CLICK
  ========================================================= */

  const handleMenuClick = (link: string) => {
    setOpen(false);

    const target = document.querySelector<HTMLElement>(link);

    if (!target) {
      return;
    }

    const elementPosition =
      target.getBoundingClientRect().top + window.scrollY;

    const targetPosition = Math.max(
      0,
      elementPosition - HEADER_OFFSET
    );

    window.setTimeout(() => {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 50);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#0B1023]/95 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-[#0B1023]/90 backdrop-blur-md"
      }`}
    >
      {/* =====================================================
          HEADER BAR
      ===================================================== */}

      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 ${
          scrolled
            ? "h-[68px] md:h-[76px]"
            : "h-[72px] md:h-[82px]"
        }`}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <button
          type="button"
          onClick={() => handleMenuClick("#home")}
          aria-label="Trang chủ"
          className="flex h-full shrink-0 items-center overflow-hidden"
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

        {/* ===================================================
            DESKTOP MENU
        =================================================== */}

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
                aria-current={isActive ? "page" : undefined}
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

        {/* ===================================================
            DESKTOP HOTLINE
        =================================================== */}

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

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400 active:scale-95 lg:hidden"
        >
          {open ? (
            <X
              size={26}
              strokeWidth={2}
            />
          ) : (
            <Menu
              size={26}
              strokeWidth={2}
            />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/10 bg-[#0B1023]/98 shadow-2xl backdrop-blur-xl">
            <nav
              aria-label="Điều hướng mobile"
              className="mx-auto flex max-w-xl flex-col px-4 py-3 sm:px-6"
            >
              {menu.map((item) => {
                const isActive =
                  activeSection === item.link;

                return (
                  <button
                    key={item.link}
                    type="button"
                    onClick={() =>
                      handleMenuClick(item.link)
                    }
                    aria-current={
                      isActive ? "page" : undefined
                    }
                    className={`flex min-h-[50px] items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200 active:scale-[0.98] ${
                      isActive
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "text-white hover:bg-white/5 hover:text-yellow-400"
                    }`}
                  >
                    <span className="text-[15px] font-medium">
                      {item.name}
                    </span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    )}
                  </button>
                );
              })}

              {/* =================================================
                  MOBILE HOTLINE
              ================================================= */}

              <a
                href="tel:0767615368"
                aria-label="Gọi hotline 07676 15 368"
                className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 font-bold text-slate-900 shadow-lg transition-transform duration-200 active:scale-[0.98]"
              >
                <Phone
                  size={18}
                  strokeWidth={2.5}
                />

                <span>07676 15 368</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}