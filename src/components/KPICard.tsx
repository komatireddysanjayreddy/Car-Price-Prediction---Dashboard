"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export default function KPICard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendUp,
  className,
}: KPICardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
        "hover:bg-white/10 transition-all duration-200",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-400">{title}</span>
        <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
      {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      {trend && (
        <div
          className={cn(
            "mt-3 inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            trendUp
              ? "text-emerald-400 bg-emerald-400/10"
              : "text-rose-400 bg-rose-400/10"
          )}
        >
          {trendUp ? "▲" : "▼"} {trend}
        </div>
      )}
    </div>
  );
}
