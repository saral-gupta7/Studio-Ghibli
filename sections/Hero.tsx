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
    <motion.section
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
      <motion.div className="abs-center w-full h-full flex-center flex-col gap-5 text-center max-w-4xl font-semibold px-5 tracking-tight">
        <h1 className="text-4xl md:text-6xl header font-playfair">
          Begin your journey through the magical worlds of Ghibli.
        </h1>
        <p className="text-md md:text-2xl header font-playfair">
          Where dreams take flight and stories live forever.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
