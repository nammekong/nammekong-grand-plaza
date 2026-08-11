export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nammekong-grand-plaza.vercel.app/#organization",
        name: "Nam Mekong Grand Plaza",
        url: "https://nammekong-grand-plaza.vercel.app/",
        logo: "https://nammekong-grand-plaza.vercel.app/logo-white.png",
        image: "https://nammekong-grand-plaza.vercel.app/hero.jpg",
        description:
          "Website giới thiệu dự án Nam Mekong Grand Plaza.",
      },
      {
        "@type": "WebSite",
        "@id": "https://nammekong-grand-plaza.vercel.app/#website",
        url: "https://nammekong-grand-plaza.vercel.app/",
        name: "Nam Mekong Grand Plaza",
        publisher: {
          "@id":
            "https://nammekong-grand-plaza.vercel.app/#organization",
        },
        inLanguage: "vi-VN",
      },
      {
        "@type": "Residence",
        name: "Nam Mekong Grand Plaza",
        description:
          "Dự án căn hộ và thương mại Nam Mekong Grand Plaza.",
        image:
          "https://nammekong-grand-plaza.vercel.app/master-plan.jpg",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: "https://nammekong-grand-plaza.vercel.app/",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}