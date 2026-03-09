"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ScatterChart, Scatter, LineChart, Line, PieChart, Pie, Cell, Legend,
} from "recharts";
import { formatCurrency } from "@/lib/utils";

const CHART_COLORS = [
  "#6366f1", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
  "#06b6d4", "#84cc16", "#f97316", "#ec4899", "#14b8a6",
];

// ─── Custom tooltip ────────────────────────────────────────────────────────
function PriceTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl text-sm">
      {label && <p className="text-slate-400 mb-1 font-medium">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} className="text-white font-semibold">
          {p.name}: {typeof p.value === "number" && p.value > 999
            ? formatCurrency(p.value)
            : p.value}
        </p>
      ))}
    </div>
  );
}

// ─── Section wrapper ───────────────────────────────────────────────────────
function ChartCard({ title, subtitle, children, className }: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${className ?? ""}`}>
      <h2 className="text-base font-semibold text-white">{title}</h2>
      {subtitle && <p className="text-xs text-slate-500 mt-0.5 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}

interface Props {
  brandData: Array<{ brand: string; avgPrice: number; count: number }>;
  fuelData: Array<{ name: string; value: number }>;
  scatterData: Array<{ mileage: number; price: number; brand: string; year: number }>;
  trendData: Array<{ year: number; avgPrice: number }>;
  condData: Array<{ condition: string; avgPrice: number; count: number }>;
}

export default function DashboardCharts({ brandData, fuelData, scatterData, trendData, condData }: Props) {
  return (
    <div className="space-y-6">
      {/* Row 1: Brand bar + Fuel pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard
          title="Average Price by Brand"
          subtitle="Sorted highest to lowest"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={brandData.slice(0, 12)} margin={{ top: 4, right: 8, left: 10, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis
                dataKey="brand"
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                angle={-35}
                textAnchor="end"
                interval={0}
              />
              <YAxis
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<PriceTooltip />} />
              <Bar dataKey="avgPrice" name="Avg Price" radius={[6, 6, 0, 0]}>
                {brandData.slice(0, 12).map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Fuel Type Mix" subtitle="Share of listings">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={fuelData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                nameKey="name"
                label={false}
                labelLine={false}
              >
                {fuelData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 2: Scatter + Year trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Mileage vs Price"
          subtitle="Key negative correlation — higher mileage = lower value"
        >
          <ResponsiveContainer width="100%" height={280}>
            <ScatterChart margin={{ top: 4, right: 8, bottom: 4, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis
                dataKey="mileage"
                type="number"
                name="Mileage"
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                label={{ value: "Mileage (mi)", position: "insideBottom", offset: -4, fill: "#64748b", fontSize: 11 }}
              />
              <YAxis
                dataKey="price"
                type="number"
                name="Price"
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0].payload;
                  return (
                    <div className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl text-xs">
                      <p className="font-semibold text-white">{d.brand} ({d.year})</p>
                      <p className="text-slate-400">Mileage: {d.mileage.toLocaleString()} mi</p>
                      <p className="text-indigo-300">Price: {formatCurrency(d.price)}</p>
                    </div>
                  );
                }}
              />
              <Scatter data={scatterData} fill="#6366f1" fillOpacity={0.7} />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Average Price by Model Year"
          subtitle="Newer cars command significantly higher premiums"
        >
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendData} margin={{ top: 4, right: 20, bottom: 4, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 11 }} />
              <YAxis
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<PriceTooltip />} />
              <Line
                type="monotone"
                dataKey="avgPrice"
                name="Avg Price"
                stroke="#6366f1"
                strokeWidth={2.5}
                dot={{ fill: "#6366f1", r: 4 }}
                activeDot={{ r: 6, fill: "#818cf8" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 3: Condition impact */}
      <ChartCard
        title="Price by Vehicle Condition"
        subtitle="Condition is the 3rd most important feature in the Random Forest model"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {condData
            .sort((a, b) => b.avgPrice - a.avgPrice)
            .map(({ condition, avgPrice, count }, i) => {
              const maxPrice = Math.max(...condData.map((c) => c.avgPrice));
              const pct = (avgPrice / maxPrice) * 100;
              return (
                <div key={condition} className="rounded-xl bg-white/5 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-white">{condition}</span>
                    <span className="text-xs text-slate-500">{count} cars</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-3">{formatCurrency(avgPrice)}</div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: CHART_COLORS[i],
                      }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{pct.toFixed(0)}% of max</div>
                </div>
              );
            })}
        </div>
      </ChartCard>
    </div>
  );
}
