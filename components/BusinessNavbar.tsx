import React from "react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
const Logo = require("../public/logo2_transparent.png").default;

const BusinessNavbar: React.FC = () => {
  return (
    <div className="navbar text-first bg-opacity-0 backdrop-blur-[1px]">
      <div className="navbar-start">
        {/* <Image src={Logo} alt="App Logo" width={100} height={100} /> */}
        <Link href=".">
          <div className="btn btn-ghost normal-case text-xl font-LexendMega">
            MEEToo
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <div className="flex space-x-2">
          <Link href="#">
            <button className="btn rounded-3xl bg-black hover:bg-first border-none">
              <IoLogoInstagram className="text-white text-3xl" />
            </button>
          </Link>
          <Link href="#">
            <button className="btn rounded-3xl bg-black hover:bg-first border-none">
              <IoLogoLinkedin className="text-white text-3xl " />
            </button>
          </Link>
          <Link href="https://github.com/mphung1/MEEToo-App">
            <button className="btn rounded-3xl bg-black hover:bg-first border-none">
              <IoLogoGithub className="text-white text-3xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessNavbar;
