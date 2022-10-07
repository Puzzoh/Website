import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://metro.co.uk/wp-content/uploads/2022/01/GettyImages-1294083996.jpg?quality=90&strip=all&crop=0px%2C160px%2C2159px%2C1135px&resize=1200%2C630")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-IndustrialSans">
            Share your time with the Right Ones
          </h1>
          <p className="mb-5">
            MEEToo is a mobile application designed to help you form meaningful
            relationships.
          </p>
          <Link href="#" passHref>
            <button className="btn bg-first">Follow our stories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
