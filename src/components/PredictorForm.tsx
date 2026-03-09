"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

const BRANDS = [
  "Audi","BMW","Chevrolet","Ford","Honda","Hyundai","Jeep","Kia",
  "Land Rover","Lexus","Mazda","Mercedes","Nissan","Porsche","Subaru",
  "Tesla","Toyota","Volkswagen","Volvo",
];
const FUEL_TYPES = ["Petrol", "Diesel", "Electric", "Hybrid"];
const TRANSMISSIONS = ["Automatic", "Manual"];
const CONDITIONS = ["Excellent", "Good", "Fair", "Poor"];

interface PredictionResult {
  predicted_price: number;
  ci_lower: number;
  ci_upper: number;
  model_r2: number;
}

export default function PredictorForm() {
  const [form, setForm] = useState({
    brand: "Toyota",
    year: 2020,
    mileage: 50000,
    fuel_type: "Petrol",
    transmission: "Automatic",
    condition: "Good",
    horsepower: 200,
  });
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setResult(null);
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Prediction failed");
      }
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-6">
        {/* Grid inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Brand */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Brand</label>
            <select
              value={form.brand}
              onChange={(e) => set("brand", e.target.value)}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Model Year <span className="text-slate-600">({form.year})</span>
            </label>
            <input
              type="range"
              min={2000}
              max={2024}
              value={form.year}
              onChange={(e) => set("year", Number(e.target.value))}
              className="w-full accent-indigo-500 mt-2"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>2000</span><span>2024</span>
            </div>
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Mileage <span className="text-slate-600">({form.mileage.toLocaleString()} km)</span>
            </label>
            <input
              type="range"
              min={0}
              max={250000}
              step={1000}
              value={form.mileage}
              onChange={(e) => set("mileage", Number(e.target.value))}
              className="w-full accent-indigo-500 mt-2"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>0</span><span>250 000 km</span>
            </div>
          </div>

          {/* Horsepower */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Horsepower <span className="text-slate-600">({form.horsepower} hp)</span>
            </label>
            <input
              type="range"
              min={70}
              max={600}
              step={5}
              value={form.horsepower}
              onChange={(e) => set("horsepower", Number(e.target.value))}
              className="w-full accent-indigo-500 mt-2"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>70 hp</span><span>600 hp</span>
            </div>
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Fuel Type</label>
            <div className="grid grid-cols-2 gap-2">
              {FUEL_TYPES.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => set("fuel_type", f)}
                  className={`py-2 rounded-xl text-sm font-medium transition-all ${
                    form.fuel_type === f
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Transmission</label>
            <div className="grid grid-cols-2 gap-2">
              {TRANSMISSIONS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set("transmission", t)}
                  className={`py-2 rounded-xl text-sm font-medium transition-all ${
                    form.transmission === t
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Condition */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2">Vehicle Condition</label>
          <div className="grid grid-cols-4 gap-2">
            {CONDITIONS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => set("condition", c)}
                className={`py-2 rounded-xl text-sm font-medium transition-all ${
                  form.condition === c
                    ? "bg-indigo-500 text-white ring-2 ring-indigo-400/50"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-semibold text-base transition-all active:scale-[0.98]"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Predicting…
            </span>
          ) : "Predict Price"}
        </button>

        {/* Error */}
        {error && (
          <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-3 text-rose-400 text-sm">
            {error}
          </div>
        )}
      </form>

      {/* Result card */}
      {result && (
        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-sm text-slate-400 mb-2">Estimated Market Value</p>
          <div className="text-5xl font-extrabold text-white tracking-tight mb-2">
            {formatCurrency(result.predicted_price)}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4">
            <span>95% CI:</span>
            <span className="font-medium text-slate-300">
              {formatCurrency(result.ci_lower)} — {formatCurrency(result.ci_upper)}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Model R² {result.model_r2} · Random Forest v1.0
          </div>

          {/* Factor summary */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-left">
            {[
              { label: "Brand", value: form.brand },
              { label: "Year", value: String(form.year) },
              { label: "Mileage", value: `${form.mileage.toLocaleString()} km` },
              { label: "Fuel", value: form.fuel_type },
              { label: "Transmission", value: form.transmission },
              { label: "Condition", value: form.condition },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-white/5 px-3 py-2">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="text-sm font-medium text-white truncate">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
