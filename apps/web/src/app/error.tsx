"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@starter/ui/primitives";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="flex max-w-md flex-col items-center text-center">
        {/* Dizzy flame illustration */}
        <DizzyFlameIllustration />

        <h1 className="mt-6 font-display text-3xl font-bold text-foreground">
          Something went wrong
        </h1>

        <p className="mt-2 text-lg text-muted-foreground">
          Oops! A little hiccup
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          Don&apos;t worry — your data is safe and we&apos;re working to get
          things back on track!
        </p>

        {error.digest && (
          <p className="mt-3 rounded-md bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex gap-3">
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          If this keeps happening, please{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-foreground">
            let us know
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

// Cute dizzy flame SVG illustration
function DizzyFlameIllustration() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse"
    >
      {/* Flame body */}
      <path
        d="M60 10C60 10 30 45 30 70C30 87 43 100 60 100C77 100 90 87 90 70C90 45 60 10 60 10Z"
        className="fill-primary/80"
      />
      {/* Inner flame */}
      <path
        d="M60 35C60 35 45 55 45 70C45 78 52 85 60 85C68 85 75 78 75 70C75 55 60 35 60 35Z"
        className="fill-primary/40"
      />
      {/* Dizzy eyes - spirals */}
      <circle cx="50" cy="65" r="6" className="fill-primary-foreground" />
      <path
        d="M50 61C52 61 53 63 53 65C53 67 51 68 50 68C48 68 47 66 47 65"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary"
        fill="none"
      />
      <circle cx="70" cy="65" r="6" className="fill-primary-foreground" />
      <path
        d="M70 61C72 61 73 63 73 65C73 67 71 68 70 68C68 68 67 66 67 65"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary"
        fill="none"
      />
      {/* Wavy mouth */}
      <path
        d="M52 78C54 80 56 80 58 78C60 76 62 76 64 78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary-foreground"
        fill="none"
      />
      {/* Stars around head (dizzy effect) */}
      <path
        d="M25 45L27 40L29 45L34 43L29 45L27 50L25 45L20 43L25 45Z"
        className="fill-yellow-400"
      />
      <path
        d="M85 40L87 35L89 40L94 38L89 40L87 45L85 40L80 38L85 40Z"
        className="fill-yellow-400"
      />
      <path
        d="M35 25L37 20L39 25L44 23L39 25L37 30L35 25L30 23L35 25Z"
        className="fill-yellow-400"
      />
    </svg>
  );
}
