import type { FunctionComponent, JSX } from "react";
import type { ServiceType as ServiceProps } from "./types";

const Service: FunctionComponent<ServiceProps> = ({
  name,
  description,
}: ServiceProps): JSX.Element => {
  return (
    <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 p-4 rounded-lg cursor-default hover:scale-103 transition-transform flex flex-col gap-2">
      <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl 2xl:text-2xl">
        {name}
      </h3>
      <p className="text-primary-gray text-sm sm:text-base 2xl:text-[18.5px]">
        {description}
      </p>
    </div>
  );
};

export default Service;
