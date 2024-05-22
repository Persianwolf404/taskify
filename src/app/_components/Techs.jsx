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
  );
}

export default Techs;
