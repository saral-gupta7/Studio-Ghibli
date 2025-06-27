"use client";
import Films from "@/sections/Films";
import Hero from "@/sections/Hero";
import { ReactLenis } from "lenis/react";
const Home = () => {
  return (
    <div>
      <ReactLenis root />
      <Hero />
      <Films />
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-black"></div>
    </div>
  );
};

export default Home;
