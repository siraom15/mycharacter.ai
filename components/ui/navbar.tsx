export function Navbar() {
  return (
    <div className="mx-auto flex justify-between p-2 sticky top-0 z-50 backdrop-blur-sm bg-white/30">
      <a
        href="/"
        className="text-xl font-bold items-center flex align-center bg-gradient-to-r from-cyan-300 to-violet-400 text-transparent bg-clip-text"
      >
        MyCharacter.AI
      </a>
      {/* <div className="flex gap-4">
        <a href="/login" className="text-base">
          Login
        </a>
      </div> */}
    </div>
  );
}
