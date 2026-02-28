"use client";

import { FormEvent, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUtmParams, trackEvent } from "@/lib/analytics";

const schema = z.object({
  email: z.string().email()
});

type NewsletterSignupProps = {
  assetTitle: string;
  assetUrl: string;
};

export function NewsletterSignup({ assetTitle, assetUrl }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse({ email });

    if (!parsed.success) {
      setMessage("Please enter a valid email address.");
      return;
    }

    trackEvent("lead_magnet_signup", { asset: assetTitle, ...getUtmParams() });
    setMessage(`Success. Download your template: ${assetUrl}`);
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card/70 p-6">
      <h3 className="font-display text-xl font-semibold">{assetTitle}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        No spam. We only send practical growth resources and can unsubscribe anytime.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your work email"
          aria-label="Email for lead magnet"
          required
        />
        <Button type="submit">Get Download Link</Button>
      </div>
      {message ? <p className="mt-3 text-sm text-primary">{message}</p> : null}
    </form>
  );
}
