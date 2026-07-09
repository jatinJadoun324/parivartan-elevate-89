"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LeadForm } from "./LeadForm";

interface Ctx {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const LeadModalContext = createContext<Ctx | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              aria-label="Close overlay"
              onClick={close}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full md:max-w-md max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl bg-ivory-soft border border-primary/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] p-6 md:p-8"
            >
              <LeadForm onClose={close} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be inside LeadModalProvider");
  return ctx;
}
