'use client'

import {Suspense} from "react";
import PagesDispatcher from "@/app/PagesDispatcher";

export default function Home() {

  return (
      <Suspense>
        <PagesDispatcher/>
      </Suspense>
  );
}
