"use client";
import { useState, useEffect, Fragment } from "react";
import { EVENT } from "./config";

const TARGET = new Date(EVENT.startDate).getTime();

export function Countdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { v: t.days, l: "Jours" },
    { v: t.hours, l: "Heures" },
    { v: t.minutes, l: "Min" },
    { v: t.seconds, l: "Sec" },
  ];

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {units.map(({ v, l }, i) => (
        <Fragment key={l}>
          <div className="text-center">
            <div className="text-[32px] md:text-[40px] font-black text-white leading-none tabular-nums">
              {String(v).padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">{l}</div>
          </div>
          {i < 3 && (
            <span className="text-[24px] font-bold text-[#6D071A] mb-3">:</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
