interface ChartSkeletonProps {
  height?: number;
  type?: "line" | "bar" | "pie" | "gauge";
}

/**
 * Animated loading skeleton for charts.
 * Includes a shimmer animation and chart-type-specific placeholder shapes.
 */
export function ChartSkeleton({ height = 300, type = "line" }: ChartSkeletonProps) {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-muted"
      style={{ height }}
      role="status"
      aria-label="Loading chart"
    >
      {/* Shimmer animation via inline keyframe */}
      <div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
        style={{
          animation: "shimmer 2s infinite",
        }}
      />
      <style>{`@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}</style>

      {/* Chart type specific skeleton */}
      <div className="flex h-full items-end justify-center gap-2 p-6">
        {type === "line" && <LineChartSkeleton />}
        {type === "bar" && <BarChartSkeleton />}
        {type === "pie" && <PieChartSkeleton />}
        {type === "gauge" && <GaugeSkeleton />}
      </div>

      {/* Loading text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Loading chart...</span>
      </div>
    </div>
  );
}

function LineChartSkeleton() {
  return (
    <svg className="h-full w-full opacity-20" viewBox="0 0 400 200">
      {[0, 50, 100, 150, 200].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="currentColor"
          strokeDasharray="4 4"
        />
      ))}
      <path
        d="M 0 150 Q 100 100, 200 120 T 400 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

function BarChartSkeleton() {
  const bars = [60, 80, 45, 90, 70, 85, 55];
  return (
    <div className="flex h-4/5 w-full items-end justify-around">
      {bars.map((barHeight, i) => (
        <div
          key={i}
          className="w-8 rounded-t bg-muted-foreground/30"
          style={{ height: `${barHeight}%` }}
        />
      ))}
    </div>
  );
}

function PieChartSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-32 w-32 rounded-full border-8 border-muted-foreground/30" />
    </div>
  );
}

function GaugeSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-24 w-48 rounded-t-full border-8 border-b-0 border-muted-foreground/30" />
    </div>
  );
}
