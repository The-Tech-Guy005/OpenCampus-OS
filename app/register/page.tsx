"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import { Mail, Lock, User, AlertCircle, Loader, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "medium" | "strong">();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Check password strength
    if (name === "password") {
      if (value.length < 6) {
        setPasswordStrength("weak");
      } else if (value.length < 10 || !/[A-Z]/.test(value)) {
        setPasswordStrength("medium");
      } else {
        setPasswordStrength("strong");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await register(formData.email, formData.password, formData.fullName);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "strong":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "weak":
        return "bg-red-500";
      default:
        return "bg-slate-600";
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
          <p className="text-slate-400">Join your campus community</p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl bg-slate-800 p-8 shadow-xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>

          {/* Error Message */}
          {error && (
            <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-500/10 border border-red-500/20 p-4">
              <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                  required
                />
              </div>
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2 space-y-1">
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${getStrengthColor()}`}
                      style={{
                        width:
                          passwordStrength === "weak"
                            ? "33%"
                            : passwordStrength === "medium"
                            ? "66%"
                            : "100%",
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-400">
                    Password strength: <span className="capitalize font-semibold">{passwordStrength}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                  required
                />
              </div>
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <div className="mt-2 flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  Passwords match
                </div>
              )}
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
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <p>By signing up, you agree to our Terms of Service</p>
        </div>
      </div>
    </div>
  );
}