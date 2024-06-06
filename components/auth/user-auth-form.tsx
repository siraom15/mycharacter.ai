"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { login } from "@/app/auth/login/action";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        {/* <p>
          <Link href="/auth/forgot-password">
            <p className="text-primary underline underline-offset-4 hover:text-accent">
              Forgot password?
            </p>
          </Link>
        </p> */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button
            className="border-coral-red rounded-full hover:bg-coral-red-light hover:border-coral-red-light bg-gradient-to-r from-rose-400 to-red-500 hover:bg-gradient-to-l"
            formAction={login}
          >
            Sign in
          </Button>
        </div>

        <div className="flex gap-2">
          <p>Don&apos;t have an account?</p>
          <Link href="/auth/signup">
            <p className="underline underline-offset-4 bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text">
              Sign up
            </p>
          </Link>
        </div>
      </form>
      <Separator className="text-muted-foreground" />
      <Button type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Google
      </Button>
    </div>
  );
}
