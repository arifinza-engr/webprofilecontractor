"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, slideLeft, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import { COMPANY } from "@/lib/data";

const VALUES = [
  {
    title: "Kualitas Terukur",
    desc: "Standar material dan pengerjaan terbaik di setiap proyek.",
  },
  {
    title: "Tepat Waktu",
    desc: "Komitmen penuh terhadap jadwal yang telah disepakati.",
  },
  {
    title: "Transparan & Jujur",
    desc: "RAB terbuka, tidak ada biaya tersembunyi.",
  },
  {
    title: "Garansi Pekerjaan",
    desc: "Garansi struktur 5 tahun dan finishing 1 tahun.",
  },
];

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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Tim GABEL Gemilang di lapangan"
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
                10<span className="text-gold">+</span>
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
            variants={stagger(0.1, 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.span variants={fadeUp} className="section-label block mb-4">
              Tentang Kami
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mb-2">
              Membangun Kepercayaan
              <br />
              <em className="text-stone">Satu Proyek Setiap Saat</em>
            </motion.h2>
            <motion.div variants={fadeUp} className="divider mb-6" />
            <motion.p
              variants={fadeUp}
              className="text-stone text-base leading-relaxed mb-8"
            >
              {COMPANY.description}
            </motion.p>

            {/* Values grid */}
            <motion.div
              variants={stagger(0.08)}
              className="grid sm:grid-cols-2 gap-5 mb-8"
            >
              {VALUES.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="flex gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="font-sans font-semibold text-sm text-ink">
                      {v.title}
                    </p>
                    <p className="font-sans text-xs text-stone mt-0.5 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
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
