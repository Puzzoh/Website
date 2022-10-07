import React, { MouseEventHandler, MutableRefObject } from "react";
import Link from "next/link";
const Logo = require("../public/logo2_transparent.png").default;

interface Props {
  reference?: MutableRefObject<HTMLInputElement>;
  clickFeatures: MouseEventHandler<HTMLAnchorElement>;
  clickAbout?: MouseEventHandler<HTMLAnchorElement>;
  clickTimeline: MouseEventHandler<HTMLAnchorElement>;
  clickContact: MouseEventHandler<HTMLAnchorElement>;
  clickDownload: MouseEventHandler<HTMLAnchorElement>;
}
const Navbar: React.FC<Props> = ({
  reference,
  clickFeatures,
  clickAbout,
  clickTimeline,
  clickContact,
  clickDownload,
}) => {
  return (
    <div className="navbar bg-first" ref={reference}>
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
                className="font-bold hover:bg-black hover:text-white"
                onClick={clickFeatures}
              >
                Features
              </a>
            </li>
            <li tabIndex={0}>
              <a
                className="font-bold justify-between hover:bg-black hover:text-white"
                onClick={clickAbout}
              >
                About
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a
                    className="btn bg-white text-black opacity-30 hover:text-white hover:opacity-50"
                    onClick={clickAbout}
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    className="btn bg-white text-black opacity-30 hover:text-white hover:opacity-50"
                    onClick={clickTimeline}
                  >
                    Progress Timeline
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="font-bold hover:bg-black hover:text-white"
                onClick={clickContact}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <Image src={Logo} alt="App Logo" width={100} height={100} /> */}
        <Link href="#">
          <div className="btn btn-ghost normal-case text-xl">MEEToo</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-1">
          <li>
            <a
              className="btn bg-transparent hover:bg-black hover:text-white"
              onClick={clickFeatures}
            >
              Features
            </a>
          </li>
          <li tabIndex={0}>
            <a
              className="btn bg-transparent hover:bg-black hover:text-white"
              onClick={clickAbout}
            >
              About
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a
                  className="btn bg-white text-black opacity-30 hover:text-white hover:opacity-50"
                  onClick={clickAbout}
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className="btn bg-white text-black opacity-30 hover:text-white hover:opacity-50"
                  onClick={clickTimeline}
                >
                  Progress Timeline
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="btn bg-transparent hover:bg-black hover:text-white"
              onClick={clickContact}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" onClick={clickDownload}>
          Download
        </a>
      </div>
    </div>
  );
};

export default Navbar;
