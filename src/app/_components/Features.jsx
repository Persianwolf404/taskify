"use client";
import React, { useRef, useEffect } from "react";
import {} from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdAnimation } from "react-icons/md";
import Infobox from "./Infobox";
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Features() {
  gsap.registerPlugin(ScrollTrigger);
  const code_sample_starting_point = useRef(null);
  const explnation_container = useRef(null);
  const explnation = useRef(null);
  const code_sample = useRef(null);
  const icon = useRef(null);
  const ihead = useRef(null);
  const itext = useRef(null);
  const iline = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const code_sample_tl = gsap.timeline({
        scrollTrigger: {
          trigger: code_sample_starting_point.current,
          start: "20% 65%",
          end: "20% 65%",
          toggleActions: "play none reverse none",
          markers: true,
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
        })
        .from(explnation.current, {
          x: "-10",
          opacity: 0,
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
        duration: 0.3,
      })
        .from(
          ihead.current,
          {
            delay: 0.3,
            x: -10,
            opacity: 0,
            duration: 0.3,
          },
          "-=0.3"
        )
        .addLabel("mmd")
        .to(
          iline.current,
          {
            height: "300px",
            duration: 0.4,
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
          <span
            ref={iline}
            className="w-[3px] rounded border-roanded h-0 greenline  mt-14"
          ></span>
        </div>
        <div className="m-0 flex flex-col">
          <h3 ref={ihead} className={`ml-[50px] font-[500]  text-[24px]`}>
            Animations
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
      <span ref={code_sample_starting_point}></span>
      <div
        ref={code_sample}
        className="border-gray-800 flex relative border-2 rounded-md w-full "
      >
        <Image
          src={"/gsap_animation.avif"}
          width={10000}
          height={1}
          className="!m-0 "
        ></Image>
        <div
          ref={explnation_container}
          className="p-5 absolute flex flex-col top-[50%] rounded-lg right-[15%] w-[450px] min-h-[200px] border-2 border-gray-800 bg-[#141921]"
        >
          <div ref={explnation}>
            <h2 className="text-[#1B924D] text-xl">
              GSAP: Crafting Web Magic!
            </h2>
            <p className="text-lg mt-9 text-[#AAB2BB]">
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
      </div>
      <span className="w-[3px] rounded border-roanded h-[300px] mt-2 ml-4 both-fade-greenline "></span>
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
