"use client"
import React, { useEffect } from "react";

const Process = () => {
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
    <div className="m-0 con relative flex justify-center items-center bg">
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
        <circle cx="50" cy="50" r="40"></circle>
        <circle className="progress-bar" cx="50" cy="50" r="40"></circle>
      </svg>
      <div className="absolute "></div>
    </div>
  );
};

export default Process;
