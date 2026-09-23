"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { heroContent } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/section";
import { HeroVisual } from "@/components/hero/hero-visual";
import { cn } from "@/lib/utils";

const EASE = "easeOut" as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const animate = (delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-clip pb-16 pt-28 md:pb-24 md:pt-40"
    >
      {/* Faint technical grid — single restrained backdrop layer. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...animate(0)} className="lg:col-span-7">
            <p className="type-label text-muted-foreground">
              <span
                aria-hidden="true"
                className="mr-2.5 inline-block size-1.5 rounded-full bg-signal align-middle"
              />
              {heroContent.eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="type-display mt-6 uppercase text-foreground"
            >
              {heroContent.headline}
            </h1>

            <p className="type-body mt-6 max-w-xl">{heroContent.supporting}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={heroContent.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group h-11 px-6 text-[15px]",
                )}
              >
                {heroContent.primaryCta.label}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "group h-11 px-6 text-[15px]",
                )}
              >
                {heroContent.secondaryCta.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          <motion.div {...animate(0.15)} className="lg:col-span-5">
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
