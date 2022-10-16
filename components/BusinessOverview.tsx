import Link from "next/link";
import React, { MouseEventHandler, MutableRefObject } from "react";

interface Props {
  reference?: MutableRefObject<HTMLInputElement>;
  clickPerks: MouseEventHandler<HTMLButtonElement>;
}

const BusinessOverview: React.FC<Props> = ({ reference, clickPerks }) => {
  return (
    <div ref={reference}>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("Collage9.jpeg")` }}
      >
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <div className="w-full text-center text-2xl font-bold md:text-4xl text-white font-LexendMega">
              Make your service our Meet-er&apos;s new favorite to experience
            </div>
            <div className="text-center font-light mt-2 text-sm md:text-lg text-gray-300 font-LexendDeca">
              An efficient and cost-friendly way to reach new customers and
              manage reservation
            </div>
            <button
              className="btn btn-md border-none bg-white hover:bg-black text-black hover:text-white rounded-3xl uppecase text-sm font-LexendDeca px-5 mt-10 mb-4 lg:mb-0"
              onClick={clickPerks}
            >
              See the perks
            </button>
          </div>
          <div className="order-1 lg:order-2 md:my-2">
            <div className="z-10 w-full h-full rounded-xl shadow-lg p-8 bg-black max-w-sm md:max-w-none mt-4 md:mt-0">
              <form className="flex flex-col space-y-4">
                <input
                  id="StoreName"
                  name="StoreName"
                  required
                  maxLength={128}
                  type="text"
                  placeholder="Business Name"
                  className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca"
                />
                <input
                  id="address"
                  name="address"
                  required
                  maxLength={128}
                  type="text"
                  placeholder="Business Address"
                  className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca"
                />
                <input
                  id="floor/suite"
                  name="floor/suite"
                  maxLength={128}
                  type="text"
                  placeholder="Floor/Suite (Optional)"
                  className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca"
                />
                <div className="flex flex-row space-x-3">
                  <input
                    id="first"
                    name="first"
                    maxLength={128}
                    type="text"
                    placeholder="First Name"
                    className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca mt-3 w-36 md:w-full"
                  />
                  <input
                    id="last"
                    name="last"
                    required
                    maxLength={128}
                    type="text"
                    placeholder="Last Name"
                    className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca mt-3 w-full"
                  />
                </div>
                <input
                  id="email"
                  name="email"
                  required
                  maxLength={128}
                  type="email"
                  placeholder="Email"
                  className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca mt-3"
                />
                <input
                  id="url"
                  name="url"
                  maxLength={128}
                  type="email"
                  placeholder="Business website's URL (optional)"
                  className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca mt-3"
                />
                <div className="flex md:flex-row gap-2 md:justify-center w-full">
                  <div className="text-white font-LexendDeca">Phone Number</div>
                  <input
                    id="url"
                    name="url"
                    maxLength={128}
                    type="text"
                    placeholder="(+1)"
                    className="w-full bg-white outline-none border-2 border-none rounded-3xl px-6 py-2 font-LexendDeca mt-3"
                  />
                </div>
                <div className="form-control text-gray-500 font-LexendDeca">
                  <div className="input-group rounded-md">
                    <select className="select select-bordered w-full rounded-3xl">
                      <option disabled selected className="font-LexendDeca">
                        Business Type
                      </option>
                      <option className="font-LexendDeca">Restaurant</option>
                      <option className="font-LexendDeca">
                        Recreational Center
                      </option>
                    </select>
                  </div>
                </div>
                {/* <div className="form-control">
                  <label className="label cursor-pointer">
                    <input type="checkbox" checked className="checkbox" />
                    <span className="label-text text-white font-LexendDeca">
                      Opt in to receive SMS messages & calls about our updates
                    </span>
                  </label>
                </div> */}
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="bg-white outline-none border-2 border-none rounded-3xl px-6 py-6 min-h-[15em] font-LexendDeca"
                />
                <div className="text-gray-400 text-sm font-LexendDeca">
                  By clicking &apos;Submit&apos; you agree to our {""}
                  <Link href="Policy">
                    <span className="underline hover:text-white">
                      General Terms and Conditions
                    </span>
                  </Link>
                  {""} and acknowledge you have read the {""}
                  <Link href="Policy">
                    <span className="underline hover:text-white">
                      Privacy Policy.
                    </span>
                  </Link>
                </div>
                <div className="inline-block self-end font-bold mt-10">
                  <button
                    type="submit"
                    className="btn btn-md bg-black hover:bg-white hover:text-black rounded-3xl px-8 uppecase text-sm font-LexendDeca"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default BusinessOverview;
