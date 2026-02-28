"use client";

import { useEffect } from "react";

export function AnalyticsHooks() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "true") return;
    // Placeholder mount point for analytics scripts.
    window.dispatchEvent(new CustomEvent("workstation:analytics-ready"));
  }, []);

  return null;
}
