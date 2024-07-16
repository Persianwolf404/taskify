"use client";
import React from "react";
import Process from "./Process";
import Image from "next/image";

function Navbar(props) {
  return (
    <>
      <section className="w-full px-5  z-[101] flex justify-between fixed items-center 2xsmall:p-0 py-3">
        <div className="m-0 2xsmall:scale-[0.8]">
          <Image
            alt={"logo"}
            src={"/logo.png"}
            className="m-0"
            width={150}
            height={1}
          ></Image>
        </div>
        <div className="m-0 2xsmall:scale-[0.8]">
          <Process fnc={props.fnc}  />
        </div>
      </section>
    </>
  );
}

export default Navbar;
