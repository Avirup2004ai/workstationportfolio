"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);

  // Determine when to show loading overlay
  useEffect(() => {
    setLoading(true);
    // Smooth fast loading overlay out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (reducedMotion) return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            <Image
              src="/images/loading.gif"
              alt="Loading..."
              width={300}
              height={300}
              unoptimized
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
