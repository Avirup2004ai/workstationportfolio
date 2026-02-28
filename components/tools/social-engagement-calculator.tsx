"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export function SocialEngagementCalculator() {
  const [interactions, setInteractions] = useState("1200");
  const [reach, setReach] = useState("18000");

  const rate = useMemo(() => {
    const interactionsValue = Number(interactions);
    const reachValue = Number(reach);
    if (!reachValue) return 0;
    return (interactionsValue / reachValue) * 100;
  }, [interactions, reach]);

  const benchmarkData = [
    { label: "Your Rate", value: Number(rate.toFixed(2)) },
    { label: "SME Avg", value: 2.1 },
    { label: "Top Quartile", value: 4.8 }
  ];

  return (
    <article className="rounded-2xl border border-border bg-card/70 p-6">
      <h3 className="font-display text-2xl font-semibold">Social Media Engagement Rate Calculator</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Formula: (Total interactions ÷ Total reach) × 100. Use this to benchmark content quality.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span>Interactions (likes + comments + saves + shares)</span>
          <Input
            type="number"
            min={0}
            value={interactions}
            onChange={(event) => setInteractions(event.target.value)}
          />
        </label>
        <label className="space-y-1 text-sm">
          <span>Reach</span>
          <Input type="number" min={1} value={reach} onChange={(event) => setReach(event.target.value)} />
        </label>
      </div>
      <p className="mt-4 text-lg font-semibold">
        Engagement Rate: <span className="text-primary">{rate.toFixed(2)}%</span>
      </p>

      <div className="mt-4 h-56">
        <ResponsiveContainer>
          <BarChart data={benchmarkData}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0f766e" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
