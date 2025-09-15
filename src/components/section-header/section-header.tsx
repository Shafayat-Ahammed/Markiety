import type { FunctionComponent, JSX } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3 mb-10">
      <h3 className="text-primary-blue font-semibold text-base sm:text-lg md:text-xl 2xl:text-2xl">
        {title.toUpperCase()}
      </h3>
      <h2 className="text-white text-2xl sm:text-3xl md:text-[33px] lg:text-[38px] 2xl:text-[44px] font-bold">
        {subtitle}
      </h2>
      <p className="text-primary-gray text-sm sm:text-base 2xl:text-[18.5px] max-w-[840px]">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
