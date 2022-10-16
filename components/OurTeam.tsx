import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const OurTeam: React.FC = () => {
  return (
    <div>
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-wide font-LexendMega sm:text-4xl">
              Our Team
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-4 py-8 text-center">
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src="Holly.jpg" alt="Headshot" />
            </div>
            <h3 className="font-LexendMega">Holly Ouyang</h3>
            <p className="font-LexendDeca">Product Manager</p>
            <div className="icons">
              <Link href="#">
                <FaLinkedinIn />
              </Link>
              <Link href="#">
                <FaGithub />
              </Link>
              <Link href="#">
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src="Minh.jpg" alt="Headshot" />
            </div>
            <h3 className="font-LexendMega">Minh Phung</h3>
            <p className="font-LexendDeca">Developer</p>
            <div className="icons">
              <Link href="https://www.linkedin.com/in/minhphung1">
                <FaLinkedinIn />
              </Link>
              <Link href="https://github.com/mphung1">
                <FaGithub />
              </Link>
              <Link href="#">
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
