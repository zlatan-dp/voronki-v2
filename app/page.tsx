'use client'

import {Suspense} from "react";
import PagesDispatcher from "@/app/flow-01/PagesDispatcher";

export default function Home() {

  return (
      <Suspense fallback={
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      }>
        <PagesDispatcher/>
      </Suspense>
  );
}
