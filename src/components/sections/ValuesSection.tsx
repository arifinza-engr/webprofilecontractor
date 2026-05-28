"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Gem,
  Lightbulb,
  Handshake,
  Leaf,
  Check,
} from "lucide-react";
import { VALUES } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

const ICONS: Record<string, React.ReactNode> = {
  shield:    <Shield    size={22} />,
  gem:       <Gem       size={22} />,
  lightbulb: <Lightbulb size={22} />,
  handshake: <Handshake size={22} />,
  leaf:      <Leaf      size={22} />,
};

export default function ValuesSection() {
  const { ref, inView } = useReveal({ threshold: 0.06 });

  return (
    <section id="values" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">
            Nilai &amp; Keunggulan
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Prinsip yang Menjadi
            <br />
            Pondasi Setiap Pekerjaan
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto mb-4" />
          <motion.p variants={fadeUp} className="font-sans text-stone text-base">
            Lima nilai inti yang kami jalankan dalam setiap proyek, didukung oleh
            keunggulan operasional yang konsisten.
          </motion.p>
        </motion.div>

        {/* Values grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 md:mb-20"
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {VALUES.values.map((v) => (
            <motion.div
              key={v.id}
              variants={fadeUp}
              className="group bg-cream/40 hover:bg-cream rounded-sm border border-stone/10 hover:border-gold/40 p-6 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-cream transition-colors duration-300">
                {ICONS[v.icon]}
              </div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone/60 mb-1">
                {v.subtitle}
              </p>
              <h3 className="font-serif text-lg font-bold text-ink mb-3">
                {v.title}
              </h3>
              <div className="w-6 h-px bg-gold/40 mb-3" />
              <p className="font-sans text-xs text-stone leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages — keunggulan checklist */}
        <motion.div
          className="bg-ink rounded-sm p-8 md:p-12 relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Decorative blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold">
                Keunggulan Kami
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream mt-2 leading-tight">
                Apa yang membuat kami
                <br />
                <em className="text-gold">berbeda</em>
              </h3>
            </div>
            <ul className="md:col-span-2 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {VALUES.advantages.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="font-sans text-sm text-cream/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
