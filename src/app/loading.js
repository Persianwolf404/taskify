import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen fixed z-[10000] bg-[#0d1117]">
      <div className="w-full h-screen flex items-center justify-center relative">
        <div className="absolute left-1/2 top-2/5 w-[600px] h-[36px] ml-[-300px] overflow-visible select-none cursor-default">
          <div className="loader-item">Y</div>
          <div className="loader-item animation-delay-200">F</div>
          <div className="loader-item animation-delay-400">I</div>
          <div className="loader-item animation-delay-600">K</div>
          <div className="loader-item animation-delay-800">S</div>
          <div className="loader-item animation-delay-1000">A</div>
          <div className="loader-item animation-delay-1200">T</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
