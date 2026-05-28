"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export default function ProcessSection() {
  const { ref, inView } = useReveal({ threshold: 0.05 });

  return (
    <section id="process" className="py-24 md:py-32 bg-cream overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <motion.div
          className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">Proses Kerja</motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Empat Langkah Jelas<br />dari Ide ke Bangunan Jadi
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto mb-4" />
          <motion.p variants={fadeUp} className="font-sans text-stone text-base">
            Alur kerja yang transparan dan terstruktur — Anda tahu persis di tahap mana proyek berada di setiap saat.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-28">
          {PROCESS_STEPS.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <ProcessRow key={s.id} step={s} reversed={reversed} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  reversed,
}: {
  step: typeof PROCESS_STEPS[number];
  reversed: boolean;
}) {
  const { ref, inView } = useReveal({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      variants={stagger(0.15)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {/* Image */}
      <motion.div
        variants={fadeUp}
        className={cn("relative group", reversed && "lg:order-2")}
      >
        <div
          className={cn(
            "absolute inset-0 border border-gold rounded-2xl hidden lg:block transition-transform duration-500",
            reversed ? "-translate-x-5 translate-y-5" : "translate-x-5 translate-y-5"
          )}
        />
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-mist/30 shadow-lg shadow-ink/10">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        className={cn("relative group", reversed && "lg:order-1")}
      >
        <span
          aria-hidden="true"
          className="absolute -top-6 -left-3 md:-top-10 md:-left-4 font-serif text-7xl md:text-8xl font-bold text-gold/15 leading-none pointer-events-none select-none"
        >
          {step.step}
        </span>
        <div className="relative">
          <span className="section-label block mb-3">Tahap {step.step}</span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight mb-5">
            {step.title}
          </h3>
          <div className="w-12 h-px bg-gold mb-6 transition-all duration-300 group-hover:w-20" />
          <p className="font-sans text-stone text-base leading-relaxed max-w-md">
            {step.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
