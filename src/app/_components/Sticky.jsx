"use client"
import React from "react";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
});
export default function Sticky() {
  return (
    <div className={`${sora.className} flex p-4 w-full fixed bottom-0 zzz`}>
   
        <h1 className="w-[33%] font-light flex justify-start uppercase text-[1rem] text-[white] sora">
          Mohamadshayanfar
        </h1>
        <h1 className="w-[33%] font-light flex justify-center uppercase text-[1rem] text-[white] sora">
          Freelance Developer
        </h1>
        <h1 className="w-[33%] font-light flex justify-end uppercase text-[1rem] text-[white] sora">
          Taskify
        </h1>
   
    </div>
  );
}
