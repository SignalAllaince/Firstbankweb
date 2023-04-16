import { cn } from "@/lib/utils/component.utils";
import { BoxProps } from "@/types/component.types";
import React from "react";

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

export type IconProps = BoxProps & {
  IconComp: IconType;
  boxSize?: number;
};

const Icon: React.FC<IconProps> = (props) => {
  const { boxSize = 5, IconComp, className = "", ...others } = props;
  const classNames = cn(`h-${boxSize} w-${boxSize}`, className);

  //   @ts-expect-error
  return <IconComp className={classNames} {...others} />;
};

export default Icon;
