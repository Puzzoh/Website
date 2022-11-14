import React, { MouseEventHandler, MutableRefObject } from "react";
import Link from "next/link";

interface Props {
  reference?: MutableRefObject<HTMLInputElement>;
  clickOverview: MouseEventHandler<HTMLAnchorElement>;
  clickPerks: MouseEventHandler<HTMLAnchorElement>;
  clickFAQ: MouseEventHandler<HTMLAnchorElement>;
}

const StickyNavbar: React.FC<Props> = ({
  reference,
  clickOverview,
  clickPerks,
  clickFAQ,
}) => {
  return (
    <div className="navbar sticky top-0 z-50 text-primary bg-black backdrop-blur-sm backdrop-brightness-100 backdrop-filter-none">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden hover:bg-white"
          >
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <a
                className="font-bold hover:bg-black hover:text-white font-LexendMega"
                onClick={clickOverview}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:bg-black hover:text-white font-LexendMega"
                onClick={clickPerks}
              >
                Perks
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:bg-black hover:text-white font-LexendMega"
                onClick={clickFAQ}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <Link href="#">
          <div className="btn btn-ghost normal-case text-xl font-LexendMega underline">
            Vendor
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-1">
          <li>
            <a
              className="btn btn-ghost bg-transparent hover:bg-primary hover:text-white font-LexendMega"
              onClick={clickOverview}
            >
              Overview
            </a>
          </li>
          <li>
            <a
              className="btn btn-ghost bg-transparent hover:bg-primary hover:text-white font-LexendMega"
              onClick={clickPerks}
            >
              Perks
            </a>
          </li>
          <li>
            <a
              className="btn btn-ghost bg-transparent hover:bg-primary hover:text-white font-LexendMega"
              onClick={clickFAQ}
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <Link href="#">
        <div className="navbar-end">
          <div className="btn font-LexendMega text-white hover:bg-white hover:text-black">
            Sign In
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StickyNavbar;
