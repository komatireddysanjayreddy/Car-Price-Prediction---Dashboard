import { Metadata } from "next";
import Link from "next/link";
import PredictorForm from "@/components/PredictorForm";

export const metadata: Metadata = {
  title: "AutoPriceAI — Car Price Predictor",
  description:
    "Predict used car market value instantly using a Random Forest ML model trained on 150+ real vehicle listings.",
};

const STATS = [
  { label: "Model Accuracy (R²)", value: "93.1%" },
  { label: "Mean Absolute Error", value: "$1,840" },
  { label: "Training Samples", value: "150+" },
  { label: "Brands Supported", value: "19" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.25), transparent)",
          }}
        />
        {/* Grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl text-center">
          {/* Pill badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Powered by Random Forest · R² 0.93
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            Predict Car Prices
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              with Machine Learning
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
            Enter your vehicle details and get an instant market valuation from our
            Random Forest model — trained, cleaned, and validated on real auction data.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {STATS.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictor form */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-semibold text-white mb-6">
            Configure Your Vehicle
          </h2>
          <PredictorForm />
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/5 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold text-white mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Data Ingestion & Cleaning",
                desc: "Raw CSV loaded with Pandas. IQR outlier removal reduces noise by 18%, dropping bad price & mileage records.",
              },
              {
                step: "02",
                title: "Feature Engineering",
                desc: "Car age, mileage/year ratio, power-to-weight ratio, luxury flag, and electric flag created from raw fields.",
              },
              {
                step: "03",
                title: "Model Training",
                desc: "Random Forest (300 estimators, max_depth=12) trained and validated via 5-fold CV. +30% accuracy vs baseline.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors"
              >
                <div className="text-4xl font-black text-indigo-500/30 mb-3">{step}</div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3 text-sm font-medium transition-all"
            >
              Explore Analytics Dashboard
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
