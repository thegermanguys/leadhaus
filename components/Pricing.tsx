"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Check, Zap } from "lucide-react";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const plans = yearly ? siteConfig.pricing.yearly : siteConfig.pricing.monthly;

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-10">
          <span className="inline-block text-xs font-semibold text-purple-accent bg-purple-accent/10 border border-purple-accent/20 rounded-full px-3 py-1 uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Choose the plan that fits your consultancy
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Start free. Scale as you grow. All plans include a 30-day free trial.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? "text-navy" : "text-slate-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative flex-shrink-0"
              aria-label="Toggle billing period"
            >
              <div
                className={`w-14 h-7 rounded-full transition-all duration-300 ${
                  yearly ? "bg-electric" : "bg-slate-200"
                }`}
              />
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                  yearly ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${yearly ? "text-navy" : "text-slate-400"}`}>
              Yearly
            </span>
            <span className="inline-flex items-center gap-1 bg-green-accent/10 text-green-accent border border-green-accent/20 text-xs font-semibold rounded-full px-2.5 py-0.5">
              <Zap size={10} />
              Save up to 40%
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="reveal reveal-delay-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card relative rounded-2xl border p-5 flex flex-col ${
                plan.featured
                  ? "bg-navy border-electric/40 ring-2 ring-electric/30 shadow-glow"
                  : "bg-white border-slate-200 shadow-card"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    plan.badge === "Most Popular"
                      ? "bg-electric text-white shadow-glow"
                      : "bg-green-accent/10 text-green-accent border border-green-accent/20"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-4 mt-2">
                <h3
                  className={`font-heading font-bold text-base mb-1 ${
                    plan.featured ? "text-white" : "text-navy"
                  }`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`text-xs px-2 py-0.5 rounded-full inline-block ${
                    plan.featured
                      ? "bg-electric/20 text-sky"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {plan.limit}
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-end gap-1">
                  <span
                    className={`font-heading font-bold text-3xl ${
                      plan.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <span
                  className={`text-xs ${
                    plan.featured ? "text-blue-100/50" : "text-slate-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.featured ? "text-electric" : "text-green-accent"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        plan.featured ? "text-blue-100/80" : "text-slate-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.cta.href}
                target={plan.cta.external ? "_blank" : undefined}
                rel={plan.cta.external ? "noopener noreferrer" : undefined}
                className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.cta.variant === "primary"
                    ? "bg-electric hover:bg-electric-dark text-white shadow-glow hover:scale-105"
                    : plan.featured
                    ? "border border-white/20 text-white hover:bg-white/10"
                    : "border border-slate-200 text-navy hover:bg-navy hover:text-white hover:border-navy"
                }`}
              >
                {plan.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
