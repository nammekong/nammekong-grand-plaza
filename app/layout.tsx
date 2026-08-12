import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nam Mekong Grand Plaza Bình Dương | Căn hộ cao cấp",

  description:
    "Nam Mekong Grand Plaza Bình Dương – tổ hợp trung tâm thương mại, văn phòng và căn hộ cao cấp tại trung tâm Thành phố mới Bình Dương. Khám phá vị trí, tiện ích, mặt bằng và thông tin dự án.",

  alternates: {
    canonical: "https://nammekongbinhduong.com.vn",
  },

  openGraph: {
    title: "Nam Mekong Grand Plaza Bình Dương",
    description:
      "Khám phá Nam Mekong Grand Plaza – tổ hợp trung tâm thương mại, văn phòng và căn hộ cao cấp tại trung tâm Thành phố mới Bình Dương.",
    url: "https://nammekongbinhduong.com.vn",
    siteName: "Nam Mekong Grand Plaza Bình Dương",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}