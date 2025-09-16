import type { RefObject, FunctionComponent, JSX } from "react";
import SwiperType from "swiper";

interface CarouselButtonProps {
  label: "next" | "prev";
  swiperRef: RefObject<SwiperType | null>;
}

const CarouselButton: FunctionComponent<CarouselButtonProps> = ({
  label,
  swiperRef,
}: CarouselButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={(): void => {
        if (label === "next") {
          swiperRef.current!.slideNext();
        } else {
          swiperRef.current!.slidePrev();
        }
      }}
      className="w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] hover:bg-blue-900 hover:scale-105 rounded-full flex justify-center items-center cursor-pointer bg-primary-blue transition-all fill-white outline-none"
    >
      {(label === "prev" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={30}
          height={30}
          className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px]"
        >
          <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
        </svg>
      )) || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={30}
          height={30}
          className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px]"
        >
          <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
        </svg>
      )}
    </button>
  );
};

export default CarouselButton;
