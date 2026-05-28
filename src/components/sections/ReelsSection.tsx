"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { REELS, COMPANY } from "@/lib/data";
import { fadeUp, fadeIn, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";
import type { InstagramReel } from "@/types";

function embedUrl(url: string) {
  return url.replace(/\/?$/, "/embed/");
}

function ReelCard({ reel, ready }: { reel: InstagramReel; ready: boolean }) {
  return (
    <div className="snap-start shrink-0 w-[290px] md:w-[320px]">
      <div className="group relative rounded-2xl overflow-hidden bg-ink h-[520px] shadow-lg shadow-ink/10 hover:shadow-xl hover:shadow-ink/25 transition-shadow duration-500 ring-1 ring-ink/5">
        {ready ? (
          <>
            {/*
              The Instagram embed renders its own chrome (profile header + caption
              footer). We crop the header by offsetting the iframe up, and crop the
              footer by letting the over-tall iframe overflow past the fixed-height
              card. The result shows only the reel media itself.
              Tune CROP via top-[-56px] / height if IG changes their embed layout.
            */}
            <iframe
              src={embedUrl(reel.url)}
              className="absolute left-0 w-full h-[860px] top-[-56px] border-0"
              scrolling="no"
              allowFullScreen
              title={reel.title}
            />

            {/* Hide the cropped-header seam */}
            <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-ink/30 to-transparent pointer-events-none" />

            {/* Bottom gradient + custom caption (covers IG footer) */}
            <div className="absolute bottom-0 inset-x-0 pt-20 pb-5 px-5 bg-gradient-to-t from-ink via-ink/85 to-transparent pointer-events-none">
              <div className="flex items-center gap-2 mb-2">
                <Instagram size={12} className="text-gold" />
                <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-cream/55">
                  Reel
                </span>
                <span className="ml-auto w-6 h-px bg-gold/50" />
              </div>
              <p className="font-serif text-cream text-[15px] font-bold leading-snug line-clamp-2">
                {reel.title}
              </p>
            </div>
          </>
        ) : (
          // Lightweight placeholder shown until the section scrolls into view
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-ink via-stone/80 to-ink px-6 text-center">
            <div className="w-14 h-14 rounded-full bg-cream/10 border border-cream/25 flex items-center justify-center">
              <Play size={20} className="text-cream ml-0.5" fill="currentColor" />
            </div>
            <p className="font-serif text-cream text-sm font-bold leading-snug">
              {reel.title}
            </p>
            <span className="font-sans text-[10px] tracking-widest uppercase text-cream/40">
              Memuat dari Instagram…
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReelsSection() {
  const { ref, inView } = useReveal({ threshold: 0.1 });
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="reels" className="py-24 md:py-32 bg-white overflow-hidden" ref={ref}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6"
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

          <motion.div variants={fadeUp} className="flex items-center gap-3 self-start md:self-auto">
            {/* Carousel controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                className="w-10 h-10 rounded-full border border-mist flex items-center justify-center text-ink hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                aria-label="Sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="w-10 h-10 rounded-full border border-mist flex items-center justify-center text-ink hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                aria-label="Berikutnya"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-outline"
            >
              <Instagram size={16} /> Follow {COMPANY.instagramHandle}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal reel carousel */}
      <motion.div
        ref={scrollerRef}
        className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 md:px-8 pb-2"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {REELS.map((reel) => (
          <ReelCard key={reel.id} reel={reel} ready={inView} />
        ))}
        {/* trailing spacer so last card isn't flush to edge */}
        <div className="shrink-0 w-1" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
