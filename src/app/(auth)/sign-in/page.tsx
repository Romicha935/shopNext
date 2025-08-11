'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // সফল হলে রিডাইরেক্ট
      router.push("/"); // এখানে চাইলে '/cart' অথবা ড্যাশবোর্ড দাও
    } catch (err) {
      setError(err.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      setError(err.message || "Google sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign in to your account</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="px-3 text-gray-400 text-sm">or</div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 disabled:opacity-60"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 12.2c0-.68-.06-1.16-.18-1.66H12v3.15h5.14c-.11.9-.71 2.2-2.06 2.9l-.02.13 2.99 2.33.21.02c1.92-1.78 3.02-4.38 3.02-7.12z" fill="#4285F4"/>
            <path d="M12 22c2.7 0 4.96-.9 6.61-2.45l-3.15-2.44c-.86.6-1.96.95-3.46.95-2.67 0-4.93-1.8-5.74-4.22L3.93 15.4C5.7 19.95 8.62 22 12 22z" fill="#34A853"/>
            <path d="M6.26 13.84A6.996 6.996 0 015.78 12c0-.67.11-1.32.33-1.92L3.9 7.7A10.97 10.97 0 002 12c0 1.73.36 3.37 1.01 4.85l3.25-2.01z" fill="#FBBC05"/>
            <path d="M12 6.5c1.48 0 2.81.51 3.84 1.51l2.86-2.86C16.95 3.52 14.7 2.5 12 2.5 8.62 2.5 5.7 4.55 3.93 8.1l3.35 2.88C7.07 8.3 9.33 6.5 12 6.5z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <a href="/sign-up" className="text-indigo-600 hover:underline">Create one</a>
        </p>
      </div>
    </div>
  );
}
