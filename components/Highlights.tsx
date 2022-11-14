import React from "react";
import {
  HighlightRight,
  HighlightLeft,
  HighlightBackground,
  HighlightContainer,
} from "./Highlight";
import { TileBackGround, TileContent, TileWrapper, Tile } from "./Tile";
import PhoneMockup from "./PhoneMockup";
import Background1 from "../public/undraw1.svg";
import Background2 from "../public/undraw2.svg";
import Background3 from "../public/undraw3.svg";
import Image from "next/image";
import { BsCaretRight } from "react-icons/bs";

interface Props {
  reference: React.MutableRefObject<HTMLInputElement>;
}

const Highlights: React.FC<Props> = ({ reference }) => {
  return (
    <div ref={reference}>
      <div className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
              Why Puzzoh?
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex justify-center text-6xl border-2 border-white rounded-xl p-6">
                <div className="relative">
                  <Image
                    src={Background1}
                    alt="Phone Mockup 1"
                    width="400px"
                    height="275px"
                    layout="responsive"
                  />{" "}
                  <h3 className="text-2xl leading-6 font-bold font-LexendMega mt-2">
                    {" "}
                    Get Real Interaction
                  </h3>
                  <div className="flex flex-row">
                    <BsCaretRight className="text-sm mt-3" />
                    <p className="text-sm mt-2 font-LexendDeca">
                      {" "}
                      Skip the small talk, get straight to the experience and
                      avoid ghosting.
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <BsCaretRight className="text-sm mt-3" />
                    <p className="text-sm mt-2 font-LexendDeca">
                      {" "}
                      One has 24 hours to redeem half of the voucher with a
                      discount.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-6xl border-2 border-white rounded-xl p-6">
                <div className="relative">
                  <Image
                    src={Background2}
                    alt="Phone Mockup 2"
                    width="400px"
                    height="275px"
                    layout="responsive"
                  />
                  <h3 className="text-2xl leading-6 font-bold font-LexendMega mt-2">
                    {" "}
                    Goal-oriented
                  </h3>
                  <div className="flex flex-row">
                    <BsCaretRight className="text-sm mt-3" />
                    <p className="text-sm mt-2 font-LexendDeca">
                      Choose “Share a voucher”, “Make friends”, or “Dating
                      experience”.
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <BsCaretRight className="text-sm mt-3" />
                    <p className="text-sm mt-2 font-LexendDeca">
                      Match with someone who chooses the same voucher and with
                      overlapped preferences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-6xl border-2 border-white rounded-xl p-6">
                <div className="relative">
                  <Image
                    src={Background3}
                    alt="Phone Mockup 3"
                    width="400px"
                    height="275px"
                    layout="responsive"
                  />
                  <h3 className="text-2xl leading-6 font-bold font-LexendMega mt-2">
                    {" "}
                    Fair Commitment
                  </h3>
                  <div className="flex flex-row">
                    <BsCaretRight className="text-sm mt-3" />
                    <p className="text-sm mt-2 font-LexendDeca">
                      Auto-split for all vouchers to be redeemed.
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <BsCaretRight className="text-sm mt-3" />
                    <p className="text-sm mt-2 font-LexendDeca">
                      It&apos;s time to shop for real products instead of real
                      people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
