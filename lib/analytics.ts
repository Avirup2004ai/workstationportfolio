type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

const analyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

export function trackEvent(name: string, payload: AnalyticsPayload = {}) {
  if (!analyticsEnabled) return;
  if (typeof window === "undefined") return;

  // Placeholder for GA4, Plausible, or another analytics provider.
  window.dispatchEvent(
    new CustomEvent("workstation:analytics", {
      detail: { name, payload, timestamp: Date.now() }
    })
  );
}

export function getUtmParams() {
  if (typeof window === "undefined") return {};
  const url = new URL(window.location.href);
  return {
    utm_source: url.searchParams.get("utm_source") ?? "",
    utm_medium: url.searchParams.get("utm_medium") ?? "",
    utm_campaign: url.searchParams.get("utm_campaign") ?? "",
    utm_term: url.searchParams.get("utm_term") ?? "",
    utm_content: url.searchParams.get("utm_content") ?? ""
  };
}
