"use client";

import Lenis from "@studio-freight/lenis";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScrolling({ children }) {
  const lenis = (useRef < Lenis) | (null > null);
  const pathname = usePathname();

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
