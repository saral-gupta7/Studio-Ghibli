"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/heron.jpg"
          alt="hero"
          fill
          priority
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-screen flex items-center px-12">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-sm tracking-widest text-white/60 mb-4">
            STUDIO GHIBLI COLLECTION
          </p>

          <h1 className="text-6xl lg:text-7xl font-light tracking-wide leading-tight ">
            Where Imagination <br /> Learns to Breathe
          </h1>

          <p className="mt-6 text-lg text-white/70">
            Explore worlds shaped by wind, silence, and wonder.
          </p>

          <button className="mt-10 px-8 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
