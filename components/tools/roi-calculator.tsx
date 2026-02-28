"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0f766e", "#ea580c"];

export function ROICalculator() {
  const [revenue, setRevenue] = useState("250000");
  const [cost, setCost] = useState("100000");

  const roi = useMemo(() => {
    const r = Number(revenue);
    const c = Number(cost);
    if (!c) return 0;
    return ((r - c) / c) * 100;
  }, [revenue, cost]);

  const chartData = [
    { name: "Net Return", value: Math.max(Number(revenue) - Number(cost), 0) },
    { name: "Cost", value: Number(cost) }
  ];

  return (
    <article className="rounded-2xl border border-border bg-card/70 p-6">
      <h3 className="font-display text-2xl font-semibold">Marketing ROI Calculator</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Formula: ((Revenue - Cost) ÷ Cost) × 100. Use campaign-level numbers for better decisions.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span>Revenue (₹)</span>
          <Input type="number" min={0} value={revenue} onChange={(event) => setRevenue(event.target.value)} />
        </label>
        <label className="space-y-1 text-sm">
          <span>Total marketing cost (₹)</span>
          <Input type="number" min={1} value={cost} onChange={(event) => setCost(event.target.value)} />
        </label>
      </div>
      <p className="mt-4 text-lg font-semibold">
        ROI: <span className="text-primary">{roi.toFixed(2)}%</span>
      </p>
      <div className="mt-4 h-56">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={85}
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
