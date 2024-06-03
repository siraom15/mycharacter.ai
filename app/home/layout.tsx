import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | MyCharacter.AI",
  description: "Create your own character with AI technology",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid lg:grid-cols-5 min-h-screen border-t">
      <Sidebar />
      <div className="col-span-3 lg:col-span-4 lg:border-l">{children}</div>
    </section>
  );
}
