"use client"
import React, { useEffect } from "react";
import Cleanup from "./Cleanup";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  let text;

  useEffect(() => {
    function runSplit() {
      let currentElement = document.getElementById("target");
      text = new SplitType(currentElement, { types: "lines, words" });

      const linesEl = document.querySelectorAll(".line");
      linesEl.forEach((lineItem, lineIndex) => {
        const words = lineItem.querySelectorAll(".word");
        words.forEach((wordItem, wordIndex) => {
          const lineNumber = lineIndex + 1;
          const wordNumber = wordIndex + 1;
          wordItem.classList.remove("word");
          wordItem.classList.add("word", `word-${lineNumber}-${wordNumber}`);
        });
        lineItem.classList.remove("line");
        lineItem.classList.add("line", `line-${lineIndex + 1}`);
        lineItem.innerHTML += `<div class="line-mask"></div>`;
      });
    }

    runSplit();
    window.addEventListener("resize", function () {
      text.revert();
      runSplit();
      anime();
    });
    const anime = () => {
      const myEl = document.querySelectorAll(".line");
      myEl.forEach((triggerElement) => {
        const targetElement = triggerElement.querySelector(".line-mask");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top 65%",
            end: "bottom 65%",
            scrub: 1,
          },
        });

        tl.to(targetElement, {
          width: "0%",
          duration: 1,
        });
      });
    };
    anime();
  }, []);

  return (
    <section className="flex  w-full mt-20 relative">
      <Cleanup />
      <div className="w-[50%] flex justify-start text-[3.2em] leading-[1.2]">
        <h2 className="w-[800px] ">
          <div className="page-wrapper">
            <main className="main-wrapper">
              <section>
                <div className="container">
                  <div className="heading-wrap">
                    <h1 id="target" className="split-lines text-[#AAB2BB]">
                      Taskify simplifies your life with creativity and tech,
                      turning everyday tasks into triumphs. We're more than
                      completing tasks; we're here to elevate your experience
                      and help you reach your full potential. Join us on the
                      exciting journey to success, where productivity and
                      transformation go hand in hand.
                    </h1>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </h2>
      </div>
    </section>
  );
}
