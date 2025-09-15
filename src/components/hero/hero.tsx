import type { FunctionComponent, JSX } from "react";
import ActionButton from "../action-button/action-button";

const Hero: FunctionComponent = (): JSX.Element => {
  return (
    <main
      id="hero"
      className="bg-[url(/assets/hero-bg.avif))] bg-no-repeat bg-center bg-cover z-90 mb-30"
    >
      <div className="w-full h-full inset-0 bg-black/80 px-5 sm:px-10 py-35">
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
          {/* <div></div> */}
          <div className="flex">
            <ActionButton
              href="/#contact"
              border="border-7"
              px="px-[22px]"
              py="pt-2 pb-2.5"
              label="Book A Call"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
