"use client";
import React from "react";
import Animations from "./Features/Animations";
import Optimiztion from "./Features/Optimiztion";
export default function Features() {
  return (
    <div className="w-full flex flex-col mt-[250px]">
      <Animations />
      <Optimiztion />
    </div>
  );
}
