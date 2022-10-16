import Link from "next/link";
import React from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const MailingList: React.FC = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center lg:items-center lg:content-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-wide font-LexendMega sm:text-4xl">
            Connect with
          </p>
          <span className="mt-2 text-3xl leading-8 font-extrabold tracking-wide font-LexendMega sm:text-4xl text-first">
            MEET
          </span>
          <span className="mt-2 text-3xl leading-8 font-extrabold tracking-wide font-LexendMega sm:text-4xl">
            oo
          </span>

          <div className="flex my-2 md:space-x-2 lg:justify-center w-full">
            <Link href="#">
              <button className="btn rounded-3xl bg-white hover:bg-first border-none">
                <IoLogoInstagram className="text-black hover:text-white text-3xl" />
              </button>
            </Link>
            <Link href="#">
              <button className="btn rounded-3xl bg-white hover:bg-first border-none">
                <IoLogoLinkedin className="text-black hover:text-white text-3xl " />
              </button>
            </Link>
            <Link href="https://github.com/mphung1/MEEToo-App">
              <button className="btn rounded-3xl bg-white hover:bg-first border-none">
                <IoLogoGithub className="text-black hover:text-white text-3xl" />
              </button>
            </Link>
          </div>

          <div className="font-LexendDeca text-base lg:w-full my-5 tracking-wide">
            Join the emailing list today to receive the latest updates about our
            upcoming app!
          </div>

          <div className="flex md:flex-row gap-2 md:justify-center w-full">
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs font-LexendDeca"
            />
            <button className="btn btn-md font-LexendDeca w-30">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
