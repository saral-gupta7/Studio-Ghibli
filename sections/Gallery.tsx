import Image from "next/image";
import { galleryImages } from "@/constants/constant";

// import { motion } from "motion/react";
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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery",
        start: "10% bottom",
        end: "+=200%",
        scrub: true,
      },
      defaults: {
        ease: "expo.inOut",
      },
    });
    tl.fromTo(
      ".image",
      {
        y: -100,
        opacity: 0,

        rotation: (i: number) => (i === 5 ? 0 : i % 4 < 2 ? -5 : 5),
      },
      {
        opacity: 1,
        rotation: 0,
        y: 0,
      }
    ).to(".image", {
      x: (i: number) => {
        if (i === 5) return 0;
        if (i % 4 === 0 || i % 4 === 1) return -200;
        if (i % 4 === 2 || i % 4 === 3) return 200;
        return 0;
      },
      opacity: 0,
    });
  });
  return (
    <section
      className="min-h-screen bg-black flex-center flex-col py-12 overflow-hidden px-10"
      id="gallery"
    >
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-wrap gap-8 justify-center" id="card-layer-1">
          {galleryImages.map(({ url, key }, idx) => (
            <div className="flex-center image" id={`image-${idx}`} key={key}>
              <Image
                src={url}
                alt={`Gallery image`}
                width={180}
                height={240}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
