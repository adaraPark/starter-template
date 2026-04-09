"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChartContainer } from "@starter/ui/composed";

const data = [
  { name: "Mon", value: 40 },
  { name: "Tue", value: 65 },
  { name: "Wed", value: 45 },
  { name: "Thu", value: 80 },
  { name: "Fri", value: 55 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 25 },
];

export function ActivityChart() {
  return (
    <ChartContainer height={280}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
        <XAxis
          dataKey="name"
          className="text-xs"
          tick={{ fill: "var(--muted-foreground)" }}
          axisLine={{ stroke: "var(--border)" }}
          tickLine={false}
        />
        <YAxis
          className="text-xs"
          tick={{ fill: "var(--muted-foreground)" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            color: "var(--card-foreground)",
          }}
        />
        <Bar
          dataKey="value"
          fill="var(--primary)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
