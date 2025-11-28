"use client";

import { usePathname } from "next/navigation";

export function useCurrentFlow() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  return parts.includes("sprints") ? parts[parts.indexOf("sprints") + 1] : null;
}
