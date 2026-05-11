"use client";

import { useEffect, useRef, useState } from "react";

interface Group {
  key: string;
  label: string;
  count: number;
}

export function NosSoinsNav({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState<string>(groups[0]?.key ?? "");
  const navRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    groups.forEach((g) => {
      const el = document.getElementById(g.key);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(g.key);
        },
        { threshold: 0.15, rootMargin: "-100px 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [groups]);

  useEffect(() => {
    const btn = btnRefs.current[active];
    if (btn && navRef.current) {
      const nav = navRef.current;
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const navWidth = nav.offsetWidth;
      nav.scrollTo({ left: btnLeft - navWidth / 2 + btnWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  const handleClick = (key: string) => {
    const el = document.getElementById(key);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90 - 52;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActive(key);
  };

  return (
    <div className="sticky top-[90px] z-30 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={navRef}
          className="flex gap-0 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {groups.map((g) => (
            <button
              key={g.key}
              ref={(el) => { btnRefs.current[g.key] = el; }}
              onClick={() => handleClick(g.key)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] border-b-2 transition-all duration-200 whitespace-nowrap ${
                active === g.key
                  ? "border-[#6D071A] text-[#6D071A]"
                  : "border-transparent text-[#888] hover:text-[#1C1C1C]"
              }`}
            >
              {g.label}
              <span
                className={`text-[9px] font-semibold tabular-nums px-1.5 py-0.5 rounded-full transition-colors ${
                  active === g.key
                    ? "bg-[#6D071A] text-white"
                    : "bg-[#f0f0f0] text-[#aaa]"
                }`}
              >
                {g.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
