"use client";
import React, { useState, useEffect, useRef } from "react";

const Infobox = () => {
  const containerRef = useRef(null);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isMouseInside, setIsMouseInside] = useState(true); // Track mouse position

  useEffect(() => {
    const handleMouseMove = (event) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      setCursorX(event.clientX - containerRect.left);
      setCursorY(event.clientY - containerRect.top);
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const beforeStyle = {
    display: isMouseInside ? "block" : "none", // Show if mouse inside, hide if outside
    left: `${cursorX}px`, // Position relative to container
    top: `${cursorY}px`, // Position relative to container
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#f00", // Customize color
    position: "absolute",
    pointerEvents: "none", // Prevent interaction with the before element
    zIndex: 1, // Ensure the before element stays above other content
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full border-gray-800 border-2 rounded-xl bg-[#151921] relative"
    >
      <div style={beforeStyle} className="before:content-['']" />
    </div>
  );
};

export default Infobox;
