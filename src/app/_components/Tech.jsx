"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";

// Replace with your optimized Model component logic
export function Model(props) {
  const { nodes, materials } = useGLTF("/tech.gltf");

  // Use memoization to avoid unnecessary re-renders
  const memoizedMeshGroup = useMemo(() => (
    <group scale={2.5} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.002"]}
        position={[0, -0.001, -0.004]}
      ></mesh>
      <mesh
        geometry={nodes["584830fecef1014c0b5e4aa2"].geometry}
        material={materials["584830fecef1014c0b5e4aa2"]}
        position={[0.011, -0.007, -1.014]}
        rotation={[Math.PI / 2, 0, -3.135]}
      />
      <mesh
        geometry={nodes["584830fecef1014c0b5e4aa2001"].geometry}
        material={materials["584830fecef1014c0b5e4aa2"]}
        position={[0.011, -0.007, 0.994]}
        rotation={[Math.PI / 2, 0, -3.135]}
      />
    </group>
  ), [nodes, materials, props]);

  return memoizedMeshGroup;
}

