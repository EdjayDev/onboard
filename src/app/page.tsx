"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

// A single background shape card that tilts subtly toward the cursor
function ShapeCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 600,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
    />
  );
}

// Shared grid definition used by BOTH layers so they always line up
const GRID_CLASSES = "grid grid-cols-4 grid-rows-3 gap-4";

export default function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 pt-10 pb-24 h-[520px]">
      {/* BACKGROUND LAYER — decorative shape cards, purely visual */}
      <div className={`absolute inset-0 ${GRID_CLASSES} -z-10`}>
        {Array.from({ length: 12 }).map((_, i) => (
          <ShapeCard key={i} />
        ))}
      </div>

      {/* FOREGROUND LAYER — same grid, content placed in specific cells */}
      <div className={`relative z-10 ${GRID_CLASSES} h-full`}>
        {/* cell 1: empty, background shows through */}
        <div />

        {/* cells 2-3: title + tagline */}
        <div className="col-span-2 flex flex-col justify-center px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            StackApply
          </h1>
          <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
            Job hunting shouldn&apos;t mean losing track of where you applied,
            forgetting to follow up, or wondering if you&apos;re actually
            making progress.
          </p>
        </div>

        {/* cell 4: nav */}
        <div className="flex items-center justify-end gap-4 px-6">
          <button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            Log In
          </button>
          <button className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-700 transition-colors">
            Sign Up
          </button>
        </div>

        {/* remaining 8 cells: empty, background shows through */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} />
        ))}
      </div>

      {/* Center hero graphic, floating above everything */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[190px] rounded-2xl bg-neutral-200 shadow-lg z-20" />
    </section>
  );
}