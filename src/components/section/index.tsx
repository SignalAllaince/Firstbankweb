import { cn } from "@/lib/utils/component.utils";
import { BoxProps } from "@/types/component.types";

// 7:46 => 67%
function Section({ children, className = "", ...props }: BoxProps) {
  const classNames = cn(
    "max-w-[1220px] mx-auto w-full px-5 lg:px-0",
    className
  );

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

export default Section;
