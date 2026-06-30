"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Star } from "lucide-react";

export default function Testimonials() {
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
    <section className="py-20 px-4 sm:px-6 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold text-green-accent bg-green-accent/10 border border-green-accent/20 rounded-full px-3 py-1 uppercase tracking-widest mb-4">
            What Consultancies Say
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by educational consultants
          </h2>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Here's what consultancy directors and counselors are saying about Leadhaus.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`reveal reveal-delay-${i + 1} feature-card bg-white/[0.04] border border-white/10 rounded-2xl p-6`}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-accent fill-amber-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-blue-100/80 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-blue-100/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
