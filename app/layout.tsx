import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { Prompt, Montserrat, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "MyCharacter.AI",
  description: "Create your own character with AI technology",
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: "500",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen")}>
        <main>
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
