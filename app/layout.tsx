import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { Prompt, Montserrat, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import NextTopLoader from 'nextjs-toploader';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn("min-h-screen")}>
        <NextTopLoader
          color="#2dd4bf"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #fef08a,0 0 5px #fef08a"
        />
        <main>
          {/* <Navbar isLoggedIn={!!user} /> */}
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
