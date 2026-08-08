"use client";

import {
  Phone,
  MessageCircle,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const PHONE = "0767615368";

const ZALO_PERSONAL =
  "https://zalo.me/84767615368";

const ZALO_GROUP =
  "https://zalo.me/g/jq5drlb0pcsuxyaqohi1";

/* =========================================================
   COMPONENT
========================================================= */

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          DESKTOP / TABLET FLOATING CONTACT
      ===================================================== */}

      <div className="fixed bottom-5 right-4 z-[9990] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">

        {/* ===================================================
            ACTION BUTTONS
        =================================================== */}

        <div
          className={`flex flex-col items-end gap-3 transition-all duration-300 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >

          {/* =================================================
              ZALO GROUP
          ================================================= */}

          <a
            href={ZALO_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tham gia nhóm Zalo Nam Mekong Grand Plaza"
            className="group flex items-center gap-3"
          >
            <span className="hidden rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white shadow-xl sm:block">
              Tham gia nhóm Zalo
            </span>

            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-[0_10px_30px_rgba(0,104,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,104,255,0.45)]">
              <Users
                size={24}
                strokeWidth={2.4}
              />
            </span>
          </a>

          {/* =================================================
              ZALO PERSONAL
          ================================================= */}

          <a
            href={ZALO_PERSONAL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat Zalo cá nhân"
            className="group flex items-center gap-3"
          >
            <span className="hidden rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white shadow-xl sm:block">
              Chat Zalo trực tiếp
            </span>

            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-[0_10px_30px_rgba(0,104,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,104,255,0.45)]">
              <MessageCircle
                size={24}
                strokeWidth={2.4}
              />
            </span>
          </a>

          {/* =================================================
              PHONE
          ================================================= */}

          <a
            href={`tel:${PHONE}`}
            aria-label="Gọi hotline 07676 15 368"
            className="group flex items-center gap-3"
          >
            <span className="hidden rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white shadow-xl sm:block">
              Gọi ngay · 07676 15 368
            </span>

            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-[#08111F] shadow-[0_10px_30px_rgba(245,197,66,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(245,197,66,0.45)]">

              {/* Pulse */}

              <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping" />

              <Phone
                size={24}
                strokeWidth={2.5}
                className="relative z-10"
              />
            </span>
          </a>
        </div>

        {/* ===================================================
            MAIN TOGGLE
        =================================================== */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={
            open
              ? "Đóng các kênh liên hệ"
              : "Mở các kênh liên hệ"
          }
          aria-expanded={open}
          className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300 sm:h-[68px] sm:w-[68px] ${
            open
              ? "bg-[#0F172A] text-white"
              : "bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-[#08111F] hover:-translate-y-1 hover:scale-105"
          }`}
        >
          {open ? (
            <X
              size={27}
              strokeWidth={2.5}
            />
          ) : (
            <Phone
              size={27}
              strokeWidth={2.5}
              className="animate-pulse"
            />
          )}

          {/* Notification dot */}

          {!open && (
            <span className="absolute right-1 top-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />

              <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-red-500" />
            </span>
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE QUICK CONTACT BAR
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-[9980] flex border-t border-white/10 bg-[#08111F]/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden">

        {/* =================================================
            PHONE
        ================================================= */}

        <a
          href={`tel:${PHONE}`}
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-yellow-400 transition hover:bg-white/5 active:scale-95"
        >
          <Phone size={20} />

          <span className="text-[10px] font-semibold">
            Gọi ngay
          </span>
        </a>

        {/* =================================================
            ZALO PERSONAL
        ================================================= */}

        <a
          href={ZALO_PERSONAL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-[#4DA3FF] transition hover:bg-white/5 active:scale-95"
        >
          <MessageCircle size={20} />

          <span className="text-[10px] font-semibold">
            Zalo
          </span>
        </a>

        {/* =================================================
            ZALO GROUP
        ================================================= */}

        <a
          href={ZALO_GROUP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-[#4DA3FF] transition hover:bg-white/5 active:scale-95"
        >
          <Users size={20} />

          <span className="text-[10px] font-semibold">
            Nhóm Zalo
          </span>
        </a>
      </div>
    </>
  );
}