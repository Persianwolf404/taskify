import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Triplead() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        first.current,
        {
          x: "60%",
        },
        {
          x: "-10%",
          scrollTrigger: {
            trigger: container.current,
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        second.current,
        {
          x: "-40%",
        },
        {
          x: "40%",
          scrollTrigger: {
            trigger: container.current,
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        third.current,
        {
          x: "60%",
        },
        {
          x: "-20%",
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className=" mt-[250px] text-[9rem]  flex flex-col "
    >
      <h1 ref={first} className="ov font-[500] italic  text-white">
        UX/UI Design
      </h1>
      <h1 ref={second} className="ov font-[500] italic  text-white">
        Website Development
      </h1>
      <h1 ref={third} className="ov font-[500] italic  text-white">
        transformation
      </h1>
    </section>
  );
}
