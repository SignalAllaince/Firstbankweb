import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const badgeClasses = cva(["uppercase", "rounded-[4px]", "font-medium"], {
  variants: {
    variant: {
      success: ["text-white", "bg-[#47C96B]"],
      New: ["text-white", "bg-[#506473]"],
      error: ["text-white", "bg-[#879AA8]"],
    },
    size: {
      sm: ["text-[10px]", "py-[2px]", "px-2"],
    },
  },
  defaultVariants: {
    variant: "New",
    size: "sm",
  },
});

export interface BadgeProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof badgeClasses> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant, size, className = "", ...others }, ref) => {
    const classNames = badgeClasses({ variant, size, className });

    return (
      <div ref={ref} className={classNames} {...others}>
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
