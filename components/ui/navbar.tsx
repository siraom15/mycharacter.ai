export function Navbar() {
  return (
    <div className="container mx-auto flex justify-between p-2">
      <a href="/" className="text-xl font-bold items-center flex align-center">
        MyCharacter.AI
      </a>
      <div className="flex gap-4">
        <a href="/login" className="text-base">
          Login
        </a>
      </div>
    </div>
  );
}
