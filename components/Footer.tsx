"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Image
              src={siteConfig.brand.logo}
              alt={siteConfig.brand.logoAlt}
              width={300}
              height={80}
              className="h-20 w-auto object-contain mb-6"
            />
            <p className="text-blue-100/50 text-sm leading-relaxed mb-4">
              {siteConfig.footer.description}
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-accent animate-pulse" />
              <span className="text-xs text-blue-100/40">All systems operational</span>
            </div>
          </div>

          {/* Link columns */}
          {siteConfig.footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-blue-100/50 hover:text-white transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && (
                        <span className="text-xs opacity-40">↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100/40">
            © {year} Leadhaus · CRM by TGG. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.footer.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-blue-100/30 hover:text-blue-100/70 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
