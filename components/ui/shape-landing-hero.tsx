"use client";

import { motion } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(108,190,69,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

type HeroGeometricProps = {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

function HeroGeometric({
  badge = "Agritech built for African farms",
  title1 = "Revolutionizing Food Preservation",
  title2 = "with Solar-Powered Innovation",
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden bg-green-deep">
      <div className="absolute inset-0 bg-gradient-to-br from-leaf/[0.10] via-transparent to-orange/[0.08] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-leaf/[0.22]"
          className="left-[-10%] top-[14%] md:left-[-5%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-green/[0.28]"
          className="right-[-5%] top-[68%] md:right-[0%] md:top-[74%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-orange/[0.20]"
          className="bottom-[6%] left-[4%] md:bottom-[10%] md:left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-leaf/[0.20]"
          className="right-[14%] top-[9%] md:right-[20%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#8fd36a]/[0.18]"
          className="left-[18%] top-[4%] md:left-[24%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-4 py-1.5"
          >
            <Circle className="h-2 w-2 fill-orange text-orange" />
            <span className="text-sm tracking-wide text-cream/70">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mb-6 font-display text-4xl font-medium tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-b from-cream to-cream/75 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-leaf via-cream to-orange bg-clip-text text-transparent">
                {title2}
              </span>
            </h1>
          </motion.div>

          {subtitle && (
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="mx-auto mb-10 max-w-xl px-2 text-base leading-relaxed tracking-wide text-cream/55 sm:text-lg">
                {subtitle}
              </p>
            </motion.div>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-white shadow-lift transition-all hover:bg-[#d86e13] sm:w-auto"
                >
                  {primaryCta.label}
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/[0.03] px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10 sm:w-auto"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-deep via-transparent to-green-deep/70" />
    </div>
  );
}

export { HeroGeometric };
