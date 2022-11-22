import React from "react";
import Image from "next/image";

const Timeline: React.FC = () => {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
      <div className="relative z-10">
        <img src="images/Webpage.jpg" alt="webpage" className="timeline-img" />
        <div className="timeline-container">
          <div className="timeline-pointer bg-black" aria-hidden="true"></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Oct 2022
            </span>
            <h1 className="text-2xl font-bold pt-1 font-LexendMega">
              Launch Website
            </h1>
            <p className="pt-1 ">
              Build this website as the primary channel to introduce users and
              businesses to the perks of joining Puzzoh community.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <img
          src="images/WebPortal.jpg"
          alt="web portal"
          className="timeline-img"
        />
        <div className="timeline-container timeline-container-left">
          <div
            className="timeline-pointer timeline-pointer-left bg-black"
            aria-hidden="true"
          ></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Nov 2022
            </span>
            <h1 className="text-2xl font-bold pt-1 font-LexendMega">
              Web Portal For Vendors
            </h1>
            <p className="pt-1 ">
              Build a dashboard platform for vendors to upload, manage, and
              receive updates about their vouchers.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <img
          src="images/Marketing.jpg"
          alt="marketing"
          className="timeline-img"
        />
        <div className="timeline-container">
          <div className="timeline-pointer bg-black" aria-hidden="true"></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Dec 2022
            </span>
            <h1 className="text-2xl font-bold pt-1 font-LexendMega">
              Marketing Campaign
            </h1>
            <p className="pt-1 ">
              Set up social media accounts and release demo visuals to attract
              potential customers.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <img
          src="images/Mobile_Phone.jpg"
          alt="mobile screen"
          className="timeline-img"
        />
        <div className="timeline-container timeline-container-left">
          <div
            className="timeline-pointer timeline-pointer-left bg-black"
            aria-hidden="true"
          ></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Jun 2023
            </span>
            <h1 className="text-2xl font-bold pt-1 font-LexendMega">
              Beta Launch
            </h1>
            <p className="pt-1 "></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
