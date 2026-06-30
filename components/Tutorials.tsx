"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Play } from "lucide-react";

export default function Tutorials() {
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
    <section id="tutorials" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold text-amber-accent bg-amber-accent/10 border border-amber-accent/20 rounded-full px-3 py-1 uppercase tracking-widest mb-4">
            Tutorials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            See Leadhaus in Action
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Watch our step-by-step tutorials to get up and running in minutes. No
            technical experience required.
          </p>
        </div>

        {/* Video cards */}
        <div className="max-w-4xl mx-auto">
          {siteConfig.tutorials.map((tutorial, i) => (
            <div
              key={tutorial.id}
              className={`reveal reveal-delay-${i + 1} feature-card bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card`}
            >
              {/* YouTube embed */}
              <div className="relative aspect-video bg-navy">
                <iframe
                  src={`https://www.youtube.com/embed/${tutorial.youtubeId}?rel=0&modestbranding=1`}
                  title={tutorial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-electric/10 flex items-center justify-center">
                    <Play size={12} className="text-electric fill-electric" />
                  </div>
                  <span className="text-xs text-electric font-semibold uppercase tracking-wider">
                    Tutorial
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-navy text-base mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {tutorial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
