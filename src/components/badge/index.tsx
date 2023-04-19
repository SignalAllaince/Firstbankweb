import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const badgeClasses = cva(["cursor-pointer", "uppercase", "rounded-[4px]"], {
  variants: {
    variant: {
      success: ["text-white", "bg-[#47C96B]"],
      pending: ["text-white", "bg-[#506473]"],
      error: ["text-white", "bg-[#879AA8]"],
    },
    size: {
      sm: ["text-[10px]", "py-1", "px-2"],
      xs: ["text-[10px]", "h-8"],
    },
  },
  defaultVariants: {
    variant: "pending",
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
