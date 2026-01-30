"use client";

import * as React from "react";

import { usePathname } from "next/navigation";

import { AnimatePresence, MotionConfig, motion } from "motion/react";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

import { AsideLink } from "~/components/aside-link";

import { config } from "~/config";

export function Sidebar() {
  const pathname = usePathname();

  const getDefaultValue = React.useCallback(() => {
    const defaultValue = config.docs.contents.findIndex((content) =>
      content.list.some((item) => item.href === pathname),
    );
    return defaultValue === -1 ? 0 : defaultValue;
  }, [pathname]);

  const [currentOpen, setCurrentOpen] = React.useState<number>(() =>
    getDefaultValue(),
  );

  return (
    <aside className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-64 shrink-0 overflow-y-auto border-r py-6 md:block lg:w-72">
      <MotionConfig transition={{ duration: 0.3, type: "spring", bounce: 0 }}>
        <nav className="flex flex-col gap-1 px-4">
          {config.docs.contents.map((content, index) => (
            <div key={content.title} className="mb-2">
              <button
                className="text-foreground hover:text-primary flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors"
                onClick={() =>
                  setCurrentOpen(currentOpen === index ? -1 : index)
                }
              >
                <span>{content.title}</span>
                <motion.div
                  animate={{ rotate: currentOpen === index ? 180 : 0 }}
                >
                  <HugeiconsIcon
                    className="text-muted-foreground size-4"
                    icon={ArrowDown01Icon}
                    strokeWidth={1.5}
                  />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {currentOpen === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 flex flex-col gap-0.5 border-l py-1 pl-3">
                      {content.list.map((item) => (
                        <AsideLink
                          key={item.title}
                          className="rounded-md px-3 py-1.5 text-sm"
                          href={item.href}
                        >
                          {item.title}
                        </AsideLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </MotionConfig>
    </aside>
  );
}
