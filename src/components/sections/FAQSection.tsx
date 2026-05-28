"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useReveal({ threshold: 0.08 });

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">

        <motion.div
          className="text-center mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">FAQ</motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Pertanyaan yang<br />Sering Diajukan
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto" />
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          variants={stagger(0.07)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={cn(
                  "rounded-2xl border bg-cream/40 transition-all duration-300",
                  isOpen
                    ? "border-gold/40 bg-white shadow-lg shadow-ink/5"
                    : "border-mist/40 hover:border-stone/40 hover:bg-cream/70",
                )}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 px-5 md:px-6 py-5 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base md:text-lg font-semibold text-ink leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex-shrink-0 w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300",
                      isOpen
                        ? "bg-gold border-gold text-ink"
                        : "bg-cream/60 border-mist/60 text-stone group-hover:border-ink group-hover:text-ink",
                    )}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.25 } }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5">
                        <div className="w-8 h-px bg-gold mb-4" />
                        <p className="font-sans text-sm text-stone leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
