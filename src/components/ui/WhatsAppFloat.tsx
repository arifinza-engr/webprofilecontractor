"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloat() {
  const url = buildWhatsAppUrl(COMPANY.whatsapp, COMPANY.whatsappMsg);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 left-5 z-50 flex items-center gap-2 bg-[#25D366] text-white
                 rounded-full px-4 py-3 shadow-lg shadow-[#25D366]/30 font-sans text-sm font-medium
                 overflow-hidden group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={20} className="flex-shrink-0" />
      <motion.span
        className="whitespace-nowrap text-xs"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "auto", opacity: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        Chat Sekarang
      </motion.span>
    </motion.a>
  );
}
