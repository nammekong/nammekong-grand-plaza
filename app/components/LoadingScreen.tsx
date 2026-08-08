"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#08111F]">

      <div className="flex flex-col items-center">

        {/* Logo */}

        <Image
          src="/images/logo-white.png"
          alt="Nam Mekong Grand Plaza"
          width={220}
          height={90}
          priority
          className="animate-pulse"
        />

        {/* Text */}

        <h2 className="mt-8 text-3xl font-bold text-white">
          NAM MEKONG GRAND PLAZA
        </h2>

        <p className="mt-3 tracking-[6px] text-yellow-400">
          Bình Dương
        </p>

        {/* ===== PHẦN 2 ===== */}        {/* Loading Bar */}

        <div className="mt-10 h-[6px] w-72 overflow-hidden rounded-full bg-white/10">

          <div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 animate-[loading_2s_linear_forwards]"
          />

        </div>

        {/* Loading Text */}

        <p className="mt-6 text-sm uppercase tracking-[8px] text-slate-400">
          Loading...
        </p>

      </div>

      {/* ===== PHẦN 3 ===== */}    </div>
  );
}