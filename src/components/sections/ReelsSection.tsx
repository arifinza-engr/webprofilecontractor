"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Eye, Instagram } from "lucide-react";
import { REELS, COMPANY } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

export default function ReelsSection() {
  const { ref, inView } = useReveal({ threshold: 0.08 });

  return (
    <section id="reels" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div>
            <motion.span variants={fadeUp} className="section-label">
              Konten Kami
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title">
              Behind the Build
              <br />
              di Instagram
            </motion.h2>
            <motion.div variants={fadeUp} className="divider mt-4" />
          </div>
          <motion.a
            variants={fadeUp}
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline self-start md:self-auto"
          >
            <Instagram size={16} /> Follow @gabelindones1a
          </motion.a>
        </motion.div>

        {/* Reels grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {REELS.map((reel) => (
            <motion.a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group relative rounded-sm overflow-hidden block"
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
            >
              {/* Thumbnail */}
              <div className="aspect-[9/16] relative">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Play size={18} className="text-white ml-1" fill="white" />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-sans text-white text-xs font-medium leading-tight line-clamp-2 mb-1.5">
                    {reel.title}
                  </p>
                  {reel.views && (
                    <span className="inline-flex items-center gap-1 font-sans text-[0.6rem] text-white/60">
                      <Eye size={10} /> {reel.views} views
                    </span>
                  )}
                </div>

                {/* IG badge */}
                <div className="absolute top-3 right-3 text-white/70">
                  <Instagram size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
