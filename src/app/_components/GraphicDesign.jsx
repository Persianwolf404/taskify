"use client";
import React, { useRef, useEffect } from "react";
import { Niconne, Raleway } from "next/font/google";
import Image from "next/image";
import { MdOutlineArrowForward } from "react-icons/md";
import VanillaTilt from "vanilla-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "700"],
});

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return <div ref={tilt} {...rest} />;
}

const GraphicDesign = () => {
  const options = {
    scale: 1,
    speed: 500,
    max: 2.5,
  };

  const title = useRef(null);
  const root_headed = useRef(null);
  const root_headed_children = useRef(null);
  const destiny = useRef(null);
  const destiny_children = useRef(null);
  const musashi = useRef(null);
  const musashi_children = useRef(null);
  const through_the_woods = useRef(null);
  const through_the_woods_children = useRef(null);
  const levitation = useRef(null);
  const levitation_children = useRef(null);
  const lord_of_the_lands = useRef(null);
  const lord_of_the_lands_children = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(title.current, {
        scrollTrigger: {
          trigger: title.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        x: "-50",
      });
      gsap.from(root_headed.current, {
        scrollTrigger: {
          trigger: title.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
      });
      gsap.from(root_headed_children.current, {
        scrollTrigger: {
          trigger: title.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        delay: 0.1,
        scale: 1.3,
      });

      gsap.from(destiny.current, {
        scrollTrigger: {
          trigger: title.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
      });
      gsap.from(destiny_children.current, {
        scrollTrigger: {
          trigger: title.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        delay: 0.1,
        scale: 1.3,
      });
      gsap.from(musashi.current, {
        scrollTrigger: {
          trigger: musashi.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
      });
      gsap.from(musashi_children.current, {
        scrollTrigger: {
          trigger: musashi.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        delay: 0.1,
        scale: 1.3,
      });
      gsap.from(through_the_woods.current, {
        scrollTrigger: {
          trigger: musashi.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
      });
      gsap.from(through_the_woods_children.current, {
        scrollTrigger: {
          trigger: musashi.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        delay: 0.1,
        scale: 1.3,
      });

      gsap.from(levitation.current, {
        scrollTrigger: {
          trigger: levitation.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
      });
      gsap.from(levitation_children.current, {
        scrollTrigger: {
          trigger: levitation.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        delay: 0.1,
        scale: 1.3,
      });
      gsap.from(lord_of_the_lands.current, {
        scrollTrigger: {
          trigger: levitation.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
      });
      gsap.from(lord_of_the_lands_children.current, {
        scrollTrigger: {
          trigger: levitation.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
        delay: 0.1,
        scale: 1.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        className={`${raleway.className}  mb-20 mt-[200px] text-5xl  text-[#c1c9d3]`}
      >
        <div className="flex w-full large:flex-col  ">
          <div className="flex large:m-0 flex-col items-center">
            <h2
              ref={title}
              className=" leading-[60px] mb-10 xlarge:text-4xl text-center top-[20%] left-[5%] "
            >
              Let Taskify's Designers <br /> Work Their Magic
            </h2>
            <div>
              <Tilt options={options}>
                <div
                  ref={destiny}
                  className="cursor-pointer flex large:w-full xlarge:w-[530px] overflow-hidden border border-gray-800 2xlarge:w-[650px] 2xlarge:h-auto w-[780px] h-[620px]   rounded-lg "
                >
                  <div ref={destiny_children}>
                    <Image
                      className="w-full"
                      src="/destiny.avif"
                      width={780}
                      height={620}
                      alt="destiny"
                    ></Image>
                  </div>
                </div>
              </Tilt>
              <div className="flex flex-col border-b-2 pb-5 xlarge:pb-2 border-gray-500 w-full">
                <div className="m-0 w-full flex ">
                  <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 ml-1 m-0">
                    BY ZORD
                  </span>
                  <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 mr-1 ">
                    TASKIFY PROJECTS - WEBDESIGN
                  </span>
                </div>
                <div className="m-0 w-full flex items-center ">
                  <h2 className=" mt-7 text-white ml-1 xlarge:text-4xl m-0">
                    Destiny
                  </h2>
                  <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
                </div>
              </div>
            </div>
          </div>
          <div className="large:m-0 large:mt-20">
            <Tilt options={options}>
              <div
                ref={root_headed}
                className=" cursor-pointer large:w-full h-full 2xlarge:w-[430px] xlarge:w-[350px] 2xlarge:h-auto w-[550px] overflow-hidden border border-gray-800  h-[700px] rounded-lg top-[10%] right-0"
              >
                <div ref={root_headed_children}>
                  <Image
                    className="w-full"
                    src={"/root-headed.avif"}
                    alt="root headed"
                    width={550}
                    height={700}
                  ></Image>
                </div>
              </div>
            </Tilt>
            <div className="flex flex-col border-b-2 pb-5 xlarge:pb-2 border-gray-500 w-full">
              <div className="m-0 w-full flex ">
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 ml-1 m-0">
                  BY ZORD
                </span>
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 mr-1 ">
                  TASKIFY PROJECTS - WEBDESIGN
                </span>
              </div>
              <div className="m-0 w-full flex MdOutlineArrowForward ">
                <h2 className=" mt-7 text-white ml-1 xlarge:text-4xl m-0">
                  Root Headed
                </h2>
                <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex large:flex-col-reverse xlarge:mt-10 mt-20 ">
          <div className="large:m-0">
            <Tilt options={options}>
              <div
                ref={through_the_woods}
                className=" cursor-pointer large:w-full overflow-hidden border border-gray-800 xlarge:mt-10 mt-20 xlarge:w-[380px] 2xlarge:w-[450px] 2xlarge:h-auto w-[550px] h-[700px] rounded-lg"
              >
                <div ref={through_the_woods_children}>
                  <Image
                    src={"/through-the-wood.avif"}
                    className="w-full"
                    width={550}
                    height={700}
                    alt="through-the-wood"
                  ></Image>
                </div>
              </div>
            </Tilt>
            <div className="flex flex-col border-b-2 pb-5 xlarge:pb-2  border-gray-500 w-full">
              <div className="m-0 w-full flex ">
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 ml-1 m-0">
                  BY ZORD
                </span>
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 mr-1 ">
                  TASKIFY PROJECTS - WEBDESIGN
                </span>
              </div>
              <div className="m-0 w-full flex MdOutlineArrowForward ">
                <h2 className=" mt-7 text-white xlarge:text-3xl text-4xl ml-1 m-0">
                  Through The Wood
                </h2>
                <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
              </div>
            </div>
          </div>
          <div className="large:m-0 large:mt-20">
            <Tilt options={options}>
              <div
                ref={musashi}
                className="cursor-pointer large:w-full overflow-hidden border border-gray-800 2xlarge:w-[550px] 2xlarge:w-[680px] 2xlarge:h-auto w-[800px] rounded-lg h-[650px] "
              >
                <div ref={musashi_children}>
                  <Image
                    src={"/miyamoto-musashi.avif"}
                    className="w-full"
                    width={800}
                    height={650}
                    alt="miyamoto musashi"
                  ></Image>
                </div>
              </div>
            </Tilt>
            <div className="flex flex-col border-b-2 pb-5 xlarge:pb-2 border-gray-500 w-full">
              <div className="m-0 w-full flex ">
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 ml-1 m-0">
                  BY ZORD
                </span>
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 mr-1 ">
                  TASKIFY PROJECTS - WEBDESIGN
                </span>
              </div>
              <div className="m-0  w-full flex  ">
                <h2 className="text-4xl mt-7 text-white ml-1 m-0">
                  Musashi, The Last Samurai
                </h2>
                <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex large:flex-col-reverse w-full ">
          <div className="large:m-0">
            <Tilt options={options}>
              <div
                ref={lord_of_the_lands}
                className="cursor-pointer large:mt-20 large:w-full xlarge:w-[550px] 2xlarge:w-[630px] 2xlarge:h-auto w-[750px] overflow-hidden border xlarge:mt-10 mt-20 h-[550px]  border-gray-800 rounded-lg"
              >
                <div ref={lord_of_the_lands_children}>
                  <Image
                    className="w-full"
                    src={"/lord-of-the-lands.avif"}
                    width={750}
                    height={600}
                    alt="lord-of-the-lands"
                  />
                </div>
              </div>
            </Tilt>
            <div className="flex flex-col border-b-2 pb-5 xlarge:pb-2 border-gray-500 w-full">
              <div className="m-0 w-full flex ">
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 ml-1 m-0">
                  BY ZORD
                </span>
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 mr-1 ">
                  TASKIFY PROJECTS - WEBDESIGN
                </span>
              </div>
              <div className="m-0 w-full flex MdOutlineArrowForward ">
                <h2 className=" mt-7 text-white xlarge:text-4xl ml-1 m-0">
                  Lord Of The Lands
                </h2>
                <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
              </div>
            </div>
          </div>
          <div className="large:m-0 large:mt-20">
            <Tilt options={options}>
              <div
                ref={levitation}
                className="cursor-pointer large:w-full xlarge:w-[380px] 2xlarge:w-[450px] 2xlarge:h-auto w-[550px] overflow-hidden border   border-gray-800 h-[600px]  rounded-lg"
              >
                <div ref={levitation_children}>
                  <Image
                    className="w-full"
                    src={"/levitation.avif"}
                    alt="levitation"
                    width={550}
                    height={600}
                  />
                </div>
              </div>
            </Tilt>
            <div className="flex flex-col border-b-2 pb-5 xlarge:pb-2 border-gray-500 w-full">
              <div className="m-0 w-full flex ">
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 ml-1 m-0">
                  BY ZORD
                </span>
                <span className="text-xs xlarge:text-[0.60rem] font-medium mt-3 mr-1 ">
                  TASKIFY PROJECTS - WEBDESIGN
                </span>
              </div>
              <div className="m-0 w-full flex  ">
                <h2 className=" mt-7 text-white xlarge:text-4xl ml-1 m-0">
                  Levitation
                </h2>
                <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicDesign;
