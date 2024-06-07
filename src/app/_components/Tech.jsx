"use client";
import React, {useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    function updateScreenSize() {
      const width = window.innerWidth;

      switch (true) {
        case width <= 321:
          setScreenSize("3xsmall");
          break;
        case width <= 375:
          setScreenSize("2xsmall");
          break;
        case width <= 425:
          setScreenSize("xsmall");
          break;
        case width <= 576:
          setScreenSize("small");
          break;
        case width <= 767:
          setScreenSize("medium");
          break;
        case width <= 992:
          setScreenSize("large");
          break;
        case width <= 1199:
          setScreenSize("xlarge");
          break;
        case width <= 1500:
          setScreenSize("2xlarge");
          break;
        default:
          setScreenSize("extra large");
          break;
      }
    }

    // Initial check when component is mounted
    window.addEventListener("load", updateScreenSize);

    // Update screen size on resize
    window.addEventListener("resize", updateScreenSize);

    // Initial call to set the screen size
    updateScreenSize();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("load", updateScreenSize);
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return screenSize;
}
export default function Model(props) {
  const path = props.path;
  const { nodes, materials } = useGLTF(`/3d/${path}`);

  return (
    <group scale={2.5} rotation={[0, Math.PI, 0]} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.002"]}
        position={[0, -0.001, -0.004]}
      ></mesh>
      <mesh
        geometry={nodes["584830fecef1014c0b5e4aa2001"].geometry}
        material={materials["584830fecef1014c0b5e4aa2"]}
        position={[0.011, -0.007, 0.994]}
        rotation={[Math.PI / 2, 0, -3.135]}
      ></mesh>
      <mesh
        geometry={nodes["584830fecef1014c0b5e4aa2"].geometry}
        material={materials["584830fecef1014c0b5e4aa2"]}
        position={[0.011, -0.007, -1.014]}
        rotation={[Math.PI / 2, 0, -3.135]}
      ></mesh>
    </group>
  );
}
