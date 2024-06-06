import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { Prompt, Montserrat, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

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
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={cn("min-h-screen")}>
        <main>
          <Navbar isLoggedIn={!!user} />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
