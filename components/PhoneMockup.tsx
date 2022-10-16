import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  background?: StaticImageData | string | any;
}

const PhoneMockup: React.FC<Props> = ({ background }) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <Image
          src={background}
          // layout="responsive"
          width={400}
          height={550}
          alt=""
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
