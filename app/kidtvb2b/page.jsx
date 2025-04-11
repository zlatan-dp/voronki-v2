"use client";

import Script from "next/script";
import Landing from "./components/landing/landing";

export default function filmsLanding() {
  return (
    <>
      <Landing />
      <Script src="/kidtvb2b/js/animations.js" />
      <Script src="/kidtvb2b/js/mob-menu.js" />
      <Script src="/kidtvb2b/js/submit.js" />
    </>
  );
}
