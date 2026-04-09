"use client";

import { toast } from "sonner";
import { Button } from "@starter/ui/primitives";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" onClick={() => toast.success("Action completed successfully!")}>
        Success
      </Button>
      <Button size="sm" variant="outline" onClick={() => toast.info("Here's some useful info.")}>
        Info
      </Button>
      <Button size="sm" variant="outline" onClick={() => toast.warning("Please check your input.")}>
        Warning
      </Button>
      <Button size="sm" variant="destructive" onClick={() => toast.error("Something went wrong!")}>
        Error
      </Button>
    </div>
  );
}
