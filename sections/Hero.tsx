"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, TextPlugin } from "gsap/all";
import { easeInOut, motion } from "motion/react";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

const parentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const childVariant = {
  initial: {
    opacity: 0,
    y: 10,
    filter: "blur(5px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};
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
    <motion.section
      className="min-h-screen w-full overflow-hidden relative"
      id="hero"
    >
      <div className="absolute inset-0 h-full w-full object-cover z-2 bg-black/30 backdrop-blur-[1px]"></div>
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/videos/clipped.mp4" type="video/mp4" />
      </motion.video>
      <motion.div
        className="abs-center w-full h-full flex-center flex-col gap-5 text-center max-w-4xl font-semibold px-5 tracking-tight text-[#FFF] z-10"
        variants={parentVariant}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl header font-playfair"
          variants={childVariant}
        >
          Begin your journey through the magical worlds of Ghibli.
        </motion.h1>
        <motion.p
          className="text-md md:text-2xl header font-playfair"
          variants={childVariant}
        >
          Where dreams take flight and stories live forever.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
