import type { FunctionComponent, JSX } from "react";
import type { SocialChannelType as SocialChannelProps } from "@/lib/types";

const SocialChannel: FunctionComponent<SocialChannelProps> = ({
  url,
  icon,
}: SocialChannelProps): JSX.Element => {
  return (
    <a
      href={url}
      target="_blank"
      className="fill-primary-gray hover:fill-primary-blue transition-colors"
    >
      {icon}
    </a>
  );
};

export default SocialChannel;
