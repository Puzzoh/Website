import React from "react";
const AppStore = require("../public/App_Store.png").default;
const GooglePlay = require("../public/Google_Play.png").default;
import Image from "next/image";

interface Props {
  reference?: React.MutableRefObject<HTMLInputElement>;
}

const Download: React.FC<Props> = ({ reference }) => {
  return (
    <div ref={reference}>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <Image className="object-cover" src={AppStore} alt="App Store" />
        </div>
        <div className="divider lg:divider-horizontal text-2xl font-bold italic">
          &
        </div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <Image src={AppStore} alt="Google Play" />
        </div>
      </div>
    </div>
  );
};

export default Download;
