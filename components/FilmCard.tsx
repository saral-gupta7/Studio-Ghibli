"use client";
// import Image from "next/image";
import { Rotate3D } from "lucide-react";
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
  className: string;
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
  className,
  videoSrc,
}: FilmCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cardVariant = {
    flip: {
      rotateY: 180,
    },
    notFlipped: {
      rotateY: 0,
    },
  };

  // handles video playback
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
      // whileHover={{ scale: 1.01, y: -4 }}
      transition={{
        duration: 0.3,
      }}
      initial={false}
      animate={flipped ? "flip" : "notFlipped"}
    >
      <motion.div
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
          className={`inset-0 backface-hidden absolute  ${
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

          <span
            onClick={() => setFlipped(!flipped)}
            className="absolute right-3 top-3 text-white "
          >
            <Rotate3D className="w-5 h-5 text-white hover:text-gray-300 transition group-hover:animate-bounce" />
          </span>
          <div className="absolute bottom-5 text-white tracking-tight z-2 px-5 py-2 flex flex-col gap-2">
            <h1 className="text-2xl font-bold font-playfair">{title}</h1>
            <p className="text-xs text-white/90">{description}</p>
          </div>
        </div>
        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-black text-white flex border-2 border-black rounded-xl"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span
            onClick={() => setFlipped(!flipped)}
            className="absolute right-3 top-3 text-white z-10"
          >
            <Rotate3D className="w-5 h-5 text-white hover:text-gray-300 transition animate-bounce" />
            {/* {flipped ? <EyeOff /> : <RotateCcw />} */}
          </span>
          <motion.div
            className="flex flex-col px-6 justify-evenly gap-5 relative py-10"
            initial={{ y: "-10%", opacity: 0, filter: "blur(10px)" }}
            animate={{
              y: flipped ? 0 : "-10%",
              opacity: flipped ? 1 : 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              // staggerChildren: 0.3,
              delay: 0.2,
            }}
          >
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <motion.p className="text-sm flex flex-col gap-2">
              <span className="font-semibold">
                Original Title (Japanese): {originalTitle} (
                {originalTitleRomanised})
              </span>
              <span className="font-regulark">Director: {director}</span>
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
