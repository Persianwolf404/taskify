"use client";
import React, { useEffect, useRef } from "react";
import { SiGooglegemini } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const marqueeRef = useRef(null);
  const getInTouch = useRef(null);
  const getInTouchpt = useRef(null);
  const trigger = useRef(null);
  const line = useRef(null);
  const privacy = useRef(null);
  const taskify = useRef(null);
  const social_medias_left = useRef(null);
  const social_medias_right = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const content = marqueeElement.children;
    const contentWidth = content[0].clientWidth * content.length;
    const clone = marqueeElement.innerHTML;
    marqueeElement.innerHTML += clone;

    gsap.to(marqueeElement, {
      x: -contentWidth,
      ease: "none",
      duration: 60,
      repeat: -1,
    });

    let ctx = gsap.context(() => {
      gsap.from(social_medias_left.current, {
        scrollTrigger: {
          trigger: getInTouch.current,
          start: "top 70%",
          end: "top 70%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        x: "-50",
        duration: 0.3,
      });
      gsap.from(social_medias_right.current, {
        scrollTrigger: {
          trigger: getInTouch.current,
          start: "top 70%",
          end: "top 70%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        x: "50",
        duration: 0.3,
      });
      gsap.from(getInTouch.current, {
        scrollTrigger: {
          trigger: getInTouchpt.current,
          start: "top 70%",
          end: "top 70%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        scale: 0.7,
        duration: 0.3,
      });
      gsap.from(getInTouchpt.current, {
        scrollTrigger: {
          trigger: getInTouchpt.current,
          start: "top 70%",
          end: "top 70%",
          toggleActions: "play none reverse none",
        },
        opacity: 0,
        scale: 0.7,
        duration: 0.3,
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: "bottom bottom",
          end: "bottom bottom",
          toggleActions: "play none reverse none",
        },
      });
      tl.from(line.current, {
        width: 0,
        duration: 0.7,
      })
        .addLabel("mmd")
        .from(
          privacy.current,
          {
            opacity: 0,
            x: 50,
            duration: 0.7,
          },
          "mmd"
        )
        .from(
          taskify.current,
          {
            opacity: 0,
            x: "-50",
            duration: 0.7,
          },
          "mmd"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={trigger}
      className="relative w-full flex items-center justify-center h-screen text-center "
    >
      <div className="text-white mt-20 w-full">
        <div>
          <div className="flex justify-center">
            <div className="m-0 relative  flex  group">
              <a
                href="#"
                className="font-semi-bold cursor-pointer text-center first-line:text-3xl w z-20 text-[#05BAB3]"
                ref={getInTouch}
              >
                Get in touch!
              </a>
              <span className="absolute h-full mt-2 border-white border-b-2 w-0 group-hover:w-full transition-all duration-300"></span>
            </div>
          </div>
          <div className="w-full flex  mt-10 justify-center relative m-0">
            <div ref={social_medias_left} className="large:hidden ml-6 ">
              <div className="w-10 relative flex paret justify-center items-center  cursor-pointer h-10">
                <FaXTwitter className="text-4xl absolute z-[2] rotate-[5]" />
                <span className="absolute  block whitespace-nowrap right-0">
                  Reach Us on Twitter!
                </span>
                <div className="z-1 text-[#0d1117] bg-[#0d1117] absolute block whitespace-nowrap right-0">
                  Reach Us on Twitter!
                </div>
              </div>
              <div className="my-5 relative  paret flex justify-center items-center  w-10 cursor-pointer h-10">
                <IoCallOutline className="text-4xl absolute z-[2]" />
                <span className="absolute  block whitespace-nowrap right-0">
                  Book a Call with Us!
                </span>
                <div className="z-1 text-[#0d1117] bg-[#0d1117] absolute block whitespace-nowrap right-0">
                  Book a Call with Us!
                </div>
              </div>
              <div className="w-10 flex relative  paret justify-center items-center  cursor-pointer h-10">
                <FaTelegramPlane className="text-4xl rotate-[5] absolute z-[2]" />
                <span className="absolute  block whitespace-nowrap right-0">
                  Reach Us on Telegram!
                </span>
                <div className="z-1 text-[#0d1117] bg-[#0d1117] absolute block whitespace-nowrap right-0">
                  Reach Us on Telegram!
                </div>
              </div>
            </div>
            <h2
              className="text-7xl leading-[90px] font-medium"
              ref={getInTouchpt}
            >
              Ready To Get <br />
              Started?
            </h2>
            <div ref={social_medias_right} className="mr-6 large:hidden">
              <div className="w-10 flex relative parot justify-center items-center cursor-pointer h-10">
                <FaInstagram className="text-4xl z-[2]" />
                <span className="absolute  block whitespace-nowrap left-0">
                  Check Us Out on Instagram!
                </span>
                <div className="z-1 text-[#0d1117] bg-[#0d1117] absolute block whitespace-nowrap left-0">
                  Check Us Out on Instagram!
                </div>
              </div>
              <div className="my-5 flex relative parot justify-center items-center  w-10 cursor-pointer h-10">
                <HiOutlineMail className="text-4xl z-[2] rotate-[5]" />
                <span className="absolute  block whitespace-nowrap left-0">
                  Connect with Us via Email
                </span>
                <div className="z-1 text-[#0d1117] bg-[#0d1117] absolute block whitespace-nowrap left-0">
                  Connect with Us via Email
                </div>
              </div>
              <div className="w-10 flex relative parot justify-center items-center  cursor-pointer h-10">
                <FaWhatsapp className="text-4xl absolute z-[2] rotate-[4]" />
                <span className="absolute  block whitespace-nowrap left-0">
                  Reach Us on Telegram!
                </span>
                <div className="z-1 text-[#0d1117] bg-[#0d1117] absolute block whitespace-nowrap left-0">
                  Reach Us on Telegram!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mt-20 large:m-0 whitespace-nowrap">
          <div
            ref={marqueeRef}
            className="text-[#05BAB3] flex flex-nowrap cursor-pointer mt-10 pt-10 "
          >
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex">
                <span className="text-7xl mx-2">Reach Out</span>
                <span className="flex items-center text-[150px] mx-2">
                  <SiGooglegemini className="text-5xl my-auto " />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="my-20 hidden xlarge:block medium:hidden">
          <div className="flex small:flex-col justify-center">
            <a
              href=""
              className="m-0 flex small:justify-center medium:mr-4 small:mr-0 font-bold"
            >
              <FaXTwitter className="text-2xl  mr-2 m-0 rotate-[5]" />
              Reach Us on Twitter!
            </a>
            <a
              href=""
              className="m-0 flex mx-8 small:mx-0 small:justify-center medium:mr-0 font-bold"
            >
              <IoCallOutline className="text-2xl mr-2 m-0 rotate-[5]" />
              Book a Call with Us!
            </a>
            <a href="" className="m-0 medium:hidden flex font-bold">
              <FaTelegramPlane className="text-2xl mr-2 m-0 rotate-[5]" />
              Reach Us on Telegram!
            </a>
          </div>
          <div className="mt-10 flex justify-center">
            <a href="" className="m-0 flex medium:mr-4  font-bold">
              <FaInstagram className="text-2xl mr-2 m-0 rotate-[5]" />
              follow Us on Instagram!
            </a>
            <a
              href=""
              className="m-0 mx-8 medium:mr-0 medium:ml-4 flex font-bold"
            >
              <HiOutlineMail className="text-2xl mr-2 m-0 rotate-[5]" />
              Connect with Us via Email
            </a>
            <a href="" className="m-0 medium:hidden flex font-bold">
              <FaWhatsapp className="text-2xl mr-2 m-0 rotate-[5]" />
              Reach Us on Whatsapp!
            </a>
          </div>
          <div className="mt-10 hidden medium:flex justify-center">
            <a href="" className="m-0 mr-8 flex font-bold">
              <FaWhatsapp className="text-2xl mr-2 m-0 rotate-[5]" />
              Reach Us on Whatsapp!
            </a>
            <a href="" className="m-0  flex font-bold">
              <FaTelegramPlane className="text-2xl mr-2 m-0 rotate-[5]" />
              Reach Us on Telegram!
            </a>
          </div>
        </div>
      </div>
      <div
        ref={line}
        className="absolute w-[98%] flex justify-between mb-5 border-b-2 border-[#AAB2BB] text-[#AAB2BB] bottom-10 text-start"
      >
        <span ref={taskify} className="mb-5 m-0">
          Taskify team
        </span>
        <span ref={privacy} className="mb-5 m-0">
          Privacy policy
        </span>
      </div>
      <div className="text-white hidden medium:flex w-full mb-5 absolute bottom-0">
        <FaXTwitter className="text-2xl rotate-[5]" />
        <IoCallOutline className="text-2xl rotate-[5]" />
        <FaTelegramPlane className="text-2xl rotate-[5]" />
        <FaInstagram className="text-2xl rotate-[5]" />
        <HiOutlineMail className="text-2xl rotate-[5]" />
        <FaWhatsapp className="text-2xl rotate-[5]" />
      </div>
    </div>
  );
};

export default GetInTouch;
