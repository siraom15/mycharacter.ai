"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { signup } from "@/app/auth/signup/action";
import { useToast } from "../ui/use-toast";
import { ButtonLoading } from "../ui/button-loading";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = React.useState<boolean>(false);

  const { toast } = useToast();

  const formSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await signup(new FormData(e.currentTarget));
    if (result?.errorMessage) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.errorMessage,
      });
    } else {
      toast({
        variant: "default",
        title: "Success",
        description: "Signup successful, Please check your email to verify.",
      });
    }
    setIsLoading(false);
  };
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form className="space-y-4" onSubmit={formSignup}>
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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <ButtonLoading
            isLoading={isLoading}
            className="border-coral-red rounded-full hover:bg-coral-red-light hover:border-coral-red-light bg-gradient-to-r  from-violet-200 to-pink-200 hover:bg-gradient-to-l"
          >
            Sign Up
          </ButtonLoading>
        </div>

        <div className="flex gap-2">
          <p>Already signup?</p>
          <Link href="/auth/login">
            <p className="underline underline-offset-4 bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text">
              Sign In
            </p>
          </Link>
        </div>
      </form>
      <Separator className="text-muted-foreground" />
      <Button type="button" disabled={isLoadingGoogle}>
        {isLoadingGoogle ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Google
      </Button>
    </div>
  );
}
