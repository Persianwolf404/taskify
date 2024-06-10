"use client";
import React, { useRef, useEffect } from "react";
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
  const bolt_box = useRef(null);
  const bolt_icon = useRef(null);
  const bolt_firstline = useRef(null);
  const bolt_secondline = useRef(null);
  const bolt_title = useRef(null);
  const bolt_text = useRef(null);
  const titled_box = useRef(null);
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
          start: "top 70%",
          end: "top 70%",
          toggleActions: "play none reverse none",
        },
      });

      gsap.from(titled_box.current, {
        scrollTrigger: {
          trigger: titled_box.current,
          start: "top 70%",
          end: "top 70%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
      });

      elegance_tl
        .to(elegance_first_line.current, {
          height: "70%",
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
          start: "top 80%",
          end: "top 80%",
          toggleActions: "play none reverse none",
        },
      });

      code_sample_tl
        .from(code_sample.current, {
          opacity: 0,
          x: 50,
          duration: 0.2,
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
          start: "top 60%",
          end: "top 60%",
          toggleActions: "play none reverse none",
        },
      });
      const bolt_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: bolt_icon.current,
          start: "top 73%",
          end: "top 73%",
          toggleActions: "play none reverse none",
        },
      });
      gsap.from(bolt_box.current, {
        scrollTrigger: {
          trigger: bolt_box.current,
          start: "top 70%",
          end: "top 70%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        x: 50,
      });

      bolt_timeline
        .to(bolt_firstline.current, {
          height: "100%",
          duration: 0.2,
        })
        .from(bolt_icon.current, {
          opacity: 0,
          duration: 0.2,
        })
        .from(bolt_title.current, {
          x: "-30",
          opacity: "0",
          duration: 0.2,
        })
        .to(bolt_secondline.current, {
          height: "100%",
          duration: 0.2,
        })
        .from(bolt_text.current, {
          opacity: 0,
          x: "-20",
          duration: 0.2,
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
      className={`${workSans.className}  text-[#efefef] mt-80 flex flex-col large:mx-0 mx-[50px] my-0`}
    >
      <div className="w-full flex">
        <div className="flex h-[386px] large:h-[280px] medium:h-[290px] 2xsmall:h-[160px] small:h-[220px] items-center flex-col m-0">
          <div ref={icon} className="flex relative items-center flex-col m-0">
            <div className="icon-shadow m-0 bg-[#5d5de5]"></div>
            <MdAnimation className="mt-2 text-xl absolute" />
          </div>
          <div className="flex relative 2xsmall:h-[100px] small:h-[140px] large:h-[200px] h-[300px]">
            <span
              ref={iline}
              className="w-[3px] absolute rounded border-roanded h-0 purpleline  mt-14"
            ></span>
          </div>
        </div>
        <div className="m-0 flex flex-col">
          <h3 ref={ihead} className={`ml-[50px] font-[500]  text-[24px]`}>
            Animation
          </h3>
          <h2
            ref={itext}
            className="leading-[52px] mt-11 2xsmall:text-[15px] 2xsmall:leading-4 small:text-[22px] xsmall:text-[20px] small:leading-[30px] medium:text-[33px] large:text-[40px] large:leading-[45px] text-[50px] ml-[45px]"
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
        className=" border-gray-800 bg-red-200  min-h-[690px] 3xsmall:[128px] 2xsmall:min-h-[152px] xsmall:min-h-[179px] small:min-h-[203px] medium:min-h-[276px] large:min-h-[369px] 2xlarge:min-h-[529px] xlarge:min-h-[428px] flex relative border-2 rounded-md w-full "
      >
        <div>
          <Image
            className="w-full "
            src={"/gsap_animation.avif"}
            width={1714}
            height={828}
            alt="gsap_code_sample"
          />
        </div>

        <div
          ref={explnation_container}
          className="
        right-[15%]
        p-5 
        absolute
        flex
        large:top-[10%]
        large:scale-[0.5]
        2xlarge:scale-[0.8]
        xlarge:scale-[0.7]
        2xlarge:right-[8%]
        xlarge:right-[1%]
        medium:scale-[0.8]
        flex-col 
        top-[45%]
        rounded-lg
        w-[530px]
        medium:w-[280px]
        medium:h-[220px]
        medium:mt-20
        min-h-[300px]
        border-2 
        border-gray-800 
        bg-[#141921]
        small:scale-[1]
        small:mt-0
        small:w-[170px]
        small:h-[190px]
        small:min-h-[190px]
        small:top-[40%]
        small:p-2
        small:right-[10%]
      
        "
        >
          <div ref={explnation}>
            <h2 className="text-[#5d5de5] small:text-[10px] medium:text-lg text-3xl">
              GSAP: Crafting Web Magic!
            </h2>
            <p className="text-2xl small:mt-4 mt-9 text-[#AAB2BB] small:leading-3 medium:text-xs small:text-[7px]">
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
          className="filter absolute bottom-0 right-[14%] rounded-full w-[500px] large:hidden h-[500px] bg-[#5d5de5] z-[-1]"
        />
      </div>

      <div className="flex mb-10 h-[150px] overflow-hidden relative m-0">
        <span
          ref={elegance_first_line}
          className="w-[3px] rounded absolute border-roanded h-0 mb-10 ml-3 reverse-purpleline "
        ></span>
      </div>
      <div className="w-full flex">
        <div className="flex h-[386px] medium:h-[250px] small:h-[200px] items-center flex-col m-0">
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
            className="leading-[57px] 2xsmall:text-[18px] xsmall:text-[22px] small:text-[26px] small:leading-[30px] mt-11 medium:text-[35px] medium:leading-[40px] text-[50px] ml-[45px]"
          >
            <span className="text-[#5d5de5]">
              Innovating Web Design
              <br />
            </span>
            Crafting Immersive Digital <br /> Experiences
          </h2>
        </div>
      </div>

      <div ref={titled_box} className="w-full">
        <div className="w-[100%] small:h-[450px] h-[550px] relative ">
          <Infobox
            color={"#5d5de5"}
            Children={() => (
              <>
                <div className="w-full xlarge:flex-col flex h-full small:p-1 p-5">
                  <div className="flex flex-col small:p-3 p-10 xlarge:w-full pt-5 z-10 m-0 w-[50%]">
                    <p className="text-3xl small:text-2xl text-[#8c96a1]">
                      <span className="font-semi-bold text-white">
                        Taskify{" "}
                      </span>
                      creates unique user interface designs to ensure websites
                      are both engaging and memorable experiences for visitors
                    </p>
                    <div className="large:hidden flex absolute bottom-10 m-0">
                      <div className="mt-auto relative m-0">
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
                  <div className="w-[50%] mt-auto large:m-auto large:scale-[1.3] mr-0 z-10">
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
        <div className="flex mt-4 xlarge:flex-col justify-between w-full">
          <div className="m-0 xlarge:w-full w-[49.5%] xlarge:h-auto h-[750px] rounded-md ">
            <Infobox
              color={"#5d5de5"}
              Children={() => (
                <>
                  <div className="w-full h-full z-10 p-10 small:p-6 flex flex-col">
                    <div className="!z-20">
                      <p className="text-2xl small:text-xl !z-20 text-[#8c96a1]">
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
                    <div className="xlarge:my-auto flex mt-auto z-10 m-0">
                      <div className="w-[380px]  ">
                        <di className="mx-auto">
                          <Image
                            className="rounded-xl xlarge:hidden large:scale-[1] scale-[1.2] large:block"
                            src={"/analyz.avif"}
                            width={1179}
                            height={2213}
                            alt="cover"
                          ></Image>
                          <Image
                            className="rounded-xl hidden scale-[2] large:hidden my-20 mt-40 xlarge:block"
                            src={"/analyz-mobile.avif"}
                            width={1328}
                            height={234}
                            alt="cover"
                          ></Image>
                        </di>
                      </div>
                    </div>
                  </div>
                </>
              )}
            />
          </div>
          <div className="m-0 xlarge:w-full xlarge:mt-5 w-[49.5%] xsmall:h-[500px] small:h-[650px] h-[750px] rounded-md ">
            <Infobox
              color={"#5d5de5"}
              Children={() => (
                <>
                  <div className="p-10 small:p-6 h-full relative   !z-20">
                    <div className="absolute flex pr-10 !z-20">
                      <p className="text-2xl xsmall:text-lg !z-20 text-[#8c96a1]">
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
                    <div className=" w-full  relative !z-20 h-full ">
                      <Image
                        className="rounded-lg absolute bottom-0 border-gray-800 border-2"
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
        <div className="flex ml-3 relative m-0 medium:h-[90px] h-[150px]">
          <span
            ref={bolt_firstline}
            className="w-[3px] absolute rounded border-roanded h-0  reverse-greenline  "
          ></span>
        </div>
        <div className="flex itmes ">
          <div className="m-0">
            <div
              ref={bolt_icon}
              className="flex relative flex-col ml-1 mt-10 m-0"
            >
              <div className="icon-shadow m-0 bg-[#3fb950]"></div>
              <BsLightningCharge className="mt-2 text-xl absolute rotate-12" />
            </div>
            <div className="flex ml-3 relative m-0 mt-10 medium:h-[230px] small:h-[170px] h-[300px]">
              <span
                ref={bolt_secondline}
                className="w-[3px] absolute rounded border-roanded h-0  greenline  "
              ></span>
            </div>
          </div>
          <div className="m-0 mt-10 flex flex-col">
            <h3
              ref={bolt_title}
              className={`ml-[50px] font-[500] 2xsmall:text-[20px] text-[24px]`}
            >
              Responsive Web design
            </h3>
            <h2
              ref={bolt_text}
              className="leading-[52px] 2xsmall:text-[18px] xsmall:text-[22px] mt-11 text-[50px] medium:text-[40px] small:text-[28px] small:leading-[35px] ml-[45px]"
            >
              <span className="text-[#3fb950]">
                Adapting to Every Device <br />
              </span>
              Building Bridges Across <br />
              All Devices
            </h2>
          </div>
        </div>
        <div
          ref={bolt_box}
          className="w-full 2xsmall:min-h-[350px] min-h-[400px]  "
        >
          <Infobox
            color={"#3fb950"}
            Children={() => (
              <>
                <div className="w-full flex h-full p-5">
                  <div className="flex flex-col p-10 small:p-1 pt-5 z-10 m-0 w-full">
                    <p className="text-2xl 2xsmall:text-lg xsmall:text-xl mb-40 text-[#8c96a1]">
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
                          className="font-semi-bold 2xsmall:text-xl xsmall:text-2xl text-3xl z-20 text-white"
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
