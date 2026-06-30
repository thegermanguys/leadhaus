"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    const reveals = heroRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="bg-white min-h-screen flex flex-col items-center justify-center pt-32 lg:pt-40 pb-10 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,31,61,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,31,61,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-electric opacity-[0.08] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-sky opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Live Badge */}
        <div className="reveal flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <span className="pulse-dot w-2 h-2 rounded-full bg-green-accent" />
            <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase">
              {siteConfig.hero.badge}
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="reveal reveal-delay-1 text-center mb-6">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-tight">
            {siteConfig.hero.headlinePre}{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">{siteConfig.hero.headlineHighlight}</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="reveal reveal-delay-2 text-center max-w-2xl mx-auto mb-8">
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            {siteConfig.hero.subtext}
          </p>
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {siteConfig.hero.ctas.map((cta) =>
            cta.variant === "primary" ? (
              <a
                key={cta.label}
                href={cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-electric-dark text-white rounded-xl font-semibold text-base transition-all duration-300 shadow-glow hover:shadow-lg hover:scale-105 group"
              >
                {cta.label}
              </a>
            ) : (
              <a
                key={cta.label}
                href={cta.href}
                onClick={(e) => handleAnchorClick(e, cta.href)}
                className="inline-flex items-center gap-2 px-8 py-4 text-navy border-2 border-slate-200 hover:border-navy hover:bg-navy hover:text-white rounded-xl font-semibold text-base transition-all duration-300"
              >
                {cta.label}
              </a>
            )
          )}
        </div>

        {/* Trust Badges */}
        <div className="reveal reveal-delay-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14">
          {siteConfig.hero.trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <CheckCircle size={14} className="text-green-accent flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        {/* Dashboard Mock */}
        <div className="reveal reveal-delay-5 dashboard-frame max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-card-hover" style={{ boxShadow: "0 30px 80px rgba(15,31,61,0.15), 0 0 0 1px rgba(15,31,61,0.05)" }}>
            {/* Browser chrome */}
            <div className="bg-[#1a2744] px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#0f1f3d] rounded-md px-4 py-1 text-xs text-blue-100/40 w-64 text-center">
                  leadhaus.thegermanguy.org/dashboard
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Dashboard body */}
            <div className="bg-[#0d1b35] flex" style={{ minHeight: 380 }}>
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-48 bg-[#0a1628] border-r border-white/5 py-4 px-3 gap-4">
                {/* Logo mark */}
                <div className="flex items-center gap-2 mb-2 px-2">
                  <div className="w-6 h-6 rounded bg-electric flex items-center justify-center">
                    <span className="text-white font-bold text-xs">L</span>
                  </div>
                  <span className="text-white font-semibold text-sm">Leadhaus</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold px-2 mb-1">Student Management</div>
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/10 text-white text-xs cursor-pointer">
                    <div className="flex items-center gap-2"><span>🎓</span> Students</div>
                    <span className="text-[10px] bg-white/20 px-1.5 rounded">27</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg text-blue-100/60 hover:bg-white/5 hover:text-white text-xs cursor-pointer">
                    <div className="flex items-center gap-2"><span>📄</span> Applications</div>
                    <span className="text-[10px] bg-white/5 px-1.5 rounded">0</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-blue-100/60 hover:bg-white/5 hover:text-white text-xs cursor-pointer">
                    <span>↗</span> Referrals Sent
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold px-2 mb-1 mt-2">Finance</div>
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg text-blue-100/60 hover:bg-white/5 hover:text-white text-xs cursor-pointer">
                    <div className="flex items-center gap-2"><span>💳</span> Payments</div>
                    <span className="text-[10px] bg-white/5 px-1.5 rounded">23</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold px-2 mb-1 mt-2">Settings</div>
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg text-blue-100/60 hover:bg-white/5 hover:text-white text-xs cursor-pointer">
                    <div className="flex items-center gap-2"><span>🎓</span> Study Fields</div>
                    <span className="text-[10px] bg-white/5 px-1.5 rounded">60</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-blue-100/60 hover:bg-white/5 hover:text-white text-xs cursor-pointer">
                    <span>🏛</span> Partner Universities
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-blue-100/60 hover:bg-white/5 hover:text-white text-xs cursor-pointer">
                    <span>📅</span> Intake Periods
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] text-blue-100/40 uppercase tracking-wider font-semibold px-2 mb-1 mt-2">Management</div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-blue-100/60 hover:bg-white/5 hover:text-white text-xs cursor-pointer">
                    <span>👥</span> Team
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 sm:p-6 overflow-hidden">
                {/* Top row: greeting + date */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="text-white font-heading font-semibold text-base sm:text-lg">
                      Good morning, Ahmed 👋
                    </h2>
                    <p className="text-blue-100/40 text-xs">Monday, June 30, 2026</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 bg-electric/10 border border-electric/20 rounded-lg px-3 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-accent" />
                    <span className="text-xs text-blue-100/70">System Online</span>
                  </div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Unfinished Apps", value: "0", desc: "Draft or submitted", color: "#f59e0b" },
                    { label: "Under Review", value: "0", desc: "By university", color: "#8b5cf6" },
                    { label: "Applied via TGG", value: "0", desc: "Self-managed", color: "#22c55e" },
                    { label: "Accepted / Month", value: "0", desc: "Jun 2026", color: "#2563eb" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-white/[0.04] border border-white/5 rounded-xl p-3 hover:bg-white/[0.07] transition-colors"
                    >
                      <div className="text-blue-100/60 text-xs mb-1 font-medium">{metric.label}</div>
                      <div
                        className="text-2xl font-bold font-heading mb-1"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-blue-100/40 text-[10px]">{metric.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Pipeline chart */}
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-heading font-medium text-sm">
                      Student Journey Pipeline
                    </h3>
                    <span className="text-xs text-blue-100/40 bg-white/5 rounded px-2 py-0.5">
                      Live
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Initial Inquiry", count: 5, pct: 100, color: "#2563eb" },
                      { label: "Collecting Docs", count: 1, pct: 20, color: "#8b5cf6" },
                      { label: "Applied", count: 9, pct: 100, color: "#f59e0b" },
                      { label: "Conditional Offer", count: 3, pct: 33, color: "#22c55e" },
                      { label: "Visa Applied", count: 5, pct: 55, color: "#4a90d9" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <div className="w-28 text-xs text-blue-100/50 flex-shrink-0 truncate">
                          {row.label}
                        </div>
                        <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${row.pct}%`,
                              backgroundColor: row.color,
                              boxShadow: `0 0 8px ${row.color}60`,
                            }}
                          />
                        </div>
                        <div
                          className="w-6 text-xs font-medium text-right flex-shrink-0"
                          style={{ color: row.color }}
                        >
                          {row.count}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
