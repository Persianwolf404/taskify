import React from "react";
import Process from "./Process";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <section className="w-[90%] nava flex justify-between fixed items-center py-3">
        <Image alt={"logo"} src={"/logo.png"} className="m-0" width={150} height={1} ></Image>
        
        <Process />
      </section>
    </>
  );
}

export default Navbar;
