import Link from "next/link";
import { Button } from "./button";
import { Icons } from "./icons";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  isLoggedIn: boolean;
}

export function Navbar({ isLoggedIn, ...props }: NavbarProps) {

  return (
    <div className="mx-auto flex justify-between p-2">
      <a
        href="/"
        className="text-xl font-bold items-center flex align-center bg-gradient-to-r from-teal-400 to-yellow-400 text-transparent bg-clip-text"
      >
        MyCharacter.AI
      </a>
      <div className="flex gap-4 items-center">
        <Link href="https://github.com/siraom15/mycharacter.ai/" target="_blank">
          <Icons.gitHub className="h-8 w-8" />
        </Link>
        {isLoggedIn ? (
          <form action="/auth/signout" method="post">
            <Button type="submit" className="bg-gradient-to-r from-teal-400 to-yellow-400 hover:bg-gradient-to-tr">Sign out</Button>
          </form>
        ) : (
          <Link href="/app/all-story">
            <Button className="border-coral-red rounded-full hover:bg-coral-red-light hover:border-coral-red-light bg-gradient-to-r from-cyan-300 to-violet-400 hover:bg-gradient-to-l">
              App
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
