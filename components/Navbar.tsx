"use client";
import { navItems } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { easeInOut } from "motion/react";

const parentVariant = {
  initial: {
    opacity: 0,
    filter: "blur(5px)",
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 1,
      staggerChildren: 0.3,
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const Navbar = () => {
  return (
    <motion.article
      className="fixed w-full z-50 px-10 sm:px-20 flex items-center justify-between py-3 text-white backdrop-blur-xs"
      variants={parentVariant}
      initial="initial"
      animate="animate"
    >
      <Link className="shrink-0" aria-label="site-logo" href={"/"}>
        <Image
          src={"/images/logo.webp"}
          width={100}
          height={20}
          alt="logo-image"
          className="invert-100"
        />
      </Link>
      <div className="flex md:hidden">
        <Menu size={20} />
      </div>
      <motion.div className="hidden md:flex gap-6 uppercase flex-center">
        {navItems.map(({ title, key, url }) => (
          <motion.div key={key}>
            <Link
              href={url}
              className="hover:bg-white/10 hover:border-white/70 px-4 py-2 rounded-full"
            >
              {title}
            </Link>
          </motion.div>
        ))}
        <motion.button
          className="uppercase px-6 py-2 rounded-full bg-[#F8C98E] text-black"
          whileHover={{ backgroundColor: "#fff" }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
        >
          <span className="tracking-wide font-medium">Explore</span>
        </motion.button>
      </motion.div>
    </motion.article>
  );
};

export default Navbar;
