import { Navbar } from "@/components";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const font = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infura Block Exolorer",
  description: "Infura Block Exolorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-primary text-kimberly-500 flex`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
