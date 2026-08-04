"use client";

import { techStackCloud } from "@/data/skills";

export function Marquee() {
  const row = [...techStackCloud, ...techStackCloud];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 py-2">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="chip whitespace-nowrap px-5 py-2 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
