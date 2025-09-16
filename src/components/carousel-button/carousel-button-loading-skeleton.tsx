import type { FunctionComponent, JSX } from "react";

const CarouselButtonLoadingSkeleton: FunctionComponent = (): JSX.Element => {
  return (
    <div className="w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full bg-primary-gray hover:scale-105 transition-transform animate-pulse" />
  );
};

export default CarouselButtonLoadingSkeleton;
