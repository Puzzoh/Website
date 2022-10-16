import React from "react";
interface Props {
  reference: React.MutableRefObject<HTMLInputElement>;
}

const Features: React.FC<Props> = ({ reference }) => {
  return (
    <div ref={reference}>
      <div className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
              How it works?
            </p>
            {/* <p className="mt-4 max-w-2xl text-xl font-LexendDeca lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p> */}
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
                <dd className="mt-2 ml-16 font-LexendDeca">
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
                <dd className="mt-2 ml-16 font-LexendDeca">
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
                <dd className="mt-2 ml-16 font-LexendDeca">
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
                <dd className="mt-2 ml-16 font-LexendDeca">
                  You have 24 hours to redeem half of the voucher with a
                  discount. Auto-split for all vouchers to be redeemed.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    {/* <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg> */}
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
