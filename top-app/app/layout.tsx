import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "./layouts/Header/Header";
import { GitHubProvider } from "./context/GitHubContext";

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
  const githubLink = "https://github.com/arsenevapolina";

  return (
    <html lang="ru">
      <body className={`${openSans.variable}`}>
        <GitHubProvider value={{ githubLink }}>
          <Header />
          <main>{children}</main>
        </GitHubProvider>
      </body>
    </html>
  );
}
