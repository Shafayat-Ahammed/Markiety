import type { FunctionComponent, JSX } from "react";

const WorkLoadingSkeleton: FunctionComponent = (): JSX.Element => {
  return (
    <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl p-5 sm:p-10 h-[745px] hover:scale-102 transition-transform">
      <div className="flex flex-col gap-8 animate-pulse">
        <div className="flex flex-col gap-3">
          <div className="h-8 bg-primary-gray rounded-full w-full" />
          <div className="flex flex-col gap-2.5">
            <div className="h-5 bg-primary-gray rounded-full w-2/3" />
            <div className="h-5 bg-primary-gray rounded-full w-14/15" />
            <div className="h-5 bg-primary-gray rounded-full w-2/4" />
            <div className="h-5 bg-primary-gray rounded-full w-4/5" />
            <div className="h-5 bg-primary-gray rounded-full w-6/7" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {[1, 2].map((_, index: number): JSX.Element => {
            return (
              <div key={index} className="flex flex-col gap-3">
                <div className="h-6 bg-primary-gray rounded-full w-full" />
                <div className="flex flex-col gap-2.5">
                  <div className="h-4 bg-primary-gray rounded-full w-2/3" />
                  <div className="h-4 bg-primary-gray rounded-full w-14/15" />
                  <div className="h-4 bg-primary-gray rounded-full w-2/4" />
                  <div className="h-4 bg-primary-gray rounded-full w-4/5" />
                  <div className="h-4 bg-primary-gray rounded-full w-6/7" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="sm:flex items-end grow justify-center">
          {[1, 2].map((_, index: number): JSX.Element => {
            return (
              <div
                key={index}
                className={`w-full sm:w-[160px] h-13 bg-primary-gray rounded-lg ${
                  index === 1 ? "mt-3 sm:mt-0 sm:ml-3" : ""
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkLoadingSkeleton;
