"use client";
import React, { useEffect, useRef, useState } from "react";

interface BenefitItem { title: string; description: string; }

interface BenefitsProps {
  heading?: string;
  description?: string;
  benefits?: BenefitItem[];
  primaryCTA?: { children: string; href: string };
  colorSchemeNew?: "white" | "lightgrey" | "greenTint";
}

const defaults: BenefitItem[] = [
  { title: "Efficiency AND Devotion", description: "AI efficiency is essential — it's the foundation. Gladly also drives the long-term value that compounds over time." },
  { title: "Revenue-Driving CX", description: "When your AI can show impact on retention, lifetime value, and share of wallet, you're driving the business." },
  { title: "Relationship Equity", description: "Every AI conversation either builds relationship equity or spends it. Gladly's AI builds, not just processes." },
  { title: "Customer-Centric Data", description: "AI built on customer data knows who it's talking to and why that matters." },
];

const bgMap: Record<string, string> = { white: "bg-white", lightgrey: "bg-[#FAFAFA]", greenTint: "bg-[#D8F4D8]" };

export default function Benefits({ heading = "Design for devotion, not deflection", description = "The best customer experience AI delivers operational efficiency AND lasting customer value.", benefits = defaults, primaryCTA = { children: "See how it works", href: "#demo" }, colorSchemeNew = "lightgrey" }: BenefitsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 }); if (ref.current) obs.observe(ref.current); return () => obs.disconnect(); }, []);

  return (
    <section ref={ref} className={`${bgMap[colorSchemeNew] || bgMap.lightgrey} py-20 md:py-28`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight" style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}>{heading}</h2>
            <p className="mt-6 text-lg text-[#374151] leading-relaxed max-w-lg">{description}</p>
            <a href={primaryCTA.href} className="mt-8 inline-flex items-center gap-2 bg-black hover:bg-[#009b00] text-white font-medium px-6 py-3 rounded-md text-sm transition-colors">{primaryCTA.children}</a>
          </div>
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div key={b.title} className={`flex gap-4 p-5 bg-white rounded-lg border border-[#e5e7eb] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: `${i * 100 + 200}ms` }}>
                <div className="w-8 h-8 rounded-full bg-[#D8F4D8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#009b00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900" style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}>{b.title}</h4>
                  <p className="mt-1 text-sm text-[#6b7280] leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
