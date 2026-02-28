"use client";

import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area
} from "recharts";

type ChartPoint = {
  label: string;
  value: number;
};

export function ChartBlock({
  title,
  description,
  data
}: {
  title: string;
  description: string;
  data: ChartPoint[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-5">
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mb-4 mt-1 text-sm text-muted-foreground">{description}</p>
      <div className="h-60 w-full">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0f766e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0f766e" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#0f766e" fill="url(#valueGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
