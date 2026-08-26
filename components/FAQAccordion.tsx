"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section py-16 md:py-20">
      <div className="eyebrow mb-3">FAQ</div>
      <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col border-t border-surface-line">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={item.q} className="border-b border-surface-line">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-semibold text-ink text-lg">{item.q}</span>
                <span
                  className={`shrink-0 text-2xl text-ink-faint transition-transform ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="text-ink-soft leading-relaxed pb-6 max-w-[65ch]">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
