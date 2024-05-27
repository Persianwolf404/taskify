import "./globals.css";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Triplead from "./_components/Triplead";
import Sticky from "./_components/Sticky";
import Features from "./_components/Features";
import GraphicDesign from "./_components/GraphicDesign";
import GetInTouch from "./_components/GetInTouch";
import { Suspense, lazy } from "react";

const LazyTechs = lazy(() => import("./_components/Techs"));

export default function Home() {
  return (
    <>
      <div className="z-[100] flex border-b-2  text-white border-white fixed w-full h-[800px] bgd">
        <div className="w-[70%] h-full flex justify-start items-end">
          <div className="flex flex-col m-0 text-[130px]">
            <span className="leading-[90px] text-[160px] m-0 ">Whatsapp</span>
            <span className="m-0 text-[200px] leading-[190px] ">Instagram</span>
            <span className="flex items-end leading-[130px] text-[220px]">
              Book a call
            </span>
          </div>
        </div>
        <div className="w-[30%] h-full"></div>
      </div>
      <Sticky />
      <div className="navapp flex flex-col">
        <Navbar />
        <div className="app">
          <Hero />
          <About />
        </div>
        <Triplead />
        <div className="app">
          <Features />
          <Suspense fallback={<div>Loading...</div>}>
            <LazyTechs />
          </Suspense>
          <GraphicDesign />
        </div>
      </div>
      <GetInTouch />
    </>
  );
}
