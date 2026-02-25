"use client";
import React, { useEffect, useRef, useState } from "react";

interface QuoteProps {
  quote?: string;
  author?: string;
  authorTitle?: string;
  company?: string;
  authorImage?: string;
  colorSchemeNew?: "white" | "lightgrey" | "greenTint";
}

const bgMap: Record<string, string> = { white: "bg-white", lightgrey: "bg-[#FAFAFA]", greenTint: "bg-[#D8F4D8]" };

export default function Quote({ quote = "Gladly has transformed how we think about customer relationships.", author = "VP of Customer Experience", authorTitle = "Leading DTC Retail Brand", company, authorImage, colorSchemeNew = "lightgrey" }: QuoteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 }); if (ref.current) obs.observe(ref.current); return () => obs.disconnect(); }, []);

  return (
    <section ref={ref} className={`${bgMap[colorSchemeNew] || bgMap.lightgrey} py-20 md:py-28`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-10 h-10 mx-auto text-[#009b00] opacity-40 mb-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" /></svg>
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug tracking-tight" style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}>{quote}</blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            {authorImage && <img src={authorImage} alt={author} className="w-12 h-12 rounded-full object-cover" />}
            <div>
              <p className="text-base font-semibold text-gray-900">{author}</p>
              <p className="text-sm text-[#6b7280]">{authorTitle}{company ? `, ${company}` : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
