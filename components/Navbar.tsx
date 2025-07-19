import { navItems } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <article className="fixed w-full z-50 px-20 flex items-center justify-between py-5 text-white backdrop-blur-xs">
      <div className="shrink-0">
        <Image
          src={"/images/logo.png"}
          width={100}
          height={20}
          alt="logo-image"
          className="invert-100"
        />
      </div>
      <div className="flex sm:hidden">
        <Menu size={20} />
      </div>
      <div className="hidden sm:flex gap-5 uppercase ">
        {navItems.map(({ title, key, url }) => (
          <Link href={url} key={key}>
            {title}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Navbar;
