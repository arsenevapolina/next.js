import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Blog",
  description: "How to work with CSS Grid",
};

const openSans = Open_Sans({
  weight: ["400", "600", "700", "800"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${openSans.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
