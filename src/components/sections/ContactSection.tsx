"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowUpRight,
  Instagram,
} from "lucide-react";
import { COMPANY } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL: FormState = { name: "", phone: "", service: "", message: "" };

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY.address,
)}`;

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const { ref, inView } = useReveal({ threshold: 0.04 });

  const waUrl = buildWhatsAppUrl(
    COMPANY.whatsapp,
    `Halo CV Gabel Gemilang Indonesia!\n\nNama: ${form.name}\nNo HP: ${form.phone}\nLayanan: ${form.service}\nPesan: ${form.message}`,
  );

  const mailtoUrl = `mailto:${COMPANY.email}?subject=Konsultasi Proyek – ${form.name}&body=${encodeURIComponent(
    `Nama: ${form.name}\nNo HP: ${form.phone}\nLayanan yang diminati: ${form.service}\n\nPesan:\n${form.message}`,
  )}`;

  const set =
    (k: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputClass =
    "w-full font-sans text-sm bg-cream/40 border border-mist/40 rounded-sm px-4 py-3.5 text-ink placeholder:text-mist/80 focus:outline-none focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/15 transition-all";

  const labelClass =
    "font-sans text-[11px] font-semibold uppercase tracking-widest text-stone/70 block mb-2";

  const infoItems = [
    {
      icon: <MapPin size={18} />,
      label: "Kantor Pusat",
      value: COMPANY.address,
      href: mapsSearchUrl,
      external: true,
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
    },
    {
      icon: <Phone size={18} />,
      label: "Telepon",
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <Clock size={18} />,
      label: "Jam Kerja",
      value: COMPANY.hours,
    },
  ];

  return (
    <section id="contact" className="bg-cream relative" ref={ref}>
      {/* HERO BAND — dark */}
      <div className="bg-ink text-cream pt-24 md:pt-32 pb-40 md:pb-56 relative overflow-hidden">
        {/* Decorative gold blobs */}
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <motion.div
          className="relative max-w-2xl mx-auto px-5 md:px-8 text-center"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span
            variants={fadeUp}
            className="font-sans text-[11px] font-semibold tracking-widest uppercase text-gold"
          >
            Kontak
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 mb-5"
          >
            Mulai Proyek Impian
            <br />
            Anda Hari Ini
          </motion.h2>
          <motion.div variants={fadeUp} className="w-12 h-px bg-gold mx-auto mb-5" />
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/70 text-base leading-relaxed"
          >
            Konsultasi awal gratis. Pilih cara yang paling nyaman — kami siap
            merespon dalam 24 jam pada hari kerja.
          </motion.p>
        </motion.div>
      </div>

      {/* FLOATING CARD — overlaps hero */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 -mt-32 md:-mt-44 relative z-10">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl shadow-ink/15 overflow-hidden border border-white/40"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="grid lg:grid-cols-5">
            {/* INFO COLUMN — left, lg:col-span-2 */}
            <div className="lg:col-span-2 p-7 md:p-10 lg:p-12 relative bg-surface/40 border-b lg:border-b-0 lg:border-r border-stone/10">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-1 h-12 bg-gold hidden lg:block" />

              <span className="section-label">Hubungi Kami</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-2 mb-3">
                Get in Touch
              </h3>
              <p className="font-sans text-sm text-stone leading-relaxed mb-8">
                Kami senang mendengar rencana Anda — kapan pun Anda siap, kami
                ada untuk mendampingi.
              </p>

              <ul className="space-y-5 mb-8">
                {infoItems.map(({ icon, label, value, href, external }) => {
                  const inner = (
                    <>
                      <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-cream group-hover:border-gold transition-colors duration-300">
                        {icon}
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-stone/60 mb-0.5">
                          {label}
                        </p>
                        <p className="font-sans text-sm text-ink leading-relaxed break-words">
                          {value}
                        </p>
                      </div>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          {...(external && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                          className="group flex items-start gap-4 hover:[&_p:last-child]:text-gold transition-colors"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 group">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* WA CTA */}
              <a
                href={buildWhatsAppUrl(COMPANY.whatsapp, COMPANY.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb858] text-white px-5 py-3.5 rounded-sm font-sans text-sm font-semibold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat Langsung via WhatsApp
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              {/* Social */}
              <div className="mt-7 pt-6 border-t border-stone/10">
                <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-stone/60 mb-3">
                  Ikuti Kami
                </p>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-stone/20 text-ink hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* FORM COLUMN — right, lg:col-span-3 */}
            <div className="lg:col-span-3 p-7 md:p-10 lg:p-12">
              <div className="flex items-baseline justify-between mb-7 pb-5 border-b border-stone/10">
                <div>
                  <span className="section-label">Form Konsultasi</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-1.5">
                    Send us a Message
                  </h3>
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-stone/50 hidden sm:block">
                  Respon &lt; 24 jam
                </span>
              </div>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nama Lengkap *</label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>No. HP / WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="08xx xxxx xxxx"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Layanan yang Diminati</label>
                  <select
                    value={form.service}
                    onChange={set("service")}
                    className={inputClass}
                  >
                    <option value="">Pilih Layanan</option>
                    <option>Konstruksi</option>
                    <option>Desain Interior</option>
                    <option>Drafter & RAB</option>
                    <option>Kombinasi / Paket</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Deskripsi Proyek</label>
                  <textarea
                    rows={6}
                    placeholder="Lokasi, luas, anggaran, target waktu, dll..."
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 sm:flex-none justify-center"
                  >
                    <Send size={15} /> Kirim via WhatsApp
                  </a>
                  <a
                    href={mailtoUrl}
                    className="btn-outline flex-1 sm:flex-none justify-center"
                  >
                    <Mail size={15} /> Kirim via Email
                  </a>
                </div>

                <p className="font-sans text-xs text-stone/70 pt-1">
                  * Data Anda hanya digunakan untuk merespon konsultasi ini.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULL-WIDTH MAP STRIP */}
      <motion.div
        className="relative mt-16 md:mt-24"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <iframe
          src={COMPANY.maps}
          className="block w-full h-[420px] md:h-[480px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi CV Gabel Gemilang Indonesia"
        />
        {/* Directions CTA — glass pill, bottom-right (avoid overlap with Google's place card top-left) */}
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute bottom-5 right-5 md:bottom-6 md:right-6 inline-flex items-center gap-2 bg-ink/95 backdrop-blur-md text-cream px-4 py-2.5 rounded-full shadow-xl shadow-ink/30 border border-cream/10 font-sans text-xs font-semibold tracking-wide hover:bg-gold hover:text-ink hover:border-gold transition-colors duration-300"
        >
          Petunjuk Arah
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </motion.div>
    </section>
  );
}
