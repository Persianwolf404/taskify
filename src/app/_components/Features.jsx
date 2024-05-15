"use client";
import React, { useRef, useEffect } from "react";
import {} from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdAnimation } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import Infobox from "./Infobox";
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Features() {
  const elegance_first_line = useRef(null);
  const elegance_second_line = useRef(null);
  const elegance_logo = useRef(null);
  const elegance_text = useRef(null);
  const elegance_paragraph = useRef(null);
  const explnation_container = useRef(null);
  const explnation = useRef(null);
  const code_sample = useRef(null);
  const code_sample_shadow = useRef(null);
  const icon = useRef(null);
  const ihead = useRef(null);
  const itext = useRef(null);
  const iline = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const elegance_tl = gsap.timeline({
        scrollTrigger: {
          trigger: elegance_logo.current,
          start: "bottom 65%",
          end: "bottom 65%",
          toggleActions: "play none reverse none",
          markers: true,
        },
      });

      elegance_tl
        .to(elegance_first_line.current, {
          height: "100%",
          duration: 0.2,
        })
        .from(elegance_logo.current, {
          opacity: 0,
          duration: 0.2,
        })
        .from(elegance_text.current, {
          x: "-30",
          opacity: "0",
          duration: 0.2,
        })
        .to(elegance_second_line.current, {
          height: "83%",
          duration: 0.2,
        })
        .from(elegance_paragraph.current, {
          opacity: 0,
          x: "-20",
          duration: 0.2,
        });

      const code_sample_tl = gsap.timeline({
        scrollTrigger: {
          trigger: explnation_container.current,
          start: "top 75%",
          end: "top 75%",
          toggleActions: "play none reverse none",
        },
      });

      code_sample_tl
        .from(code_sample.current, {
          opacity: 0,
          x: 50,
        })
        .from(explnation_container.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
        })
        .from(explnation.current, {
          x: "-10",
          opacity: 0,
          duration: 0.2,
        })
        .from(code_sample_shadow.current, {
          opacity: 0,
          duration: 0.2,
        });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: icon.current,
          start: "top 65%",
          end: "top 65%",
          toggleActions: "play none reverse none",
        },
      });

      tl.from(icon.current, {
        opacity: 0,
        duration: 0.2,
      })
        .from(
          ihead.current,
          {
            delay: 0.3,
            x: -10,
            opacity: 0,
            duration: 0.2,
          },
          "-=0.3"
        )
        .addLabel("mmd")
        .to(
          iline.current,
          {
            height: "100%",
            duration: 0.3,
          },
          "mmd"
        )
        .from(itext.current, {
          opacity: 0,
          x: -20,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`${workSans.className}  text-[#efefef] mt-80 flex flex-col mx-[50px] my-0`}
    >
      <div className="w-full flex">
        <div className="flex h-[386px] items-center flex-col m-0">
          <div ref={icon} className="flex relative items-center flex-col m-0">
            <div className="icon-shadow m-0 bg-green-600"></div>
            <MdAnimation className="mt-2 text-xl absolute" />
          </div>
          <div className="flex relative h-[300px]">
            <span
              ref={iline}
              className="w-[3px] absolute rounded border-roanded h-0  greenline  mt-14"
            ></span>
          </div>
        </div>
        <div className="m-0 flex flex-col">
          <h3 ref={ihead} className={`ml-[50px] font-[500]  text-[24px]`}>
            Animation
          </h3>
          <h2
            ref={itext}
            className="leading-[52px] mt-11 text-[50px] ml-[45px]"
          >
            <span className="text-[#3DA64E]">
              Revolutionize Interaction <br />
            </span>
            Setting a Benchmark in Digital <br />
            Engagement Excellence
          </h2>
        </div>
      </div>

      <div
        ref={code_sample}
        className=" border-gray-800 flex relative border-2 rounded-md w-full "
      >
        <Image
          src={"/gsap_animation.avif"}
          width={1714}
          height={828}

          alt="gsap_code_sample"
        />
        <div
          ref={explnation_container}
          className="p-5 absolute flex flex-col top-[40%] rounded-lg right-[15%] w-[530px] min-h-[300px] border-2 border-gray-800 bg-[#141921]"
        >
          <div ref={explnation}>
            <h2 className="text-[#1B924D] text-3xl">
              GSAP: Crafting Web Magic!
            </h2>
            <p className="text-2xl mt-9 text-[#AAB2BB]">
              See this code? It's like a magic wand for websites. With GSAP, we
              can make logos dance, buttons bounce, and text spin around—making
              the website look awesome and lively! It's like painting with
              movement, creating a fun and engaging experience for visitors.
              GSAP lets me bring websites to life, turning static pages into
              dynamic adventures. It's what makes the web exciting and
              interactive, leaving people wanting more
            </p>
          </div>
        </div>
        <span
          ref={code_sample_shadow}
          className="filter absolute bottom-0 right-[14%] rounded-full w-[500px] h-[500px] bg-[#02BAB2] z-[-1]"
        />
      </div>

      <div className="flex mb-10 h-[150px] overflow-hidden relative m-0">
        <span
          ref={elegance_first_line}
          className="w-[3px] rounded absolute border-roanded h-0 mb-10 ml-3 reverse-greenline "
        ></span>
      </div>
      <div className="w-full flex">
        <div className="flex h-[386px] items-center flex-col m-0">
          <div
            ref={elegance_logo}
            className="flex relative items-center flex-col m-0"
          >
            <div className="icon-shadow m-0 bg-green-600"></div>
            <IoDiamondOutline className="mt-1 rotate-[45] text-xl absolute" />
          </div>
          <div className="flex relative overflow-hidden h-full">
            <span
              ref={elegance_second_line}
              className="w-[3px] rounded mb-2 border-roanded m h-0 greenline mt-14"
            ></span>
          </div>
        </div>
        <div className="m-0 flex flex-col">
          <h3
            ref={elegance_text}
            className={`ml-[50px] font-[500]  text-[24px]`}
          >
            Elegance
          </h3>
          <h2
            ref={elegance_paragraph}
            className="leading-[57px] mt-11 text-[50px] ml-[45px]"
          >
            <span className="text-[#3DA64E]">
              Innovating Web Design
              <br />
            </span>
            Crafting Immersive Digital <br /> Experiences
          </h2>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[100%] h-[550px] relative ">
          <Infobox color={"#02954A"} Children={() => <></>} />
        </div>
        <div className="flex mt-4 justify-between w-full">
          <div className="m-0  w-[49.5%] h-[750px] rounded-md ">
            <Infobox color={"#02954A"} Children={() => <></>} />
          </div>
          <div className="m-0  w-[49.5%] h-[750px] rounded-md ">
            <Infobox color={"#02954A"} Children={() => <></>} />
          </div>
        </div>
      </div>
    </div>
  );
}
