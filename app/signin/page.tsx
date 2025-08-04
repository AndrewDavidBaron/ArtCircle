// app/signin/page.tsx
"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Sign In to ArtCircle</h1>
        <button
          onClick={() => signIn("github")}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
