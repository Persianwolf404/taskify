import "./globals.css";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Triplead from "./_components/Triplead";
import Sticky from "./_components/Sticky";
import Features from "./_components/Features";
import GraphicDesign from "./_components/GraphicDesign";
import OtherProjects from "./_components/OtherProjects";
import GetInTouch from "./_components/GetInTouch";
import { Suspense, lazy } from "react";

const LazyTechs = lazy(() => import("./_components/Techs"));

export default function Home() {
  return (
    <>
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
          <OtherProjects />
        </div>
      </div>
        <GetInTouch />
    </>
  );
}
