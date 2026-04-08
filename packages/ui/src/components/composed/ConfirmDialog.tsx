"use client";

import { useState, useCallback, type ReactNode } from "react";
import { AlertTriangle, Trash2, Loader2, type LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../primitives/dialog";
import { Button } from "../primitives/button";
import { cn } from "../../lib/utils";

interface ConfirmDialogProps {
  /** The element that triggers the dialog (e.g., a Button) */
  trigger: ReactNode;
  /** Dialog title */
  title: string;
  /** Dialog description/message */
  description: string;
  /** Label for the confirm button */
  confirmLabel?: string;
  /** Label for the cancel button */
  cancelLabel?: string;
  /** Visual variant - destructive shows red styling */
  variant?: "default" | "destructive";
  /** Custom icon to display (defaults to AlertTriangle or Trash2 based on variant) */
  icon?: LucideIcon;
  /** Whether the confirm action is in progress */
  isLoading?: boolean;
  /** Callback when user confirms - dialog closes automatically after */
  onConfirm: () => void | Promise<void>;
  /** Optional callback when user cancels */
  onCancel?: () => void;
  /** Control whether dialog is open externally (optional, for controlled mode) */
  open?: boolean;
  /** Handler for open state changes (optional, for controlled mode) */
  onOpenChange?: (open: boolean) => void;
  /** Disable the trigger element */
  disabled?: boolean;
}

/**
 * ConfirmDialog - A simplified alert/confirm dialog component.
 *
 * Combines a trigger element with a confirmation dialog,
 * handling all the state management internally for the simplest possible API.
 *
 * @example
 * <ConfirmDialog
 *   trigger={<Button variant="destructive">Delete</Button>}
 *   title="Delete Item?"
 *   description="This action cannot be undone."
 *   confirmLabel="Delete"
 *   variant="destructive"
 *   onConfirm={() => deleteItem()}
 * />
 */
export function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  icon,
  isLoading = false,
  onConfirm,
  onCancel,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  disabled = false,
}: ConfirmDialogProps) {
  // Internal state for uncontrolled mode
  const [internalOpen, setInternalOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  // Use controlled or uncontrolled mode
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled
    ? controlledOnOpenChange ?? setInternalOpen
    : setInternalOpen;

  const handleCancel = useCallback(() => {
    onCancel?.();
    setOpen(false);
  }, [onCancel, setOpen]);

  const handleConfirm = useCallback(async () => {
    setIsConfirming(true);
    try {
      await onConfirm();
      setOpen(false);
    } catch (error) {
      // Keep dialog open on error so user can retry
      console.error("ConfirmDialog confirm action failed:", error);
    } finally {
      setIsConfirming(false);
    }
  }, [onConfirm, setOpen]);

  // Combined loading state (external prop OR internal confirming)
  const isProcessing = isLoading || isConfirming;

  // Determine which icon to show
  const IconComponent =
    icon ?? (variant === "destructive" ? Trash2 : AlertTriangle);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild disabled={disabled}>
        {trigger}
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-[425px]" aria-busy={isProcessing}>
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                variant === "destructive"
                  ? "bg-destructive/10 text-destructive"
                  : "bg-primary/10 text-primary"
              )}
            >
              <IconComponent className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={handleCancel} disabled={isProcessing}>
            {cancelLabel}
          </Button>
          <Button
            variant={variant === "destructive" ? "destructive" : "default"}
            onClick={handleConfirm}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
              </>
            ) : (
              confirmLabel
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
