import React from "react";
interface Props {
  innerRef?: React.MutableRefObject<HTMLInputElement>;
}

const Features: React.FC<Props> = ({ innerRef }) => {
  return (
    <div ref={innerRef}>
      <div className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
              How it works?
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    <div className="font-bold font-LexendMega text-4xl">1</div>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold font-LexendMega">
                    Customize your settings
                  </p>
                </dt>
                <dd className="mt-2 ml-16 ">
                  Choose &apos;Share a voucher&apos;, &apos;Make friends&apos;
                  or &apos;Dating experience&apos;.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    <div className="font-bold font-LexendMega text-4xl">2</div>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold font-LexendMega">
                    Swipe right on your desired voucher
                  </p>
                </dt>
                <dd className="mt-2 ml-16 ">
                  Pick your favorites among all the options available.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    <div className="font-bold font-LexendMega text-4xl">3</div>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold font-LexendMega">
                    A match will be selected by us
                  </p>
                </dt>
                <dd className="mt-2 ml-16 ">
                  Chat and make plans with your match(es). You can skip up to 3
                  matches for your voucher to be validated.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    <div className="font-bold font-LexendMega text-4xl">4</div>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold font-LexendMega">
                    Redeem your voucher
                  </p>
                </dt>
                <dd className="mt-2 ml-16 ">
                  You have 24 hours to redeem half of the voucher with a
                  discount. Auto-split for all vouchers to be redeemed.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    <div className="font-bold font-LexendMega text-4xl">5</div>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold font-LexendMega">
                    Make the appointment with the vendor/restaurant
                  </p>
                </dt>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    <div className="font-bold font-LexendMega text-4xl">6</div>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold font-LexendMega">
                    Enjoy your experience!
                  </p>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
