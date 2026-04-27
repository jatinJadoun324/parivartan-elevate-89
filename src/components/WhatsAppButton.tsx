"use client";
import { MessageCircle } from "lucide-react";

// Update to your real WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = "15551234567";
const PREFILL =
  "Hi! I'd like to learn more about the Parivartan Nutrition transformation program.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-b from-[#E5C158] via-primary to-[#B8902A] text-primary-foreground shadow-[0_15px_35px_-10px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
    </a>
  );
}
