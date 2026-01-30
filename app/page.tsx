import * as React from "react";

import Link from "next/link";

import * as motion from "motion/react-client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CommandIcon,
  SparklesIcon,
  Rocket01Icon,
  GitBranchIcon,
  GithubIcon,
} from "@hugeicons/core-free-icons";

import { InstallCommand } from "@/components/install-command";
import { NpmDownloads } from "@/components/npm-downloads";
import { Logo } from "@/components/logo";
import { getLatestVersion } from "@/lib/npm";

import type { Route } from "next";

export default async function Page() {
  const latestVersion = await getLatestVersion();

  const variants = {
    initial: { opacity: 0, filter: "blur(8px)", y: 20 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  const features = [
    {
      icon: CommandIcon,
      title: "AI-Powered",
      description: "Generates meaningful commit messages using AI",
    },
    {
      icon: Rocket01Icon,
      title: "Lightning Fast",
      description: "One command to stage, commit, and push",
    },
    {
      icon: GitBranchIcon,
      title: "Git Native",
      description: "Works seamlessly with your existing workflow",
    },
  ];

  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-primary/3 absolute right-0 -bottom-1/4 h-[600px] w-[600px] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-4xl flex-col px-6 py-12 md:px-8">
        {/* Header */}
        <motion.header
          className="flex items-center justify-between"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Logo className="size-7" />
            <span className="text-foreground font-medium">No Commit</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href={"/docs" as Route}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/asimar007/no-commit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={GithubIcon} className="size-5" />
            </Link>
            <div className="flex items-center gap-3">
              <React.Suspense fallback={null}>
                <NpmDownloads />
              </React.Suspense>
            </div>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <div className="flex flex-1 flex-col items-center justify-center py-20">
          <motion.div
            className="mb-6 flex items-center gap-2"
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs">
              <HugeiconsIcon icon={SparklesIcon} className="size-3" />v
              {latestVersion} is out
            </span>
          </motion.div>

          <motion.h1
            className="text-foreground mb-6 text-center text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Never write a commit
            <br />
            <span className="text-primary">message again</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mb-10 max-w-lg text-center text-lg"
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let AI craft perfect commit messages while you focus on what matters
            most — writing code.
          </motion.p>

          <motion.div
            className="mb-8"
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InstallCommand />
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href={"/docs" as Route}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Get Started
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </Link>
          </motion.div>
        </div>

        {/* Terminal Preview */}
        <motion.div
          className="mx-auto mb-20 w-full max-w-2xl"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-card border-border overflow-hidden rounded-xl border shadow-lg">
            <div className="bg-muted/50 flex items-center gap-2 border-b px-4 py-3">
              <div className="size-3 rounded-full bg-red-400" />
              <div className="size-3 rounded-full bg-yellow-400" />
              <div className="size-3 rounded-full bg-green-400" />
              <span className="text-muted-foreground ml-2 font-mono text-xs">
                terminal
              </span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-muted-foreground mb-2">
                <span className="text-primary">$</span> nocommit
              </div>
              <div className="text-muted-foreground/70 mb-4">
                Generated commit message:
              </div>
              <div className="text-foreground mb-4">
                feat: add user authentication with JWT tokens
              </div>
              <div className="text-muted-foreground/70 mb-2">
                ? What would you like to do?
              </div>
              <div className="space-y-1">
                <div>
                  <span className="text-primary">❯</span>{" "}
                  <span className="text-green-500">✓</span>{" "}
                  <span className="text-foreground">Commit</span>
                </div>
                <div className="text-muted-foreground/70">{"  "}✎ Edit</div>
                <div className="text-muted-foreground/70">
                  {"  "}↻ Regenerate
                </div>
                <div className="text-muted-foreground/70">{"  "}✖ Cancel</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mb-20 grid gap-6 md:grid-cols-3"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card/50 border-border hover:border-primary/20 hover:bg-card group rounded-xl border p-6 transition-all"
            >
              <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-2.5">
                <HugeiconsIcon
                  icon={feature.icon}
                  className="text-primary size-5"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-foreground mb-2 font-medium">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="text-muted-foreground flex items-center justify-between border-t pt-8 text-sm"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>
            Built by{" "}
            <Link
              href="https://asimsk.site"
              className="hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Asim Sk
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/asimar007/no-commit"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.npmjs.com/package/nocommit"
              className="hover:text-foreground transition-colors"
            >
              npm
            </Link>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
