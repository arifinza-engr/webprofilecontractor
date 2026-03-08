"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, scaleIn } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import type { PortfolioCategory } from "@/types";

const FILTERS: { label: string; value: PortfolioCategory }[] = [
  { label: "Semua",       value: "all"         },
  { label: "Konstruksi",  value: "konstruksi"  },
  { label: "Interior",    value: "interior"    },
  { label: "Drafter",     value: "drafter"     },
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

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
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
                "font-sans text-xs font-medium tracking-widest uppercase px-5 py-2.5 rounded-sm border transition-all duration-200",
                active === f.value
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent text-stone border-mist hover:border-ink hover:text-ink",
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                className="group relative rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-400" />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 font-sans text-[0.6rem] font-semibold tracking-widest uppercase bg-cream/90 text-ink px-2.5 py-1 rounded-sm">
                    {item.category}
                  </span>
                  {item.area && (
                    <span className="absolute top-3 right-3 font-sans text-[0.6rem] font-semibold tracking-widest uppercase bg-gold/90 text-ink px-2.5 py-1 rounded-sm">
                      {item.area}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-ink mb-1 group-hover:text-stone transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 font-sans text-xs text-mist">
                      <MapPin size={11} /> {item.location}
                    </span>
                    <span className="font-sans text-xs text-mist">{item.year}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
