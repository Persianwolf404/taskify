"use client";
import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Infobox = (props) => {
  const options = {
    scale: 1,
    speed: 500,
    max: 2,
  };
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isVisible) {
        const containerRect = containerRef.current.getBoundingClientRect();
        setCursorX(event.clientX - containerRect.left);
        setCursorY(event.clientY - containerRect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const beforeStyle = {
    display: isVisible ? "block" : "none",
    left: `${cursorX - 145}px`, // Position relative to container
    top: `${cursorY - 145}px`, // Position relative to container
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    backgroundColor: props.color, // Customize color
    position: "absolute",
    pointerEvents: "none", // Prevent interaction with the before element
    zIndex: 1, // Ensure the before element stays above other content
  };

  return (
    <Tilt className="w-full h-full box" options={options}>
      <div
        ref={containerRef}
        className="w-[100%] h-full overflow-hidden border-gray-800 border-2 rounded-xl bg-[#151921] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={beforeStyle}
          className="blue__gradient before:content-['']"
        />
      </div>
    </Tilt>
  );
};

export default Infobox;
