import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyCharacter.AI",
  description: "Create your own character with AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
