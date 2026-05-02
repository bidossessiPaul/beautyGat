"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/dsc01439-1.jpg", width: 6000, height: 4000 },
  { src: "/images/appart-beaute-3873920.jpg", width: 1903, height: 1270 },
  { src: "/beautygate/hero_slides/IJ8hf1frmVKbLw1l3iHwTu3V4ofjeFjL5g9BSnbQ.jpg", width: 1920, height: 1280 },
  { src: "/images/appart-beaute-3873931.jpg", width: 1903, height: 1270 },
  { src: "/images/appart-beaute-3873926.jpg", width: 1903, height: 1270 },
] as const;

const AUTO_SLIDE_INTERVAL = 5000;
const TRANSITION_DURATION = 600;

export function HeroSlider() {
  const totalSlides = SLIDES.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  const slidesWithClone = [...SLIDES, SLIDES[0]];

  return (
    <section
      className="relative w-full overflow-hidden h-screen"
      style={{ backgroundColor: "#000" }}
    >
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning
            ? `transform ${TRANSITION_DURATION}ms ease`
            : "none",
        }}
      >
        {slidesWithClone.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className="relative h-full w-full shrink-0"
          >
            <Image
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ zIndex: -1 }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Texte hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-[90px]">
        <p className="text-white text-sm md:text-base uppercase tracking-[0.25em] font-light mb-4">
          Espace de bien-être, de beauté et de formation — Cadjehoun, Cotonou
        </p>
        <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          Révélez votre <span className="text-[#6D071A]">beauté</span><br />
          naturelle à Cotonou
        </h1>
        <p className="text-white text-base md:text-lg font-light max-w-xl mb-8">
          Soins du visage, épilation, massages, onglerie & bien-être — une expérience beauté irréprochable au cœur du Bénin.
        </p>
        <a
          href="#contact"
          className="group relative overflow-hidden bg-[#6D071A] text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest rounded-[3px] inline-block"
        >
          <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          <span className="relative z-10 group-hover:text-[#6D071A] transition-colors duration-500">
            Prendre rendez-vous
          </span>
        </a>
      </div>
    </section>
  );
}
