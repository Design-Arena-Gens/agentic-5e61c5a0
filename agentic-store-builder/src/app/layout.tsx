import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "منصة متاجر الجزائر | بناء متجر إلكتروني احترافي",
  description:
    "منصة جزائرية متكاملة لإنشاء المتاجر الإلكترونية باللغة العربية مع خطط اشتراك متطورة وأدوات تناسب السوق المحلي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased bg-stone-100`}>
        {children}
      </body>
    </html>
  );
}
