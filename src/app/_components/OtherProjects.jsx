import React from "react";
import localFont from "next/font/local";

const font = localFont({
  src: "../../../public/fonts/freeman.ttf",
  variable: "--font-freeman",
});

const OtherProjects = () => {
  return (
    <div
      className={`${font.variable} font-freeman flex flex-col mt-40 text-white w-full h-screen`}
    >
      <div className="mt-20 px-20 min-h-[300px] justify-between flex w-full">
        <div className="mx-0 w-[400px] rounded-lg  bg-red-200  h-[250px] floating"></div>
        <div className="  m-0 w-[400px] rounded-lg  bg-red-200  h-[250px] floating"></div>
      </div>
      <div className="">
        <h2 className={`text-6xl text-center leading-[90px]`}>
          Explore Taskify's <br />
          Other Projects
        </h2>
      </div>
      <div className="px-20 min-h-[300px] justify-between flex w-full">
        <div className=" m-0 w-[400px] rounded-lg  bg-red-200  h-[250px] floating"></div>
        <div className="mx-0 w-[400px] rounded-lg  bg-red-200  h-[250px] floating"></div>
      </div>
    </div>
  );
};

export default OtherProjects;
