"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axiosClient from "@/redux/axiosClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
    if (token) {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email aur password dono required hain.");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axiosClient.post("auth/admin/login", {
        email: email.trim(),
        password,
      });

      if (!data?.success || !data?.token) {
        throw new Error(data?.message || "Login failed");
      }

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.admin || {}));

      router.replace("/admin/dashboard");
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Invalid credentials";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              Admin access only
            </div>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Clinic admin panel
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Yahan se appointments, enquiries, content aur reports manage kar sakte ho.
              Public website se ye completely separated rahega.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Appointment management",
                "Patient inquiry tracking",
                "Content publishing",
                "Reports and analytics",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                <LockKeyhole className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Sign in</h2>
              <p className="mt-2 text-sm text-slate-400">
                Apna admin username aur password use karo.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label>Admin email</Label>
                <Input
                  type="email"
                  placeholder="admin@clinic.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}

              <Button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 py-3 hover:bg-emerald-500"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Login to dashboard"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Protected admin area.{" "}
              <Link href="/" className="text-emerald-400 hover:text-emerald-300">
                Back to site
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
