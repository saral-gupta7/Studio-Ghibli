"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, TextPlugin } from "gsap/all";
import { motion } from "motion/react";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
    tl.to("#hero", {
      scale: 0.95,
      y: -100,
      opacity: 0.6,
    });
  });
  return (
    <motion.div
      className="min-h-screen w-full overflow-hidden relative"
      id="hero"
    >
      <motion.video
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: "circInOut",
        }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/videos/clipped.mp4" type="video/mp4" />
      </motion.video>
      <motion.div className="abs-center w-full h-full flex-center flex-col gap-5 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold header font-playfair ">
          Welcome to the world of{" "}
          <span className="ghibli-text">Studio Ghibli</span>
        </h1>
        <p className="text-md md:text-2xl header">
          Where dreams take flight and stories live forever.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
