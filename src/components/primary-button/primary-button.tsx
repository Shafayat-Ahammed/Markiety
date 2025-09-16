import type { FunctionComponent, JSX, ReactElement } from "react";

interface PrimaryButtonProps {
  href: string;
  targetBlank?: boolean;
  border: string;
  px: string;
  py: string;
  icon: ReactElement<SVGSVGElement>;
  label: string;
}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  href,
  targetBlank,
  border,
  px,
  py,
  icon,
  label,
}: PrimaryButtonProps): JSX.Element => {
  return (
    <a
      href={href}
      target={targetBlank ? "_blank" : undefined}
      className={`bg-primary-blue ${border} border-primary-blue hover:border-blue-900 transition-colors text-white font-semibold ${px} ${py} rounded-lg flex justify-center items-center gap-1`}
    >
      <div>{icon}</div>
      <div>
        <p className="mt-1 text-base 2xl:text-lg">{label}</p>
      </div>
    </a>
  );
};

export default PrimaryButton;
