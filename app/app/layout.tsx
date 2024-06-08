import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "App | MyCharacter.AI",
  description: "Create your own character with AI technology",
};

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/login");
  }
  return (
    <>
      <Navbar isLoggedIn={!!user} />
      <section className="grid grid-cols-5 min-h-screen border-t">
        <Sidebar  className="col-span-1"/>
        <div className="col-span-4 lg:col-span-4 lg:border-l">{children}</div>
      </section>
    </>
  );
}
