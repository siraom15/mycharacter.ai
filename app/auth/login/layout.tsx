import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | MyCharacter.AI",
  description: "Create your own character with AI technology",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
     {children}
    </section>
  );
}
