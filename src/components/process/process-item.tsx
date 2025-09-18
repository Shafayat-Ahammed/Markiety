import type { FunctionComponent, JSX } from "react";
import type { ProcessItemType as ProcessItemProps } from "./types";
import Image from "next/image";

const ProcessItem: FunctionComponent<ProcessItemProps> = ({
  stepNumber,
  title,
  description,
  steps,
  summary,
  bannerUrl,
}: ProcessItemProps): JSX.Element => {
  const odds: number[] = [1, 3, 5];

  return (
    <div className="relative">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ml-0 sm:ml-10 lg:ml-0">
        <div
          className={`flex flex-col gap-4 order-2 ${
            odds.includes(stepNumber) ? "lg:order-1" : ""
          }`}
        >
          <div>
            <h3 className="text-primary-blue font-bold text-3xl sm:text-4xl 2xl:text-[41px]">
              {title}
            </h3>
          </div>
          <div>
            <p className="text-white text-sm sm:text-base 2xl:text-[18.5px]">
              {description}
            </p>
          </div>
          <ul className="text-white text-sm sm:text-base 2xl:text-[18.5px] list-disc ml-5 flex flex-col gap-1">
            {steps.map((step, index: number): JSX.Element => {
              return <li key={index}>{step}</li>;
            })}
          </ul>
          <div className="pl-2.5 border-l-3 border-primary-blue">
            <i className="text-white text-sm sm:text-base 2xl:text-[18.5px]">
              {summary}
            </i>
          </div>
        </div>
        <div
          className={`order-1 ${odds.includes(stepNumber) ? "lg:order-2" : ""}`}
        >
          <Image
            src={bannerUrl}
            alt={title}
            width={736}
            height={736}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
      <div className="absolute w-10 h-10 bg-primary-blue rounded-full top-0 left-0 lg:left-1/2 -translate-x-1/2 z-90 text-white text-base sm:text-lg 2xl:text-xl items-center justify-center font-bold select-none hidden sm:flex">
        <p>{stepNumber}</p>
      </div>
    </div>
  );
};

export default ProcessItem;
