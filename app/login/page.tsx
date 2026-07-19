"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import { Mail, Lock, AlertCircle, Loader } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            OpenCampus
          </h1>
          <p className="text-slate-400">Welcome back to your campus</p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl bg-slate-800 p-8 shadow-xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>

          {/* Error Message */}
          {error && (
            <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-500/10 border border-red-500/20 p-4">
              <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2 mt-6"
            >
              {isLoading ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-slate-700"></div>
            <span className="px-3 text-slate-500 text-sm">or</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-slate-400 text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Demo Credentials */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <p className="mb-2">Demo Account (after registration):</p>
          <p>Email: student@opencampus.edu</p>
          <p>Password: Test@123</p>
        </div>
      </div>
    </div>
  );
}