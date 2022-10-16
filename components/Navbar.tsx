import React, { MouseEventHandler, MutableRefObject } from "react";
import Link from "next/link";
const Logo = require("../public/logo2_transparent.png").default;

interface Props {
  reference?: MutableRefObject<HTMLInputElement>;
  clickHighlights: MouseEventHandler<HTMLAnchorElement>;
  clickFeatures: MouseEventHandler<HTMLAnchorElement>;
  clickOurTeam: MouseEventHandler<HTMLAnchorElement>;
  clickContact: MouseEventHandler<HTMLAnchorElement>;
}
const Navbar: React.FC<Props> = ({
  reference,
  clickHighlights,
  clickFeatures,
  clickOurTeam,
  clickContact,
}) => {
  return (
    <div
      className="navbar text-first bg-opacity-0 backdrop-blur-[1px]"
      ref={reference}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="font-bold hover:bg-black hover:text-white font-LexendMega"
                onClick={clickHighlights}
              >
                Why us?
              </a>
            </li>

            <li>
              <a
                className="font-bold hover:bg-black hover:text-white font-LexendMega"
                onClick={clickFeatures}
              >
                How it works?
              </a>
            </li>

            <li>
              <a
                className="font-bold hover:bg-black hover:text-white font-LexendMega"
                onClick={clickOurTeam}
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>
        {/* <Image src={Logo} alt="App Logo" width={100} height={100} /> */}
        <Link href="#">
          <div className="btn btn-ghost normal-case text-xl font-LexendMega">
            MEEToo
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-1">
          <li>
            <a
              className="btn btn-ghost bg-transparent hover:bg-first hover:text-white font-LexendMega"
              onClick={clickHighlights}
            >
              Why MEEToo
            </a>
          </li>
          <li>
            <a
              className="btn btn-ghost bg-transparent hover:bg-first hover:text-white font-LexendMega"
              onClick={clickFeatures}
            >
              How it works?
            </a>
          </li>

          <li>
            <a
              className="btn btn-ghost bg-transparent hover:bg-first hover:text-white font-LexendMega"
              onClick={clickOurTeam}
            >
              Our Team
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn font-LexendMega hover:bg-white hover:text-black"
          onClick={clickContact}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
