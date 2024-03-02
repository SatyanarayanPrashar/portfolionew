import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import "./styles/global.scss";
import Sidebar from "@/components/sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satya | portfolio",
  description: "Listen to your vibes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
