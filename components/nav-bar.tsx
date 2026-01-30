import Link from "next/link";

import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";

import { NavbarMobile, NavbarMobileButton } from "~/components/nav-mobile";
import { Logo } from "~/components/logo";

export function Navbar() {
  return (
    <div className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <Logo className="text-primary size-6" />
            <span className="text-foreground font-medium">No Commit</span>
          </Link>
          <div className="bg-border hidden h-5 w-px md:block" />
          <span className="text-muted-foreground hidden text-sm md:block">
            Documentation
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/asimar007/no-commit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground hidden transition-colors md:flex"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              className="size-5"
              strokeWidth={1.5}
            />
          </Link>
          <NavbarMobileButton />
        </div>
      </nav>
      <NavbarMobile />
    </div>
  );
}
