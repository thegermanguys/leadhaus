"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import {
  Users,
  FileText,
  GitBranch,
  CreditCard,
  Building2,
  Shield,
  Star,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  FileText,
  GitBranch,
  CreditCard,
  Building2,
  Shield,
};

const colorMap: Record<string, string> = {
  electric: "from-electric/20 to-electric/5 border-electric/20 text-electric",
  sky: "from-sky/20 to-sky/5 border-sky/20 text-sky",
  purple: "from-purple-accent/20 to-purple-accent/5 border-purple-accent/20 text-purple-accent",
  green: "from-green-accent/20 to-green-accent/5 border-green-accent/20 text-green-accent",
  amber: "from-amber-accent/20 to-amber-accent/5 border-amber-accent/20 text-amber-accent",
};

const iconBgMap: Record<string, string> = {
  electric: "bg-electric/10",
  sky: "bg-sky/10",
  purple: "bg-purple-accent/10",
  green: "bg-green-accent/10",
  amber: "bg-amber-accent/10",
};

export default function Features() {
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

  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold text-electric bg-electric/10 border border-electric/20 rounded-full px-3 py-1 uppercase tracking-widest mb-4">
            Platform Features
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Everything your consultancy needs to grow
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From first inquiry to visa approval — Leadhaus handles the entire student lifecycle so you can focus on what matters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Users;
            const colors = colorMap[feature.color] || colorMap.electric;
            const iconBg = iconBgMap[feature.color] || iconBgMap.electric;

            return (
              <div
                key={feature.id}
                className={`reveal reveal-delay-${(i % 3) + 1} feature-card relative rounded-2xl border bg-white p-6 shadow-card overflow-hidden ${
                  feature.featured
                    ? "ring-2 ring-electric/40 shadow-glow"
                    : ""
                }`}
              >
                {feature.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-electric text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    <Star size={10} fill="white" />
                    Featured
                  </div>
                )}

                {/* Background gradient decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${colors.split(" ")[0]}`}
                />

                <div className={`relative w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={colors.split(" ").find((c) => c.startsWith("text-")) || "text-electric"} />
                </div>

                <h3 className="relative font-heading font-semibold text-navy text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="relative text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
