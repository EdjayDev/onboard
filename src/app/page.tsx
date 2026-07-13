"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef } from "react";

// A single background shape card that tilts subtly toward the cursor
function ShapeCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [4, -4]);
  const rotateY = useTransform(x, [-50, 50], [-4, 4]);

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
      className="rounded-2xl bg-white/60 border border-brand-secondary/5"
    />
  );
}

const BG_GRID = "grid grid-cols-4 grid-rows-3 gap-4";

// --- Animation choreography ---
// 1. Eyebrow + title + tagline drop down into place
const textVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// 2. The dashboard window frame appears right after the text
const frameVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
  },
};

// 3. The 3 kanban columns pop in one by one, inside the frame
const columnVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.85 + i * 0.15,
    },
  }),
};

// 4. Skeleton cards inside each column cascade in after their column
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: i * 0.06,
    },
  }),
};

const COLUMNS = [
  { label: "Applied", count: 12, active: false },
  { label: "Interviewing", count: 3, active: true },
  { label: "Offer", count: 1, active: false },
];

export default function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 pt-16 pb-28 min-h-[640px] overflow-hidden">
      {/* BACKGROUND LAYER — decorative shape cards, purely visual */}
      <div className={`absolute inset-0 ${BG_GRID} -z-10 opacity-70`}>
        {Array.from({ length: 12 }).map((_, i) => (
          <ShapeCard key={i} />
        ))}
      </div>

      {/* NAV — top corner, out of the centered flow */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-4">
        <button className="text-sm font-medium text-brand-secondary/70 hover:text-brand-secondary transition-colors">
          Log In
        </button>
        <button className="text-sm font-medium bg-brand-secondary text-white px-4 py-2 rounded-full hover:bg-brand-primary transition-colors">
          Sign Up
        </button>
      </div>

      {/* CENTERED CONTENT COLUMN */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col items-center max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-primary mb-4">
            application tracker
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[0.95] text-brand-secondary">
            StackApply
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-secondary/60 leading-relaxed">
            Job hunting shouldn&apos;t mean losing track of where you applied,
            forgetting to follow up, or wondering if you&apos;re actually making
            progress.
          </p>
        </motion.div>

        {/* Dashboard mockup — fake browser window containing a live kanban preview */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={frameVariants}
          className="mt-12 w-full max-w-[560px] rounded-2xl border border-brand-secondary/10 bg-white shadow-[0_20px_60px_-15px_rgba(28,28,30,0.25)] overflow-hidden"
        >
          {/* window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-secondary/8 bg-brand-secondary/[0.03]">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary/15" />
            <span className="ml-3 font-mono text-[11px] text-brand-secondary/40">
              stackapply.app/dashboard
            </span>
          </div>

          {/* kanban columns */}
          <div className="grid grid-cols-3 gap-3 p-4">
            {COLUMNS.map((col, i) => (
              <motion.div
                key={col.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={columnVariants}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center justify-between px-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand-secondary/50">
                    {col.label}
                  </span>
                  <span
                    className={`font-mono text-[10px] rounded-full px-1.5 py-0.5 ${
                      col.active
                        ? "bg-brand-primary text-white"
                        : "bg-brand-secondary/8 text-brand-secondary/50"
                    }`}
                  >
                    {col.count}
                  </span>
                </div>

                {Array.from({ length: 2 }).map((_, j) => (
                  <motion.div
                    key={j}
                    custom={j}
                    variants={cardVariants}
                    className={`h-10 rounded-lg border ${
                      col.active && j === 0
                        ? "border-brand-primary/40 bg-brand-primary/5"
                        : "border-brand-secondary/8 bg-brand-secondary/[0.02]"
                    }`}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
