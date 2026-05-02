"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  expandedText?: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  layout: "left" | "right";
}

export function ServiceSection({
  title,
  subtitle,
  description,
  expandedText,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  layout,
}: ServiceSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-[60px]">
      <div
        className={`max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col ${
          layout === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } items-stretch`}
      >
        {/* Texte */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-[60px] lg:px-[100px] py-8 md:py-0">
          <h2 className="font-sans text-[24px] md:text-[30px] font-bold leading-[1.3] text-black mb-4">
            {title}
            {subtitle && (
              <span className="block text-[16px] md:text-[18px] font-light mt-1">
                {subtitle}
              </span>
            )}
          </h2>
          <p className="text-[15px] leading-[28px] text-[#333] mb-2">
            {description}
          </p>
          {expandedText && (
            <>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[15px] leading-[28px] text-[#333] mb-2">
                  {expandedText}
                </p>
              </div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[13px] font-semibold text-black cursor-pointer hover:underline mb-4 self-start"
              >
                {expanded ? "Lire moins" : "Lire plus"}
              </button>
            </>
          )}
          <Link
            href={ctaHref}
            className="inline-block bg-black text-white text-[13px] font-medium uppercase border-2 border-[#373737] rounded-[3px] px-6 py-[19px] mt-4 hover:bg-gray-900 transition-colors self-start"
          >
            {ctaText}
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 relative min-h-[300px] md:min-h-[340px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
