"use client";

import { siteConfig } from "@/lib/siteConfig";

export default function CTAStrip() {
  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 40%)`,
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-accent animate-pulse" />
          <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">
            30-Day Free Trial
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {siteConfig.cta.title}
        </h2>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {siteConfig.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {siteConfig.cta.buttons.map((btn) =>
            btn.variant === "white" ? (
              <a
                key={btn.label}
                href={btn.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-electric hover:bg-blue-50 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:scale-105"
              >
                {btn.label}
              </a>
            ) : (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/60 rounded-xl font-bold text-base transition-all duration-300"
              >
                {btn.label}
                {btn.external && <span className="text-sm opacity-60">↗</span>}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
