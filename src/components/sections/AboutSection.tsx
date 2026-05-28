"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp, slideLeft, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import { COMPANY, VISI_MISI } from "@/lib/data";

export default function AboutSection() {
  const { ref, inView } = useReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
              <Image
                src="/dokumentasi/doc-04.jpg"
                alt="Proyek CV Gabel Gemilang Indonesia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute right-0 -bottom-4 md:-right-6 md:-bottom-6 bg-ink text-cream p-6 rounded-sm shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <p className="font-serif text-4xl font-bold">
                {new Date().getFullYear() - COMPANY.founded}
                <span className="text-gold">+</span>
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mt-1">
                Tahun
                <br />
                Pengalaman
              </p>
            </motion.div>
            {/* Accent line */}
            <div className="absolute left-0 md:-left-4 top-10 bottom-10 w-1 bg-gold" />
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={stagger(0.08, 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.span variants={fadeUp} className="section-label block mb-4">
              Tentang Kami
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-2">
              Membangun Ruang,
              <br />
              <em className="text-stone">Mewujudkan Kepercayaan</em>
            </motion.h2>
            <motion.div variants={fadeUp} className="divider mb-6" />
            <motion.p
              variants={fadeUp}
              className="text-stone text-base leading-relaxed mb-8"
            >
              {COMPANY.description}
            </motion.p>

            {/* Visi */}
            <motion.div
              variants={fadeUp}
              className="relative bg-white border-l-2 border-gold p-5 mb-6"
            >
              <Quote
                size={28}
                className="absolute -top-3 -left-3 text-gold bg-cream p-1 rounded-full"
              />
              <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-stone/60 mb-2">
                Visi
              </p>
              <p className="font-serif text-base text-ink leading-relaxed italic">
                “{VISI_MISI.visi}”
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div variants={fadeUp} className="mb-8">
              <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-stone/60 mb-3">
                Misi
              </p>
              <ol className="space-y-2.5">
                {VISI_MISI.misi.map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-stone leading-relaxed">
                    <span className="font-serif font-bold text-gold flex-shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.a variants={fadeUp} href="#contact" className="btn-primary">
              Kenali Lebih Lanjut
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
