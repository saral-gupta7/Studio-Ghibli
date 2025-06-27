"use client";
import FilmCard from "@/components/FilmCard";
import { ghibliMovies } from "@/constants/constant";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Films = () => {
  const filmRef = useRef(null);
  useGSAP(() => {
    const titleText = new SplitText(".title", {
      type: "chars, words, line",
    });
    const mm = gsap.matchMedia();
    const elements = gsap.utils.toArray(".card");
    mm.add("(min-width: 1024px)", () => {
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
      gsap.to(titleText.chars, {
        scale: 1.03,
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
    <section className="min-h-screen w-full max-w-screen-xl mx-auto bg-[#F8F9FA] overflow-hidden">
      <div className="p-10 flex flex-col gap-3 h-1/4">
        <h1 className="text-5xl font-playfair font-bold title">Iconic Films</h1>
        <p className="text-xl">
          Explore the magical worlds created by Studio Ghibli.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-3/4 rounded-xl gap-5 p-10 place-items-center -mt-3">
        {ghibliMovies.map(
          ({
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
          }) => (
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
