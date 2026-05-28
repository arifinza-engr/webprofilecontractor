"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, scaleIn } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import type { PortfolioCategory } from "@/types";

const FILTERS: { label: string; value: PortfolioCategory }[] = [
  { label: "Semua",        value: "all"          },
  { label: "Konstruksi",   value: "construction" },
  { label: "Arsitektur",   value: "architecture" },
  { label: "Interior",     value: "interior"     },
];

export default function PortfolioSection() {
  const [active, setActive] = useState<PortfolioCategory>("all");
  const { ref, inView }     = useReveal({ threshold: 0.05 });

  const filtered = active === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">Portofolio</motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Karya yang Berbicara<br />untuk Dirinya Sendiri
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto" />
        </motion.div>

        {/* Filter tabs — pill style */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.25 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "font-sans text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300",
                active === f.value
                  ? "bg-ink text-cream border-ink shadow-md shadow-ink/15"
                  : "bg-white/60 backdrop-blur-sm text-stone border-mist/60 hover:border-ink hover:text-ink hover:bg-white",
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.a
                key={item.id}
                href="#contact"
                layout
                variants={scaleIn}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="group relative block rounded-2xl overflow-hidden bg-ink shadow-lg shadow-ink/10 hover:shadow-2xl hover:shadow-ink/30 transition-shadow duration-500 aspect-[4/5]"
              >
                {/* Background image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Persistent vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/30 pointer-events-none" />

                {/* Top row: category badge (glass) + year watermark */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className="font-sans text-[10px] font-semibold tracking-widest uppercase bg-cream/15 backdrop-blur-md text-cream border border-cream/20 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl md:text-4xl font-bold text-cream/30 leading-none"
                  >
                    {item.year}
                  </span>
                </div>

                {/* Area badge — bottom-right when present */}
                {item.area && (
                  <span className="absolute top-14 right-4 font-sans text-[10px] font-semibold tracking-widest uppercase bg-gold text-ink px-2.5 py-1 rounded-full">
                    {item.area}
                  </span>
                )}

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 px-5 pt-16 pb-5 bg-gradient-to-t from-ink via-ink/85 to-transparent">
                  <h3 className="font-serif text-lg font-bold text-cream leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-8 h-px bg-gold mt-2 mb-3 transition-all duration-300 group-hover:w-12" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-cream/70">
                      <MapPin size={11} className="text-gold flex-shrink-0" />
                      {item.location}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
                {/* Suppress unused index warning when no number watermark used */}
                <span className="hidden">{i}</span>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
