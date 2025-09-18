import type { ReactElement } from "react";

interface NavMenuItemType {
  href: string;
  hash?: string;
  label: string;
}

interface SocialChannelType {
  url: string;
  icon: ReactElement<SVGSVGElement>;
}

export type { NavMenuItemType, SocialChannelType };
