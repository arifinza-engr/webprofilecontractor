"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  const ref   = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const waUrl = buildWhatsAppUrl(COMPANY.whatsapp, COMPANY.whatsappMsg);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] flex items-center overflow-hidden" id="hero">

      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85"
          alt="Hero background – modern building"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="max-w-2xl">

          {/* Label */}
          <motion.span
            className="inline-block font-sans text-[0.65rem] font-semibold tracking-widest uppercase text-gold mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.35 }}
          >
            Kontraktor Profesional · Sejak {COMPANY.founded}
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream leading-[1.05] mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {COMPANY.tagline}
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="font-sans text-base md:text-lg text-cream/70 leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
          >
            Konstruksi, desain interior, dan jasa drafter berkualitas tinggi untuk hunian dan komersial Anda.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.3 }}
          >
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Konsultasi Gratis
            </a>
            <Link href="#portfolio" className="btn-outline border-cream text-cream hover:bg-cream hover:text-ink">
              Lihat Portofolio
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <span className="font-sans text-[0.6rem] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
