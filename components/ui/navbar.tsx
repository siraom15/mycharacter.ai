import Link from "next/link";
import { Button } from "./button";

export function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className="mx-auto flex justify-between p-2 sticky top-0 z-50 backdrop-blur-sm bg-white/30">
      <a
        href="/"
        className="text-xl font-bold items-center flex align-center bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text"
      >
        MyCharacter.AI
      </a>
      <div className="flex gap-4">
        {isLoggedIn ? (
          <form action="/auth/signout" method="post">
            <Button type="submit">
              Sign out
            </Button>
          </form>
        ) : (
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
