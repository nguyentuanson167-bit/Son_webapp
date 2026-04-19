"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminLogin() {
  const { signIn, user, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (user) {
    router.replace("/admin");
    return null;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await signIn(email, password);
      router.replace("/admin");
    } catch {
      setError("Email hoặc mật khẩu không chính xác.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 mb-4">
            <div className="h-9 w-9 rounded-[0.375rem] bg-primary flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#50d9fe" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-on-surface">AI MIND</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-on-surface">Admin Panel</h1>
          <p className="text-sm text-on-surface-variant mt-1">Đăng nhập để quản lý hệ thống</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost">
          {error && (
            <div className="mb-4 rounded-[0.375rem] bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-4 py-2.5 text-sm text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/30 transition-colors"
                placeholder="admin@aimind.vn"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">Mật khẩu</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-4 py-2.5 text-sm text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/30 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-[0.375rem] bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors disabled:opacity-50"
          >
            {submitting ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
}
