import { cn } from "@/lib/utils/component.utils";
import { BoxProps } from "@/types/component.types";

function Section({ children, className = "", ...props }: BoxProps) {
  const classNames = cn("max-w-[1100px] mx-auto w-full px-5", className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

export default Section;
