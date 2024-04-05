"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";
import mock from "/public/images/mock.webp";

const SelectedThree = () => {
  const triggerRef = useRef(null);
  const h2r = useRef(null);
  const h2r2 = useRef(null);
  const h2r3 = useRef(null);
  const h2r4 = useRef(null);
  const imgRef = useRef(null);

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
          x: 150,
        },
        "<"
      )
      .to(
        h2r4.current,
        {
          x: 150,
        },
        "<"
      )
      .to(
        imgRef.current,
        {
          scale: 1,
        },
        "<"
      );
  }, []);

  return (
    <section
      ref={triggerRef}
      className="h-screen flex justify-around items-center z-10  bg-[rgb(var(--background-main-color-dark))] gap-8"
    >
      <div className=" flex gap-20 flex-col">
        <h2 ref={h2r3} className=" text-white-me">
          HOLAAA
        </h2>
        <h2 ref={h2r4} className=" text-white-me">
          HOLAAA
        </h2>
      </div>
      <div>
        <Image ref={imgRef} src={mock} alt="mock" style={{ scale: 0.5 }} />
      </div>
    </section>
  );
};

export default SelectedThree;
