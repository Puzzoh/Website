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

// const Highlights1: React.FC<Props> = ({ reference }) => {
//   return (
//     <div ref={reference}>
//       <TileWrapper numOfPages={3}>
//         <TileBackGround>
//           <HighlightBackground />
//         </TileBackGround>
//         <TileContent>
//           <Tile
//             page={0}
//             renderContent={({ progress }) => (
//               <HighlightContainer>
//                 <HighlightLeft progress={progress}>
//                   <div className="font-LexendMega mt-8 lg:mt-5">Real</div>
//                   <div className="text-4xl md:text-5xl font-semibold tracking-tight font-LexendMega">
//                     Interaction
//                   </div>
//                   <div className="toast toast-start toast-middle text-base invisible lg:visible">
//                     <div className="alert alert-info font-LexendDeca bg-white">
//                       <div>
//                         <span>
//                           Skip the small talk, get straight to the experience
//                           and avoid ghosting.
//                         </span>
//                       </div>
//                     </div>
//                     <div className="alert alert-success font-LexendDeca bg-white">
//                       <div>
//                         <span>
//                           24 hours to redeem half of the voucher with a
//                           discount.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </HighlightLeft>
//                 <HighlightRight progress={progress}>
//                   <PhoneMockup background={Background1} />
//                 </HighlightRight>
//               </HighlightContainer>
//             )}
//           ></Tile>
//           <Tile
//             page={1}
//             renderContent={({ progress }) => (
//               <HighlightContainer>
//                 <HighlightLeft progress={progress}>
//                   <div className="font-LexendMega mt-8 lg:mt-5">Be</div>
//                   <div className="text-4xl md:text-5xl font-semibold tracking-tight font-LexendMega">
//                     Goal-oriented
//                   </div>
//                   <div className="toast toast-start toast-middle text-base invisible lg:visible">
//                     <div className="alert alert-info font-LexendDeca bg-white">
//                       <div>
//                         <span>
//                           Choose “Share a voucher”, “Make friends”, or “Dating
//                           experience”.
//                         </span>
//                       </div>
//                     </div>
//                     <div className="alert alert-success font-LexendDeca bg-white">
//                       <div>
//                         <span>
//                           Match with someone who chooses the same voucher and
//                           with overlapped preferences.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </HighlightLeft>
//                 <HighlightRight progress={progress}>
//                   <PhoneMockup background={Background2} />
//                 </HighlightRight>
//               </HighlightContainer>
//             )}
//           ></Tile>
//           <Tile
//             page={2}
//             renderContent={({ progress }) => (
//               <HighlightContainer>
//                 <HighlightLeft progress={progress}>
//                   <div className="font-LexendMega mt-10 lg:mt-5">Fair</div>
//                   <div className="text-4xl md:text-5xl font-semibold tracking-tight font-LexendMega">
//                     Commitment
//                   </div>
//                   <div className="toast toast-start toast-middle text-base invisible lg:visible">
//                     <div className="alert alert-info font-LexendDeca bg-white">
//                       <div>
//                         <span>Auto-split for all vouchers to be redeemed.</span>
//                       </div>
//                     </div>
//                     <div className="alert alert-success font-LexendDeca bg-white">
//                       <div>
//                         <span>
//                           It&apos;s time to shop for real products instead of
//                           real people.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </HighlightLeft>
//                 <HighlightRight progress={progress}>
//                   <PhoneMockup background={Background3} />
//                 </HighlightRight>
//               </HighlightContainer>
//             )}
//           ></Tile>
//         </TileContent>
//       </TileWrapper>
//     </div>
//   );
// };

// const Highlights2: React.FC<Props> = ({ reference }) => {
//   return (
//     <div ref={reference}>
//       <div className="grid grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense">
//         <div className="rounded-lg shadow-xl min-h-[200px] row-span-2">
//           <div className="lg:text-center flex flex-col">
//             <h1 className="mt-6 text-4xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
//               Why
//             </h1>
//             <div className="mt-10 text-4xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
//               Us?
//             </div>
//           </div>
//         </div>
//         <div className="bg-black rounded-lg shadow-xl min-h-[200px] row-span-2 col-span-2">
//           <Image src={Background1} width="100px" height="100px" alt="logo" />
//         </div>
//       </div>
//     </div>
//   );
// };

const Highlights: React.FC<Props> = ({ reference }) => {
  return (
    <div ref={reference}>
      <div className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
              Why MEEToo?
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
