import type { Metadata } from "next";
import { ExampleForm } from "~/app/_components/examples/ExampleForm";

export const metadata: Metadata = {
  title: "Examples",
  description: "Example patterns for forms, validation, and toast notifications.",
};

export default function ExamplesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Examples</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Common patterns for forms, validation, and notifications.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form example */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-1 text-lg font-semibold text-card-foreground">
            Form with Validation
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Zod validation with toast feedback on submit.
          </p>
          <ExampleForm />
        </div>

        {/* Pattern reference */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            Patterns Used
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="font-medium text-foreground">Zod</span>
              — Schema validation with typed errors
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-foreground">Sonner</span>
              — Toast notifications (success, error)
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-foreground">@starter/ui</span>
              — Input, Label, Textarea, Button primitives
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-foreground">Client Component</span>
              — Form state with useState + controlled inputs
            </li>
          </ul>
          <div className="mt-6 rounded-lg bg-muted p-4">
            <p className="text-xs text-muted-foreground">
              For production forms with tRPC, replace the simulated API call with a
              tRPC mutation. See <code className="text-foreground">apps/web/CLAUDE.md</code> for
              the mutation pattern with optimistic updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
