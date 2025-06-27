"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const Loader = () => {
  useGSAP(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    const tl = gsap.timeline({
      defaults: {
        // ease: "elastic.inOut",
        duration: 0.8,
      },
    });

    gsap.set("#loader-section", {
      backgroundColor: "#000",
      // opacity: 0,
    });
    gsap.set(".words", {
      opacity: 0,
    });

    tl.to("#loader-section", { opacity: 1 })
      .to(".inner-section", {
        width: "75%",
        height: "75%",
        ease: "expo.inOut",
        x: "-8vw",
        y: "5vh",
      })
      .to(".words", {
        opacity: 1,
      });

    const wordStepY = 70;

    [1, 2, 3, 4, 5].forEach((idx) => {
      tl.to(
        `.loader:nth-child(${idx})`, // Animate each loader one by one
        {
          width: 0,
          ease: "expo.inOut",
          duration: 1,
        },
        `+=0.3` // delay before this one starts (tweak this if needed)
      ).to(
        ".words",
        {
          y: -wordStepY * idx,

          duration: 0.5,
          ease: "power2.out",
        },
        "<-0.3" // Start word animation at the same time as image
      );
    });
    tl.to("#loader-section", {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.inOut",
    });
    // Keep the last word visible
    // tl.to(`#loader-word-5`, { opacity: 1, duration: 0.5 }, "+=0.7");
    //
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div
      className="fixed w-full h-screen flex-center border-2 bg-[#000] overflow-hidden z-50"
      id="loader-section"
    >
      <div className="w-full h-full relative inner-section">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Image
            key={num}
            src={`/images/loader-images/image${num}.jpg`}
            alt={`Loader image ${num}`}
            width={1920}
            height={2880}
            className="loader h-full w-full object-cover absolute inset-0"
            style={{ zIndex: 6 - num }}
          />
        ))}
      </div>

      <div className="h-[70px] overflow-hidden z-50 absolute right-25 top-30">
        <div className="words flex flex-col transition-transform duration-500">
          {[
            "enchanting",
            "timeless",
            "whimsical",
            "lyrical",
            "imaginative",
            "soulful",
          ].map((word, idx) => (
            <h1
              key={word}
              className="text-white text-6xl h-[70px] flex items-center"
            >
              {word}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;

// tl.to(videoRef.current, {
//   scaleY: 0.9,
//   scaleX: 0.95,
//   duration: 5,
//   onComplete: () => {
//     const loaderSection = document.getElementById("loader-section");
//     if (loaderSection) {
//       loaderSection.style.display = "none";
//     }
//   },
// });
