"use client";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Float } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LazyModel = React.lazy(() => import("./Tech"));

function Techs() {
  gsap.registerPlugin(ScrollTrigger);
  const title_line = useRef(null);

  const paths = [
    "css.gltf",
    "django.gltf",
    "figma.gltf",
    "git.gltf",
    "gsap.gltf",
    "html.gltf",
    "javascript.gltf",
    "next.gltf",
    "photoshop.gltf",
    "python.gltf",
    "react.gltf",
    "tailwind.gltf",
    "three.gltf",
    "typescript.gltf",
    "vue.gltf",
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const css = document.getElementById("css.gltf");
      const django = document.getElementById("django.gltf");
      const figma = document.getElementById("figma.gltf");
      const git = document.getElementById("git.gltf");
      const greenstock = document.getElementById("gsap.gltf");
      const html = document.getElementById("html.gltf");
      const javascript = document.getElementById("javascript.gltf");
      const next = document.getElementById("next.gltf");
      const photoshop = document.getElementById("photoshop.gltf");
      const python = document.getElementById("python.gltf");
      const react = document.getElementById("react.gltf");
      const tailwind = document.getElementById("tailwind.gltf");
      const three = document.getElementById("three.gltf");
      const typescript = document.getElementById("typescript.gltf");
      const vue = document.getElementById("vue.gltf");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title_line.current,
          start: "top 55%",
          end: "top 55%",
          toggleActions: "play none reverse none",
        },
      });
      tl.to(title_line.current, {
        width: "0%",
      })
        .from(css, {
          opacity: 0,
          duration: 0.1,
        })
        .from(django, {
          opacity: 0,
          duration: 0.1,
        })
        .from(figma, {
          opacity: 0,
          duration: 0.1,
        })
        .from(git, {
          opacity: 0,
          duration: 0.1,
        })
        .from(greenstock, {
          opacity: 0,
          duration: 0.1,
        })
        .from(html, {
          opacity: 0,
          duration: 0.1,
        })
        .from(javascript, {
          opacity: 0,
          duration: 0.1,
        })
        .from(next, {
          opacity: 0,
          duration: 0.1,
        })
        .from(photoshop, {
          opacity: 0,
          duration: 0.1,
        })
        .from(python, {
          opacity: 0,
          duration: 0.1,
        })
        .from(react, {
          opacity: 0,
          duration: 0.1,
        })
        .from(tailwind, {
          opacity: 0,
          duration: 0.1,
        })
        .from(three, {
          opacity: 0,
          duration: 0.1,
        })
        .from(typescript, {
          opacity: 0,
          duration: 0.1,
        })
        .from(vue, {
          opacity: 0,
          duration: 0.1,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex mt-20 min-h-[526px] flex-col pt-4 w-full">
      <div className="w-full  m-0 overflow-hidden relative ">
        <div
          ref={title_line}
          className="absolute w-full h-full bg-[#0d1117] z-10"
        ></div>
        <div className="m-0 medium:px-0 mt-4 px-[50px] w-full items-center mb-10  flex">
          <span className="w-3 m-0 h-3 flex rounded-full bg-[#c1c9d3] items-center justify-center ">
            <span className="bg-[#0d1117] mr-[1.5px] mt-[0.5px] w-[80%] h-[80%] rounded-full"></span>
          </span>
          <div className="flex w-full ">
            <span className="w-full h-[2px] bg-[#c1c9d3] "></span>
            <h2 className="absolute right-[20%] 2xsmall:text-xl 2xsmall:top-2 2xsmall:right-[4%]  small:text-2xl small:top-1 small:right-[10%] text-3xl font-medium	top-0 bottom-0 bg-[#0d1117] text-[#c1c9d3] px-2">
              Taskify's Technical Skills
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {paths.map((path) => (
          <>
            <Suspense fallback={null}>
              <div
                id={path}
                className=" !m-0 large:w-[25%] small:w-1/3 2xsmall:w-1/2 w-[20%]"
                key={path}
              >
                <Canvas
                  dpr={[1, 2]}
                  gl={{ preserveDrawingBuffer: true }}
                  shadows={false}
                  className="canvas flex hide"
                  id="canvis"
                >
                  <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                    <OrbitControls
                      enableZoom={false}
                      rotateSpeed={0.5}
                      enablePan={false}
                    />
                    <ambientLight intensity={1} />
                    <directionalLight position={[0, 0, 10]} />
                    <LazyModel path={path} />
                  </Float>
                </Canvas>
              </div>
            </Suspense>
          </>
        ))}
      </div>
    </div>
  );
}

export default Techs;
