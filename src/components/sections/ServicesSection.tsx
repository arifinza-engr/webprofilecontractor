"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Sofa, PencilRuler, ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import type { Service } from "@/types";

const ICONS: Record<string, React.ReactNode> = {
  building:      <Building2  size={24} />,
  sofa:          <Sofa       size={24} />,
  "pencil-ruler":<PencilRuler size={24} />,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-sm overflow-hidden bg-surface cursor-pointer"
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        {/* Number */}
        <span className="absolute top-4 right-4 font-serif text-cream/30 text-4xl font-bold leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className="p-7">
        <div className="flex items-center gap-3 mb-4 text-gold">
          {ICONS[service.icon]}
          <h3 className="font-serif text-xl font-bold text-ink">{service.title}</h3>
        </div>
        <p className="font-sans text-sm text-stone leading-relaxed mb-5">{service.description}</p>

        {/* Features */}
        <ul className="flex flex-col gap-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 font-sans text-xs text-stone">
              <ChevronRight size={12} className="text-gold flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <a href="#contact" className="inline-flex items-center gap-1 font-sans text-xs font-semibold tracking-widest uppercase text-ink border-b border-gold pb-0.5 hover:border-ink transition-colors">
          Tanya Harga
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, inView } = useReveal({ threshold: 0.08 });

  return (
    <section id="services" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
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

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={stagger(0.12)}
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
