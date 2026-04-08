import { cn } from "../../lib/utils";

interface MiniProgressBarProps {
  value: number; // 0-100
  className?: string;
  color?: "primary" | "success" | "warning" | "danger";
}

export function MiniProgressBar({ value, className, color = "primary" }: MiniProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const colorMap = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-destructive",
  };
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}>
      <div
        className={cn("h-full rounded-full transition-all duration-300", colorMap[color])}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
