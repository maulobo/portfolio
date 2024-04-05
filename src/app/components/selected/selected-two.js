"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect, useRef } from "react";

const SelectedTwo = () => {
  const triggerRef = useRef(null);
  const h2r = useRef(null);
  const h2r2 = useRef(null);
  const h2r3 = useRef(null);
  const h2r4 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "center bottom",
        markers: true,
      },
    });
    tl.to(h2r.current, {
      x: 150,
    })
      .to(
        h2r2.current,
        {
          x: 150,
        },
        "<"
      )
      .to(
        h2r3.current,
        {
          x: -150,
        },
        "<"
      )
      .to(
        h2r4.current,
        {
          x: -150,
        },
        "<"
      );
  }, []);

  return (
    <section
      ref={triggerRef}
      className="h-screen flex justify-around items-center z-10  bg-[rgb(var(--background-main-color-dark))] gap-8"
    >
      <div>
        <h2 ref={h2r} className=" text-white-me">
          HOLAAA
        </h2>
        <h2 ref={h2r2} className=" text-white-me">
          HOLAAA
        </h2>
      </div>
      <div>
        <h2 ref={h2r3} className=" text-white-me">
          HOLAAA
        </h2>
        <h2 ref={h2r4} className=" text-white-me">
          HOLAAA
        </h2>
      </div>
    </section>
  );
};

export default SelectedTwo;
