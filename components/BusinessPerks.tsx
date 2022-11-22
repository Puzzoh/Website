import React from "react";
import { BsPeople } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";

interface Props {
  reference: React.MutableRefObject<HTMLInputElement>;
}

const BusinessWhy: React.FC<Props> = ({ reference }) => {
  return (
    <div className="lg:text-center" ref={reference}>
      <p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
        Perks{" "}
      </p>
      <div className="py-2 lg:py-0 pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="border rounded-full inline-block p-4 border-black ml-0 md:ml-12">
                  <BsPeople className="text-2xl" />
                </div>
                <h3 className="ml-16 text-2xl leading-6 font-bold font-LexendMega">
                  {" "}
                  Connect with the right customers
                </h3>
                <p className="mt-2 ml-16 ">
                  {" "}
                  We connect you directly to our &apos;Meet-ers&apos; who are
                  constantly looking for fun activities and delicious food.
                </p>
              </div>

              <div className="relative">
                <div className="border rounded-full inline-block p-4 border-black ml-0 md:ml-12">
                  <IoRocketOutline className="text-2xl" />
                </div>
                <h3 className="ml-16 text-2xl leading-6 font-bold font-LexendMega">
                  {" "}
                  Boost your brand
                </h3>
                <p className="mt-2 ml-16 ">
                  Your vouchers are constantly exposed to our Meet-er&apos;s
                  that helps your business to build brand recognition.
                </p>
              </div>

              <div className="relative">
                <div className="border rounded-full inline-block p-4 border-black ml-0 md:ml-12">
                  <FaDollarSign className="text-2xl" />
                </div>
                <h3 className="ml-16 text-2xl leading-6 font-bold font-LexendMega">
                  {" "}
                  Expand your sales
                </h3>
                <p className="mt-2 ml-16 ">
                  Maximize your revenue and visibility by selling your service
                  in advance.
                </p>
              </div>

              <div className="relative">
                <div className="border rounded-full inline-block p-4 border-black ml-0 md:ml-12">
                  <MdOutlineCampaign className="text-2xl" />
                </div>
                <h3 className="ml-16 text-2xl leading-6 font-bold font-LexendMega">
                  {" "}
                  Reducing marketing cost
                </h3>
                <p className="mt-2 ml-16 ">
                  We provide marketing rates that are significantly lower than
                  other compatible platforms.
                </p>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessWhy;
