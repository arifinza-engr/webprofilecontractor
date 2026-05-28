"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { stagger, fadeUp } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

export default function StatsSection() {
  const { ref, inView } = useReveal();

  return (
    <section className="bg-ink text-cream py-16 relative overflow-hidden" ref={ref}>
      {/* Decorative gold blob */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex flex-col items-center text-center md:border-r md:border-cream/10 last:border-0 px-4"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-cream transition-transform duration-300 group-hover:scale-105">
                {stat.value}
                <span className="text-gold text-2xl sm:text-3xl">{stat.suffix}</span>
              </span>
              <div className="w-6 h-px bg-gold/60 mt-3 transition-all duration-300 group-hover:w-10" />
              <span className="font-sans text-xs tracking-widest uppercase text-cream/40 mt-2.5">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
