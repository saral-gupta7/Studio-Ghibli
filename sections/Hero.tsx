"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, TextPlugin } from "gsap/all";
import { motion } from "motion/react";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

// const containerVariant = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.5,
//     },
//   },
// };

// const childVariant = {
//   hidden: {
//     opacity: 0,
//     y: -20,
//   },
//   visibile: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: "power2.inOut",
//       duration: 0.3,
//     },
//   },
// };
const Hero = () => {
  useGSAP(() => {
    const headerText = new SplitText(".header", {
      type: "words chars lines",
    });

    // gsap.to(".ghibli-text", {
    //   duration: 2,
    //   ease: "none",
    //   text: "Hayao Miyazaki",
    //   // repeat: -2,
    // });
    // gsap.fromTo(
    //   headerText.chars,
    //   {
    //     y: -100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     stagger: 0.1,
    //   }
    // );

    gsap.fromTo(
      headerText.words,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        stagger: 0,
        opacity: 1,
        duration: 0.1,
      }
    );
  });

  return (
    <motion.div
      className="min-h-screen w-full overflow-hidden relative"
      id="hero"
    >
      <motion.video
        // initial={{ scale: 0.8 }}
        // animate={{ scale: 1 }}
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
