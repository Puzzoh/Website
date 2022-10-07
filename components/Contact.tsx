import React, { useState, useCallback } from "react";
import Link from "next/link";
import {
  IoMail,
  IoLocation,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

const Contact: React.FC = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 md:items-stretch w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg overflow-hidden">
        <div className="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
          <div className="">
            <h1 className="text-4xl font-bold font-IndustrialSans text-white tracking-wide">
              Contact Us
            </h1>
            <p className="pt-2 text-first text-sm">
              Please leave us a comment about your experience with our products.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <IoMail className="text-first text-xl" />
              <span className="text-white select-all">meetooapp@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <IoLocation className="text-first text-xl" />
              <span className="text-white select-all">
                800 Lancaster Ave, Villanova, PA 19085, US
              </span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <Link href="#">
              <IoLogoInstagram className="text-first" />
            </Link>
            <Link href="#">
              <IoLogoLinkedin className="text-first" />
            </Link>
            <Link href="#">
              <IoLogoGithub className="text-first" />
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative z-10 w-full md:w-80 h-full rounded-xl shadow-lg p-8">
            <form className="flex flex-col space-y-4">
              <input
                id="name"
                name="name"
                maxLength={128}
                type="text"
                placeholder="Name"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2 "
              />
              <input
                id="email"
                name="email"
                required
                maxLength={128}
                type="email"
                placeholder="Email"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[15em]"
              ></textarea>
              <div className="inline-block self-end font-bold mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2 uppecase text-sm"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
