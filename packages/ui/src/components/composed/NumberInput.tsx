"use client";

import { cn } from "../../lib/utils";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  description?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
}

/**
 * Number input with optional prefix/suffix.
 * Used for currency, percentages, and other numeric values.
 */
export function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max,
  step = 1,
  description,
  className,
  disabled = false,
  id,
}: NumberInputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={cn(
            "block w-full rounded-lg border border-input bg-transparent px-4 py-2.5 text-foreground shadow-sm transition-colors",
            "focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/50",
            "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground",
            prefix && "pl-8",
            suffix && "pr-12"
          )}
        />
        {suffix && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}
