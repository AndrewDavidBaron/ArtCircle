// components/NavBar.tsx
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ArtCircle Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">ArtCircle</span>
        </div>
        <div className="flex space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/profile" className="hover:underline">Profile</a>
          <a href="/circle" className="hover:underline">Circle</a>
          <a href="/voice" className="hover:underline">Voice</a>
          <a href="/intel" className="hover:underline">Intel</a>
        </div>
      </div>
    </nav>
  );
}
