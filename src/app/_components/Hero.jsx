"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip);
}

function Hero() {
  const taskify = useRef(null);
  const iconRef = useRef(null);
  const Fosters = useRef(null);
  const parent = useRef(null);
  const Progress = useRef(null);
  const Fostersmainparent = useRef(null);
  const Progressmainparent = useRef(null);

  useEffect(() => {
    function moveback() {
      let state = Flip.getState(Fosters.current);
      let sate = Flip.getState(Progress.current);

      Fostersmainparent.current.appendChild(Fosters.current);
      Progressmainparent.current.appendChild(Progress.current);

      Flip.from(state, {
        duration: 1,
      });
      Flip.from(sate, { duration: 0.7 });
    }
    function move() {
      let state = Flip.getState(Fosters.current);
      let sate = Flip.getState(Progress.current);

      parent.current.appendChild(Fosters.current);
      parent.current.appendChild(Progress.current);

      Flip.from(state, {
        duration: 1,
      });
      Flip.from(sate, { duration: 0.7 });
    }

    gsap.to(iconRef.current, {
      rotation: 360,
      transition: 0.5,
      ease: "Leaner",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        start: "center 80%",
        end: "center 80%",
        trigger: parent.current,

        onLeaveBack: handleLeaveBack,
        onEnter: enter,
      },
    });

    function handleLeaveBack() {
      gsap.to(parent.current, {
        width: "0",
        duration: 1.5,
        ease: Power3.out,
      });
      moveback();
    }
    function enter() {
      move();
      gsap.to(parent.current, {
        width: "100%",
        duration: 1.5,
        ease: Power3.out,
      });
    }

    tl.add(move).to(parent.current, {
      width: "100%",
      duration: 1.5,
      ease: Power3.out,
    });
  }, []);

  return (
    <>
      <section className=" Hero w-full h-[100vh] flex justify-center items-center ">
        <div className="flex flex-col ">
          <p className="mb-[30px] text-[1.13em] font-normal leading-snug text-center text-[#5d6067]">
            Elevate Your Vision through Innovation & Expertise
          </p>
          <div className="flex justify-center items-center ">
            <span className="text-[#c1c9d3] text-[5.5em] leading-[1.1] font-medium">
              Inspiring Change
            </span>
            <span
              className="
                flex  
                items-center
                text-[6.5em]
                m-auto
                leading-[1.1]
                font-medium
                w-[1.3em]
                relative
                h-[.82em]
                cursor-pointer
                bg-[#252627]
                rounded-[100px]
                ml-[0.2em]
                mr-[0.2em]"
            >
              <i
                ref={iconRef}
                className="text-[#08B9B5] text-[25px] fas fa-asterisk"
              ></i>
            </span>
            <div className="m-0 w-[150px]" />
          </div>

          <div className="m-0 mt-4 flex justify-center items-center">
            <div className="m-0 w-[320px]" />
            <span
              ref={taskify}
              className=" m-0 mr-3 text-[5.5em] leading-[1.1] text-[#AAB2BB] font-medium"
            >
              Taskify
            </span>
            <div ref={Fostersmainparent} className="m-0">
              <h1
                ref={Fosters}
                className="mr-6 mb-2 text-[#08B9B5] text-[5em] leading-[1.1] font-medium"
              >
                Fosters
              </h1>
            </div>

            <div className="ml-auto"></div>
          </div>

          <div className="m-0 flex justify-start  ">
            <div className="m-0 w-[200px]" />
            <div ref={Progressmainparent} className="m-0">
              <h1
                ref={Progress}
                className="mb-[10px] text-[#08B9B5] m-0 inline-block text-[5em] leading-[1.1] font-medium"
              >
                Progress
              </h1>
              <h1 className="mb-[10px] invisible text-[#08B9B5] m-0 inline-block text-[5em] leading-[1.1] font-medium">
                .
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className={`flex m-0 mt-[150px] relative  w-full`}>
        <div
          ref={parent}
          className="w-0 flex h-full border-b-2 border-[#5d6067] absolute "
        ></div>
        <h1 className="invisible mb-3 text-[5em] leading-[1.1] w-0 font-medium">
          .
        </h1>
      </div>
    </>
  );
}

export default Hero;
