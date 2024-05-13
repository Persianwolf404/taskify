"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdAnimation } from "react-icons/md";
import Infobox from "../Infobox";
import Image from "next/image";

export default function Animations() {
  gsap.registerPlugin(ScrollTrigger);
  const icon = useRef(null);
  const ihead = useRef(null);
  const itext = useRef(null);
  const iline = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
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
    <div className="text-[#efefef] flex flex-col mx-[50px] my-0">
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
          <h3 ref={ihead} className={` ml-[50px] font-[500]  text-[24px]`}>
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
      <div className="border-gray-800 border-2 rounded-md w-full ">
        <Image
          src={"/gsap_animation.avif"}
          width={10000}
          height={1}
          className="!m-0 "
        ></Image>
      </div>
      <span className="w-[3px] rounded border-roanded h-[300px] mt-2 ml-4 both-fade-greenline "></span>
      <div className="w-[100%] h-[550px] relative ">
        <Infobox color={"#02954A"} />
      </div>
    </div>
  );
}
