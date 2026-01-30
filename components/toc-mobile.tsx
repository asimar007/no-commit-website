"use client";

import * as React from "react";

import { AnimatePresence, MotionConfig, motion } from "motion/react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  TextAlignLeftIcon,
} from "@hugeicons/core-free-icons";

import { ScrollArea, ScrollViewport } from "@/components/ui/scroll-area";

import { useOnClickOutside } from "@/hooks/use-on-click-outside";

import {
  ScrollProvider,
  TOCItem,
  useActiveAnchor,
  useTOC,
} from "@/components/toc";

import { cn } from "@/styles/utils";

export function TOCMobile() {
  const toc = useTOC();
  const active = useActiveAnchor();

  const outsideRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  useOnClickOutside(outsideRef, () => setOpen(false));

  const current = React.useMemo(() => {
    return toc.find((item) => active === item.url.slice(1))?.title;
  }, [toc, active]);

  if (toc.length === 0) return null;

  return (
    <div
      ref={outsideRef}
      className="sticky top-16 z-10 overflow-visible xl:hidden"
    >
      <header className="bg-background/80 border-b px-6 backdrop-blur-xl">
        <button
          className="w-full py-3 text-start"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2 text-sm">
            <HugeiconsIcon
              className="text-muted-foreground size-4 shrink-0"
              icon={TextAlignLeftIcon}
              strokeWidth={1.5}
            />
            <span className="text-foreground shrink-0 font-medium">
              On this page
            </span>
            <HugeiconsIcon
              className={cn(
                open ? "rotate-90" : "",
                "text-muted-foreground size-4 shrink-0 transition-transform",
              )}
              icon={ArrowRight01Icon}
              strokeWidth={1.5}
            />
            {!open && current && (
              <span className="text-muted-foreground truncate">{current}</span>
            )}
          </div>
        </button>
        <MotionConfig transition={{ duration: 0.3, type: "spring", bounce: 0 }}>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="border-t py-3">
                  <ScrollArea>
                    <ScrollProvider containerRef={containerRef}>
                      <ScrollViewport
                        ref={containerRef}
                        className="no-scrollbar relative max-h-[50dvh] min-h-0"
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
              </motion.div>
            )}
          </AnimatePresence>
        </MotionConfig>
      </header>
    </div>
  );
}
