"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function Cleanup() {
  const whycon = useRef(null);
  const why = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(why.current, {
        scrollTrigger: {
          trigger: whycon.current,
          start: "0% center",
          end: "93% center",
          pin: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={whycon} className="h-auto large:w-[45%] medium:hidden w-[50%]">
      <h4 ref={why} className="text-[#c1c9d3] text-[1.3em] font-meduim">
        Why Taskify Exist?
      </h4>
    </div>
  );
}

export default Cleanup;
