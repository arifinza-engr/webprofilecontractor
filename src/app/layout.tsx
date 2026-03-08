import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";

const roboto = Roboto({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display:  "swap",
});

export const metadata: Metadata = {
  title:       `${COMPANY.name} – Kontraktor & Interior Profesional`,
  description: COMPANY.description,
  keywords:    ["kontraktor", "interior", "drafter", "konstruksi", "Bandung", "renovasi"],
  openGraph: {
    title:       `${COMPANY.name} – Kontraktor & Interior Profesional`,
    description: COMPANY.description,
    type:        "website",
    locale:      "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={roboto.variable}>
      <body className="font-sans bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
