const DISALLOWED_TAGS = /<[^>]*>?/gm;

export function sanitizeInput(value: string) {
  return value.replace(DISALLOWED_TAGS, "").trim();
}

export function isLikelySpam(message: string) {
  const lowered = message.toLowerCase();
  const spamSignals = ["viagra", "casino", "crypto giveaway", "work from home"];
  return spamSignals.some((token) => lowered.includes(token));
}

export function canSubmitByTimestamp(startTimestamp: number, minDelayMs = 5000) {
  return Date.now() - startTimestamp >= minDelayMs;
}

export function canSubmitByRateLimit(key = "ws_last_submit", coolDownMs = 60000) {
  if (typeof window === "undefined") return true;
  const value = window.localStorage.getItem(key);
  if (!value) return true;
  const last = Number(value);
  if (Number.isNaN(last)) return true;
  return Date.now() - last >= coolDownMs;
}

export function markSubmission(key = "ws_last_submit") {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, String(Date.now()));
}
