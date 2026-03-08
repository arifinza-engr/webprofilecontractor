"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/utils";
import { fadeUp, stagger, slideLeft, slideRight } from "@/lib/variants";
import { useReveal } from "@/hooks/useReveal";

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL: FormState = { name: "", phone: "", service: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const { ref, inView } = useReveal({ threshold: 0.08 });

  const waUrl = buildWhatsAppUrl(
    COMPANY.whatsapp,
    `Halo GABEL Gemilang!\n\nNama: ${form.name}\nNo HP: ${form.phone}\nLayanan: ${form.service}\nPesan: ${form.message}`,
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
    "w-full font-sans text-sm bg-surface border border-mist/60 rounded-sm px-4 py-3 text-ink placeholder:text-mist focus:outline-none focus:border-ink transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="section-label">
            Kontak
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Mulai Proyek Impian
            <br />
            Anda Hari Ini
          </motion.h2>
          <motion.div variants={fadeUp} className="divider mx-auto mb-4" />
          <motion.p variants={fadeUp} className="font-sans text-stone text-sm">
            Konsultasi awal gratis. Tim kami siap membantu mewujudkan rencana
            bangunan Anda.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info panel */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-6">
                Informasi Kontak
              </h3>
              <ul className="space-y-5">
                {[
                  {
                    icon: <MapPin size={16} />,
                    label: "Alamat",
                    value: COMPANY.address,
                  },
                  {
                    icon: <Phone size={16} />,
                    label: "Telepon",
                    value: COMPANY.phone,
                  },
                  {
                    icon: <Mail size={16} />,
                    label: "Email",
                    value: COMPANY.email,
                  },
                  {
                    icon: <Clock size={16} />,
                    label: "Jam Kerja",
                    value: "Sen–Sab: 08:00 – 17:00 WIB",
                  },
                ].map(({ icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-sm bg-ink flex items-center justify-center text-gold flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-mist">
                        {label}
                      </p>
                      <p className="font-sans text-sm text-ink mt-0.5">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* WA CTA */}
            <a
              href={buildWhatsAppUrl(COMPANY.whatsapp, COMPANY.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-sm font-sans text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat Langsung via WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-sm p-8 shadow-sm"
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <h3 className="font-serif text-xl font-bold text-ink mb-6">
              Kirim Pesan
            </h3>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-mist block mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    value={form.name}
                    onChange={set("name")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-mist block mb-1.5">
                    No. HP / WhatsApp *
                  </label>
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
                <label className="font-sans text-xs uppercase tracking-widest text-mist block mb-1.5">
                  Layanan yang Diminati
                </label>
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
                <label className="font-sans text-xs uppercase tracking-widest text-mist block mb-1.5">
                  Deskripsi Proyek
                </label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan proyek Anda (lokasi, luas, anggaran, dll)..."
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
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

              <p className="font-sans text-xs text-mist">
                * Kami akan menghubungi Anda dalam 1×24 jam pada hari kerja.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
