import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import Logo from "../public/logo2_transparent.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer items-center bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <Image
          src={Logo}
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <p className="font-LexendDeca">Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="#">
          <IoLogoInstagram className="text-white text-3xl" />
        </Link>
        <Link href="#">
          <IoLogoLinkedin className="text-white text-3xl" />
        </Link>
        <Link href="#">
          <IoLogoGithub className="text-white text-3xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
