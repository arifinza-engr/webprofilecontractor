"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Instagram, X } from "lucide-react";
import { REELS, COMPANY } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import type { InstagramReel } from "@/types";

function embedUrl(url: string) {
  return url.replace(/\/?$/, "/embed/");
}

function ReelModal({ reel, onClose }: { reel: InstagramReel; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative z-10 w-full max-w-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X size={28} />
          </button>
          <div className="rounded-xl overflow-hidden bg-white">
            <iframe
              src={embedUrl(reel.url)}
              className="w-full border-none"
              style={{ minHeight: 560 }}
              allowFullScreen
              scrolling="no"
              title={reel.title}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ReelCard({ reel, onClick }: { reel: InstagramReel; onClick: () => void }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-sm overflow-hidden cursor-pointer bg-gray-100"
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      onClick={onClick}
    >
      <div className="aspect-[9/16] relative overflow-hidden">
        {/* Thumbnail dari JSON */}
        {reel.thumbnail && (
          <img
            src={reel.thumbnail}
            alt={reel.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
            <Play size={18} className="text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Judul dari JSON */}
        <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
          <p className="font-sans text-white text-xs font-medium leading-tight line-clamp-2">
            {reel.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReelsSection() {
  const { ref, inView } = useReveal({ threshold: 0.08 });
  const [activeReel, setActiveReel] = useState<InstagramReel | null>(null);

  return (
    <>
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
              <ReelCard key={reel.id} reel={reel} onClick={() => setActiveReel(reel)} />
            ))}
          </motion.div>
        </div>
      </section>

      {activeReel && (
        <ReelModal reel={activeReel} onClose={() => setActiveReel(null)} />
      )}
    </>
  );
}
