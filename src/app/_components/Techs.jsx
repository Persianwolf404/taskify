"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Float } from "@react-three/drei";

const LazyModel = React.lazy(() => import("./Tech"));
function Techs() {
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
  return (
    <div className="flex mt-20 relative min-h-[526px] flex-col pt-4 w-full">
      <div className="m-0 px-[50px]  items-center mb-10  flex">
        <span className="w-3 m-0 h-3 flex rounded-full bg-[#c1c9d3] items-center justify-center ">
          <span className="bg-[#0d1117] mr-[1.5px] mt-[0.5px] w-[80%] h-[80%] rounded-full"></span>
        </span>
        <div className="flex w-full">
          <span className="w-full h-[2px] bg-[#c1c9d3] "></span>
          <h2 className="absolute right-[20%] text-3xl font-medium	top-0 bottom-0 bg-[#0d1117] text-[#c1c9d3] px-2">
            Taskify's Technical Skills
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        {paths.map((path) => (
          <>
            <Suspense fallback={null}>
              <div className=" !m-0 w-[20%]" key={path}>
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
