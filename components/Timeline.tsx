import React from "react";
import Image from "next/image";

const Timeline: React.FC = () => {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
      <div className="relative z-10">
        <img
          src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&h=100&dpr=2"
          alt="Idea"
          className="timeline-img"
        />
        <div className="timeline-container">
          <div className="timeline-pointer" aria-hidden="true"></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Sep 2022
            </span>
            <h1 className="text-2xl font-bold pt-1 font-sans">Ideation</h1>
            <p className="pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste
              suscipit reiciendis, perferendis vel consequuntur cupiditate ad
              commodi provident, sapiente veniam sed autem.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <img
          src="https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&h=100&dpr=2"
          alt="Website"
          className="timeline-img"
        />
        <div className="timeline-container timeline-container-left">
          <div
            className="timeline-pointer timeline-pointer-left"
            aria-hidden="true"
          ></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Oct 2022
            </span>
            <h1 className="text-2xl font-bold pt-1 font-sans">
              Launch Website
            </h1>
            <p className="pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste
              suscipit reiciendis, perferendis vel consequuntur cupiditate ad
              commodi provident, sapiente veniam sed
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <img
          src="https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&h=100&dpr=2"
          alt="Mobile App"
          className="timeline-img"
        />
        <div className="timeline-container">
          <div className="timeline-pointer" aria-hidden="true"></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Nov 2022
            </span>
            <h1 className="text-2xl font-bold pt-1 font-sans">
              Mobile Application
            </h1>
            <p className="pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste
              suscipit reiciendis, perferendis vel consequuntur cupiditate ad
              commodi provident, sapiente veniam sed autem, perspiciatis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
