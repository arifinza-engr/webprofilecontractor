"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { stagger, fadeUp } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

export default function StatsSection() {
  const { ref, inView } = useReveal();

  return (
    <section className="bg-ink text-cream py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
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
              className="flex flex-col items-center text-center md:border-r md:border-cream/10 last:border-0 px-4"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-cream">
                {stat.value}
                <span className="text-gold text-2xl sm:text-3xl">{stat.suffix}</span>
              </span>
              <span className="font-sans text-xs tracking-widest uppercase text-cream/40 mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
