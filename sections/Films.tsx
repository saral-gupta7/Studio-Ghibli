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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#film",
          start: "50% bottom",
          end: "+=100%",
          scrub: true,
        },
      });

      tl.from(elements, {
        x: "100%",
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
      });

      ScrollTrigger.create({
        trigger: "#film",
        start: "top top",
        end: "+=50%",
        scrub: true,
      });
      tl.to(elements, {
        x: (i: number) => {
          if (i % 4 === 0 || i % 4 === 1) return -200;
          if (i % 4 === 2 || i % 4 === 3) return 200;
          return 0;
        },

        rotation: (i: number) => (i % 4 < 2 ? -5 : 5),
        ease: "power2.inOut",
        duration: 1,
      });
    });
  }, []);

  return (
    <section
      className="min-h-screen w-full mx-auto bg-[url('/images/film-blackground.jpg')] overflow-hidden text-white px-3 sm:px-10"
      id="film"
    >
      <div className="p-10 flex flex-col gap-3 h-1/4">
        <h1 className=" text-3xl md:text-5xl font-playfair font-bold title-text overflow-hidden">
          Iconic Films
        </h1>
        <p className="text-md sm:text-xl">
          Explore the magical worlds created by Studio Ghibli.
        </p>
      </div>
      <div
        className={`grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 h-3/4 rounded-xl gap-5 p-10 place-items-center -mt-3 transition-all duration-300 ${
          activeCard !== null ? "blur-sm pointer-events-none" : ""
        }`}
        id="card-container"
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
