"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { CheckCircle2, Circle } from "lucide-react";

export default function StudentJourney() {
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
    <section
      id="student-journey"
      className="py-20 px-4 sm:px-6 bg-navy"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold text-sky bg-sky/10 border border-sky/20 rounded-full px-3 py-1 uppercase tracking-widest mb-4">
            Student Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Track every step of the student lifecycle
          </h2>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Leadhaus maps the full journey from first inquiry to arrival, giving you and your team complete clarity at every stage.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Stage steps */}
          <div className="reveal reveal-delay-1">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-semibold text-white text-lg mb-6">
                Student Lifecycle Stages
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10" />

                <div className="space-y-1">
                  {siteConfig.studentJourney.stages.map((stage, i) => (
                    <div
                      key={stage.id}
                      className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 relative ${
                        stage.active
                          ? "bg-electric/10 border border-electric/30"
                          : "hover:bg-white/5"
                      }`}
                    >
                      {/* Step indicator */}
                      <div className="relative z-10 flex-shrink-0">
                        {stage.active ? (
                          <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center shadow-glow">
                            <CheckCircle2 size={16} className="text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                            <span className="text-xs text-blue-100/40 font-medium">
                              {stage.id}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <span
                          className={`font-medium text-sm block mb-0.5 ${
                            stage.active ? "text-white" : "text-blue-100/50"
                          }`}
                        >
                          {stage.label}
                        </span>
                        <span className={`text-xs block ${
                          stage.active ? "text-blue-100/80" : "text-blue-100/40"
                        }`}>
                          {stage.desc}
                        </span>
                        {stage.active && (
                          <div className="flex items-center gap-1 mt-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-accent animate-pulse" />
                            <span className="text-xs text-green-accent">Active Stage</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual pipeline */}
          <div className="reveal reveal-delay-2">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-white text-lg">
                  Live Pipeline View
                </h3>
                <div className="flex items-center gap-2 bg-green-accent/10 border border-green-accent/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-accent animate-pulse" />
                  <span className="text-xs text-green-accent font-medium">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                {siteConfig.studentJourney.pipeline.map((item) => {
                  const pct =
                    item.total > 0
                      ? Math.round((item.count / item.total) * 100)
                      : 0;
                  return (
                    <div key={item.stage}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-blue-100/70 font-medium">
                          {item.stage}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-sm font-bold"
                            style={{ color: item.color }}
                          >
                            {item.count}
                          </span>
                          <span className="text-xs text-blue-100/40">
                            {item.count === 1
                              ? "student"
                              : "students"}
                          </span>
                        </div>
                      </div>
                      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: item.color,
                            boxShadow: `0 0 12px ${item.color}60`,
                          }}
                        />
                      </div>
                      <div className="flex justify-end mt-0.5">
                        <span className="text-xs text-blue-100/30">{pct}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold font-heading text-white">9</div>
                  <div className="text-xs text-blue-100/40 mt-0.5">In Pipeline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading text-green-accent">1</div>
                  <div className="text-xs text-blue-100/40 mt-0.5">Visa Approved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading text-amber-accent">4</div>
                  <div className="text-xs text-blue-100/40 mt-0.5">Visa Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
