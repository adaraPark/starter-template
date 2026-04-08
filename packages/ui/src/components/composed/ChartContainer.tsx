"use client";

import { ResponsiveContainer } from "recharts";

interface ChartContainerProps {
  children: React.ReactElement;
  height?: number;
  minHeight?: number;
  className?: string;
  aspectRatio?: number;
}

/**
 * Responsive container wrapper for Recharts.
 * Ensures charts resize properly on all screen sizes.
 */
export function ChartContainer({
  children,
  height = 300,
  minHeight,
  className,
  aspectRatio,
}: ChartContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: aspectRatio ? undefined : height,
        minHeight: minHeight ?? (aspectRatio ? height : undefined),
        aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}
