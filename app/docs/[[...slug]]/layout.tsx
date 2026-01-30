import "~/styles/prose.css";

import { NavbarMobileProvider } from "@/components/nav-mobile";

import { Navbar } from "@/components/nav-bar";
import { Sidebar } from "@/components/side-bar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-calling-code bg-background min-h-dvh">
      <NavbarMobileProvider>
        <Navbar />
        <div className="relative mx-auto flex max-w-[1400px] pt-16">
          <Sidebar />
          <main className="flex min-w-0 flex-1">{children}</main>
        </div>
      </NavbarMobileProvider>
    </div>
  );
}
