import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV_ITEMS, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/70 font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-bold text-cream mb-3">
              GABEL<span className="text-gold"> Gemilang</span>
            </p>
            <p className="text-sm leading-relaxed mb-5 text-cream/60">
              Kontraktor profesional untuk konstruksi, desain interior, dan
              drafter. Berpengalaman sejak {COMPANY.founded}.
            </p>
            <Link
              href={`https://www.instagram.com/${COMPANY.instagram.split("/").filter(Boolean).pop()}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-cream/50 hover:text-gold transition-colors"
            >
              <Instagram size={14} /> @gabelindones1a
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[0.65rem] font-semibold tracking-widest uppercase text-cream/40 mb-5">
              Menu
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[0.65rem] font-semibold tracking-widest uppercase text-cream/40 mb-5">
              Layanan
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#services"
                    className="text-sm hover:text-cream transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[0.65rem] font-semibold tracking-widest uppercase text-cream/40 mb-5">
              Kontak
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-gold" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="flex-shrink-0 text-gold" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-cream transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="flex-shrink-0 text-gold" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-cream transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/30">
          <p>
            © {year} {COMPANY.name}. Semua hak dilindungi.
          </p>
          <p>
            Dibangun dengan <span className="text-gold">❤</span> di Bandung
          </p>
        </div>
      </div>
    </footer>
  );
}
