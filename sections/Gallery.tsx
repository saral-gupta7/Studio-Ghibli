import Image from "next/image";
import { galleryImages } from "@/constants/constant";

import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const imageStyle = {
  width: "240px",
  height: "320px",
  objectFit: "cover" as const,
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

const Gallery = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    const elements = gsap.utils.toArray(".image");

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#gallery",
          start: "10% bottom",
          end: "+=150%",
          scrub: true,
        },
        defaults: {
          ease: "expo.inOut",
        },
      });
      tl.fromTo(
        elements,
        {
          y: -100,
          opacity: 0,
          rotation: (i: number) => (i % 4 < 2 ? -5 : 5),
        },
        {
          opacity: 1,
          rotation: 0,
          y: 0,
        }
      ).to(elements, {
        y: (i: number) => {
          return 100 * i;
        },
        // opacity: 0,
      });
    });
  }, []);
  return (
    <section
      className="min-h-screen bg-black flex-center flex-col py-12 overflow-hidden px-10"
      id="gallery"
    >
      <div className="flex flex-col gap-20 items-center justify-center">
        <h1 className="font-playfair text-5xl  font-bold text-white">
          Ghibli Classics You Can&apos;t Miss
        </h1>
        <div className="flex flex-wrap gap-8 justify-center" id="card-layer-1">
          {galleryImages.map(({ url, key }, idx) => (
            <motion.div
              className="flex-center image"
              id={`image-${idx}`}
              key={key}
              whileTap={{
                x: 100,
              }}
            >
              <Image
                src={url}
                alt={`Gallery image`}
                width={180}
                height={240}
                style={imageStyle}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
