"use client";

import * as React from "react";

import { ScrollArea, ScrollViewport } from "@/components/ui/scroll-area";

import { ScrollProvider, TOCItem, useTOC } from "@/components/toc";

import { cn } from "@/styles/utils";

export function TOCDesktop() {
  const toc = useTOC();

  const containerRef = React.useRef<HTMLDivElement>(null);

  if (toc.length === 0) return null;

  return (
    <div className="sticky top-20 hidden w-56 shrink-0 self-start py-8 pe-4 xl:block">
      <div className="mb-4">
        <span className="text-foreground text-xs font-medium uppercase tracking-wider">
          On this page
        </span>
      </div>
      <ScrollArea>
        <ScrollProvider containerRef={containerRef}>
          <ScrollViewport
            ref={containerRef}
            className="relative max-h-[calc(100vh-12rem)] min-h-0"
          >
            <nav className="flex flex-col gap-1 border-l">
              {toc.map((item: TOCItem) => (
                <TOCItem
                  key={item.url}
                  href={item.url}
                  className={cn(
                    "text-muted-foreground hover:text-foreground data-active:border-primary data-active:text-foreground -ml-px border-l border-transparent py-1.5 pl-4 text-sm transition-colors",
                    item.depth !== 2 && "pl-8",
                  )}
                >
                  {item.title}
                </TOCItem>
              ))}
            </nav>
          </ScrollViewport>
        </ScrollProvider>
      </ScrollArea>
    </div>
  );
}
