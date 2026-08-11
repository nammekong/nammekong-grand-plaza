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

  if (!loading) {
    return null;
  }

  return (
    <div className="pointer-events-auto fixed inset-0 z-[999999] flex items-center justify-center bg-[#08111F]">
      <div className="flex flex-col items-center px-6 text-center">
        {/* Logo */}
        <Image
          src="/images/logo-white.png"
          alt="Nam Mekong Grand Plaza"
          width={220}
          height={90}
          priority
          className="h-auto w-[180px] animate-pulse sm:w-[220px]"
        />

        {/* Text */}
        <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
          NAM MEKONG GRAND PLAZA
        </h2>

        <p className="mt-3 text-sm tracking-[5px] text-yellow-400">
          Bình Dương
        </p>

        {/* Loading Bar */}
        <div className="mt-10 h-[6px] w-64 overflow-hidden rounded-full bg-white/10 sm:w-72">
          <div className="h-full w-full origin-left animate-[loading_2s_linear_forwards] rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300" />
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-xs uppercase tracking-[6px] text-slate-400">
          Loading...
        </p>
      </div>
    </div>
  );
}