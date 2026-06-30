"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(siteConfig.brand.logo);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fallback logo resolver — tries png, svg, webp in sequence
  const handleLogoError = () => {
    const extensions = ["png", "svg", "webp", "jpg"];
    const base = "/leadhaus-logo";
    const current = logoSrc;
    const currentExt = current.split(".").pop();
    const nextExt = extensions[extensions.indexOf(currentExt || "") + 1];
    if (nextExt) {
      setLogoSrc(`${base}.${nextExt}`);
    }
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileOpen(false);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <Image
                src={logoSrc}
                alt={siteConfig.brand.logoAlt}
                width={300}
                height={80}
                className="h-20 w-auto object-contain"
                onError={handleLogoError}
                priority
              />
            </a>

            {/* Center Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {siteConfig.nav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-navy transition-colors duration-200 rounded-lg hover:bg-slate-100/50 font-medium"
                >
                  {link.label}
                  {link.external && (
                    <span className="ml-1 text-xs opacity-60">↗</span>
                  )}
                </a>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#pricing"
                onClick={(e) => handleAnchorClick(e, "#pricing")}
                className="px-4 py-2 text-sm text-navy border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-200 font-medium"
              >
                View Plans
              </a>
              <a
                href="/app/register"
                className="px-5 py-2 text-sm bg-navy hover:bg-[#1a3260] text-white rounded-lg font-semibold transition-all duration-200"
              >
                Get Started Free
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-navy rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 z-50 bg-navy border-l border-white/10 p-6 flex flex-col gap-6 md:hidden mobile-drawer ${
          mobileOpen ? "open" : "closed"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src={logoSrc}
            alt={siteConfig.brand.logoAlt}
            width={130}
            height={33}
            className="h-8 w-auto object-contain"
            onError={handleLogoError}
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {siteConfig.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="px-4 py-3 text-blue-100/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              {link.label}
              {link.external && <span className="ml-1 text-xs opacity-60">↗</span>}
            </a>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <a
            href="#pricing"
            onClick={(e) => handleAnchorClick(e, "#pricing")}
            className="w-full text-center px-5 py-3 text-sm text-blue-100 border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-200 font-medium"
          >
            View Plans
          </a>
          <a
            href="/app/register"
            className="w-full text-center px-5 py-3 text-sm bg-navy hover:bg-[#1a3260] text-white rounded-xl font-semibold transition-all duration-200"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </>
  );
}
