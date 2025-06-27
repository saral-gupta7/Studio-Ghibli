"use client";
import Loader from "@/components/Loader";
import Films from "@/sections/Films";
import Hero from "@/sections/Hero";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { useState, useEffect } from "react";
const Home = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000); // Adjust to match your GSAP timeline
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
      <ReactLenis root />

      {/* <Loader /> */}
      <Hero />

      {/* <div className="h-screen bg-black"></div> */}
      <Films />
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-black"></div>
    </div>
  );
};

export default Home;
