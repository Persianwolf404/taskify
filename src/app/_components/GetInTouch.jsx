"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Marquee = ({ children }) => {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;

    const contentWidth = content.offsetWidth;
    const containerWidth = marquee.offsetWidth;
    const duration = contentWidth / 50; 

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(content, {
      x: -(contentWidth - containerWidth),
      duration: duration,
      ease: "linear",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={marqueeRef} style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <div className="w-full h-screen">
      <div className="app h-full flex items-center text-center">
        <div className="text-white mt-20 w-full">
          <h2 className="text-7xl leading-[100px] font-bold ">
            Ready To Get <br />
            Started?
          </h2>
          <Marquee>
            <p className="m-2 text-[150px]">TALK</p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
