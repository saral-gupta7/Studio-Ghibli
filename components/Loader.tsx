"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
// import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const Loader = () => {
  useGSAP(() => {
    const text = new SplitText(".title", { type: "chars words lines" });
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    const tl = gsap.timeline({
      defaults: { duration: 0.8 },
    });

    gsap.set(".words", {
      opacity: 1, // ← Always visible
      y: 0,
    });
    gsap.set("#hero", {
      filter: "blur(5px)",
    });
    tl.to("#loader-section", {
      opacity: 1,
      ease: "expo.inOut",
    });

    const wordStepY = 90;

    // Animate images and words together
    [1, 2, 3, 4, 5].forEach((idx) => {
      tl.to(
        `.image-${idx}`, // ← safer targeting
        {
          width: 0,
          ease: "expo.inOut",
          duration: 0.5,
        },
        `+=0.4`
      ).to(
        text.chars,
        {
          y: -wordStepY * idx,
          // x: 100,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.01,
        },
        "<-0.3" // parallel with image animation
      );
    });

    // Optional: fade out loader after last frame
    //

    tl.to("#loader-section", {
      // autoAlpha: 0,
      // y: "-100%",
      transformOrigin: "top top",
      height: 0,

      duration: 1.5,
      ease: "expo.inOut",
      onComplete: () => {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      },
    }).to(
      "#hero",
      {
        filter: "blur(0px)",
      },
      "<+=0.2"
    );
  }, []);

  return (
    <div
      className="fixed w-full h-screen flex-center bg-[#000] overflow-hidden z-50"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
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
            className={`loader-image image-${num} h-full w-full object-cover absolute inset-0 brightness-80`}
            style={{ zIndex: 6 - num }}
          />
        ))}

        <div className="h-[90px] overflow-hidden z-50 absolute bottom-5 right-5 font-semibold tracking-widest uppercase font-playfair ">
          <div className="words flex flex-col items-end transition-transform duration-500">
            {[
              "enchanting",
              "timeless",
              "whimsical",
              "lyrical",
              "imaginative",
              "soulful",
            ].map((word) => (
              <h1
                key={word}
                className="text-[#CBD2D9] text-5xl md:text-8xl h-[90px] flex items-center mix-blend-difference title"
              >
                {word}
              </h1>
            ))}
          </div>
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
