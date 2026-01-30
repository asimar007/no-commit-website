"use client";

import Link from "next/link";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Home01Icon } from "@hugeicons/core-free-icons";

import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-6">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <Logo className="text-primary size-8" />
        </Link>

        <div className="bg-muted/50 border-border mb-6 overflow-hidden rounded-xl border">
          <div className="bg-muted/50 flex items-center gap-2 border-b px-4 py-2">
            <div className="size-2.5 rounded-full bg-red-400" />
            <div className="size-2.5 rounded-full bg-yellow-400" />
            <div className="size-2.5 rounded-full bg-green-400" />
          </div>
          <div className="px-8 py-6 font-mono">
            <span className="text-muted-foreground">$</span>{" "}
            <span className="text-foreground">cd /unknown-path</span>
            <div className="text-destructive mt-2 text-sm">
              bash: cd: /unknown-path: No such file or directory
            </div>
          </div>
        </div>

        <h1 className="text-foreground mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
          404
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md text-lg">
          Looks like you&apos;ve wandered into uncharted territory. This page
          doesn&apos;t exist.
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
          >
            <HugeiconsIcon icon={Home01Icon} className="size-4" />
            Go Home
          </Link>
          <button
            onClick={() => history.back()}
            className="text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
