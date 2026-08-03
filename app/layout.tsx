import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});


export const metadata: Metadata = {
  title: "Servio | خدمات برند قسطکا",
  description:
    "ارائه خدمات اقساطی | خدمات موسسه آینده اندیشان محب",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="fa" dir="rtl" className={vazirmatn.variable}>   
     <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
