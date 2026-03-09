"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Predictor" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <span className="font-semibold text-white tracking-tight">
              AutoPrice<span className="text-indigo-400">AI</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === href
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Model R² 0.93
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
