import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { MdOutlineArrowForward } from "react-icons/md";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const GraphicDesign = () => {
  return (
    <div
      className={`${raleway.className} mt-10 bg-salmon text-5xl text-[#c1c9d3]`}
    >
      <div className="flex w-full  mt-[200px] ">
        <div className="flex flex-col items-center">
          <h2 className=" leading-[60px] mt-10 mb-10 text-center top-[20%] left-[5%] ">
            Let Taskify's Designers <br /> Work Their Magic
          </h2>
          <div>
            <div className="flex overflow-hidden border border-gray-800 w-[780px] h-[620px]   rounded-lg ">
              <Image
                src="/destiny.avif"
                width={780}
                height={620}
                alt="destiny"
              ></Image>
            </div>
            <div className="flex flex-col border-b-2 pb-5 border-gray-500 w-full">
              <div className="m-0 w-full flex ">
                <span className="text-xs font-medium mt-3 ml-1 m-0">
                  BY ZORD
                </span>
                <span className="text-xs font-medium mt-3 mr-1 ">
                  TASKIFY PROJECTS - WEBDESIGN
                </span>
              </div>
              <div className="m-0 w-full flex items-center ">
                <h2 className=" mt-7 text-white ml-1 m-0">Destiny</h2>
                <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="  w-[550px] overflow-hidden border border-gray-800  h-[700px] rounded-lg top-[10%] right-0">
            <Image
              src={"/root-headed.avif"}
              alt="root headed"
              width={550}
              height={700}
            ></Image>
          </div>
          <div className="flex flex-col border-b-2 pb-5 border-gray-500 w-full">
            <div className="m-0 w-full flex ">
              <span className="text-xs font-medium mt-3 ml-1 m-0">BY ZORD</span>
              <span className="text-xs font-medium mt-3 mr-1 ">
                TASKIFY PROJECTS - WEBDESIGN
              </span>
            </div>
            <div className="m-0 w-full flex MdOutlineArrowForward ">
              <h2 className=" mt-7 text-white ml-1 m-0">Root Headed</h2>
              <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-20 ">
        <div>
          <div className="  overflow-hidden border   border-gray-800 mt-20 w-[550px] h-[700px] rounded-lg">
            <Image
              src={"/through-the-wood.avif"}
              width={550}
              height={700}
              alt="through-the-wood"
            ></Image>
          </div>
          <div className="flex flex-col border-b-2 pb-5 border-gray-500 w-full">
            <div className="m-0 w-full flex ">
              <span className="text-xs font-medium mt-3 ml-1 m-0">BY ZORD</span>
              <span className="text-xs font-medium mt-3 mr-1 ">
                TASKIFY PROJECTS - WEBDESIGN
              </span>
            </div>
            <div className="m-0 w-full flex MdOutlineArrowForward ">
              <h2 className=" mt-7 text-white ml-1 m-0">Through The Wood</h2>
              <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
            </div>
          </div>
        </div>
        <div>
          <div className=" bg-slate-100 overflow overflow-hidden border border-gray-800 w-[800px] rounded-lg h-[650px] ">
            <Image
              src={"/miyamoto-musashi.avif"}
              width={800}
              height={650}
              alt="miyamoto musashi"
            ></Image>
          </div>
          <div className="flex flex-col border-b-2 pb-5 border-gray-500 w-full">
            <div className="m-0 w-full flex ">
              <span className="text-xs font-medium mt-3 ml-1 m-0">BY ZORD</span>
              <span className="text-xs font-medium mt-3 mr-1 ">
                TASKIFY PROJECTS - WEBDESIGN
              </span>
            </div>
            <div className="m-0 w-full flex MdOutlineArrowForward ">
              <h2 className=" mt-7 text-white ml-1 m-0">Musashi, The Last Samurai</h2>
              <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <div>
          <div className="w-[750px] overflow-hidden border  mt-20 h-[550px]  border-gray-800 rounded-lg">
            <Image
              src={"/lord-of-the-lands.avif"}
              width={750}
              height={600}
              alt="lord-of-the-lands"
            />
          </div>
          <div className="flex flex-col border-b-2 pb-5 border-gray-500 w-full">
            <div className="m-0 w-full flex ">
              <span className="text-xs font-medium mt-3 ml-1 m-0">BY ZORD</span>
              <span className="text-xs font-medium mt-3 mr-1 ">
                TASKIFY PROJECTS - WEBDESIGN
              </span>
            </div>
            <div className="m-0 w-full flex MdOutlineArrowForward ">
              <h2 className=" mt-7 text-white ml-1 m-0">Lord Of The Lands</h2>
              <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[550px] overflow-hidden border   border-gray-800 h-[600px]  rounded-lg">
            <Image
              src={"/levitation.avif"}
              alt="levitation"
              width={550}
              height={600}
            />
          </div>
          <div className="flex flex-col border-b-2 pb-5 border-gray-500 w-full">
            <div className="m-0 w-full flex ">
              <span className="text-xs font-medium mt-3 ml-1 m-0">BY ZORD</span>
              <span className="text-xs font-medium mt-3 mr-1 ">
                TASKIFY PROJECTS - WEBDESIGN
              </span>
            </div>
            <div className="m-0 w-full flex MdOutlineArrowForward ">
              <h2 className=" mt-7 text-white ml-1 m-0">Levitation</h2>
              <MdOutlineArrowForward className="mr-1 mt-auto text-3xl rotate-[5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
