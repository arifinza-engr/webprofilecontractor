"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

export default function TeamSection() {
  const { ref, inView } = useReveal({ threshold: 0.08 });

  return (
    <section id="team" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">Tim Kami</motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Orang-Orang di Balik<br />Setiap Proyek Hebat
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto" />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeUp}
              className="group text-center"
            >
              {/* Photo */}
              <div className="relative aspect-square rounded-sm overflow-hidden mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              <h3 className="font-serif text-lg font-bold text-ink">{member.name}</h3>
              <p className="font-sans text-xs tracking-widest uppercase text-gold mt-1 mb-2">{member.role}</p>
              <p className="font-sans text-xs text-stone leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
