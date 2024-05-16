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
import { BsLightningCharge } from "react-icons/bs";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Features() {
  const tilted_box = useRef(null);
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
          start: "top 40%",
          end: "top 40%",
          toggleActions: "play none reverse none",
        },
      });

      gsap.from(tilted_box.current, {
        scrollTrigger: {
          trigger: tilted_box.current,
          start: "top 65%",
          end: "top 65%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
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
            <div className="icon-shadow m-0 bg-[#5d5de5]"></div>
            <MdAnimation className="mt-2 text-xl absolute" />
          </div>
          <div className="flex relative h-[300px]">
            <span
              ref={iline}
              className="w-[3px] absolute rounded border-roanded h-0  purpleline  mt-14"
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
            <span className="text-[#5d5de5]">
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
          width={2714}
          height={1828}
          alt="gsap_code_sample"
        />
        <div
          ref={explnation_container}
          className="p-5 absolute flex flex-col top-[40%] rounded-lg right-[15%] w-[530px] min-h-[300px] border-2 border-gray-800 bg-[#141921]"
        >
          <div ref={explnation}>
            <h2 className="text-[#5d5de5] text-3xl">
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
          className="filter absolute bottom-0 right-[14%] rounded-full w-[500px] h-[500px] bg-[#5d5de5] z-[-1]"
        />
      </div>

      <div className="flex mb-10 h-[150px] overflow-hidden relative m-0">
        <span
          ref={elegance_first_line}
          className="w-[3px] rounded absolute border-roanded h-0 mb-10 ml-3 reverse-purpleline "
        ></span>
      </div>
      <div className="w-full flex">
        <div className="flex h-[386px] items-center flex-col m-0">
          <div
            ref={elegance_logo}
            className="flex relative items-center flex-col m-0"
          >
            <div className="icon-shadow m-0 bg-[#5d5de5]"></div>
            <IoDiamondOutline className="mt-1 rotate-[45] text-xl absolute" />
          </div>
          <div className="flex relative overflow-hidden h-full">
            <span
              ref={elegance_second_line}
              className="w-[3px] rounded mb-2 border-roanded m h-0 purpleline mt-14"
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
            <span className="text-[#5d5de5]">
              Innovating Web Design
              <br />
            </span>
            Crafting Immersive Digital <br /> Experiences
          </h2>
        </div>
      </div>

      <div ref={tilted_box} className="w-full">
        <div className="w-[100%] h-[550px] relative ">
          <Infobox
            color={"#5d5de5"}
            Children={() => (
              <>
                <div className="w-full flex h-full p-5">
                  <div className="flex flex-col p-10 pt-5 z-10 m-0 w-[50%]">
                    <p className="text-3xl text-[#8c96a1]">
                      <span className="font-semi-bold text-white">
                        Taskify{" "}
                      </span>
                      creates unique user interface designs to ensure websites
                      are both engaging and memorable experiences for visitors
                    </p>
                    <div className="mt-auto flex relative m-0">
                      <div className="m-0 relative flex group">
                        <a
                          href="#"
                          className="font-semi-bold text-3xl z-20 text-white"
                        >
                          checkout taskify's github
                        </a>
                        <span className="absolute h-full mt-2 border-white border-b-2 w-0 group-hover:w-full transition-all duration-300"></span>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] mt-auto mr-0 z-10">
                    <Image
                      className="mr-0"
                      src="/ui.avif"
                      alt="ux ui"
                      width={600}
                      height={200}
                    ></Image>
                  </div>
                </div>
              </>
            )}
          />
        </div>
        <div className="flex mt-4 justify-between w-full">
          <div className="m-0  w-[49.5%] h-[750px] rounded-md ">
            <Infobox
              color={"#5d5de5"}
              Children={() => (
                <>
                  <div className="w-full h-full z-10 p-10 flex flex-col">
                    <div className="!z-20">
                      <p className="text-2xl !z-20 text-[#8c96a1]">
                        <span className="font-semi-bold text-white">
                          Taskify{" "}
                        </span>
                        values both creativity and performance. While
                        incorporating 3D models and animations for visual
                        appeal, we are committed to maintaining high
                        performance. Through smart coding and lightweight
                        resources, our websites and apps remain fast and
                        responsive, ensuring excellent user experiences
                      </p>
                    </div>
                    <div className="mt-auto z-10 m-0">
                      <div className="g w-[380px]  ">
                        <div>
                          <Image
                            className="rounded-xl"
                            src={"/analyz.avif"}
                            width={1179}
                            height={2213}
                            alt="cover"
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            />
          </div>
          <div className="m-0 w-[49.5%] h-[750px] rounded-md ">
            <Infobox
              color={"#5d5de5"}
              Children={() => (
                <>
                  <div className="p-10 !z-20">
                    <div className="absolute pr-10 !z-20">
                      <p className="text-2xl !z-20 text-[#8c96a1]">
                        <span className="font-semi-bold text-white">
                          Taskify{" "}
                        </span>
                        excels in creating and controlling 3D models with
                        precision. Whether it's for architecture, product
                        design, or interactive experiences, we bring visions to
                        life with accuracy and finesse, captivating audiences
                        and elevating brands
                      </p>
                    </div>
                    <div className="w-[450px] bottom-20 !z-20 absolute   m-0">
                      <Image
                        className="rounded-lg border-gray-800 border-2"
                        src={"/3dss.avif"}
                        alt="planet"
                        width={1397}
                        height={765}
                      ></Image>
                    </div>
                  </div>
                </>
              )}
            />
          </div>
        </div>
        <div className="flex ml-3 relative m-0 h-[150px]">
          <span className="w-[3px] absolute rounded border-roanded h-full  reverse-greenline  "></span>
        </div>
        <div className="flex itmes ">
          <div className="m-0">
            <div className="flex relative flex-col ml-1 mt-10 m-0">
              <div className="icon-shadow m-0 bg-[#3fb950]"></div>
              <BsLightningCharge className="mt-2 text-xl absolute rotate-12" />
            </div>
            <div className="flex ml-3 relative m-0 mt-10 h-[300px]">
              <span className="w-[3px] absolute rounded border-roanded h-full  greenline  "></span>
            </div>
          </div>
          <div className="m-0 mt-10 flex flex-col">
            <h3 ref={ihead} className={`ml-[50px] font-[500]  text-[24px]`}>
              Responsive Web design
            </h3>
            <h2
              ref={itext}
              className="leading-[52px] mt-11 text-[50px] ml-[45px]"
            >
              <span className="text-[#3fb950]">
                Adapting to Every Device <br />
              </span>
              Building Bridges Across <br />
              All Devices
            </h2>
          </div>
        </div>
        <div className="w-full h-[400px]  ">
          <Infobox
            color={"#3fb950"}
            Children={() => (
              <>
                <div className="w-full flex h-full p-5">
                  <div className="flex flex-col p-10 pt-5 z-10 m-0 w-full">
                    <p className="text-2xl text-[#8c96a1]">
                      <span className="font-semi-bold text-white">
                        Taskify{" "}
                      </span>
                      Taskify values both creativity and performance. While
                      incorporating 3D models and animations for visual appeal,
                      we are committed to maintaining high performance. Through
                      smart coding and lightweight resources, our websites and
                      apps remain fast and responsive, ensuring excellent user
                      experiences
                    </p>
                    <div className="mt-auto flex relative m-0">
                      <div className="m-0 relative flex group">
                        <a
                          href="#"
                          className="font-semi-bold text-3xl z-20 text-white"
                        >
                          checkout taskify's github
                        </a>
                        <span className="absolute h-full mt-2 border-white border-b-2 w-0 group-hover:w-full transition-all duration-300"></span>
                      </div>
                    </div>
                  </div>
               
                </div>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}
