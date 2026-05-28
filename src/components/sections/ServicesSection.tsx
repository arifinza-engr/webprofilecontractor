"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HardHat,
  Compass,
  Sofa,
  Armchair,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import type { Service } from "@/types";

const ICONS: Record<string, React.ReactNode> = {
  "hard-hat": <HardHat  size={18} />,
  compass:    <Compass  size={18} />,
  sofa:       <Sofa     size={18} />,
  armchair:   <Armchair size={18} />,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const stepNum = String(index + 1).padStart(2, "0");

  return (
    <motion.a
      href="#contact"
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative block rounded-2xl overflow-hidden aspect-[3/4] bg-ink shadow-lg shadow-ink/10 hover:shadow-2xl hover:shadow-ink/30 transition-shadow duration-500"
    >
      {/* Background image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Persistent dark vignette on the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-ink/30 pointer-events-none" />

      {/* Top corners: icon badge + step number watermark */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
        <div className="w-10 h-10 rounded-full bg-cream/15 backdrop-blur-md border border-cream/25 flex items-center justify-center text-gold">
          {ICONS[service.icon]}
        </div>
        <span
          aria-hidden="true"
          className="font-serif text-5xl md:text-6xl font-bold text-cream/35 leading-none mt-1"
        >
          {stepNum}
        </span>
      </div>

      {/* Bottom info block — expands on hover to reveal features */}
      <div className="absolute inset-x-0 bottom-0 px-6 pt-20 pb-6 bg-gradient-to-t from-ink via-ink/85 to-transparent">
        <h3 className="font-serif text-xl font-bold text-cream leading-snug">
          {service.title}
        </h3>
        <div className="w-8 h-px bg-gold mt-2.5 mb-3 transition-all duration-300 group-hover:w-12" />
        <p className="font-sans text-xs text-cream/70 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
          {service.description}
        </p>

        {/* Features — hidden by default, slide in on hover */}
        <ul className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out overflow-hidden">
          <li className="min-h-0">
            <ul className="pt-4 space-y-1.5">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 font-sans text-[11px] text-cream/80 leading-relaxed"
                >
                  <Check
                    size={11}
                    className="text-gold flex-shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* CTA */}
        <div className="mt-5 flex items-center gap-1.5">
          <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold">
            Tanya Harga
          </span>
          <ArrowUpRight
            size={14}
            className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.a>
  );
}

export default function ServicesSection() {
  const { ref, inView } = useReveal({ threshold: 0.06 });

  return (
    <section id="services" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">Layanan Kami</motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Solusi Lengkap untuk<br />Setiap Kebutuhan Bangunan
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto mb-4" />
          <motion.p variants={fadeUp} className="font-sans text-stone text-base">
            Dari perencanaan hingga penyelesaian, kami hadir sebagai mitra terpercaya Anda.
          </motion.p>
        </motion.div>

        {/* 4 services in a single row on desktop (2×2 on tablet, 1 col mobile) */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
