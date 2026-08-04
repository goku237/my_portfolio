"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-[#f6f9ff] dark:bg-[#060a17]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-label="Loading"
        >
          <div className="relative h-20 w-20">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-brand-300 dark:border-brand-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              style={{ borderTopColor: "transparent" }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gradient">
              G
            </span>
          </div>
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            Building your experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
