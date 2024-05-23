import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";

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
          <div className=" w-[780px] h-[620px] bg-slate-500 rounded-lg ">
            <Image
              src="/public/destiny.avif"
              width={780}
              height={620}
              alt="samurai_photo_montage"
            ></Image>
          </div>
        </div>
        <div className="w-[550px] bg-slate-500 h-[700px] rounded-lg top-[10%] right-0"></div>
      </div>
      <div className="flex mt-20 ">
        <div className=" bg-slate-500 mt-20 w-[550px] h-[700px] rounded-lg"></div>
        <div className=" bg-slate-100 w-[800px] rounded-lg h-[650px] "></div>
      </div>
      <div className="flex w-full ">
        <div className="w-[750px] mt-20 h-[600px] bg-slate-500 rounded-lg"></div>
        <div className="w-[550px] h-[600px] bg-slate-500 rounded-lg"></div>
      </div>
    </div>
  );
};

export default GraphicDesign;
