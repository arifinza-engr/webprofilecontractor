"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PARTNERS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

export default function PartnersSection() {
  const { ref, inView } = useReveal({ threshold: 0.15 });
  const partner = PARTNERS[0];

  return (
    <section id="partners" className="py-24 md:py-32 bg-surface" ref={ref}>
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">
            Kemitraan Strategis
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-2 mb-4">
            Didukung Supplier
            <br />
            Material Terbaik
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto" />
        </motion.div>

        {/* Partnership Card */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="bg-white border border-mist/30 rounded-sm overflow-hidden shadow-sm"
          >
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent" />

            <div className="grid md:grid-cols-2 gap-0">

              {/* Left — Identity */}
              <div className="flex flex-col items-center justify-center gap-6 px-10 py-14 border-b md:border-b-0 md:border-r border-mist/20 bg-surface/40">
                {/* Monogram badge */}
                <div className="w-24 h-24 rounded-sm bg-ink flex items-center justify-center shadow-lg">
                  <span className="font-sans text-3xl font-bold text-cream tracking-tight">
                    {partner.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="font-sans text-2xl font-bold text-ink">
                    {partner.name}
                  </h3>
                  {partner.tagline && (
                    <p className="font-sans text-xs text-stone tracking-widest uppercase mt-1">
                      {partner.tagline}
                    </p>
                  )}
                </div>

                <Link
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-ink text-ink font-sans text-xs font-medium
                             px-5 py-2.5 rounded-sm tracking-wide transition-all duration-300
                             hover:bg-ink hover:text-cream"
                >
                  Kunjungi Website
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              {/* Right — Detail */}
              <div className="flex flex-col justify-center gap-7 px-10 py-14">
                <div>
                  <p className="font-sans text-[0.7rem] font-semibold tracking-widest uppercase text-gold mb-3">
                    Tentang Kemitraan
                  </p>
                  {partner.description && (
                    <p className="font-sans text-sm text-stone leading-relaxed">
                      {partner.description}
                    </p>
                  )}
                </div>

                {partner.benefits && partner.benefits.length > 0 && (
                  <ul className="flex flex-col gap-3">
                    {partner.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <span className="font-sans text-sm text-ink">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
