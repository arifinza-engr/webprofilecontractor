"use client";

import { motion } from "framer-motion";
import { ScrollText, IdCard, Receipt, FileBadge, ShieldCheck } from "lucide-react";
import { LEGAL_ITEMS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

const ICONS: Record<string, React.ReactNode> = {
  scroll:      <ScrollText size={22} />,
  "id-card":   <IdCard     size={22} />,
  receipt:     <Receipt    size={22} />,
  "file-badge":<FileBadge  size={22} />,
};

export default function LegalSection() {
  const { ref, inView } = useReveal({ threshold: 0.1 });

  return (
    <section id="legalitas" className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label inline-flex items-center gap-2">
            <ShieldCheck size={13} className="text-gold" /> Legalitas
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-2 mb-4">
            Terdaftar &amp; Resmi
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto mb-4" />
          <motion.p variants={fadeUp} className="font-sans text-stone text-sm">
            Perusahaan kami terdaftar resmi dengan kelengkapan dokumen legalitas
            yang dapat dipertanggungjawabkan.
          </motion.p>
        </motion.div>

        {/* Legal cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {LEGAL_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="group relative bg-white rounded-sm border border-stone/10 hover:border-gold/40 p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-cream transition-colors duration-300">
                  {ICONS[item.icon]}
                </div>
                <ShieldCheck size={14} className="text-gold/60" />
              </div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone/60 mb-1">
                {item.subtitle}
              </p>
              <h3 className="font-serif text-base font-bold text-ink leading-tight">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
