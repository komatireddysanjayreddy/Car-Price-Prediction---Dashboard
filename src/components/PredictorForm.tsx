"use client";

import { useState, useEffect } from "react";
import { formatCurrency } from "@/lib/utils";
import { CAR_CATALOG, getModels, getVariants, getVariantSpecs } from "@/lib/carCatalog";

const BRANDS = Object.keys(CAR_CATALOG).sort();
const CONDITIONS = ["Excellent", "Good", "Fair", "Poor"];

interface PredictionResult {
  predicted_price: number;
  ci_lower: number;
  ci_upper: number;
  model_r2: number;
}

interface FormState {
  brand: string;
  model_name: string;
  variant: string;
  year: number;
  mileage: number;
  fuel_type: string;
  transmission: string;
  condition: string;
  horsepower: number;
  engine_cc: number;
  variant_price_multiplier: number;
}

const DEFAULT_BRAND = "Toyota";
const DEFAULT_MODEL = "Camry";
const DEFAULT_VARIANT = "LE";

function buildDefaultForm(): FormState {
  const specs = getVariantSpecs(DEFAULT_BRAND, DEFAULT_MODEL, DEFAULT_VARIANT);
  return {
    brand: DEFAULT_BRAND,
    model_name: DEFAULT_MODEL,
    variant: DEFAULT_VARIANT,
    year: 2020,
    mileage: 50000,
    fuel_type: specs?.fuel_type ?? "Petrol",
    transmission: specs?.transmission ?? "Automatic",
    condition: "Good",
    horsepower: specs?.horsepower ?? 200,
    engine_cc: specs?.engine_cc ?? 2000,
    variant_price_multiplier: specs?.price_multiplier ?? 1.0,
  };
}

/* ── sub-components ─────────────────────────────────────────────────────── */

function StyledSelect({ label, value, onChange, options, disabled }: {
  label: string; value: string; onChange: (v: string) => void;
  options: string[]; disabled?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 text-white px-3 py-2.5 pr-8 text-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RangeSlider({ label, value, min, max, step, fmt, onChange }: {
  label: string; value: number; min: number; max: number; step: number;
  fmt: (v: number) => string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">
        {label} <span className="text-slate-600">({fmt(value)})</span>
      </label>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-500 mt-1.5"
      />
      <div className="flex justify-between text-xs text-slate-600 mt-1">
        <span>{fmt(min)}</span><span>{fmt(max)}</span>
      </div>
    </div>
  );
}

function ToggleGroup({ label, value, options, cols, onChange }: {
  label: string; value: string; options: string[]; cols: number;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
        {options.map((o) => (
          <button
            key={o} type="button" onClick={() => onChange(o)}
            className={`py-2 rounded-xl text-sm font-medium transition-all ${
              value === o
                ? "bg-indigo-500 text-white ring-2 ring-indigo-400/40"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── main export ─────────────────────────────────────────────────────────── */
export default function PredictorForm() {
  const [form, setForm] = useState<FormState>(buildDefaultForm);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const models = getModels(form.brand);
  const modelNames = models.map((m) => m.name);
  const selectedModel = models.find((m) => m.name === form.model_name);
  const variantNames = selectedModel ? selectedModel.variants.map((v) => v.name) : [];

  // brand change → cascade reset
  useEffect(() => {
    const list = getModels(form.brand);
    if (!list.length) return;
    const m = list[0];
    const v = m.variants[0];
    setForm((p) => ({
      ...p,
      model_name: m.name,
      variant: v.name,
      fuel_type: v.fuel_type,
      transmission: v.transmission,
      horsepower: v.horsepower,
      engine_cc: v.engine_cc,
      variant_price_multiplier: v.price_multiplier,
    }));
    setResult(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.brand]);

  // model change → cascade reset variants
  useEffect(() => {
    const list = getVariants(form.brand, form.model_name);
    if (!list.length) return;
    const v = list[0];
    setForm((p) => ({
      ...p,
      variant: v.name,
      fuel_type: v.fuel_type,
      transmission: v.transmission,
      horsepower: v.horsepower,
      engine_cc: v.engine_cc,
      variant_price_multiplier: v.price_multiplier,
    }));
    setResult(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.model_name]);

  function applyVariant(variantName: string) {
    const specs = getVariantSpecs(form.brand, form.model_name, variantName);
    if (!specs) return;
    setForm((p) => ({
      ...p,
      variant: variantName,
      fuel_type: specs.fuel_type,
      transmission: specs.transmission,
      horsepower: specs.horsepower,
      engine_cc: specs.engine_cc,
      variant_price_multiplier: specs.price_multiplier,
    }));
    setResult(null);
    setError(null);
  }

  function patch(field: keyof FormState, value: string | number) {
    setForm((p) => ({ ...p, [field]: value }));
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
      if (!res.ok) throw new Error(((await res.json()) as { error?: string }).error ?? "Prediction failed");
      setResult(await res.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-7">

        {/* ── STEP 1: Vehicle selection ─────────────────────────────── */}
        <section>
          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3">
            Step 1 — Select Vehicle
          </p>

          {/* Brand / Model / Variant — 3 cascading dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <StyledSelect
              label="Brand"
              value={form.brand}
              onChange={(v) => patch("brand", v)}
              options={BRANDS}
            />
            <StyledSelect
              label="Model Name"
              value={form.model_name}
              onChange={(v) => patch("model_name", v)}
              options={modelNames}
              disabled={modelNames.length === 0}
            />
            <StyledSelect
              label="Variant / Trim"
              value={form.variant}
              onChange={applyVariant}
              options={variantNames}
              disabled={variantNames.length === 0}
            />
          </div>

          {/* Auto-filled spec pills */}
          {selectedModel && (
            <div className="mt-3 flex flex-wrap gap-2">
              {/* body type */}
              <span className="pill">{
                { Sedan:"🚗",SUV:"🚙",Hatchback:"🚙",Coupe:"🏎️",
                  Convertible:"🏎️",Truck:"🛻",Crossover:"🚙",Sports:"🏎️",MPV:"🚐"
                }[selectedModel.body_type] ?? "🚗"
              } {selectedModel.body_type}</span>

              <span className="pill">⚡ {form.horsepower} hp</span>

              {form.engine_cc > 0
                ? <span className="pill">🔧 {(form.engine_cc / 1000).toFixed(1)}L</span>
                : <span className="pill bg-emerald-800/40 text-emerald-300">⚡ EV</span>
              }

              <span className="pill">⛽ {form.fuel_type}</span>
              <span className="pill">⚙️ {form.transmission}</span>

              <span className="pill bg-indigo-900/50 text-indigo-300">
                Tier ×{form.variant_price_multiplier.toFixed(2)}
              </span>
            </div>
          )}
        </section>

        <div className="border-t border-white/5" />

        {/* ── STEP 2: Age & usage ──────────────────────────────────── */}
        <section>
          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3">
            Step 2 — Age &amp; Usage
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RangeSlider
              label="Model Year"
              value={form.year} min={2000} max={2024} step={1}
              fmt={(v) => String(v)}
              onChange={(v) => patch("year", v)}
            />
            <RangeSlider
              label="Mileage"
              value={form.mileage} min={0} max={250000} step={1000}
              fmt={(v) => `${v.toLocaleString()} km`}
              onChange={(v) => patch("mileage", v)}
            />
          </div>
        </section>

        <div className="border-t border-white/5" />

        {/* ── STEP 3: Specs & condition ─────────────────────────────── */}
        <section>
          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3">
            Step 3 — Specs &amp; Condition
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ToggleGroup
                label="Fuel Type"
                value={form.fuel_type}
                options={["Petrol", "Diesel", "Electric", "Hybrid"]}
                cols={2}
                onChange={(v) => patch("fuel_type", v)}
              />
              <ToggleGroup
                label="Transmission"
                value={form.transmission}
                options={["Automatic", "Manual"]}
                cols={2}
                onChange={(v) => patch("transmission", v)}
              />
            </div>
            <ToggleGroup
              label="Vehicle Condition"
              value={form.condition}
              options={CONDITIONS}
              cols={4}
              onChange={(v) => patch("condition", v)}
            />
          </div>
        </section>

        {/* ── Submit ─────────────────────────────────────────────────── */}
        <button
          type="submit" disabled={loading}
          className="w-full py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60
                     text-white font-semibold text-base transition-all active:scale-[0.98]"
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

        {error && (
          <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-3 text-rose-400 text-sm">
            {error}
          </div>
        )}
      </form>

      {/* ── Result card ───────────────────────────────────────────────── */}
      {result && (
        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center animate-in">
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

          <div className="mt-6 grid grid-cols-3 gap-3 text-left">
            {[
              { label: "Brand",        value: form.brand },
              { label: "Model",        value: form.model_name },
              { label: "Variant",      value: form.variant },
              { label: "Year",         value: String(form.year) },
              { label: "Mileage",      value: `${form.mileage.toLocaleString()} km` },
              { label: "Horsepower",   value: `${form.horsepower} hp` },
              { label: "Fuel",         value: form.fuel_type },
              { label: "Transmission", value: form.transmission },
              { label: "Condition",    value: form.condition },
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
