"use client";
import Image from "next/image";
import React from "react";

import { motion } from "motion/react";
const Hero = () => {
  return (
    <motion.div className="min-h-screen w-full overflow-hidden">
      <motion.video
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
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
      <Image
        src="/images/logo.png"
        alt="logo"
        width={120}
        height={70}
        className="absolute top-8 left-20"
      />
    </motion.div>
  );
};

export default Hero;
