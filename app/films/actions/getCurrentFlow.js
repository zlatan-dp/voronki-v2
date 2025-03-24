'use client'

import { usePathname } from "next/navigation";

export function useCurrentFlow() {
        const pathname = usePathname()
        const parts = pathname.split('/').filter(Boolean);
        return parts.includes('films') ? parts[parts.indexOf('films')+1] : null
        
}