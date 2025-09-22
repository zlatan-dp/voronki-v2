"use client";

import { usePathname } from "next/navigation";

export function useCurrentFlow() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  return parts.includes("intensives")
    ? parts[parts.indexOf("intensives") + 1]
    : null;
}
