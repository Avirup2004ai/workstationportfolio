"use client";

import { FormEvent, useMemo, useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  canSubmitByRateLimit,
  canSubmitByTimestamp,
  isLikelySpam,
  markSubmission,
  sanitizeInput
} from "@/lib/security";
import { getUtmParams, trackEvent } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  service: z.string().min(2),
  message: z.string().min(20),
  honeypot: z.string().max(0)
});

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const startTimestamp = useMemo(() => Date.now(), []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: sanitizeInput(String(formData.get("name") ?? "")),
      email: sanitizeInput(String(formData.get("email") ?? "")),
      company: sanitizeInput(String(formData.get("company") ?? "")),
      service: sanitizeInput(String(formData.get("service") ?? "")),
      message: sanitizeInput(String(formData.get("message") ?? "")),
      honeypot: String(formData.get("website") ?? "")
    };

    const validation = schema.safeParse(payload);
    if (!validation.success) {
      setStatus("error");
      setError("Please review the form and provide complete, valid details.");
      return;
    }

    if (!canSubmitByTimestamp(startTimestamp, 5000)) {
      setStatus("error");
      setError("Please take a moment before submitting.");
      return;
    }

    if (!canSubmitByRateLimit("ws_contact_submit", 60000)) {
      setStatus("error");
      setError("You recently submitted this form. Please wait one minute.");
      return;
    }

    if (isLikelySpam(payload.message)) {
      setStatus("error");
      setError("Your message was flagged by our spam filter. Please revise and retry.");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    const utm = getUtmParams();

    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            ...utm,
            source: "workstation-contact-form"
          })
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      markSubmission("ws_contact_submit");
      trackEvent("contact_form_submit", { service: payload.service });
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setError("Submission failed. Please try again or email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card/70 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Work email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="company" className="text-sm font-medium">
            Company
          </label>
          <Input id="company" name="company" required />
        </div>
        <div className="space-y-1">
          <label htmlFor="service" className="text-sm font-medium">
            Service needed
          </label>
          <Input id="service" name="service" placeholder="Web Development / SEO / SMM" required />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Share goals, timeline, and any current challenges."
        />
      </div>

      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" autoComplete="off" tabIndex={-1} />
      </div>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Request Proposal"}
      </Button>

      {status === "success" ? (
        <p className="text-sm text-primary">
          Thanks. We received your request and will respond within one business day.
        </p>
      ) : null}
      {status === "error" ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}
