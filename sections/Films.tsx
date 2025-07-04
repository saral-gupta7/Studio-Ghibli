"use client";
import FilmCard from "@/components/FilmCard";
import { ghibliMovies } from "@/constants/constant";
import { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Films = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  useGSAP(() => {
    const titleText = new SplitText(".title-text", {
      type: "chars words lines",
    });
    const mm = gsap.matchMedia();
    const elements = gsap.utils.toArray(".card");
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        titleText.chars,
        {
          y: -100,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: "#film",
            start: "top 80%", // Animates when the section is just entering the viewport
            toggleActions: "play none reset none",
            // scrub: true,
          },
        }
      );
      // );
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card",
          start: "top bottom",
          end: "+=150%",
          scrub: true,
        },
        defaults: {
          ease: "none",
        },
      });
      gsap.set(elements, {
        y: (i) => i * 200,
        xPercent: 300,
        opacity: 1,
      });

      const reversedIndex = (i: number) => elements.length - 1 - i;

      tl.to(elements, {
        y: 0,
        xPercent: 0,
      }).to(elements, {
        xPercent: -500,
        y: (i) => reversedIndex(i) * 200,
        delay: 0.2,
      });
    });
  }, []);

  return (
    <section
      className="min-h-screen w-full max-w-screen-xl mx-auto bg-[#F8F9FA] overflow-hidden text-black"
      id="film"
    >
      <div className="p-10 flex flex-col gap-3 h-1/4">
        <h1 className="text-5xl font-playfair font-bold title-text overflow-hidden">
          Iconic Films
        </h1>
        <p className="text-xl">
          Explore the magical worlds created by Studio Ghibli.
        </p>
      </div>
      <div
        className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-3/4 rounded-xl gap-5 p-10 place-items-center -mt-3 transition-all duration-300 ${
          activeCard !== null ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {ghibliMovies.map(
          (
            {
              title,
              originalTitle,
              originalTitleRomanised,
              director,
              producer,
              studio,
              releaseYear,
              runtime,
              genre,
              description,
              videoSrc,
              // class
            },
            index
          ) => (
            <FilmCard
              key={title}
              title={title}
              originalTitle={originalTitle}
              originalTitleRomanised={originalTitleRomanised}
              director={director}
              producer={producer}
              studio={studio}
              releaseYear={releaseYear}
              runtime={runtime}
              genre={genre}
              description={description}
              videoSrc={videoSrc}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Films;
