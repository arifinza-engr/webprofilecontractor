"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

export default function FAQSection() {
  const [open, setOpen]     = useState<number | null>(null);
  const { ref, inView }     = useReveal({ threshold: 0.08 });

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
          className="flex flex-col divide-y divide-mist/40"
          variants={stagger(0.07)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FAQS.map((faq, i) => (
            <motion.div key={i} variants={fadeUp}>
              <button
                className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif text-base md:text-lg font-semibold text-ink group-hover:text-stone transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-mist flex items-center justify-center text-stone group-hover:border-ink group-hover:text-ink transition-all">
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.25 } }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm text-stone leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
