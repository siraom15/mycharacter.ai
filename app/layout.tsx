import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";

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
        <main>
        {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
