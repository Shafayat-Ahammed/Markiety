import type { FunctionComponent, JSX } from "react";
import type { TestimonialType as TestimonialProps } from "./types";

const Testimonial: FunctionComponent<TestimonialProps> = ({
  feedback,
  clientName,
  clientCompany,
}: TestimonialProps): JSX.Element => {
  return (
    <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl p-5 sm:p-10 cursor-default hover:scale-102 transition-transform h-full">
      <figure className="text-sm sm:text-base 2xl:text-[18.5px] flex flex-col gap-10">
        <div>
          <blockquote className="text-white">{feedback}</blockquote>
        </div>
        <div>
          <footer className="text-primary-gray font-semibold text-end">
            — - <cite>{clientName}</cite>, <cite>{clientCompany}</cite>
          </footer>
        </div>
      </figure>
    </div>
  );
};

export default Testimonial;
