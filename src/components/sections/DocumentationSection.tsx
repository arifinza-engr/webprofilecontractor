"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, ZoomIn } from "lucide-react";
import { DOC_PHOTOS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import type { DocPhoto } from "@/types";

function Lightbox({ photo, onClose }: { photo: DocPhoto; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm" onClick={onClose} />
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 text-cream/80 hover:text-cream transition-colors"
        aria-label="Tutup"
      >
        <X size={30} />
      </button>
      <motion.div
        className="relative z-10 max-w-5xl max-h-[88vh] flex flex-col items-center"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.image}
          alt={photo.title}
          width={photo.width}
          height={photo.height}
          className="rounded-sm object-contain max-h-[80vh] w-auto h-auto"
          sizes="90vw"
        />
        <div className="mt-4 text-center">
          <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold">
            {photo.category}
          </span>
          <p className="font-serif text-lg font-bold text-cream mt-1">{photo.title}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DocumentationSection() {
  const { ref, inView } = useReveal({ threshold: 0.04 });
  const [active, setActive] = useState<DocPhoto | null>(null);

  return (
    <>
      <section id="dokumentasi" className="py-24 md:py-32 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Header */}
          <motion.div
            className="max-w-2xl mb-12 md:mb-16"
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.span variants={fadeUp} className="section-label inline-flex items-center gap-2">
              <Camera size={13} className="text-gold" /> Dokumentasi
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2 mb-4">
              Dari Lapangan,
              <br />
              Bukan Sekadar Render
            </motion.h2>
            <motion.div variants={fadeUp} className="divider mb-4" />
            <motion.p variants={fadeUp} className="font-sans text-stone text-base leading-relaxed">
              Foto asli langsung dari lokasi proyek kami — mulai dari proses
              pengerjaan, struktur, hingga hasil akhir. Bukti nyata kualitas
              yang kami kerjakan.
            </motion.p>
          </motion.div>

          {/* Masonry gallery */}
          <motion.div
            className="columns-2 md:columns-3 lg:columns-4 gap-4"
            variants={stagger(0.06)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {DOC_PHOTOS.map((photo) => (
              <motion.button
                key={photo.id}
                variants={fadeUp}
                onClick={() => setActive(photo)}
                className="group relative block w-full mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-mist/20 cursor-pointer shadow-sm shadow-ink/5 hover:shadow-xl hover:shadow-ink/20 transition-shadow duration-500"
                aria-label={`Perbesar: ${photo.title}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Zoom icon — glass */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/15 backdrop-blur-md border border-cream/25 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={14} />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                  <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-gold">
                    {photo.category}
                  </span>
                  <p className="font-serif text-sm font-bold text-cream leading-tight mt-0.5">
                    {photo.title}
                  </p>
                  <div className="w-6 h-px bg-gold mt-2 transition-all duration-300 group-hover:w-10" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && <Lightbox photo={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
