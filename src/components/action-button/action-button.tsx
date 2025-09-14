import type { FunctionComponent, JSX, ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  border: string;
  px: string;
  py: string;
  label: ReactNode;
}

const ActionButton: FunctionComponent<ActionButtonProps> = ({
  href,
  border,
  px,
  py,
  label,
}: ActionButtonProps): JSX.Element => {
  return (
    <a
      href={href}
      className={`bg-primary-blue ${border} border-primary-blue hover:border-blue-900 transition-colors text-white font-semibold ${px} ${py} rounded-lg flex items-center gap-2`}
    >
      <div>
        <p className="mt-1 text-base 2xl:text-lg">{label}</p>
      </div>
      <div className="bg-blue-600 p-0.5 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={17}
          height={17}
          className="fill-white w-[15px] h-[15px] 2xl:w-[17px] 2xl:h-[17px]"
        >
          <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
        </svg>
      </div>
    </a>
  );
};

export default ActionButton;
