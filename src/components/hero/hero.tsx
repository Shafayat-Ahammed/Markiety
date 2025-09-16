import type { FunctionComponent, JSX } from "react";
import PrimaryButton from "../primary-button/primary-button";

const Hero: FunctionComponent = (): JSX.Element => {
  return (
    <main className="bg-[url(/assets/hero-bg.avif))] bg-no-repeat bg-center bg-cover z-90 mb-30">
      <div className="w-full h-full inset-0 bg-black/80 px-5 sm:px-10 py-35 2xl:py-40">
        <div className="mx-auto max-w-[1536px] flex flex-col justify-center items-center gap-5">
          <div>
            <h2 className="text-white font-bold text-[38px] sm:text-[44px] md:text-[52px] 2xl:text-[60px] text-center leading-14 sm:leading-15 md:leading-16">
              Grow Your Business Online
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-lg 2xl:text-xl text-center text-primary-gray">
              Data-Driven Digital Marketing with Transparent Processes,
              Delivering
              <br className="hidden md:block" />
              Measurable Growth for Ambitious Businesses.
            </p>
          </div>
          <div className="flex">
            <PrimaryButton
              href="/#contact"
              border="border-7"
              px="px-[22px]"
              py="pt-2 pb-2.5"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[20px] h-[20px] 2xl:w-[22px] 2xl:h-[22px] mt-0.5 fill-white"
                >
                  <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                </svg>
              }
              label="Book A Call"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
