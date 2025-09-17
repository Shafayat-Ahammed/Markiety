import type { FunctionComponent, JSX } from "react";
import { TeamMemberType as TeamMemberProps } from "./types";
import Image from "next/image";

const TeamMember: FunctionComponent<TeamMemberProps> = ({
  pic,
  name,
  position,
}: TeamMemberProps): JSX.Element => {
  return (
    <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl cursor-default hover:scale-102 transition-transform flex flex-col gap-5">
      <div>
        <Image
          src={pic}
          alt={position}
          width={358}
          height={358}
          className="rounded-t-3xl w-full aspect-square"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-1 text-center px-5 pb-5">
        <div>
          <h3 className="text-white font-bold text-xl xs:text-base sm:text-lg md:text-xl 2xl:text-2xl">
            {name}
          </h3>
        </div>
        <div>
          <p className="text-primary-blue font-semibold text-lg xs:text-sm sm:text-base 2xl:text-[18.5px]">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
