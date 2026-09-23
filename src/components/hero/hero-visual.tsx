"use client";

import { motion, useReducedMotion } from "motion/react";

const modules = [
  { name: "web / app", state: "operational" },
  { name: "api / edge", state: "operational" },
  { name: "worker / queue", state: "standby" },
] as const;

const pipeline = ["build → pass", "test → pass", "deploy → production"] as const;

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="w-full max-w-md justify-self-center lg:justify-self-end"
    >
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="type-meta ml-2">system — production</span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground">
            {reduceMotion ? (
              <span className="size-1.5 rounded-full bg-signal" />
            ) : (
              <motion.span
                className="size-1.5 rounded-full bg-signal"
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            live
          </span>
        </div>

        <ul className="divide-y divide-white/[0.06] px-4">
          {modules.map((module) => (
            <li
              key={module.name}
              className="flex items-center justify-between py-3 font-mono text-xs"
            >
              <span className="text-foreground/80">{module.name}</span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <span
                  className={
                    module.state === "operational"
                      ? "size-1.5 rounded-full bg-signal"
                      : "size-1.5 rounded-full bg-white/25"
                  }
                />
                {module.state}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/[0.06] px-4 py-3">
          <ul className="space-y-1.5 font-mono text-[11px] leading-relaxed">
            {pipeline.map((step) => (
              <li key={step} className="text-muted-foreground">
                <span className="mr-2 text-foreground/30">$</span>
                {step}
              </li>
            ))}
          </ul>

          <div className="mt-4 h-px overflow-hidden bg-white/[0.08]">
            {reduceMotion ? (
              <div className="h-full w-1/3 bg-signal/60" />
            ) : (
              <motion.div
                className="h-full w-1/3 bg-signal/60"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>
        </div>
      </div>

      <p className="type-meta mt-3 text-center lg:text-right">
        idea → design → build → ship
      </p>
    </div>
  );
}
