import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/auth/user-auth-form";
import { UserSignupForm } from "@/components/auth/user-signup-form";

export const metadata: Metadata = {
  title: "Signup | MyCharacter.AI",
  description: "Authentication forms built using the components.",
};

export default function SignupPage() {
  return (
    <>
      <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-pink-200" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            MyCharacter.AI
          </div>
        </div>
        <div className="p-8 mt-20 lg:mt-0 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Signup to MyCharacter.AI
              </h1>
              <p className="text-sm text-muted-foreground">
                Continue with your email or Google to get started.
              </p>
            </div>
            <UserSignupForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
