"use client";
import gsap from "gsap";

import React, { useEffect, useRef } from "react";
import SelectedTwo from "./selected-two";

import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(_ScrollTrigger);

const Selected = () => {
  const h2Ref = useRef(null);
  const trigger = useRef(null);
  const secondRef = useRef(null);
  const secondRef2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "bottom top-=30",
        end: "bottom+=400 top",
        scrub: true,
      },
    });
    tl.to(h2Ref.current, {
      scale: 10,
      backgroundColor: "rgba(37,37,37)",
    })
      .to(
        trigger.current,

        {
          backgroundColor: "rgba(37,37,37)",
        },
        "<"
      )
      .to(
        secondRef.current,
        {
          backgroundColor: "rgba(37,37,37)",
        },
        "<"
      )
      .to(
        secondRef2.current,
        {
          backgroundColor: "rgba(37,37,37)",
        },
        "<"
      );
  }, []);

  return (
    <>
      <div className=" mt-[-100svh]">
        <div className="relative h-svh " ref={trigger}></div>
        <section
          ref={secondRef2}
          className="sticky -bottom-20  h-screen flex justify-center items-center flex-col bg-[rgb(var(--background-main-color-light))]"
        >
          <h2
            ref={h2Ref}
            className=" text-[#252525]  bg-[rgb(var(--background-main-color-light))]  "
          >
            SELECTED WORKS
          </h2>
        </section>
        <div
          ref={secondRef}
          className="flex justify-center items-center w-full h-screen bg-[rgb(var(--background-main-color-light))]"
        ></div>
      </div>
      {/* SELECTED PARTE DOS */}
      <SelectedTwo />
    </>
  );
};

export default Selected;
