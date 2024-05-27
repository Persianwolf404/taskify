"use client";
import React, { act, useEffect, useState } from "react";
import { IoPlanet } from "react-icons/io5";
import gsap from "gsap";

const Process = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  useEffect(() => {
    const element = document.getElementById("menu");
    if (active) {
      gsap.to(element, {
        height: "800px",
        duration: 1,
      });
      element.classList.add("border-b-2");
    } else {
      gsap.to(element, {
        height: "0",
        duration: 1,
      });
      setTimeout(function () {
        element.classList.remove("border-b-2");
      }, 900);
    }
  }, [active]);
  useEffect(() => {
    const svg = document.querySelector("svg");
    const progressBar = document.querySelector(".progress-bar");
    const totalLength = progressBar.getTotalLength();

    const setTopValue = () => {
      svg.style.top =
        window.innerHeight * 0.5 -
        svg.getBoundingClientRect().height * 0.5 +
        "px";
    };

    const setProgress = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const percentage = scrollTop / (scrollHeight - clientHeight);
      progressBar.style.strokeDashoffset =
        totalLength - totalLength * percentage;
    };

    setTopValue();

    progressBar.style.strokeDasharray = totalLength;
    progressBar.style.strokeDashoffset = totalLength;

    window.addEventListener("scroll", setProgress);
    window.addEventListener("resize", setTopValue);

    return () => {
      window.removeEventListener("scroll", setProgress);
      window.removeEventListener("resize", setTopValue);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setActive(!active)}
        className="cursor-pointer z-10 m-0 con flex justify-center items-center bg"
      >
        <svg
          className=" complete"
          height="80"
          viewBox="0 0 100 100"
          xmlns="https://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#fbc2eb"></stop>
              <stop offset="100%" stopColor="#a6c1ee"></stop>
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40">
            s
          </circle>
          <circle className="progress-bar" cx="50" cy="50" r="40"></circle>
        </svg>

        <div className="cursor-pointer absolute z-10 text-[#05BAB3] rotate-45 text-2xl">
          <IoPlanet />
        </div>
      </button>
    </>
  );
};

export default Process;
