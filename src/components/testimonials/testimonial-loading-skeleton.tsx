import type { FunctionComponent, JSX } from "react";

const TestimonialLoadingSkeleton: FunctionComponent = (): JSX.Element => {
  return (
    <div className="animate-pulse flex flex-col gap-10 bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl p-5 sm:p-10 hover:scale-102 transition-transform">
      <div className="flex flex-col gap-2.5">
        <div className="h-4 bg-primary-gray rounded-full w-2/3" />
        <div className="h-4 bg-primary-gray rounded-full w-14/15" />
        <div className="h-4 bg-primary-gray rounded-full w-4/5" />
        <div className="h-4 bg-primary-gray rounded-full w-2/4" />
        <div className="h-4 bg-primary-gray rounded-full w-6/7" />
      </div>
      <div className="flex flex-col gap-2.5 items-end">
        <div className="h-4 bg-primary-gray rounded-full w-2/3" />
        <div className="h-4 bg-primary-gray rounded-full w-2/4" />
      </div>
    </div>
  );
};

export default TestimonialLoadingSkeleton;
