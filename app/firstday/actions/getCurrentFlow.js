"use client";

import { usePathname } from "next/navigation";

export function useCurrentFlow() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  return parts.includes("firstday")
    ? parts[parts.indexOf("firstday") + 1]
    : null;
}
