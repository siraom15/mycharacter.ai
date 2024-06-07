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
import { ButtonLoading } from "../ui/button-loading";
import { useToast } from "../ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = React.useState<boolean>(false);
  const { toast } = useToast();

  const formLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { errorMessage } = await login(new FormData(e.currentTarget));
    if (errorMessage) {
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
    setIsLoading(false);
  };
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form className="space-y-4" onSubmit={formLogin}>
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
            className="border-coral-red rounded-full bg-gradient-to-r from-teal-400 to-yellow-200 hover:bg-gradient-to-l "
          >
            Sign in
          </ButtonLoading>
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
