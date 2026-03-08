"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

export default function TestimonialsSection() {
  const [idx, setIdx]       = useState(0);
  const [dir, setDir]       = useState(1);
  const { ref, inView }     = useReveal({ threshold: 0.1 });

  const paginate = (d: 1 | -1) => {
    setDir(d);
    setIdx((prev) => (prev + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d * 60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
    exit:  (d: number) => ({ x: d * -60, opacity: 0, transition: { duration: 0.3 } }),
  };

  const t = TESTIMONIALS[idx];

  return (
    <section className="py-24 md:py-32 bg-ink text-cream" ref={ref}>
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">

        <motion.span
          className="font-sans text-[0.65rem] font-semibold tracking-widest uppercase text-cream/40 block mb-4"
          variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
        >
          Testimoni Klien
        </motion.span>
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4"
          variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          Yang Klien Kami Katakan
        </motion.h2>
        <motion.div
          className="w-12 h-px bg-gold mx-auto mb-14"
          variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.2 }}
        />

        {/* Carousel */}
        <div className="relative min-h-[320px] sm:min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base sm:text-xl md:text-2xl italic text-cream/85 leading-relaxed mb-8 max-w-2xl">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold/30">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                </div>
                <div className="text-left">
                  <p className="font-sans text-sm font-semibold text-cream">{t.name}</p>
                  <p className="font-sans text-xs text-cream/40">
                    {t.role}{t.company && ` · ${t.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center
                       text-cream/50 hover:text-cream hover:border-cream transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                className={`h-1 rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-gold" : "w-1.5 bg-cream/20"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center
                       text-cream/50 hover:text-cream hover:border-cream transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
