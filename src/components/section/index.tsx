import { cn } from "@/lib/utils/component.utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

function Section({
  children,
  className = "",
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const classNames = cn("max-w-[1100px] mx-auto w-full px-5", className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

export default Section;
