"use client";
// import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useState } from "react";

interface FilmCardProps {
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  director: string;
  producer: string;
  studio: string;
  releaseYear: number;
  runtime: number;
  genre: string[];
  description: string;
  videoSrc: string;
}

const FilmCard = ({
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
}: FilmCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cardVariant = {
    flipped: {
      rotateY: 180,
    },
    notFlipped: {
      rotateY: 0,
    },
  };

  const handleMouseEnter = () => {
    setTimeout(() => {
      videoRef.current?.play();
    }, 200);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      className={`w-full max-w-74 h-120 gap-5 overflow-hidden perspective-[1000px] rounded-xl card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{
        duration: 0.3,
      }}
      initial={false}
      animate={flipped ? "flipped" : "notFlipped"}
    >
      <motion.div
        onClick={() => setFlipped(!flipped)}
        className="w-full h-full relative "
        style={{ transformStyle: "preserve-3d" }}
        variants={cardVariant}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Front Side */}
        <div
          className={`inset-0 backface-hidden absolute ${
            flipped ? "pointer-events-none" : "pointer-events-auto"
          } group`}
        >
          <motion.video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            className="h-full w-full object-cover brightness-70 group-hover:brightness-100 duration-500 group-hover:scale-103 transition-all contrast-110"
            transition={{ duration: 0.3 }}
          ></motion.video>

          {/* overlays */}
          <div className="z-1 gradient-text absolute bottom-0 w-full flex flex-col gap-2 h-45"></div>

          <motion.div
            className="absolute bottom-5 text-white z-2 px-5 py-2 flex flex-col gap-2"
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
          >
            <h1 className="text-2xl font-bold font-playfair">{title}</h1>
            <p className="text-xs text-white/90">{description}</p>
          </motion.div>
        </div>
        {/* Back Side */}
        <div
          className="absolute backface-hidden bg-[#EDF1DD] text-black flex inset-0 z-2 "
          style={{ transform: "rotateY(180deg)" }}
        >
          <motion.div
            className="flex flex-col px-6 gap-5 relative py-10 justify-between rounded-xl"
            initial={{ y: "10%", opacity: 0, filter: "blur(10px)" }}
            animate={{
              y: flipped ? 0 : "10%",
              opacity: flipped ? 1 : 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
          >
            <h2 className="font-bold mb-2 flex flex-col uppercase ">
              <span className="text-sm">{title.split(" ")[0]}</span>
              <span className="text-3xl">
                {title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <motion.p className="text-sm flex flex-col gap-2 jborder h-70">
              <span className="font-semibold">
                Original Title (Japanese): {originalTitle} (
                {originalTitleRomanised})
              </span>
              <span className="">Director: {director}</span>
              <span>Producer: {producer}</span>
              <span>Studio: {studio}</span>
              <span>Release Year: {releaseYear}</span>
              <span>Runtime: {runtime} minutes</span>
              <span>Genre: {genre.join(", ")}</span>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default FilmCard;
