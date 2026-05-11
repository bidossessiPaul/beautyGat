"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Phase = "idle" | "in" | "hold" | "out";

export function PageTransition() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("in"); // démarre visible au 1er chargement
  const prevPath = useRef<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clear() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  // 1er chargement : intro puis disparition
  useEffect(() => {
    prevPath.current = pathname;
    setPhase("hold");
    timerRef.current = setTimeout(() => setPhase("out"), 500);
    timerRef.current = setTimeout(() => setPhase("idle"), 1100);
    return clear;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Changement de route
  useEffect(() => {
    if (prevPath.current === null) return; // ignore 1er render
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    clear();
    setPhase("in");
    timerRef.current = setTimeout(() => setPhase("hold"), 50);
    timerRef.current = setTimeout(() => setPhase("out"), 600);
    timerRef.current = setTimeout(() => setPhase("idle"), 1200);

    return clear;
  }, [pathname]);

  if (phase === "idle") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0e0608] pointer-events-none"
      style={{
        opacity: phase === "in" ? 0 : phase === "hold" ? 1 : 0,
        transition: phase === "in"
          ? "opacity 300ms ease-in"
          : phase === "out"
          ? "opacity 400ms ease-out"
          : "none",
      }}
    >
      {/* Logo */}
      <div
        style={{
          transform: phase === "hold" ? "scale(1)" : "scale(0.92)",
          opacity: phase === "hold" ? 1 : 0,
          transition: "transform 400ms ease-out, opacity 400ms ease-out",
        }}
      >
        <Image
          src="/beautygate-logo-sans-bg.png"
          alt="Academy Beauty Gate"
          width={140}
          height={52}
          className="brightness-0 invert"
          priority
        />
      </div>

      {/* Barre de chargement */}
      <div className="mt-8 w-[120px] h-px bg-white/10 overflow-hidden">
        <div
          className="h-full bg-[#6D071A]"
          style={{
            width: phase === "hold" ? "100%" : "0%",
            transition: phase === "hold" ? "width 500ms ease-out" : "none",
          }}
        />
      </div>
    </div>
  );
}
