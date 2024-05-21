
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Tech";
import { Float } from "@react-three/drei";

function Techs() {
  const divs = Array.from({ length: 12 }, (_, index) => (
    <div className=" !m-0 w-[20%]" key={index}>
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
          <Model />
        </Float>
      </Canvas>
    </div>
  ));
  return <div className="flex flex-wrap w-full">{divs}</div>;
}

export default Techs;
