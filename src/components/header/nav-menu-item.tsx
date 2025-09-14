import type { FunctionComponent, JSX } from "react";

interface NavMenuItemProps {
  href: string;
  hash?: string;
  label: string;
}

const NavMenuItem: FunctionComponent<NavMenuItemProps> = ({
  href,
  hash,
  label,
}: NavMenuItemProps): JSX.Element => {
  return (
    <a
      href={`/${href}`}
      className={`text-white ${
        href === hash
          ? "bg-[#ffffff0f]"
          : "hover:bg-[#ffffff0f] transition-colors"
      } px-4 py-2.5 rounded-lg`}
    >
      {label}
    </a>
  );
};

export default NavMenuItem;
