import type { Metadata, Viewport } from "next";
import {
  Be_Vietnam_Pro,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const vietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-vietnam",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/* =========================================================
   WEBSITE CONFIG
   ========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nammekongbinhduong.com.vn";

/* =========================================================
   SEO METADATA
   ========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nam Mekong Grand Plaza | Thành phố mới Bình Dương",
    template: "%s | Nam Mekong Grand Plaza",
  },

  description:
    "Nam Mekong Grand Plaza tại Thành phố mới Bình Dương. Khám phá thông tin dự án, vị trí, tiện ích, Master Plan, mặt bằng căn hộ và thông tin liên hệ.",

  keywords: [
    "Nam Mekong Grand Plaza",
    "Nam Mekong Grand Plaza Bình Dương",
    "Nam Mekong Grand Plaza Thành phố mới Bình Dương",
    "dự án Nam Mekong Grand Plaza",
    "căn hộ Nam Mekong Grand Plaza",
    "mặt bằng Nam Mekong Grand Plaza",
    "Master Plan Nam Mekong Grand Plaza",
    "tiện ích Nam Mekong Grand Plaza",
    "bất động sản Bình Dương",
    "căn hộ Bình Dương",
  ],

  authors: [
    {
      name: "Nam Mekong Grand Plaza",
    },
  ],

  creator: "Nam Mekong Grand Plaza",

  publisher: "Nam Mekong Grand Plaza",

  applicationName: "Nam Mekong Grand Plaza",

  category: "real estate",

  alternates: {
    canonical: "/",
  },

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Nam Mekong Grand Plaza",

    title:
      "Nam Mekong Grand Plaza | Thành phố mới Bình Dương",

    description:
      "Khám phá thông tin Nam Mekong Grand Plaza: vị trí, tiện ích, Master Plan, mặt bằng căn hộ và thông tin liên hệ.",

    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: "Nam Mekong Grand Plaza",
      },
    ],
  },

  /* =======================================================
     TWITTER / SOCIAL
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title:
      "Nam Mekong Grand Plaza | Thành phố mới Bình Dương",

    description:
      "Thông tin dự án Nam Mekong Grand Plaza tại Thành phố mới Bình Dương.",

    images: ["/images/hero-bg.jpg"],
  },

  /* =======================================================
     SEARCH ENGINE ROBOTS
  ======================================================= */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* =======================================================
     FAVICON
  ======================================================= */

  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${vietnamPro.variable} ${jakarta.variable}`}
    >
      <body className="font-[var(--font-vietnam)] antialiased">
        {children}
      </body>
    </html>
  );
}