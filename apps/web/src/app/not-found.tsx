import Link from "next/link";
import { Button } from "@starter/ui/primitives";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="flex max-w-md flex-col items-center text-center">
        {/* Lost flame illustration */}
        <LostFlameIllustration />

        <h1 className="mt-6 font-display text-3xl font-bold text-foreground">
          Page not found
        </h1>

        <p className="mt-2 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-8 flex gap-3">
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild>
            <Link href="/learn">Explore Learn</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Think this is a mistake?{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-foreground">
            Let us know
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

// Cute lost flame SVG illustration
function LostFlameIllustration() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flame body */}
      <path
        d="M60 15C60 15 32 48 32 72C32 88 44 100 60 100C76 100 88 88 88 72C88 48 60 15 60 15Z"
        className="fill-primary/80"
      />
      {/* Inner flame */}
      <path
        d="M60 40C60 40 47 57 47 72C47 79 53 85 60 85C67 85 73 79 73 72C73 57 60 40 60 40Z"
        className="fill-primary/40"
      />
      {/* Searching eyes - looking to side */}
      <circle cx="50" cy="67" r="6" className="fill-primary-foreground" />
      <circle cx="53" cy="66" r="2.5" className="fill-primary" />
      <circle cx="70" cy="67" r="6" className="fill-primary-foreground" />
      <circle cx="73" cy="66" r="2.5" className="fill-primary" />
      {/* Concerned mouth */}
      <path
        d="M54 80C56 78 58 77 60 77C62 77 64 78 66 80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary-foreground"
        fill="none"
      />
      {/* Question mark */}
      <text
        x="92"
        y="35"
        fontSize="24"
        fontWeight="bold"
        className="fill-muted-foreground"
      >
        ?
      </text>
      {/* Map/compass hint */}
      <circle
        cx="25"
        cy="90"
        r="10"
        className="stroke-muted-foreground"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M25 83V90L30 87"
        className="stroke-muted-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
